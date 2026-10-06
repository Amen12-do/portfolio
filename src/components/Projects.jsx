import { useState } from 'react';
import { 
  FolderGit2, 
  Calendar, 
  ArrowUpRight, 
  Sparkles, 
  Layers, 
  Code2, 
  BarChart3, 
  Cpu, 
  ExternalLink 
} from 'lucide-react';
import { projects } from '../data/cvData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="section-padding projects-section">
      <div className="section-container">
        <div className="section-header text-center">
          <div className="section-badge">
            <FolderGit2 size={14} className="mr-1 text-cyan" />
            <span>Réalisations & Projets</span>
          </div>
          <h2 className="section-title">
            Projets & <span className="gradient-text">Études de Cas</span>
          </h2>
          <p className="section-subtitle">
            Conception de connecteurs ETL, modélisation de tableaux de bord financiers, et développement d'applications web complètes.
          </p>
        </div>

        {/* Filter categories */}
        <div className="projects-filter-bar">
          <button
            type="button"
            onClick={() => setActiveCategory('all')}
            className={`filter-btn ${activeCategory === 'all' ? 'active' : ''}`}
          >
            Tous les projets ({projects.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveCategory('bi')}
            className={`filter-btn ${activeCategory === 'bi' ? 'active' : ''}`}
          >
            <BarChart3 size={16} />
            <span>Business Intelligence & ETL</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveCategory('dev')}
            className={`filter-btn ${activeCategory === 'dev' ? 'active' : ''}`}
          >
            <Code2 size={16} />
            <span>Développement Web & PFE</span>
          </button>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((proj) => (
            <div key={proj.id} className="project-card">
              <div className="project-card-top">
                <div className="project-header-meta">
                  <span className="project-category-tag">{proj.categoryLabel}</span>
                  <span className="project-date">
                    <Calendar size={13} className="mr-1" />
                    {proj.date}
                  </span>
                </div>
                <h3 className="project-title">{proj.title}</h3>
                <p className="project-summary">{proj.summary}</p>
              </div>

              <div className="project-card-body">
                <div className="project-bullets">
                  {proj.details.slice(0, 3).map((detail, idx) => (
                    <div key={idx} className="project-bullet-item">
                      <span className="bullet-dot"></span>
                      <span>{detail}</span>
                    </div>
                  ))}
                  {proj.details.length > 3 && (
                    <div className="project-more-count">
                      +{proj.details.length - 3} autres aspects techniques détaillés
                    </div>
                  )}
                </div>

                {/* Tech badges */}
                <div className="project-tech-chips">
                  {proj.technologies.map((tech, tIdx) => (
                    <span key={tIdx} className="tech-chip">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="project-card-footer">
                <button
                  type="button"
                  onClick={() => setSelectedProject(proj)}
                  className="project-detail-btn"
                >
                  <span>Détails & Architecture</span>
                  <ArrowUpRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}

