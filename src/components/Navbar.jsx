import { useState, useEffect } from 'react';
import { 
  BarChart3, 
  Menu, 
  X, 
  Sun, 
  Moon, 
  FileDown, 
  Sparkles
} from 'lucide-react';
import { personalInfo } from '../data/cvData';

export default function Navbar({ theme, toggleTheme, onOpenResume }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['about', 'experience', 'projects', 'skills', 'education', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'À propos', href: '#about', id: 'about' },
    { label: 'Expérience', href: '#experience', id: 'experience' },
    { label: 'Projets', href: '#projects', id: 'projects' },
    { label: 'Compétences', href: '#skills', id: 'skills' },
    { label: 'Formation', href: '#education', id: 'education' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar-header ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Brand Logo */}
        <a href="#hero" className="navbar-brand" onClick={(e) => handleLinkClick(e, '#hero')}>
          <div className="brand-logo-icon">
            <BarChart3 className="icon-pulse" size={22} />
          </div>
          <div className="brand-text-block">
            <span className="brand-name">{personalInfo.name}</span>
            <span className="brand-role">{personalInfo.title}</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Navigation principale">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`nav-link ${activeSection === link.id ? 'active' : ''} ${link.highlight ? 'highlight-pill' : ''}`}
            >
              {link.highlight && <Sparkles size={13} className="mr-1 text-yellow" />}
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions (CV + Theme + Mobile toggle) */}
        <div className="navbar-actions">
          <button 
            type="button" 
            onClick={onOpenResume}
            className="btn btn-outline btn-sm cv-btn"
            title="Consulter et imprimer le CV"
          >
            <FileDown size={16} />
            <span className="hide-on-mobile">Voir / CV</span>
          </button>

          <button 
            type="button" 
            onClick={toggleTheme}
            className="theme-toggle-btn"
            title={theme === 'dark' ? 'Activer le mode clair' : 'Activer le mode sombre'}
            aria-label="Basculer le thème"
          >
            {theme === 'dark' ? <Sun size={19} /> : <Moon size={19} />}
          </button>

          <button
            type="button"
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <div className="mobile-drawer-links">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`mobile-nav-link ${activeSection === link.id ? 'active' : ''}`}
              >
                {link.highlight && <Sparkles size={16} className="text-yellow" />}
                {link.label}
              </a>
            ))}
            <div className="mobile-drawer-actions">
              <button 
                type="button" 
                onClick={() => { setMobileMenuOpen(false); onOpenResume(); }}
                className="btn btn-primary w-full"
              >
                <FileDown size={18} />
                Consulter mon CV complet (PDF)
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

