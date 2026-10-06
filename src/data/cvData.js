export const personalInfo = {
  name: "Aymen Daaji",
  title: "Data Analyst & Ingénieur Business Intelligence",
  subtitle: "Double compétence : Analyse de données & Développement Web / Backend",
  email: "aymandaaji@gmail.com",
  phones: ["+216 92 730 383", "+216 50 346 890"],
  location: "Ariana, Tunisie",
  linkedin: "https://linkedin.com/in/ayman-daaji",
  linkedinUsername: "ayman-daaji",
  summary:
    "Diplômé d'un Mastère en Contrôle de Gestion et Business Intelligence avec une double compétence en analyse de données et développement. Expérience confirmée en conception de solutions BI, mise en place de flux ETL et reporting financier. Capable de transformer des données complexes en insights actionnables pour optimiser la prise de décision stratégique.",
  stats: [
    { label: "Réduction temps ETL", value: "-40%", desc: "Optimisation de pipelines de données chez Medianet" },
    { label: "KPIs Financiers & Stratégiques", value: "20+", desc: "Pilotage mensuel et trimestriel à la BTE" },
    { label: "Projets BI & Développement", value: "6+", desc: "Solutions d'intégration de données & applications web" },
    { label: "Diplôme Spécialisé", value: "Bac+5", desc: "Mastère Pro Contrôle de Gestion & Business Intelligence" }
  ]
};

export const experiences = [
  {
    id: "medianet",
    role: "Stagiaire BI & Développement Backend",
    company: "Medianet",
    period: "Février 2025 – Juin 2025",
    type: "Stage de fin d'études / Spécialisation",
    badge: "Business Intelligence & Backend",
    description:
      "Conception et intégration d'une infrastructure décisionnelle complète couplée à des services backend pour automatiser la chaîne de valeur de la donnée.",
    achievements: [
      "Intégration d’une solution BI de bout en bout pour le suivi et l’analyse des indicateurs clés d'activité.",
      "Développement backend et intégration d'API REST pour la collecte automatisée et fiabilisée des flux de données.",
      "Conception et mise en place de flux ETL optimisés, réduisant le temps de traitement des données de 40%."
    ],
    technologies: ["Python", "API REST", "ETL", "SQL", "Business Intelligence", "Automatisation", "Optimisation flux"]
  },
  {
    id: "bte",
    role: "Stagiaire Contrôle de Gestion",
    company: "Banque de Tunisie et des Emirats (BTE)",
    period: "Juillet 2024 – Septembre 2024",
    type: "Stage Professionnel",
    badge: "Finance & Performance",
    description:
      "Pilotage de la performance bancaire à travers la mise en place de tableaux de bord financiers et l'analyse prévisionnelle des écarts.",
    achievements: [
      "Élaboration et suivi rigoureux de 20+ KPIs mensuels et trimestriels pour le pilotage de la performance opérationnelle et financière.",
      "Production de rapports financiers exhaustifs et de projections prévisionnelles à destination des décideurs.",
      "Analyse fine des écarts budgétaires mensuels et formulation de recommandations stratégiques pour l'optimisation des coûts."
    ],
    technologies: ["KPIs Financiers", "Contrôle de Gestion", "Reporting Prévisionnel", "Modélisation Financière", "Excel Avancé", "Analyse Budgétaire"]
  },
  {
    id: "sadim-stage",
    role: "Stagiaire Développement Web",
    company: "SADIM industrielle",
    period: "Mars 2023 – Juin 2023",
    type: "Stage Développement",
    badge: "Web & E-Commerce",
    description:
      "Modernisation de la présence digitale et digitalisation des canaux de vente pour un fabricant et distributeur de machines industrielles.",
    achievements: [
      "Conception et développement complet d'une plateforme e-commerce dédiée à la commercialisation de machines industrielles (React.js, Node.js).",
      "Élaboration d'un plan marketing digital et refonte intégrale de l'identité visuelle de l'entreprise.",
      "Mise en place d'un système de gestion de catalogue produits avec interface d'administration sécurisée et réactive."
    ],
    technologies: ["React.js", "Node.js", "Express.js", "E-commerce", "Catalogue Management", "UI/UX", "Marketing Digital"]
  }
];

export const projects = [
  {
    id: "redmine-bi",
    title: "Connecteur REDMINE Multi-Canaux & Solution BI",
    date: "Juin 2025",
    category: "bi",
    categoryLabel: "Business Intelligence & ETL",
    highlight: "Projet Phare 2025",
    summary:
      "Architecture d'extraction, transformation et chargement (ETL) connectant Redmine à une solution décisionnelle Power BI via une API Flask personnalisée.",
    details: [
      "Création d'un connecteur d’extraction principal haute performance développé avec Flask (Python).",
      "Développement d’un connecteur ETL personnalisé assurant l'extraction, la transformation et le chargement régulier des données Redmine.",
      "Conception d’un modèle de données dimensionnel optimisé pour les requêtes analytiques à fort volume.",
      "Mise en place d’un schéma optimisé pour les opérations de jointure avec les référentiels de données Redmine.",
      "Création de tableaux de bord Power BI dynamiques pour l'analyse des KPI’s de productivité et de gestion de tickets."
    ],
    technologies: ["Python", "Flask", "MySQL", "SSMS", "SSMA", "Power BI", "ETL"],
    impact: "Centralisation des flux de données de projets et automatisation intégrale du reporting décisionnel."
  },
  {
    id: "bi-finance",
    title: "Dashboard BI & Pilotage Financier",
    date: "Octobre 2024",
    category: "bi",
    categoryLabel: "Business Intelligence & Finance",
    highlight: "Décisionnel Financier",
    summary:
      "Conception d'un tableau de bord interactif de reporting financier pour le suivi en temps réel des marges, coûts et équilibres budgétaires.",
    details: [
      "Conception et architecture d’un tableau de bord interactif avec Power BI et Power Query.",
      "Modélisation de données financières avec création de mesures DAX complexes (marges, variances, taux de réalisation).",
      "Mise en place d’indicateurs financiers de synthèse et de visualisations analytiques pour faciliter la prise de décision rapide."
    ],
    technologies: ["Power BI", "Power Query", "DAX", "MySQL", "SSMS", "Analyse Financière"],
    impact: "Visibilité 360° sur la santé financière et identification immédiate des écarts par rapport aux prévisions."
  },
  {
    id: "sadim-pfe",
    title: "Digitalisation des Ventes SADIM (Projet de Fin d'Études)",
    date: "Juin 2023",
    category: "dev",
    categoryLabel: "Full-Stack & E-commerce",
    highlight: "PFE Licence",
    summary:
      "Projet de fin d'études axé sur la transformation digitale de SADIM Industrielle : plateforme web, refonte de marque et stratégie marketing.",
    details: [
      "Création et déploiement d'une application web complète pour la présentation et vente d'équipements industriels.",
      "Développement du frontend interactif en React.js et des services backend avec Node.js & Express.js.",
      "Conception et mise en œuvre d'un plan marketing digital complet pour accroître la notoriété de la marque.",
      "Renouvellement complet de la charte graphique et du logo de l'entreprise sur Adobe Illustrator."
    ],
    technologies: ["React.js", "Node.js", "Express.js", "GitHub", "Adobe Illustrator", "CSS3"],
    impact: "Augmentation de la portée commerciale et structuration numérique du catalogue de machines industrielles."
  },
  {
    id: "quiz-platform",
    title: "Plateforme Web Interactive de Quiz & Tests",
    date: "Mai 2022",
    category: "dev",
    categoryLabel: "Développement Web",
    highlight: "Projet Académique",
    summary:
      "Plateforme web interactive permettant la passation, le chronométrage et l'évaluation instantanée de questionnaires à choix multiples.",
    details: [
      "Développement d'une interface utilisateur dynamique pour les tests interactifs sous forme de quiz chronométrés.",
      "Mise en œuvre du stockage relationnel des questions, catégories et scores des utilisateurs dans une base MySQL.",
      "Traitement backend des réponses en temps réel avec calcul instantané des pourcentages de réussite."
    ],
    technologies: ["PHP", "HTML5", "CSS3", "JavaScript", "MySQL"],
    impact: "Outil pédagogique intuitif déployé avec gestion centralisée des banques de questions."
  }
];

export const skillsData = {
  biData: [
    { name: "Power BI (Modélisation, DAX, KPIs)", level: 92, category: "Reporting & Visualisation" },
    { name: "Flux ETL (SSIS, Power Query, Dataflows)", level: 88, category: "ETL & Pipeline" },
    { name: "Bases de données SQL Server (SSMS, SSMA)", level: 86, category: "Bases de données" },
    { name: "MySQL / MySQL Workbench", level: 85, category: "Bases de données" },
    { name: "PL/SQL & Requêtes avancées", level: 80, category: "Bases de données" },
    { name: "Excel Avancé & Tableaux Croisés Dynamiques", level: 90, category: "Reporting Financier" }
  ],
  dev: [
    { name: "Python (Pandas, NumPy, scripts)", level: 88, category: "Data Science & Scripting" },
    { name: "Python Flask (API REST, Connecteurs ETL)", level: 84, category: "Backend" },
    { name: "JavaScript (ES6+) / HTML5 / CSS3", level: 86, category: "Frontend" },
    { name: "React.js", level: 82, category: "Frontend" },
    { name: "Node.js & Express.js", level: 80, category: "Backend" },
    { name: "PHP", level: 72, category: "Web" }
  ],
  methodologies: [
    { name: "Méthodologie Agile (Scrum)", level: 88, desc: "Sprints, rétrospectives, pilotage de backlog" },
    { name: "Méthodologie GIMSI", level: 85, desc: "Conception et déploiement de systèmes décisionnels" },
    { name: "Analyse & Modélisation des données", level: 90, desc: "Schémas en étoile/flocon, modélisation relationnelle" },
    { name: "Automatisation & Optimisation des processus", level: 87, desc: "Réduction des temps de traitement, gains d'efficience" }
  ],
  tools: [
    { name: "GitHub & Git", desc: "Gestion de version et collaboration d'équipe" },
    { name: "SQL Server Management Studio (SSMS)", desc: "Administration et requêtage SQL Server" },
    { name: "SSMA (SQL Server Migration Assistant)", desc: "Migration et conversion de bases de données" },
    { name: "Android Studio", desc: "Environnement d'émulation et développement mobile" },
    { name: "Adobe Illustrator", desc: "Création graphique vectorielle et chartes d'identité" },
    { name: "Photoshop", desc: "Traitement d'images et maquettage visuel" }
  ]
};

export const education = [
  {
    degree: "Mastère professionnel en Contrôle de Gestion et Business Intelligence",
    institution: "ESEN et ISCAE Manouba",
    period: "2023 – 2025",
    description:
      "Formation d'excellence alliant gouvernance financière, contrôle de gestion stratégique et technologies décisionnelles avancées (Business Intelligence, modélisation de données, pilotage de la performance)."
  },
  {
    degree: "Licence en Business Computing",
    institution: "École Supérieure d'Économie Numérique (ESEN)",
    period: "2019 – 2023",
    description:
      "Cursus combinant informatique appliquée, développement web/logiciel, bases de données relationnelles et systèmes d'information d'entreprise."
  },
  {
    degree: "Baccalauréat (Économie et Gestion)",
    institution: "Lycée privé Asdrubal Bardo",
    period: "2019",
    description: "Fondations en macroéconomie, gestion comptable, mathématiques appliquées et droit des affaires."
  }
];

export const certifications = [
  {
    title: "Google Analytics for Beginners",
    issuer: "Google",
    tag: "Analytics & Tracking",
    description: "Fondamentaux de la collecte, de la segmentation d'audience et de l'analyse du trafic web."
  },
  {
    title: "Advanced Google Analytics",
    issuer: "Google",
    tag: "Data Strategy",
    description: "Configuration avancée de dimensions/métriques personnalisées et suivi d'événements."
  },
  {
    title: "Google Analytics for Power Users",
    issuer: "Google",
    tag: "Performance Analysis",
    description: "Analyse approfondie de tunnels de conversion et rapports personnalisés à forte valeur ajoutée."
  },
  {
    title: "Introduction to Data Studio (Looker Studio)",
    issuer: "Google",
    tag: "Visualisation",
    description: "Création de tableaux de bord interactifs et connexion à des sources de données multiples."
  },
  {
    title: "Les principes fondamentaux du marketing numérique",
    issuer: "Google Digital Garage",
    tag: "Digital Marketing",
    description: "Stratégie d'acquisition digitale, référencement naturel et pilotage de campagnes."
  },
  {
    title: "Quality Work with Agility",
    issuer: "Certification Agile",
    tag: "Agilité & Processus",
    description: "Bonnes pratiques de travail itératif, amélioration continue et livraison de valeur orientée client."
  }
];

export const languages = [
  { name: "Arabe", level: "Courant / Maternelle", percentage: 100, flag: "🇹🇳" },
  { name: "Français", level: "Avancé / Professionnel bilingue", percentage: 95, flag: "🇫🇷" },
  { name: "Anglais", level: "Intermédiaire / Professionnel", percentage: 75, flag: "🇬🇧" },
  { name: "Turc", level: "Débutant", percentage: 30, flag: "🇹🇷" }
];

export const volunteering = [
  {
    role: "Membre du département marketing",
    organization: "Enactus ESEN",
    year: "2022",
    description: "Élaboration des plans de communication et promotion d'initiatives d'entrepreneuriat social universitaire."
  },
  {
    role: "Animateur d'émission Tecloud",
    organization: "Team cloud ESCT",
    year: "2021",
    description: "Animation d'émissions tech diffusées en direct sur la page Facebook du club pour vulgariser les technologies Cloud."
  },
  {
    role: "Responsable sponsoring et logistique",
    organization: "Hult Prize ESEN",
    year: "2020",
    description: "Prospection de partenaires financiers, coordination logistique et gestion des intervenants de l'événement."
  },
  {
    role: "Membre organisateur",
    organization: "Indie Games Association - Global Game Jam 2020 (ISAMM)",
    year: "2020",
    description: "Accueil des équipes de créateurs de jeux, modération d'ateliers et coordination opérationnelle du hackathon."
  }
];

