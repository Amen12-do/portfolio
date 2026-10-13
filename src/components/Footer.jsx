import { 
  BarChart3, 
  ArrowUp, 
  Mail, 
  Phone, 
  FileDown 
} from 'lucide-react';
import { LinkedinIcon } from './Icons';
import { personalInfo } from '../data/cvData';

const currentYear = new Date().getFullYear();

export default function Footer({ onOpenResume }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-main">
      <div className="section-container">
        <div className="footer-top-grid">
          {/* Brand info */}
          <div className="footer-brand-col">
            <div className="footer-logo">
              <div className="brand-logo-icon">
                <BarChart3 size={20} />
              </div>
              <span className="brand-name">{personalInfo.name}</span>
            </div>
            <p className="footer-desc">
              Data Analyst diplômé en Contrôle de Gestion & Business Intelligence avec une double compétence en analyse de données et développement.
            </p>
            <div className="footer-social-links">
              <a 
                href={personalInfo.linkedin} 
                target="_blank" 
                rel="noreferrer" 
                className="social-circle"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={18} />
              </a>
              <a 
                href={`mailto:${personalInfo.email}`} 
                className="social-circle"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
              <a 
                href={`tel:${personalInfo.phones[0].replace(/\s+/g, '')}`} 
                className="social-circle"
                aria-label="Téléphone"
              >
                <Phone size={18} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Titres du CV & Navigation</h4>
            <ul className="footer-nav-list">
              <li><a href="#about">Double compétence</a></li>
              <li><a href="#experience">Expérience professionnelle</a></li>
              <li><a href="#projects">Projets académiques</a></li>
              <li><a href="#skills">Compétences</a></li>
              <li><a href="#education">Formation & Certifications</a></li>
              <li><a href="#volunteering">Bénévolat</a></li>
            </ul>
          </div>

          {/* Actions & Resume */}
          <div className="footer-actions-col">
            <h4 className="footer-col-title">Ressources</h4>
            <p className="footer-action-text">
              Consultez et imprimez la version intégrale du CV au format PDF.
            </p>
            <button 
              type="button" 
              onClick={onOpenResume} 
              className="btn btn-outline btn-sm w-full"
            >
              <FileDown size={16} />
              <span>Consulter / Exporter CV</span>
            </button>
            <div className="footer-location-tag">
              <span>📍 {personalInfo.location}</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <div className="footer-copyright">
            © {currentYear} {personalInfo.name} 
          </div>

          <button 
            type="button" 
            onClick={scrollToTop} 
            className="scroll-top-btn"
            title="Revenir en haut de page"
            aria-label="Haut de page"
          >
            <span>Haut de page</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
