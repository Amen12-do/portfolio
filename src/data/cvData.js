export const personalInfo = {
  name: "Aymen Daaji",
  title: "Data Analyst",
  subtitle: "Diplômé en Contrôle de Gestion & BI • Double compétence Analyse de Données & Développement",
  email: "aymandaaji@gmail.com",
  phones: ["92 730 383", "50 346 890"],
  location: "Ariana, Tunisie",
  linkedin: "https://linkedin.com/in/ayman-daaji",
  linkedinUsername: "ayman-daaji",
  summary:
    "Diplômé d'un Mastère en Contrôle de Gestion et Business Intelligence avec une double compétence en analyse de données et développement. Expérience confirmée en conception de solutions BI, mise en place de flux ETL et reporting financier. Capable de transformer des données complexes en insights actionnables pour optimiser la prise de décision.",
  stats: [
    { label: "Réduction temps ETL", value: "-40%", desc: "Optimisation des flux de données chez Medianet" },
    { label: "KPIs pilotés", value: "20+", desc: "Suivi mensuel et trimestriel à la BTE" },
    { label: "Double compétence", value: "BI + Dev", desc: "Data Analytics, Python, SQL & React.js" },
    { label: "Diplôme Spécialisé", value: "Bac+5", desc: "Mastère Pro Contrôle de Gestion & Business Intelligence" }
  ]
};

export const experiences = [
  {
    id: "medianet",
    role: "Stagiaire BI & Développement Backend",
    company: "Medianet",
    period: "février 2025 – juin 2025",
    type: "Stage BI & Développement Backend",
    badge: "Business Intelligence & Backend",
    description:
      "Conception et mise en place d'une solution décisionnelle complète couplée à des services backend pour l'automatisation des flux analytiques.",
    achievements: [
      "Intégration d’une solution BI pour le suivi et l’analyse des données.",
      "Développement backend et intégration d'API REST pour la collecte automatisée de données.",
      "Conception et mise en place de flux ETL optimisés, réduisant le temps de traitement des données de 40%."
    ],
    technologies: ["Python", "API REST", "ETL", "SQL", "Business Intelligence", "Power BI", "Optimisation de flux"]
  },
  {
    id: "bte",
    role: "Stagiaire Contrôle de Gestion",
    company: "Banque de Tunisie et des Emirats (BTE)",
    period: "juillet 2024 – septembre 2024",
    type: "Stage Contrôle de Gestion",
    badge: "Contrôle de Gestion Bancaire",
    description:
      "Pilotage de la performance bancaire à travers la mise en place de tableaux de bord financiers et l'analyse prévisionnelle des écarts budgétaires.",
    achievements: [
      "Élaboration et suivi de 20+ KPIs mensuels et trimestriels pour le pilotage de la performance.",
      "Production de rapports financiers et prévisionnels.",
      "Analyse des écarts mensuels et recommandations stratégiques pour l'optimisation budgétaire."
    ],
    technologies: ["KPIs financiers", "Contrôle de gestion", "Rapports prévisionnels", "Excel Avancé", "Analyse budgétaire"]
  },
  {
    id: "sadim-stage",
    role: "Stagiaire Développement Web",
    company: "SADIM industrielle",
    period: "mars 2023 – juin 2023",
    type: "Stage Développement Web",
    badge: "E-Commerce & Digitalisation",
    description:
      "Digitalisation des canaux de vente pour un fabricant et distributeur d'équipements industriels.",
    achievements: [
      "Conception et développement d'un site e-commerce pour la vente de machines industrielles (React.js, Node.js).",
      "Élaboration d'un plan marketing digital et refonte complète de l'identité visuelle.",
      "Mise en place d'un système de gestion de catalogue produits avec interface d'administration."
    ],
    technologies: ["React.js", "Node.js", "Express.js", "Marketing digital", "Catalogue produits", "UI/UX"]
  }
];

export const projects = [
  {
    id: "redmine-bi",
    title: "Conception et déploiement d’un connecteur REDMINE avec multiples canaux et BI",
    date: "juin 2025",
    category: "bi",
    categoryLabel: "Business Intelligence & ETL",
    highlight: "Projet Phare 2025",
    summary:
      "Architecture d'extraction, transformation et chargement (ETL) connectant Redmine à une solution décisionnelle Power BI via une API Flask personnalisée.",
    details: [
      "Création d'un connecteur d’extraction principal avec Flask (python)",
      "Développement d’un connecteur (ETL) personnalisé pour extraction, transformation, chargement des données de Redmine",
      "Création d’un modèle de données optimisé pour l’analyse",
      "Mise en place d’un schéma optimisé pour la jointure avec les données Redmine",
      "Création de tableaux de bord et analyse des KPI’s"
    ],
    technologies: ["Python", "Flask", "MYSQL", "SSMS", "SSMA", "Power BI"],
    impact: "Centralisation des flux de données projets et automatisation intégrale du reporting décisionnel."
  },
  {
    id: "bi-finance",
    title: "Dashboard BI, Finance",
    date: "octobre 2024",
    category: "bi",
    categoryLabel: "Business Intelligence & Finance",
    highlight: "Décisionnel Financier",
    summary:
      "Conception d’un tableau de bord interactif avec Power BI et Power Query pour le suivi financier et l'analyse d'indicateurs de rentabilité.",
    details: [
      "Conception d’un tableau de bord interactif avec Power BI et Power Query.",
      "Mise en place d’indicateurs financiers et analytiques.",
      "Modélisation des données financières et calculs DAX pour le pilotage de la performance."
    ],
    technologies: ["MYSQL", "SSMS", "Power BI", "Power Query", "DAX"],
    impact: "Visualisation synthétique des métriques financières et détection en temps réel des écarts budgétaires."
  },
  {
    id: "sadim-pfe",
    title: "La digitalisation des ventes pour l'entreprise SADIM, Projet fin d'étude (PFE)",
    date: "juin 2023",
    category: "dev",
    categoryLabel: "Full-Stack & E-Commerce",
    highlight: "PFE Licence",
    summary:
      "Projet de fin d'études axé sur la transformation digitale de SADIM Industrielle : plateforme web e-commerce, plan marketing et refonte de l'identité visuelle.",
    details: [
      "Création d'un site web",
      "Réalisation d'un plan marketing",
      "Renouvellement de logo",
      "Mise en place de l'interface d'administration du catalogue produits"
    ],
    technologies: ["React.js", "Node.js", "Express.js", "GitHub", "Adobe Illustrator"],
    impact: "Structuration numérique des ventes et modernisation de la charte de marque de SADIM."
  },
  {
    id: "quiz-platform",
    title: "Test (projet fin d'année), site de test quiz",
    date: "mai 2022",
    category: "dev",
    categoryLabel: "Développement Web",
    highlight: "Projet Académique",
    summary:
      "Développement d'une plateforme web interactive de passation de tests sous forme de quiz avec évaluation en temps réel.",
    details: [
      "Développement d'une plateforme web de tests interactifs sous forme de quiz",
      "Gestion de banques de questions dynamiques et chronométrage",
      "Calcul instantané des résultats et restitution graphique des performances"
    ],
    technologies: ["PHP", "HTML", "CSS", "MYSQL"],
    impact: "Plateforme pédagogique interactive avec gestion des questionnaires et des scores."
  }
];

export const skillsData = {
  biData: [
    { name: "ETL : SSIS, Power Query, Dataflows", level: 92, category: "ETL & Pipeline" },
    { name: "SQL Server (SSMS, SSMA)", level: 90, category: "Bases de données" },
    { name: "MySQL Workbenches, MySQL", level: 88, category: "Bases de données" },
    { name: "PL/SQL", level: 82, category: "Bases de données" },
    { name: "Power BI (modélisation, DAX, KPIs)", level: 94, category: "Reporting & Visualisation" },
    { name: "Excel Avancé", level: 90, category: "Reporting Financier" }
  ],
  dev: [
    { name: "Python (Pandas, NumPy, Flask)", level: 90, category: "Data & Backend" },
    { name: "JavaScript", level: 86, category: "Développement Scripting" },
    { name: "React.js", level: 85, category: "Frontend Web" },
    { name: "Node.js & Express.js", level: 82, category: "Backend" },
    { name: "HTML & CSS", level: 92, category: "Intégration Web" }
  ],
  methodologies: [
    { name: "Agile (Scrum)", level: 90, desc: "Gestion itérative, sprints, standups et livraison continue" },
    { name: "GIMSI", level: 85, desc: "Méthodologie de conception et pilotage de systèmes décisionnels" },
    { name: "Analyse et modélisation des données", level: 92, desc: "Schémas en étoile, flocon, normalisation et modélisation dimensionnelle" },
    { name: "Automatisation et optimisation des processus", level: 90, desc: "Réduction des goulots d'étranglement et gains de temps (ex: -40% ETL)" }
  ],
  tools: [
    { name: "GitHub", desc: "Contrôle de version, collaboration et gestion de code source" },
    { name: "Android Studio", desc: "Environnement d'émulation et outils mobiles" },
    { name: "Adobe Illustrator", desc: "Conception graphique vectorielle, logos et chartes graphiques" },
    { name: "Photoshop", desc: "Retouche d'images et création visuelle" }
  ]
};

export const education = [
  {
    degree: "Mastère professionnel en Contrôle de Gestion et Business Intelligence",
    institution: "ESEN et ISCAE Manouba",
    period: "2023 – 2025",
    description:
      "Formation d'excellence alliant contrôle de gestion stratégique, finance d'entreprise, modélisation décisionnelle et Business Intelligence avancée."
  },
  {
    degree: "Licence en business computing",
    institution: "École supérieur d'économie numérique (ESEN)",
    period: "2019 – 2023",
    description:
      "Formation supérieure en technologies de l'information appliquées aux affaires : bases de données, développement logiciel et systèmes d'information."
  },
  {
    degree: "Baccalauréat (économie et gestion)",
    institution: "Lycée privé Asdrubal Bardo",
    period: "2019",
    description: "Fondations solides en économie générale, gestion d'entreprise, comptabilité et mathématiques appliquées."
  }
];

export const certifications = [
  {
    id: "ga-beginners",
    title: "Google Analytics for Beginners",
    officialTitle: "Google Analytics for Beginners - Certificate of Completion",
    issuer: "Google Analytics Academy",
    recipient: "daaji ayman",
    tag: "Analytics & Tracking",
    image: "/certificates/google-analytics-beginners.png",
    validity: "Valide jusqu'au 18 mars 2025",
    description: "Formation certifiante Google Analytics Academy sur la collecte de données, la création de vues et l'analyse de trafic web."
  },
  {
    id: "intro-data-studio",
    title: "Introduction to Data Studio",
    officialTitle: "Introduction to Data Studio - Certificate of Completion",
    issuer: "Google Analytics Academy",
    recipient: "daaji ayman",
    tag: "Visualisation & Reporting",
    image: "/certificates/intro-data-studio.png",
    validity: "Valide jusqu'au 16 mars 2025",
    description: "Conception de rapports dynamiques, connexion aux sources de données et création de tableaux de bord interactifs sur Looker Studio."
  },
  {
    id: "quality-agility",
    title: "Quality Work with Agility",
    officialTitle: "Delivering Quality Work with Agility",
    issuer: "IBM (offert via Coursera)",
    recipient: "Aymen Daaji",
    tag: "Agilité & Méthodes",
    image: "/certificates/quality-work-with-agility.png",
    issueDate: "6 août 2026",
    credentialId: "LC8RU4HXT2B2",
    verifyUrl: "https://coursera.org/verify/LC8RU4HXT2B2",
    description: "Certification IBM attestant des compétences en gestion agile de la qualité, amélioration continue et pilotage de livrables à haute valeur ajoutée."
  },
  {
    id: "marketing-digital",
    title: "Les principes fondamentaux du marketing numérique",
    officialTitle: "The Fundamentals of Digital Marketing",
    issuer: "Google Digital Garage",
    recipient: "Aymen Daaji",
    tag: "Marketing & Acquisition",
    image: "/certificates/digital-marketing-fundamentals.svg",
    validity: "Certificat Accrédité (26 modules / 40h)",
    description: "Maîtrise des canaux d'acquisition, du référencement, de la stratégie digitale et de l'analyse d'audience pour optimiser la présence en ligne."
  },
  {
    id: "ga-power-users",
    title: "Google Analytics for Power Users",
    officialTitle: "Google Analytics for Power Users - Certificate of Completion",
    issuer: "Google Analytics Academy",
    recipient: "daaji ayman",
    tag: "Analytics Avancé",
    image: "/certificates/google-analytics-power-users.png",
    validity: "Valide jusqu'au 21 décembre 2025",
    description: "Techniques avancées d'analyse de cohortes, tunnels de conversion, dimensions personnalisées et optimisation du ROI."
  },
  {
    id: "ga-advanced",
    title: "Advanced Google Analytics",
    officialTitle: "Advanced Google Analytics - Certificate of Completion",
    issuer: "Google Analytics Academy",
    recipient: "daaji ayman",
    tag: "Data Strategy & Tracking",
    image: "/certificates/advanced-google-analytics.png",
    validity: "Valide jusqu'au 29 décembre 2025",
    description: "Collecte avancée, segmentation stratégique, protocoles de mesure et configuration fine des indicateurs analytiques."
  }
];

export const languages = [
  { name: "Arabe", level: "Courant", percentage: 100, flag: "🇹🇳" },
  { name: "Français", level: "Avancé", percentage: 92, flag: "🇫🇷" },
  { name: "Anglais", level: "Intermédiaire", percentage: 75, flag: "🇬🇧" },
  { name: "Turc", level: "Débutant", percentage: 30, flag: "🇹🇷" }
];

export const volunteering = [
  {
    role: "Membre de departement marketing",
    organization: "Enactus ESEN",
    year: "2022",
    description: "Participation active aux campagnes de communication et de promotion des projets d'entrepreneuriat social."
  },
  {
    role: "Animateur d'emission Tecloud (sur page Facebook de club)",
    organization: "Team cloud ESCT",
    year: "2021",
    description: "Animation d'émissions en direct pour la sensibilisation et le partage de connaissances sur les technologies Cloud."
  },
  {
    role: "Sponsoring et logistique",
    organization: "Hult prize ESEN",
    year: "2020",
    description: "Coordination des partenariats et gestion opérationnelle des événements de la compétition d'impact social."
  },
  {
    role: "Membre organisateur",
    organization: "Indie Games Association Globale Game Jam 2020 (ISAMM)",
    year: "2020",
    description: "Organisation et accompagnement des participants lors de l'événement mondial de création de jeux vidéo."
  }
];
