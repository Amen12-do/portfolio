import { 
  X, 
  Calendar, 
  CheckCircle2, 
  Cpu, 
  Sparkles
} from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-container project-modal-box" 
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Header */}
        <div className="modal-header">
          <div className="modal-header-info">
            <div className="modal-category-badge">
              <Sparkles size={14} className="text-yellow" />
              <span>{project.categoryLabel}</span>
            </div>
            <h3 id="modal-title" className="modal-title">{project.title}</h3>
            <div className="modal-date">
              <Calendar size={14} className="mr-1 text-yellow" />
              <span>Date de réalisation : {project.date}</span>
            </div>
          </div>
          <button 
            type="button" 
            className="modal-close-btn" 
            onClick={onClose}
            aria-label="Fermer la boîte de dialogue"
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="modal-body">
          <div className="modal-section">
            <h4 className="modal-section-title">Présentation du Projet</h4>
            <p className="modal-summary-text">{project.summary}</p>
          </div>

          <div className="modal-section">
            <h4 className="modal-section-title">Objectifs & Démarche Technique</h4>
            <ul className="modal-details-list">
              {project.details.map((detail, idx) => (
                <li key={idx} className="modal-detail-item">
                  <CheckCircle2 size={16} className="text-yellow shrink-0 mt-0.5" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="modal-section">
            <h4 className="modal-section-title">Technologies & Outils Mobilisés</h4>
            <div className="modal-tech-grid">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="modal-tech-pill">
                  <Cpu size={14} className="text-yellow" />
                  <span>{tech}</span>
                </span>
              ))}
            </div>
          </div>

          <div className="modal-impact-box">
            <div className="impact-title">Impact & Valeur Métier :</div>
            <p className="impact-text">{project.impact}</p>
          </div>
        </div>

        {/* Footer */}
        <div className="modal-footer">
          <button type="button" className="btn btn-outline" onClick={onClose}>
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
}

