import { useState } from 'react';
import { 
  ArrowRight, 
  FileDown, 
  Mail, 
  Phone, 
  MapPin, 
  Check, 
  Copy, 
  Award
} from 'lucide-react';
import { LinkedinIcon } from './Icons';
import { personalInfo } from '../data/cvData';

export default function Hero({ onOpenResume }) {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  return (
    <section id="hero" className="hero-section">
      <div className="hero-background-glow">
        <div className="glow-sphere glow-yellow"></div>
        <div className="glow-sphere glow-amber"></div>
      </div>

      <div className="section-container">
        {/* Status Badge */}
        <div className="hero-badge-wrapper">
          <div className="hero-badge">
            <span className="pulsing-dot-yellow"></span>
            <span>Mastère Professionnel Contrôle de Gestion & Business Intelligence</span>
          </div>
        </div>

        {/* Hero Title & Subtitle */}
        <div className="hero-main-content">
          <h1 className="hero-title">
            <span className="hero-greeting">Bonjour, je suis</span> <span className="gradient-text-yellow">{personalInfo.name}</span>
          </h1>

          <div className="hero-role-headline">
            <span className="hero-main-role">{personalInfo.title}</span>
            <span className="hero-sub-role">
              Business Intelligence &bull; Contrôle de Gestion &bull; Développement Web & Backend
            </span>
          </div>

          <p className="hero-description">
            {personalInfo.summary}
          </p>

          {/* Quick Contact & Location Badges */}
          <div className="hero-contact-bar">
            <div className="contact-pill">
              <MapPin size={15} className="pill-icon text-yellow" />
              <span>{personalInfo.location}</span>
            </div>

            <button 
              type="button" 
              onClick={handleCopyEmail} 
              className="contact-pill contact-pill-interactive"
              title="Cliquer pour copier l'email"
            >
              <Mail size={15} className="pill-icon text-yellow" />
              <span>{personalInfo.email}</span>
              {copiedEmail ? (
                <span className="copied-tag"><Check size={13} /> Copié !</span>
              ) : (
                <Copy size={13} className="copy-icon opacity-60" />
              )}
            </button>

            <a 
              href={`tel:${personalInfo.phones[0].replace(/\s+/g, '')}`} 
              className="contact-pill contact-pill-interactive"
              title="Appeler"
            >
              <Phone size={15} className="pill-icon text-yellow" />
              <span>{personalInfo.phones[0]} / {personalInfo.phones[1]}</span>
            </a>

            <a 
              href={personalInfo.linkedin} 
              target="_blank" 
              rel="noreferrer" 
              className="contact-pill contact-pill-interactive"
              title="Ouvrir le profil LinkedIn"
            >
              <LinkedinIcon size={15} className="pill-icon text-yellow" />
              <span>linkedin.com/in/{personalInfo.linkedinUsername}</span>
            </a>
          </div>

          {/* Call to Actions */}
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary btn-lg">
              <span>Voir mes projets</span>
              <ArrowRight size={18} />
            </a>

            <a href="#education" className="btn btn-secondary btn-lg">
              <Award size={18} className="text-yellow" />
              <span>Certifications avec images</span>
            </a>

            <button 
              type="button" 
              onClick={onOpenResume} 
              className="btn btn-outline btn-lg"
            >
              <FileDown size={18} />
              <span>Consulter le CV</span>
            </button>
          </div>
        </div>

        {/* Stats Grid Highlight */}
        <div className="hero-stats-grid">
          {personalInfo.stats.map((stat, idx) => (
            <div key={idx} className="stat-card">
              <div className="stat-value gradient-text-yellow">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
              <div className="stat-desc">{stat.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
