import { useState } from 'react';
import { 
  GraduationCap, 
  Award, 
  Calendar, 
  BookOpen, 
  Globe2,
  ZoomIn,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import { education, certifications, languages } from '../data/cvData';
import CertificateModal from './CertificateModal';

export default function EducationCertifs() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="education" className="section-padding education-section">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header text-center">
          <div className="section-badge">
            <GraduationCap size={14} className="mr-1 text-yellow" />
            <span>Formation & Certifications</span>
          </div>
          <h2 className="section-title">
            Formation & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="section-subtitle">
            Titres académiques spécialisés et certifications officielles validées avec supports et diplômes vérifiables.
          </p>
        </div>

        {/* 1. Section Formation (Exact CV Title) */}
        <div className="edu-block-wrapper">
          <div className="section-inner-header">
            <div className="inner-header-icon bg-yellow-subtle">
              <GraduationCap size={22} className="text-yellow" />
            </div>
            <div>
              <h3 className="section-inner-title">Formation</h3>
              <p className="section-inner-subtitle">Parcours universitaire en économie numérique, contrôle de gestion et business intelligence.</p>
            </div>
          </div>

          <div className="edu-cards-grid">
            {education.map((item, idx) => (
              <div key={idx} className="edu-card">
                <div className="edu-card-top">
                  <span className="edu-period">
                    <Calendar size={13} className="mr-1 text-yellow" />
                    {item.period}
                  </span>
                  <span className="edu-badge-level">
                    {idx === 0 ? "Bac +5" : idx === 1 ? "Bac +3" : "Baccalauréat"}
                  </span>
                </div>
                <h4 className="edu-degree">{item.degree}</h4>
                <div className="edu-institution">
                  <BookOpen size={15} className="text-yellow shrink-0" />
                  <span>{item.institution}</span>
                </div>
                <p className="edu-desc">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Section Certifications (Exact CV Title + Authentic Attached Images) */}
        <div className="cert-block-wrapper">
          <div className="section-inner-header">
            <div className="inner-header-icon bg-yellow-subtle">
              <Award size={22} className="text-yellow" />
            </div>
            <div>
              <h3 className="section-inner-title">Certifications</h3>
              <p className="section-inner-subtitle">
                Diplômes officiels obtenus auprès de Google Analytics Academy, IBM Coursera et Google Digital Garage. Cliquez sur une certification pour afficher et agrandir l'image originale.
              </p>
            </div>
          </div>

          <div className="certs-showcase-grid">
            {certifications.map((cert) => (
              <div 
                key={cert.id} 
                className="cert-interactive-card"
                onClick={() => setSelectedCert(cert)}
              >
                {/* Certificate Image Preview Container */}
                <div className="cert-img-container">
                  <img 
                    src={cert.image} 
                    alt={cert.title} 
                    className="cert-thumbnail-img"
                    loading="lazy"
                  />
                  <div className="cert-img-overlay">
                    <div className="cert-zoom-btn">
                      <ZoomIn size={20} />
                      <span>Agrandir l'attestation</span>
                    </div>
                  </div>
                  <div className="cert-issuer-tag">
                    {cert.issuer}
                  </div>
                </div>

                {/* Card Meta Content */}
                <div className="cert-card-content">
                  <div className="cert-meta-row">
                    <span className="cert-tag-pill">{cert.tag}</span>
                    <span className="cert-status-pill">
                      <ShieldCheck size={12} className="text-yellow" />
                      Certifié
                    </span>
                  </div>

                  <h4 className="cert-title">{cert.title}</h4>
                  
                  <div className="cert-date-row">
                    <Calendar size={13} className="text-yellow" />
                    <span>{cert.validity || cert.issueDate}</span>
                  </div>

                  <p className="cert-desc">{cert.description}</p>

                  <div className="cert-card-action">
                    <button 
                      type="button" 
                      className="btn-cert-inspect"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedCert(cert);
                      }}
                    >
                      <span>Consulter le certificat</span>
                      <ChevronRight size={15} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Section Langues (Exact CV Title) */}
        <div className="languages-banner">
          <div className="languages-banner-header">
            <div className="lang-icon-wrap bg-yellow-subtle">
              <Globe2 size={22} className="text-yellow" />
            </div>
            <div>
              <h3 className="languages-title">Langues</h3>
              <p className="languages-sub">Aptitude à communiquer et travailler dans des environnements professionnels multilingues.</p>
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

      {/* Lightbox Modal for Certificate Zoom */}
      {selectedCert && (
        <CertificateModal
          certificate={selectedCert}
          allCertificates={certifications}
          onClose={() => setSelectedCert(null)}
          onSelectCert={setSelectedCert}
        />
      )}
    </section>
  );
}
