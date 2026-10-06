import { 
  BarChart3, 
  Code2, 
  Workflow, 
  Wrench, 
  Database, 
  Sparkles, 
  CheckCircle2, 
  Palette, 
  GitBranch, 
  Cpu 
} from 'lucide-react';
import { skillsData } from '../data/cvData';

export default function Skills() {
  return (
    <section id="skills" className="section-padding skills-section">
      <div className="section-container">
        <div className="section-header text-center">
          <div className="section-badge">
            <Cpu size={14} className="mr-1 text-cyan" />
            <span>Savoir-faire & Stack</span>
          </div>
          <h2 className="section-title">
            Compétences & <span className="gradient-text">Expertises Techniques</span>
          </h2>
          <p className="section-subtitle">
            Un ensemble d'outils analytiques, décisionnels et de développement logiciel acquis en formation supérieure et en entreprise.
          </p>
        </div>

        <div className="skills-categories-grid">
          {/* 1. Business Intelligence & Data */}
          <div className="skill-category-card">
            <div className="category-header">
              <div className="category-icon-box bg-blue-subtle">
                <BarChart3 size={22} className="text-cyan" />
              </div>
              <div>
                <h3 className="category-title">Business Intelligence & Data</h3>
                <p className="category-subtitle">ETL, Modélisation, DAX, SGBD</p>
              </div>
            </div>

            <div className="skill-bars-list">
              {skillsData.biData.map((item, idx) => (
                <div key={idx} className="skill-bar-item">
                  <div className="skill-info">
                    <span className="skill-name">{item.name}</span>
                    <span className="skill-category-badge">{item.category}</span>
                  </div>
                  <div className="skill-meter-track">
                    <div 
                      className="skill-meter-fill bg-gradient-cyan" 
                      style={{ width: `${item.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="category-callout">
              <Database size={16} className="text-cyan shrink-0" />
              <span>Maîtrise complète de SQL Server (SSMS, SSMA), MySQL et requêtes PL/SQL avancées.</span>
            </div>
          </div>

          {/* 2. Développement & Scripts */}
          <div className="skill-category-card">
            <div className="category-header">
              <div className="category-icon-box bg-purple-subtle">
                <Code2 size={22} className="text-accent" />
              </div>
              <div>
                <h3 className="category-title">Développement & Scripts</h3>
                <p className="category-subtitle">Python, JavaScript, React, Backend</p>
              </div>
            </div>

            <div className="skill-bars-list">
              {skillsData.dev.map((item, idx) => (
                <div key={idx} className="skill-bar-item">
                  <div className="skill-info">
                    <span className="skill-name">{item.name}</span>
                    <span className="skill-category-badge">{item.category}</span>
                  </div>
                  <div className="skill-meter-track">
                    <div 
                      className="skill-meter-fill bg-gradient-purple" 
                      style={{ width: `${item.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="category-callout">
              <Code2 size={16} className="text-accent shrink-0" />
              <span>Conception d'APIs Flask et d'applications modernes avec React.js et Node.js.</span>
            </div>
          </div>

          {/* 3. Méthodologies & Gestion de Projet */}
          <div className="skill-category-card">
            <div className="category-header">
              <div className="category-icon-box bg-emerald-subtle">
                <Workflow size={22} className="text-emerald" />
              </div>
              <div>
                <h3 className="category-title">Méthodologies & Gestion</h3>
                <p className="category-subtitle">Agile, GIMSI, Automatisation</p>
              </div>
            </div>

            <div className="methodologies-list">
              {skillsData.methodologies.map((item, idx) => (
                <div key={idx} className="methodology-item">
                  <div className="methodology-header">
                    <CheckCircle2 size={18} className="text-emerald shrink-0" />
                    <span className="methodology-name">{item.name}</span>
                  </div>
                  <p className="methodology-desc">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 4. Outils & Environnements */}
          <div className="skill-category-card">
            <div className="category-header">
              <div className="category-icon-box bg-amber-subtle">
                <Wrench size={22} className="text-amber" />
              </div>
              <div>
                <h3 className="category-title">Outils & Environnements</h3>
                <p className="category-subtitle">DevOps, Migration, Graphisme</p>
              </div>
            </div>

            <div className="tools-cards-grid">
              {skillsData.tools.map((tool, idx) => (
                <div key={idx} className="tool-box">
                  <h4 className="tool-name">{tool.name}</h4>
                  <p className="tool-desc">{tool.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

