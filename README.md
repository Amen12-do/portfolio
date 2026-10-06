# Portfolio Professionnel — Aymen Daaji (React.js)

Portfolio moderne, interactif et responsive conçu pour **Aymen Daaji** (Data Analyst & Spécialiste Business Intelligence) basé fidèlement sur son curriculum vitae.

---

## 🚀 Fonctionnalités Clés

1. **En-tête & Navigation Fluide :**
   - Menu responsive avec tiroir mobile (*drawer*).
   - Bascule automatique & manuelle Thème Sombre (*Dark Mode*) / Thème Clair (*Light Mode*).
   - Accès rapide à la consultation & impression du CV en format PDF.

2. **Section Hero :**
   - Présentation de la double compétence : **Data Analysis & BI** + **Développement Web & Backend**.
   - Badges de contact interactifs (copie d'email en un clic, appel téléphonique direct, lien LinkedIn).
   - Indicateurs d'impact chiffrés :
     - **-40%** de temps de traitement ETL (Medianet)
     - **20+** KPIs financiers et prévisionnels pilotés (BTE)
     - **Mastère Pro** Contrôle de Gestion & Business Intelligence (ESEN / ISCAE)

3. **Section "À propos" & Double Compétence :**
   - Mise en avant du profil hybride finance/gestion & développement informatique.
   - Les 4 piliers d'expertise : Business Intelligence, Flux ETL, Contrôle de Gestion & Développement d'APIs.

4. **Laboratoire Décisionnel & Showcase BI Interactif :**
   - **Démo Pilotage Financier (BTE) :** bascule des périodes (T1, T2, T3, Cumul), KPIs dynamiques, mesures DAX et graphique comparatif Réalisé vs Prévisionnel.
   - **Démo Optimisation ETL (Medianet) :** simulation interactive de la réduction de 40% du temps d'exécution (55 min vs 33 min) avec schéma d'architecture des flux.
   - **Démo Connecteur Redmine :** suivi de la volumétrie des tickets, taux de résolution et indicateurs MTTR.

5. **Expériences Professionnelles (Timeline Interactive) :**
   - **Medianet** (Fév 2025 – Juin 2025) : Stagiaire BI & Backend (ETL, API REST, -40% temps de traitement).
   - **Banque de Tunisie et des Emirats - BTE** (Juil 2024 – Sept 2024) : Stagiaire Contrôle de Gestion (20+ KPIs, rapports financiers, analyse des écarts).
   - **SADIM industrielle** (Mars 2023 – Juin 2023) : Stagiaire Développement Web (Plateforme e-commerce React.js/Node.js, catalogue, identité visuelle).

6. **Projets & Études de Cas (avec fenêtres modales détaillées) :**
   - Filtrage par catégorie : *Tous*, *Business Intelligence & ETL*, *Développement Web*.
   - **Connecteur REDMINE multi-canaux & BI** (Flask, Python, MySQL, SSMS, Power BI).
   - **Dashboard BI Finance** (Power BI, Power Query, DAX, MySQL, SSMS).
   - **Digitalisation des ventes SADIM - PFE** (React.js, Node.js, Express.js, GitHub, Illustrator).
   - **Plateforme de Quiz & Tests** (PHP, MySQL, HTML/CSS).
   - Modale d'architecture technique détaillant la démarche et la valeur métier de chaque projet.

7. **Compétences & Stack :**
   - Jauges de maîtrise pour la BI (Power BI, SSIS, SQL Server, MySQL, PL/SQL, Excel).
   - Développement (Python, Flask, React.js, Node.js, Express, JavaScript).
   - Méthodologies (Agile/Scrum, GIMSI, Modélisation dimensionnelle).
   - Outils & Design (GitHub, SSMS, SSMA, Android Studio, Illustrator, Photoshop).

8. **Formation, Certifications & Langues :**
   - Mastère Pro Contrôle de Gestion & BI (ESEN & ISCAE Manouba).
   - Licence Business Computing (ESEN).
   - Baccalauréat Économie & Gestion.
   - Certifications Google Analytics, Looker Studio, Agilité et Marketing Numérique.
   - Jauges de langues : Arabe (Courant), Français (Avancé), Anglais (Intermédiaire), Turc (Débutant).

9. **Bénévolat & Vie Associative :**
   - Enactus ESEN, Team Cloud ESCT, Hult Prize ESEN, Global Game Jam 2020.

10. **Module de Contact & CV Imprimable :**
    - Coordonnées directes cliquables avec retour visuel de copie dans le presse-papiers.
    - Formulaire de message interactif.
    - **Visualiseur de CV complet avec mode impression haute fidélité** (`@media print` optimisé pour enregistrement direct en PDF).

---

## 🛠️ Stack Technique

- **Framework :** React 19 + Vite 8
- **Icônes :** Lucide React + Icônes SVG personnalisées
- **Styles :** CSS3 Moderne (Custom Properties, Glassmorphism, Flexbox, CSS Grid, Media Queries d'impression)
- **Typographie :** Google Fonts (Plus Jakarta Sans & JetBrains Mono)

---

## 💻 Démarrage Rapide

Dans le répertoire `c:\redmine\portfelio` :

### Lancer le serveur de développement :
```powershell
npm run dev
```

### Compiler pour la production :
```powershell
npm run build
```

### Prévisualiser la version de production :
```powershell
npm run preview
```
Le serveur local est accessible sur `http://localhost:4173/`.

---

## 📁 Structure du Projet

```text
portfelio/
├── index.html              # Fichier HTML principal avec métadonnées SEO & OpenGraph
├── package.json            # Dépendances et scripts
├── src/
│   ├── main.jsx            # Point d'entrée React
│   ├── App.jsx             # Composant racine orchestrant les sections
│   ├── App.css             # Feuilles de styles de l'ensemble des composants
│   ├── index.css           # Système de design, variables CSS (thèmes clair/sombre)
│   ├── data/
│   │   └── cvData.js       # Données structurées extraites du CV d'Aymen Daaji
│   └── components/
│       ├── Navbar.jsx          # Barre de navigation responsive & commutateur de thème
│       ├── Hero.jsx            # En-tête percutant avec métriques et contacts
│       ├── About.jsx           # Présentation de la double compétence Data + Dev
│       ├── BiShowcase.jsx      # Laboratoire BI interactif (KPIs, ETL -40%, Redmine)
│       ├── Experience.jsx      # Frise chronologique des expériences professionnelles
│       ├── Projects.jsx        # Galerie des projets avec filtres et modales
│       ├── ProjectModal.jsx    # Fiche d'architecture détaillée par projet
│       ├── Skills.jsx          # Compétences classées avec jauges d'expertise
│       ├── EducationCertifs.jsx# Diplômes, certifications Google et langues
│       ├── Volunteering.jsx    # Engagements associatifs
│       ├── Contact.jsx         # Coordonnées et formulaire de prise de contact
│       ├── ResumeModal.jsx     # Fiche CV imprimable conforme au CV original
│       ├── Footer.jsx          # Pied de page avec liens rapides et retour haut
│       └── Icons.jsx           # Composants SVG vectoriels
```
