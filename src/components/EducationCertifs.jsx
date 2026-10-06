import { 
  GraduationCap, 
  Award, 
  Languages, 
  Calendar, 
  BookOpen, 
  CheckCircle, 
  Sparkles,
  Globe2 
} from 'lucide-react';
import { education, certifications, languages } from '../data/cvData';

export default function EducationCertifs() {
  return (
    <section id="education" className="section-padding education-section">
      <div className="section-container">
        <div className="section-header text-center">
          <div className="section-badge">
            <GraduationCap size={14} className="mr-1 text-cyan" />
            <span>Diplômes & Certifications</span>
          </div>
          <h2 className="section-title">
            Formation Académique & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="section-subtitle">
            Un parcours académique sélectif combiné à des certifications reconnues en analyse de données et marketing digital.
          </p>
        </div>

        {/* 2-Column Grid: Formations vs Certifications */}
        <div className="edu-cert-grid">
          {/* Column 1: Formations */}
          <div className="edu-column">
            <div className="column-title-bar">
              <GraduationCap size={22} className="text-cyan" />
              <h3 className="column-heading">Parcours Universitaire</h3>
            </div>

            <div className="edu-cards-list">
              {education.map((item, idx) => (
                <div key={idx} className="edu-card">
                  <div className="edu-card-top">
                    <span className="edu-period">
                      <Calendar size={13} className="mr-1 text-cyan" />
                      {item.period}
                    </span>
                  </div>
                  <h4 className="edu-degree">{item.degree}</h4>
                  <div className="edu-institution">
                    <BookOpen size={15} className="text-accent" />
                    <span>{item.institution}</span>
                  </div>
                  <p className="edu-desc">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Certifications */}
          <div className="cert-column">
            <div className="column-title-bar">
              <Award size={22} className="text-accent" />
              <h3 className="column-heading">Certifications Officielles</h3>
            </div>

            <div className="certs-grid">
              {certifications.map((cert, idx) => (
                <div key={idx} className="cert-card">
                  <div className="cert-badge-row">
                    <span className="cert-issuer-badge">{cert.issuer}</span>
                    <span className="cert-tag">{cert.tag}</span>
                  </div>
                  <h4 className="cert-title">{cert.title}</h4>
                  <p className="cert-desc">{cert.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Languages Strip */}
        <div className="languages-banner">
          <div className="languages-banner-header">
            <div className="lang-icon-wrap">
              <Globe2 size={22} className="text-cyan" />
            </div>
            <div>
              <h3 className="languages-title">Compétences Linguistiques</h3>
              <p className="languages-sub">Capacité d'évolution et d'échange dans des contextes multilingues et internationaux.</p>
            </div>
          </div>

          <div className="languages-grid">
            {languages.map((lang, idx) => (
              <div key={idx} className="language-item-card">
                <div className="lang-header">
                  <span className="lang-flag">{lang.flag}</span>
                  <div className="lang-meta">
                    <h4 className="lang-name">{lang.name}</h4>
                    <span className="lang-level">{lang.level}</span>
                  </div>
                </div>
                <div className="lang-progress-track">
                  <div 
                    className="lang-progress-fill" 
                    style={{ width: `${lang.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

