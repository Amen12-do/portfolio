import { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Copy, 
  Check, 
  Sparkles, 
  ArrowUpRight 
} from 'lucide-react';
import { LinkedinIcon } from './Icons';
import { personalInfo } from '../data/cvData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Opportunité Data Analyst',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleCopyPhone = (phone) => {
    navigator.clipboard.writeText(phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2200);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding contact-section">
      <div className="section-container">
        <div className="section-header text-center">
          <div className="section-badge">
            <Mail size={14} className="mr-1 text-yellow" />
            <span>Coordonnées & Échanges</span>
          </div>
          <h2 className="section-title">
            Entrons en <span className="gradient-text-yellow">Contact</span>
          </h2>
          <p className="section-subtitle">
            Vous recherchez un Data Analyst avec une double compétence décisionnelle et développement pour renforcer votre équipe ? Échangeons dès aujourd'hui.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Direct Contact Info */}
          <div className="contact-info-col">
            <h3 className="contact-box-title">Coordonnées Directes</h3>
            <p className="contact-box-desc">
              Disponible pour des opportunités professionnelles (CDI, missions) à Ariana, Grand Tunis ou en télétravail.
            </p>

            <div className="contact-cards-stack">
              {/* Email */}
              <div className="contact-info-card">
                <div className="info-card-icon bg-yellow-subtle">
                  <Mail size={20} className="text-yellow" />
                </div>
                <div className="info-card-content">
                  <span className="info-card-label">Email</span>
                  <a href={`mailto:${personalInfo.email}`} className="info-card-val">
                    {personalInfo.email}
                  </a>
                </div>
                <button 
                  type="button" 
                  onClick={handleCopyEmail}
                  className="copy-btn-small"
                  title="Copier l'email"
                >
                  {copiedEmail ? <Check size={16} className="text-emerald" /> : <Copy size={16} />}
                </button>
              </div>

              {/* Phones */}
              <div className="contact-info-card">
                <div className="info-card-icon bg-yellow-subtle">
                  <Phone size={20} className="text-yellow" />
                </div>
                <div className="info-card-content">
                  <span className="info-card-label">Téléphone</span>
                  <div className="info-phones-row">
                    <a href={`tel:${personalInfo.phones[0].replace(/\s+/g, '')}`} className="info-card-val">
                      {personalInfo.phones[0]}
                    </a>
                    <span className="phone-sep">•</span>
                    <a href={`tel:${personalInfo.phones[1].replace(/\s+/g, '')}`} className="info-card-val">
                      {personalInfo.phones[1]}
                    </a>
                  </div>
                </div>
                <button 
                  type="button" 
                  onClick={() => handleCopyPhone(personalInfo.phones[0])}
                  className="copy-btn-small"
                  title="Copier le numéro"
                >
                  {copiedPhone ? <Check size={16} className="text-emerald" /> : <Copy size={16} />}
                </button>
              </div>

              {/* Location */}
              <div className="contact-info-card">
                <div className="info-card-icon bg-yellow-subtle">
                  <MapPin size={20} className="text-yellow" />
                </div>
                <div className="info-card-content">
                  <span className="info-card-label">Localisation</span>
                  <span className="info-card-val">{personalInfo.location}</span>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="contact-info-card">
                <div className="info-card-icon bg-yellow-subtle">
                  <LinkedinIcon size={20} className="text-yellow" />
                </div>
                <div className="info-card-content">
                  <span className="info-card-label">Profil LinkedIn</span>
                  <a 
                    href={personalInfo.linkedin} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="info-card-val flex items-center gap-1"
                  >
                    linkedin.com/in/{personalInfo.linkedinUsername}
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick response banner */}
            <div className="quick-response-banner">
              <Sparkles size={18} className="text-yellow shrink-0" />
              <span>Réactivité garantie par email ou téléphone.</span>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="contact-form-col">
            <div className="form-wrapper">
              <h3 className="contact-box-title">Envoyez-moi un message</h3>

              {submitted ? (
                <div className="form-success-box">
                  <div className="success-icon-wrap">
                    <CheckCircle2 size={42} className="text-yellow" />
                  </div>
                  <h4 className="success-heading">Message bien préparé !</h4>
                  <p className="success-desc">
                    Merci {formData.name}, votre demande a été enregistrée. Vous pouvez également m'écrire directement par email à <strong>{personalInfo.email}</strong>.
                  </p>
                  <button 
                    type="button" 
                    onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', subject: 'Opportunité Data Analyst', message: '' }); }}
                    className="btn btn-primary btn-sm mt-3"
                  >
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Votre Nom & Prénom</label>
                    <input 
                      type="text" 
                      id="name"
                      required
                      placeholder="Ex. Mohamed Ben Salah"
                      className="form-input"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Adresse Email</label>
                    <input 
                      type="email" 
                      id="email"
                      required
                      placeholder="nom@entreprise.com"
                      className="form-input"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject" className="form-label">Objet de la demande</label>
                    <select 
                      id="subject"
                      className="form-input form-select"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    >
                      <option value="Opportunité Data Analyst">Opportunité d'Emploi (Data Analyst / BI)</option>
                      <option value="Projet ETL & Tableaux de bord">Projet Business Intelligence / Power BI</option>
                      <option value="Développement Web & Backend">Développement Web / Backend Python</option>
                      <option value="Autre demande">Autre échange / Prise de contact</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message" className="form-label">Votre Message</label>
                    <textarea 
                      id="message"
                      required
                      rows={5}
                      placeholder="Bonjour Aymen, je vous contacte au sujet de..."
                      className="form-input form-textarea"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary w-full btn-lg">
                    <Send size={18} />
                    <span>Transmettre le message</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
