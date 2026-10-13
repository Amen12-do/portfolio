import { 
  X, 
  Printer, 
  Mail, 
  Phone, 
  MapPin 
} from 'lucide-react';
import { LinkedinIcon } from './Icons';
import { personalInfo, experiences, projects, education, certifications, volunteering } from '../data/cvData';

export default function ResumeModal({ onClose }) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="modal-overlay resume-modal-overlay" onClick={onClose}>
      <div 
        className="modal-container resume-modal-box" 
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="resume-title"
      >
        {/* Modal Top Actions */}
        <div className="resume-modal-topbar no-print">
          <div className="topbar-info">
            <h3 id="resume-title" className="topbar-title">Curriculum Vitae • {personalInfo.name}</h3>
            <span className="topbar-sub">Version complète conforme au CV officiel</span>
          </div>
          <div className="topbar-actions">
            <button 
              type="button" 
              onClick={handlePrint} 
              className="btn btn-primary btn-sm"
              title="Imprimer ou enregistrer en PDF via votre navigateur"
            >
              <Printer size={16} />
              <span>Imprimer / Exporter PDF</span>
            </button>
            <button 
              type="button" 
              className="modal-close-btn" 
              onClick={onClose}
              aria-label="Fermer"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Printable CV Sheet */}
        <div className="resume-sheet" id="printable-cv">
          {/* Header */}
          <header className="cv-header">
            <div className="cv-header-main">
              <h1 className="cv-name">{personalInfo.name}</h1>
              <h2 className="cv-role">{personalInfo.title}</h2>
            </div>
            <div className="cv-contacts">
              <div className="cv-contact-item">
                <Mail size={13} />
                <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
              </div>
              <div className="cv-contact-item">
                <Phone size={13} />
                <span>{personalInfo.phones.join(' / ')}</span>
              </div>
              <div className="cv-contact-item">
                <MapPin size={13} />
                <span>{personalInfo.location}</span>
              </div>
              <div className="cv-contact-item">
                <LinkedinIcon size={13} />
                <a href={personalInfo.linkedin} target="_blank" rel="noreferrer">
                  linkedin.com/in/{personalInfo.linkedinUsername}
                </a>
              </div>
            </div>
          </header>

          {/* Profile Summary */}
          <section className="cv-section">
            <p className="cv-summary-text">{personalInfo.summary}</p>
          </section>

          {/* Expérience professionnelle */}
          <section className="cv-section">
            <h3 className="cv-section-title">Expérience professionnelle</h3>
            <div className="cv-list">
              {experiences.map((exp) => (
                <article key={exp.id} className="cv-entry">
                  <div className="cv-entry-header">
                    <div>
                      <strong className="cv-entry-title">{exp.role}</strong>, <span className="cv-entry-company">{exp.company}</span>
                    </div>
                    <span className="cv-entry-date">{exp.period}</span>
                  </div>
                  <ul className="cv-bullets">
                    {exp.achievements.map((ach, idx) => (
                      <li key={idx}>{ach}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          {/* Projets académiques */}
          <section className="cv-section">
            <h3 className="cv-section-title">Projets académiques</h3>
            <div className="cv-list">
              {projects.map((proj) => (
                <article key={proj.id} className="cv-entry">
                  <div className="cv-entry-header">
                    <strong className="cv-entry-title">{proj.title}</strong>
                    <span className="cv-entry-date">{proj.date}</span>
                  </div>
                  <ul className="cv-bullets">
                    {proj.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                  <div className="cv-tech-row">
                    <em>Technologies : {proj.technologies.join(', ')}.</em>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Formation */}
          <section className="cv-section">
            <h3 className="cv-section-title">Formation</h3>
            <div className="cv-list">
              {education.map((edu, idx) => (
                <div key={idx} className="cv-entry-compact">
                  <div className="cv-entry-header">
                    <strong className="cv-entry-title">{edu.degree}</strong>
                    <span className="cv-entry-date">{edu.period}</span>
                  </div>
                  <div className="cv-entry-sub">{edu.institution}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Compétences */}
          <section className="cv-section">
            <h3 className="cv-section-title">Compétences</h3>
            <div className="cv-skills-grid">
              <div className="cv-skill-block">
                <strong>Business Intelligence & Data</strong>
                <p>• ETL : SSIS, Power Query, Dataflows</p>
                <p>• Bases de données : SQL Server (SSMS, SSMA), MySQL Workbenches, MySQL, PL/SQL</p>
                <p>• Reporting & Visualisation : Power BI (modélisation, DAX, KPIs), Excel</p>
              </div>

              <div className="cv-skill-block">
                <strong>Développement et scripts</strong>
                <p>• Python (Pandas, NumPy, Flask)</p>
                <p>• JavaScript, HTML, CSS, React.js, Node.js, Express.js</p>
                <p className="mt-2"><strong>Outils & Environnements :</strong> GitHub, Android Studio, Adobe Illustrator, Photoshop</p>
              </div>

              <div className="cv-skill-block">
                <strong>Méthodologies & Gestion de projets</strong>
                <p>• Agile (Scrum), GIMSI</p>
                <p>• Analyse et modélisation des données</p>
                <p>• Automatisation et optimisation des processus</p>
              </div>
            </div>
          </section>

          {/* Certifications */}
          <section className="cv-section">
            <h3 className="cv-section-title">Certifications</h3>
            <div className="cv-certs-columns">
              {certifications.map((cert, idx) => (
                <div key={idx} className="cv-cert-item">
                  • {cert.title}
                </div>
              ))}
            </div>
          </section>

          {/* Langues & Bénévolat */}
          <div className="cv-two-col-section">
            <div className="cv-col">
              <h3 className="cv-section-title">Langues</h3>
              <p className="cv-lang-line">
                <strong>Arabe</strong> — Courant &bull; <strong>Français</strong> — Avancé &bull; <strong>Anglais</strong> — Intermédiaire &bull; <strong>Turc</strong> — Débutant
              </p>
            </div>
            <div className="cv-col">
              <h3 className="cv-section-title">Bénévolat</h3>
              <div className="cv-vol-list">
                {volunteering.map((v, idx) => (
                  <div key={idx} className="cv-vol-item">
                    <span><strong>{v.organization}</strong>, {v.role}</span>
                    <span className="cv-vol-year">{v.year}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
