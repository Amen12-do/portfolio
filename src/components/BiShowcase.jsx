import { useState } from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  Zap, 
  Database, 
  Workflow, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  Layers, 
  PieChart,
  ArrowUpRight,
  ArrowDownRight,
  RefreshCw,
  SlidersHorizontal,
  FileSpreadsheet
} from 'lucide-react';

export default function BiShowcase() {
  const [activeTab, setActiveTab] = useState('finance');
  const [selectedPeriod, setSelectedPeriod] = useState('q3');
  const [etlOptimized, setEtlOptimized] = useState(true);

  // Financial data based on selected period
  const financialData = {
    q1: {
      ca: "340 000 TND",
      margin: "24.5%",
      realisation: "102.3%",
      ecart: "+7 800 TND",
      ecartPositive: true,
      chartData: [
        { label: "Jan", reel: 110, prevu: 105 },
        { label: "Fév", reel: 108, prevu: 110 },
        { label: "Mar", reel: 122, prevu: 115 },
      ],
      insight: "Forte surperformance sur mars due à l'accélération des encaissements commerciaux."
    },
    q2: {
      ca: "385 000 TND",
      margin: "26.1%",
      realisation: "99.1%",
      ecart: "-3 400 TND",
      ecartPositive: false,
      chartData: [
        { label: "Avr", reel: 125, prevu: 128 },
        { label: "Mai", reel: 128, prevu: 130 },
        { label: "Juin", reel: 132, prevu: 130 },
      ],
      insight: "Léger décalage sur mai résorbé fin juin suite aux mesures d'arbitrage de trésorerie."
    },
    q3: {
      ca: "410 000 TND",
      margin: "27.8%",
      realisation: "104.6%",
      ecart: "+18 200 TND",
      ecartPositive: true,
      chartData: [
        { label: "Juil", reel: 134, prevu: 130 },
        { label: "Août", reel: 136, prevu: 130 },
        { label: "Sept", reel: 140, prevu: 132 },
      ],
      insight: "Trimestre record avec une marge d'exploitation optimisée de +2.2 points de base."
    },
    full: {
      ca: "1 135 000 TND",
      margin: "26.2%",
      realisation: "102.1%",
      ecart: "+22 600 TND",
      ecartPositive: true,
      chartData: [
        { label: "T1", reel: 340, prevu: 330 },
        { label: "T2", reel: 385, prevu: 388 },
        { label: "T3", reel: 410, prevu: 392 },
      ],
      insight: "Objectif annuel dépassé : prévisions de trésorerie fiabilisées grâce au modèle décisionnel."
    }
  };

  const currentFin = financialData[selectedPeriod];

  return (
    <section id="bi-showcase" className="section-padding bi-showcase-section">
      <div className="section-container">
        <div className="section-header text-center">
          <div className="section-badge">
            <Zap size={14} className="mr-1 text-cyan" />
            <span>Démonstrateur Interactif</span>
          </div>
          <h2 className="section-title">
            Laboratoire Décisionnel & <span className="gradient-text">Showcase BI</span>
          </h2>
          <p className="section-subtitle">
            Explorez en direct la manière dont je structure, modélise et restitue la donnée pour générer des insights concrets.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="showcase-tabs">
          <button
            type="button"
            onClick={() => setActiveTab('finance')}
            className={`showcase-tab-btn ${activeTab === 'finance' ? 'active' : ''}`}
          >
            <TrendingUp size={18} />
            <span>Pilotage Financier & KPIs (BTE)</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('etl')}
            className={`showcase-tab-btn ${activeTab === 'etl' ? 'active' : ''}`}
          >
            <Workflow size={18} />
            <span>Pipeline ETL & Gain -40% (Medianet)</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('redmine')}
            className={`showcase-tab-btn ${activeTab === 'redmine' ? 'active' : ''}`}
          >
            <BarChart3 size={18} />
            <span>Connecteur Redmine (Python/Power BI)</span>
          </button>
        </div>

        {/* Tab 1: Finance KPIs */}
        {activeTab === 'finance' && (
          <div className="showcase-panel">
            <div className="panel-top-controls">
              <div className="panel-title-area">
                <h3 className="panel-heading">Tableau de Bord de Contrôle Budgétaire & KPIs</h3>
                <p className="panel-subtext">Modèle inspiré des travaux de pilotage financier et d'analyse prévisionnelle des écarts (BTE).</p>
              </div>
              <div className="period-pills">
                <span className="period-label"><SlidersHorizontal size={14} /> Période :</span>
                {['q1', 'q2', 'q3', 'full'].map((p) => (
                  <button
                    key={p}
                    type="button"
                    onClick={() => setSelectedPeriod(p)}
                    className={`period-btn ${selectedPeriod === p ? 'active' : ''}`}
                  >
                    {p === 'full' ? 'Cumul' : p.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            {/* KPI Cards Row */}
            <div className="kpi-cards-grid">
              <div className="kpi-card">
                <span className="kpi-label">Chiffre d'Affaires</span>
                <div className="kpi-val">{currentFin.ca}</div>
                <div className="kpi-trend positive">
                  <ArrowUpRight size={14} /> Réalisé certifié
                </div>
              </div>

              <div className="kpi-card">
                <span className="kpi-label">Taux de Marge Nette</span>
                <div className="kpi-val">{currentFin.margin}</div>
                <div className="kpi-trend positive">
                  <TrendingUp size={14} /> Cible : 25.0%
                </div>
              </div>

              <div className="kpi-card">
                <span className="kpi-label">Taux Réalisation Objectif</span>
                <div className="kpi-val">{currentFin.realisation}</div>
                <div className={`kpi-trend ${currentFin.ecartPositive ? 'positive' : 'negative'}`}>
                  {currentFin.ecartPositive ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                  Variance budget
                </div>
              </div>

              <div className="kpi-card">
                <span className="kpi-label">Écart Prévisionnel (DAX)</span>
                <div className={`kpi-val ${currentFin.ecartPositive ? 'text-emerald' : 'text-amber'}`}>
                  {currentFin.ecart}
                </div>
                <div className="kpi-trend neutral">
                  Calculé en temps réel
                </div>
              </div>
            </div>

            {/* Interactive Visual Bar Comparison */}
            <div className="chart-wrapper">
              <div className="chart-header">
                <div>
                  <h4 className="chart-title">Comparatif Prévisionnel vs Réalisé (k TND)</h4>
                  <span className="chart-subtitle">Mesures DAX : [Reel_MTD] vs [Target_MTD]</span>
                </div>
                <div className="chart-legend">
                  <span className="legend-item"><span className="legend-dot color-real"></span> Réalisé</span>
                  <span className="legend-item"><span className="legend-dot color-target"></span> Prévisionnel</span>
                </div>
              </div>

              <div className="bars-chart-container">
                {currentFin.chartData.map((item, idx) => {
                  const maxVal = 450;
                  const reelH = Math.min(100, (item.reel / maxVal) * 100);
                  const targetH = Math.min(100, (item.prevu / maxVal) * 100);
                  return (
                    <div key={idx} className="bar-group">
                      <div className="bars-pair">
                        <div className="bar bar-real" style={{ height: `${reelH}%` }}>
                          <span className="bar-tooltip">{item.reel} k</span>
                        </div>
                        <div className="bar bar-target" style={{ height: `${targetH}%` }}>
                          <span className="bar-tooltip">{item.prevu} k</span>
                        </div>
                      </div>
                      <span className="bar-label">{item.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Insight Callout */}
            <div className="insight-callout">
              <div className="insight-icon"><CheckCircle2 size={20} className="text-emerald" /></div>
              <div className="insight-body">
                <strong>Insight d'Analyse Financière :</strong> {currentFin.insight}
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: ETL Pipeline & -40% Optimization */}
        {activeTab === 'etl' && (
          <div className="showcase-panel">
            <div className="panel-top-controls">
              <div className="panel-title-area">
                <h3 className="panel-heading">Architecture du Pipeline ETL Optimisé (-40%)</h3>
                <p className="panel-subtext">Cas d'usage Medianet : Automatisation de la collecte via API REST et refonte des temps de traitement.</p>
              </div>
              <button
                type="button"
                onClick={() => setEtlOptimized(!etlOptimized)}
                className={`btn btn-sm ${etlOptimized ? 'btn-primary' : 'btn-outline'}`}
              >
                <RefreshCw size={14} className={etlOptimized ? 'animate-spin-slow' : ''} />
                <span>{etlOptimized ? 'Pipeline Optimisé (Actif)' : 'Pipeline Historique (Lent)'}</span>
              </button>
            </div>

            {/* Metrics Before vs After */}
            <div className="etl-comparison-cards">
              <div className={`etl-stat-box ${!etlOptimized ? 'active-box border-warning' : ''}`}>
                <div className="box-badge badge-warning">Avant Optimisation</div>
                <div className="box-metric">55 minutes</div>
                <p className="box-detail">Collecte manuelle / scripts séquentiels, saturation mémoire lors de l'ingestion.</p>
              </div>

              <div className={`etl-stat-box ${etlOptimized ? 'active-box border-success' : ''}`}>
                <div className="box-badge badge-success">Après Optimisation (-40%)</div>
                <div className="box-metric text-emerald">33 minutes</div>
                <p className="box-detail">Flux ETL par lots optimisés, connecteur API REST asynchrone, indexation SQL.</p>
              </div>
            </div>

            {/* Visual Pipeline Flow */}
            <div className="pipeline-flow-diagram">
              <div className="pipeline-step">
                <div className="step-number">01</div>
                <div className="step-icon"><Workflow size={20} /></div>
                <h5 className="step-title">Source API REST</h5>
                <p className="step-desc">Collecte automatisée via endpoints REST sécurisés</p>
                <div className="step-status">100% Automatisé</div>
              </div>

              <div className="pipeline-arrow">➔</div>

              <div className="pipeline-step">
                <div className="step-number">02</div>
                <div className="step-icon"><Zap size={20} /></div>
                <h5 className="step-title">Cleanse & Transform</h5>
                <p className="step-desc">Normalisation Pandas, vérification d'intégrité, déduplication</p>
                <div className="step-status text-cyan">Traitement Vectorisé</div>
              </div>

              <div className="pipeline-arrow">➔</div>

              <div className="pipeline-step">
                <div className="step-number">03</div>
                <div className="step-icon"><Database size={20} /></div>
                <h5 className="step-title">Data Warehouse SQL</h5>
                <p className="step-desc">Modèle dimensionnel optimisé (schéma en étoile)</p>
                <div className="step-status text-emerald">Jointures Indexées</div>
              </div>

              <div className="pipeline-arrow">➔</div>

              <div className="pipeline-step">
                <div className="step-number">04</div>
                <div className="step-icon"><BarChart3 size={20} /></div>
                <h5 className="step-title">Power BI Reporting</h5>
                <p className="step-desc">Actualisation automatique des rapports et KPI décisionnels</p>
                <div className="step-status text-cyan">Insights Directs</div>
              </div>
            </div>

            <div className="insight-callout">
              <div className="insight-icon"><CheckCircle2 size={20} className="text-emerald" /></div>
              <div className="insight-body">
                <strong>Impact Métier :</strong> La réduction de 40% du temps de traitement libère des ressources serveurs critiques et permet aux décideurs d'accéder aux données fraîches dès le début de chaque journée de travail.
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Redmine Connector & KPI Analytics */}
        {activeTab === 'redmine' && (
          <div className="showcase-panel">
            <div className="panel-top-controls">
              <div className="panel-title-area">
                <h3 className="panel-heading">Connecteur Redmine Multi-Canaux & Reporting BI</h3>
                <p className="panel-subtext">Solution d'ingestion basée sur Flask (Python) et modélisation décisionnelle Power BI (Projet Juin 2025).</p>
              </div>
              <div className="tech-pills-row">
                <span className="badge-tag">Python Flask</span>
                <span className="badge-tag">Power BI</span>
                <span className="badge-tag">MySQL / SSMS</span>
              </div>
            </div>

            {/* Metrics */}
            <div className="kpi-cards-grid">
              <div className="kpi-card">
                <span className="kpi-label">Tickets Synchronisés</span>
                <div className="kpi-val">1 480</div>
                <div className="kpi-trend positive"><CheckCircle2 size={14} /> Extraction sans perte</div>
              </div>
              <div className="kpi-card">
                <span className="kpi-label">Taux de Résolution</span>
                <div className="kpi-val text-emerald">94.8%</div>
                <div className="kpi-trend positive"><TrendingUp size={14} /> +6.2% vs N-1</div>
              </div>
              <div className="kpi-card">
                <span className="kpi-label">Temps Moyen (MTTR)</span>
                <div className="kpi-val">2.8 jours</div>
                <div className="kpi-trend positive"><Clock size={14} /> Réduit de 1.4j</div>
              </div>
              <div className="kpi-card">
                <span className="kpi-label">Canaux Connectés</span>
                <div className="kpi-val">Multi-sources</div>
                <div className="kpi-trend neutral"><Layers size={14} /> API Flask centralisée</div>
              </div>
            </div>

            {/* Distribution Bars */}
            <div className="distribution-section">
              <h4 className="chart-title mb-3">Répartition des flux et état des anomalies</h4>
              <div className="distribution-bars">
                <div className="dist-item">
                  <div className="dist-header">
                    <span>Anomalies Résolues</span>
                    <span className="dist-pct">78%</span>
                  </div>
                  <div className="dist-track">
                    <div className="dist-fill bg-emerald" style={{ width: '78%' }}></div>
                  </div>
                </div>

                <div className="dist-item">
                  <div className="dist-header">
                    <span>Tickets en cours d'analyse</span>
                    <span className="dist-pct">16%</span>
                  </div>
                  <div className="dist-track">
                    <div className="dist-fill bg-cyan" style={{ width: '16%' }}></div>
                  </div>
                </div>

                <div className="dist-item">
                  <div className="dist-header">
                    <span>Tickets Bloquants traités en priorité</span>
                    <span className="dist-pct">6%</span>
                  </div>
                  <div className="dist-track">
                    <div className="dist-fill bg-amber" style={{ width: '6%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="insight-callout">
              <div className="insight-icon"><CheckCircle2 size={20} className="text-emerald" /></div>
              <div className="insight-body">
                <strong>Valeur Ajoutée :</strong> Le connecteur personnalisé Python Flask permet d'extraire des structures hiérarchiques complexes de Redmine, de les transformer dans un schéma en étoile optimisé dans MySQL/SQL Server et d'offrir aux chefs de projet des tableaux de bord Power BI d'une fluidité exemplaire.
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

