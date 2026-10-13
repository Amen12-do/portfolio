import { 
  BarChart, 
  Workflow, 
  TrendingUp, 
  Code2, 
  CheckCircle2, 
  Brain, 
  Sparkles
} from 'lucide-react';

export default function About() {
  const pillars = [
    {
      icon: BarChart,
      title: "Business Intelligence & Reporting",
      desc: "Conception de tableaux de bord Power BI dynamiques, modélisation dimensionnelle (schémas en étoile/flocon), calculs DAX et KPIs de pilotage décisionnel.",
      highlights: ["Power BI & Power Query", "Mesures & KPIs DAX", "Modélisation dimensionnelle", "Excel Financier"]
    },
    {
      icon: Workflow,
      title: "Flux ETL & Ingénierie des Données",
      desc: "Conception et mise en place de pipelines d'extraction, nettoyage et chargement (SSIS, Python Pandas, Dataflows) réduisant jusqu'à 40% le temps de traitement des données.",
      highlights: ["SSIS & Power Query", "Python (Pandas, NumPy)", "Connecteurs personnalisés", "Optimisation des flux"]
    },
    {
      icon: TrendingUp,
      title: "Contrôle de Gestion & Finance",
      desc: "Élaboration et suivi de 20+ KPIs mensuels et trimestriels, production de rapports financiers prévisionnels et analyse des écarts budgétaires pour orienter la décision.",
      highlights: ["20+ KPIs de pilotage", "Rapports prévisionnels", "Analyse des écarts", "Optimisation budgétaire"]
    },
    {
      icon: Code2,
      title: "Développement Web & Backend",
      desc: "Développement d'applications interactives avec React.js, Node.js/Express et conception d'APIs REST avec Python Flask pour automatiser la collecte et l'intégration des données.",
      highlights: ["React.js & JavaScript", "Python Flask API", "Node.js & Express.js", "SQL Server & MySQL"]
    }
  ];

  return (
    <section id="about" className="section-padding about-section">
      <div className="section-container">
        <div className="section-header text-center">
          <div className="section-badge">
            <Sparkles size={14} className="mr-1 text-yellow" />
            <span>Double Compétence</span>
          </div>
          <h2 className="section-title">
            Analyse de données & <span className="gradient-text-yellow">Développement</span>
          </h2>
          <p className="section-subtitle">
            Une synergie stratégique entre contrôle de gestion, Business Intelligence et ingénierie logicielle pour transformer les données en leviers d'action.
          </p>
        </div>

        {/* Dual Competence Showcase Banner */}
        <div className="dual-competence-card">
          <div className="dual-competence-content">
            <div className="badge-tag-yellow">Profil Hybride à Forte Valeur</div>
            <h3 className="dual-title">
              La passerelle naturelle entre les besoins Métiers et l'Expertise Technique
            </h3>
            <p className="dual-text">
              Diplômé d'un <strong>Mastère en Contrôle de Gestion et Business Intelligence</strong> à l'ESEN & ISCAE Manouba, j'associe la rigueur financière à la maîtrise du code (Python, SQL, React.js). 
              Cette double compétence me permet de comprendre les enjeux stratégiques des décideurs et de concevoir en totale autonomie des architectures décisionnelles, des flux ETL performants et des tableaux de bord interactifs.
            </p>
            <div className="dual-points">
              <div className="point-item">
                <CheckCircle2 size={18} className="text-yellow shrink-0" />
                <span>Compréhension immédiate des KPIs financiers, marges et pilotage budgétaire</span>
              </div>
              <div className="point-item">
                <CheckCircle2 size={18} className="text-yellow shrink-0" />
                <span>Autonomie technique complète : scripts Python, requêtes SQL complexes et pipelines ETL</span>
              </div>
              <div className="point-item">
                <CheckCircle2 size={18} className="text-yellow shrink-0" />
                <span>Conception d'interfaces web réactives pour la restitution visuelle des données (React.js, Power BI)</span>
              </div>
            </div>
          </div>
          <div className="dual-competence-badge-col">
            <div className="floating-metric-box">
              <Brain size={32} className="text-yellow mb-2" />
              <div className="metric-num text-yellow">100%</div>
              <div className="metric-label">Métier & Technique</div>
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="pillars-grid">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div key={idx} className="pillar-card">
                <div className="pillar-icon-box bg-yellow-subtle">
                  <Icon size={24} className="text-yellow" />
                </div>
                <h3 className="pillar-title">{pillar.title}</h3>
                <p className="pillar-desc">{pillar.desc}</p>
                <div className="pillar-tags">
                  {pillar.highlights.map((tag, tIdx) => (
                    <span key={tIdx} className="tag-pill">{tag}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
