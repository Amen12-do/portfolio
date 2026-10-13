import { 
  Briefcase, 
  Calendar, 
  Building2, 
  CheckCircle2, 
  TrendingUp, 
  Layers, 
  Code2 
} from 'lucide-react';
import { experiences } from '../data/cvData';

export default function Experience() {
  const getExperienceIcon = (id) => {
    switch(id) {
      case 'medianet':
        return Layers;
      case 'bte':
        return TrendingUp;
      case 'sadim-stage':
        return Code2;
      default:
        return Briefcase;
    }
  };

  return (
    <section id="experience" className="section-padding experience-section">
      <div className="section-container">
        <div className="section-header text-center">
          <div className="section-badge">
            <Briefcase size={14} className="mr-1 text-yellow" />
            <span>Parcours Professionnel</span>
          </div>
          <h2 className="section-title">
            Expérience <span className="gradient-text">professionnelle</span>
          </h2>
          <p className="section-subtitle">
            Missions concrètes en entreprise en Business Intelligence, contrôle de gestion bancaire et développement web.
          </p>
        </div>

        {/* Timeline wrapper */}
        <div className="timeline-container">
          <div className="timeline-track"></div>

          {experiences.map((exp, idx) => {
            const Icon = getExperienceIcon(exp.id);
            const isEven = idx % 2 === 0;

            return (
              <div key={exp.id} className={`timeline-item ${isEven ? 'timeline-left' : 'timeline-right'}`}>
                {/* Timeline node */}
                <div className="timeline-node">
                  <Icon size={18} />
                </div>

                {/* Timeline content card */}
                <div className="timeline-card">
                  <div className="timeline-card-header">
                    <div className="company-badge-wrap">
                      <span className="experience-type-pill">{exp.type}</span>
                      <span className="experience-badge">{exp.badge}</span>
                    </div>
                    <div className="timeline-period">
                      <Calendar size={14} className="mr-1 text-yellow" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <h3 className="timeline-role">{exp.role}</h3>
                  <div className="timeline-company">
                    <Building2 size={16} className="text-yellow" />
                    <span>{exp.company}</span>
                  </div>

                  <p className="timeline-desc">{exp.description}</p>

                  <div className="timeline-achievements">
                    <h4 className="achievements-heading">Missions & Réalisations :</h4>
                    <ul className="achievements-list">
                      {exp.achievements.map((ach, aIdx) => (
                        <li key={aIdx} className="achievement-item">
                          <CheckCircle2 size={16} className="achievement-icon text-yellow" />
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech stack pills */}
                  <div className="timeline-tech-stack">
                    {exp.technologies.map((tech, tIdx) => (
                      <span key={tIdx} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
