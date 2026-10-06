import { 
  HeartHandshake, 
  Calendar, 
  Users, 
  Sparkles, 
  Radio, 
  Target, 
  Gamepad2, 
  Megaphone 
} from 'lucide-react';
import { volunteering } from '../data/cvData';

export default function Volunteering() {
  const getVolunteeringIcon = (idx) => {
    switch (idx) {
      case 0:
        return Megaphone;
      case 1:
        return Radio;
      case 2:
        return Target;
      case 3:
        return Gamepad2;
      default:
        return Users;
    }
  };

  return (
    <section id="volunteering" className="section-padding volunteering-section">
      <div className="section-container">
        <div className="section-header text-center">
          <div className="section-badge">
            <HeartHandshake size={14} className="mr-1 text-emerald" />
            <span>Vie Associative & Bénévolat</span>
          </div>
          <h2 className="section-title">
            Engagements <span className="gradient-text">Associatifs & Collectifs</span>
          </h2>
          <p className="section-subtitle">
            Implication active au sein d'organisations étudiantes et d'initiatives tech, cultivant le leadership, la communication et l'esprit d'équipe.
          </p>
        </div>

        <div className="volunteering-grid">
          {volunteering.map((item, idx) => {
            const Icon = getVolunteeringIcon(idx);
            return (
              <div key={idx} className="volunteer-card">
                <div className="volunteer-card-top">
                  <div className="volunteer-icon-box">
                    <Icon size={20} className="text-cyan" />
                  </div>
                  <span className="volunteer-year">
                    <Calendar size={13} className="mr-1 text-cyan" />
                    {item.year}
                  </span>
                </div>

                <h3 className="volunteer-role">{item.role}</h3>
                <h4 className="volunteer-org">{item.organization}</h4>
                <p className="volunteer-desc">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

