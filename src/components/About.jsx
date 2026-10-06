import { 
  BarChart, 
  Workflow, 
  TrendingUp, 
  Code2, 
  CheckCircle2, 
  Brain, 
  Target,
  Sparkles
} from 'lucide-react';

export default function About() {
  const pillars = [
    {
      icon: BarChart,
      title: "Business Intelligence & Reporting",
      desc: "Création de tableaux de bord Power BI dynamiques, modélisation dimensionnelle (schémas en étoile), calculs DAX avancés et storytelling décisionnel.",
      highlights: ["Power BI & Power Query", "Mesures & KPIs DAX", "Modélisation de données", "Excel Financier"]
    },
    {
      icon: Workflow,
      title: "Flux ETL & Ingénierie des Données",
      desc: "Conception et automatisation de pipelines d'extraction, nettoyage et chargement (SSIS, Python Pandas, Dataflows) réduisant jusqu'à 40% les temps de traitement.",
      highlights: ["SSIS & Power Query", "Python (Pandas, NumPy)", "Connecteurs personnalisés", "Optimisation flux"]
    },
    {
      icon: TrendingUp,
      title: "Contrôle de Gestion & Stratégie",
      desc: "Pilotage rigoureux de la performance d'entreprise à travers le suivi de 20+ KPIs, la production de rapports prévisionnels et l'analyse fine des écarts budgétaires.",
      highlights: ["Suivi budgétaire", "Rapports prévisionnels", "Pilotage rentabilité", "Indicateurs bancaires"]
    },
    {
      icon: Code2,
      title: "Développement Web & APIs REST",
      desc: "Développement d'applications modernes en React.js et de services backend (Node.js/Express, Python Flask) pour relier les systèmes opérationnels au décisionnel.",
      highlights: ["React.js & JavaScript", "Python Flask API", "Node.js / Express", "MySQL / SQL Server"]
    }
  ];

  return (
    <section id="about" className="section-padding about-section">
      <div className="section-container">
        <div className="section-header text-center">
          <div className="section-badge">
            <Sparkles size={14} className="mr-1 text-accent" />
            <span>Profil & Vision</span>
          </div>
          <h2 className="section-title">
            La double compétence : <span className="gradient-text">Data & Développement</span>
          </h2>
          <p className="section-subtitle">
            Une synergie unique entre vision managériale/financière et expertise technique pour transformer vos flux de données en leviers concrets de décision.
          </p>
        </div>

        {/* Dual Competence Showcase Banner */}
        <div className="dual-competence-card">
          <div className="dual-competence-content">
            <div className="badge-tag">Atout Distinctif</div>
            <h3 className="dual-title">
              Pourquoi cette double compétence fait la différence ?
            </h3>
            <p className="dual-text">
              Beaucoup de développeurs ne maîtrisent pas la logique comptable ou financière, tandis que beaucoup d'analystes financiers manquent d'aisance avec l'écriture de code et l'automatisation technique. 
              Grâce à ma formation en <strong>Contrôle de Gestion & BI</strong> combinée à mes compétences en <strong>Python, SQL et React.js</strong>, je comble ce fossé pour livrer des solutions analytiques prêtes à l'emploi, robustes et orientées résultats.
            </p>
            <div className="dual-points">
              <div className="point-item">
                <CheckCircle2 size={18} className="text-emerald shrink-0" />
                <span>Compréhension immédiate des enjeux métiers (rentabilité, marges, KPIs)</span>
              </div>
              <div className="point-item">
                <CheckCircle2 size={18} className="text-emerald shrink-0" />
                <span>Autonomie technique complète pour automatiser la collecte et l'ETL</span>
              </div>
              <div className="point-item">
                <CheckCircle2 size={18} className="text-emerald shrink-0" />
                <span>Capacité à développer des interfaces utilisateurs claires et interactives</span>
              </div>
            </div>
          </div>
          <div className="dual-competence-badge-col">
            <div className="floating-metric-box">
              <Brain size={32} className="text-cyan mb-2" />
              <div className="metric-num">100%</div>
              <div className="metric-label">Aligné Métier & Tech</div>
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="pillars-grid">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div key={idx} className="pillar-card">
                <div className="pillar-icon-box">
                  <Icon size={24} />
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

