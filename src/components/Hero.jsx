import { useState } from 'react';
import { 
  BarChart3, 
  Database, 
  Code2, 
  Sparkles, 
  ArrowRight, 
  FileDown, 
  Mail, 
  Phone, 
  MapPin, 
  Check, 
  Copy,
  TrendingDown,
  LineChart,
  Layers
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
        <div className="glow-sphere glow-1"></div>
        <div className="glow-sphere glow-2"></div>
      </div>

      <div className="section-container">
        {/* Status Badge */}
        <div className="hero-badge-wrapper">
          <div className="hero-badge">
            <span className="pulsing-dot"></span>
            <span>Diplômé Mastère Contrôle de Gestion & BI • En recherche active</span>
          </div>
        </div>

        {/* Hero Title & Subtitle */}
        <div className="hero-main-content">
          <h1 className="hero-title">
            Bonjour, je suis <span className="gradient-text">{personalInfo.name}</span>
          </h1>

          <p className="hero-role-title">
            <span className="role-chip"><BarChart3 size={18} /> Data Analyst</span>
            <span className="role-divider">•</span>
            <span className="role-chip"><Layers size={18} /> Business Intelligence</span>
            <span className="role-divider">•</span>
            <span className="role-chip"><Code2 size={18} /> Python & Full-Stack</span>
          </p>

          <p className="hero-description">
            {personalInfo.summary}
          </p>

          {/* Quick Contact & Location Badges */}
          <div className="hero-contact-bar">
            <div className="contact-pill">
              <MapPin size={15} className="pill-icon text-cyan" />
              <span>{personalInfo.location}</span>
            </div>

            <button 
              type="button" 
              onClick={handleCopyEmail} 
              className="contact-pill contact-pill-interactive"
              title="Cliquer pour copier l'adresse email"
            >
              <Mail size={15} className="pill-icon text-cyan" />
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
            >
              <Phone size={15} className="pill-icon text-emerald" />
              <span>{personalInfo.phones[0]}</span>
            </a>

            <a 
              href={personalInfo.linkedin} 
              target="_blank" 
              rel="noreferrer" 
              className="contact-pill contact-pill-interactive"
            >
              <LinkedinIcon size={15} className="pill-icon text-blue" />
              <span>LinkedIn</span>
            </a>
          </div>

          {/* Call to Actions */}
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary btn-lg">
              <span>Voir mes projets</span>
              <ArrowRight size={18} />
            </a>

            <a href="#bi-showcase" className="btn btn-secondary btn-lg">
              <Sparkles size={18} className="text-accent" />
              <span>Tester la démo BI</span>
            </a>

            <button 
              type="button" 
              onClick={onOpenResume} 
              className="btn btn-outline btn-lg"
            >
              <FileDown size={18} />
              <span>Consulter mon CV</span>
            </button>
          </div>
        </div>

        {/* Stats Grid Highlight */}
        <div className="hero-stats-grid">
          {personalInfo.stats.map((stat, idx) => (
            <div key={idx} className="stat-card">
              <div className="stat-value gradient-text">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
              <div className="stat-desc">{stat.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
