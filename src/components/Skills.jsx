import { 
  BarChart3, 
  Code2, 
  Workflow, 
  Wrench, 
  Database, 
  CheckCircle2, 
  Cpu 
} from 'lucide-react';
import { skillsData } from '../data/cvData';

export default function Skills() {
  return (
    <section id="skills" className="section-padding skills-section">
      <div className="section-container">
        <div className="section-header text-center">
          <div className="section-badge">
            <Cpu size={14} className="mr-1 text-yellow" />
            <span>Savoir-Faire & Outils</span>
          </div>
          <h2 className="section-title">
            <span className="gradient-text">Compétences</span>
          </h2>
          <p className="section-subtitle">
            Double compétence en Business Intelligence, analyse de données et développement logiciel.
          </p>
        </div>

        <div className="skills-categories-grid">
          {/* 1. Business Intelligence & Data */}
          <div className="skill-category-card">
            <div className="category-header">
              <div className="category-icon-box bg-yellow-subtle">
                <BarChart3 size={22} className="text-yellow" />
              </div>
              <div>
                <h3 className="category-title">Business Intelligence & Data</h3>
                <p className="category-subtitle">ETL, SGBD, DAX, Reporting & Visualisation</p>
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
                      className="skill-meter-fill bg-gradient-yellow" 
                      style={{ width: `${item.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="category-callout">
              <Database size={16} className="text-yellow shrink-0" />
              <span>ETL : SSIS, Power Query, Dataflows • SQL Server (SSMS, SSMA), MySQL, PL/SQL.</span>
            </div>
          </div>

          {/* 2. Développement et scripts */}
          <div className="skill-category-card">
            <div className="category-header">
              <div className="category-icon-box bg-yellow-subtle">
                <Code2 size={22} className="text-yellow" />
              </div>
              <div>
                <h3 className="category-title">Développement et scripts</h3>
                <p className="category-subtitle">Python, JavaScript, React.js, Node.js, Express.js</p>
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
                      className="skill-meter-fill bg-gradient-yellow" 
                      style={{ width: `${item.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="category-callout">
              <Code2 size={16} className="text-yellow shrink-0" />
              <span>Python (Pandas, NumPy, Flask) • JavaScript, HTML, CSS, React.js, Node.js, Express.js.</span>
            </div>
          </div>

          {/* 3. Méthodologies & Gestion de projets */}
          <div className="skill-category-card">
            <div className="category-header">
              <div className="category-icon-box bg-yellow-subtle">
                <Workflow size={22} className="text-yellow" />
              </div>
              <div>
                <h3 className="category-title">Méthodologies & Gestion de projets</h3>
                <p className="category-subtitle">Agile (Scrum), GIMSI, Automatisation des processus</p>
              </div>
            </div>

            <div className="methodologies-list">
              {skillsData.methodologies.map((item, idx) => (
                <div key={idx} className="methodology-item">
                  <div className="methodology-header">
                    <CheckCircle2 size={18} className="text-yellow shrink-0" />
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
              <div className="category-icon-box bg-yellow-subtle">
                <Wrench size={22} className="text-yellow" />
              </div>
              <div>
                <h3 className="category-title">Outils & Environnements</h3>
                <p className="category-subtitle">Versionning, Mobile & Création Visuelle</p>
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
