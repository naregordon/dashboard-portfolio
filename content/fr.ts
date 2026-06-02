import { skills } from "./skills";
import { tagline, socials, nowTags, statsProjects, availabilityOpen } from "./shared";
import type { SiteContent } from "./types";

export const fr: SiteContent = {
  experiences: [
    {
      role: "Lead Développeur Front",
      company: "LVMH Beauty Tech",
      start: 2022,
      end: 2026,
      color: "#b8941f",
      description:
        "Lead développeur front sur le site eCommerce Dior Parfums & Cosmétiques. Refonte totale du site et conception d'une nouvelle architecture front sur Salesforce Commerce Cloud (SFRA). Stack : SFCC, Vanilla JS, jQuery, SCSS.",
    },
    {
      role: "Développeur Front",
      company: "Razorfish",
      start: 2020,
      end: 2022,
      color: "#1e3a5f",
      description:
        "Développement from scratch d'interfaces web headless avec Vue.js/Nuxt.js, TypeScript et SASS. Intégration avec des CMS headless.",
    },
    {
      role: "Lead Développeur Front",
      company: "Publicis Sapient",
      start: 2018,
      end: 2020,
      color: "#0078d4",
      description:
        "Lead développeur front sur le nouveau site eCommerce Royal Canin sur SFCC (SFRA). Management de l'équipe front basée en Inde.",
    },
    {
      role: "Développeur Front",
      company: "Itelios",
      start: 2016,
      end: 2018,
      color: "#2d6a9f",
      description:
        "Développement et intégration de sites eCommerce sur Salesforce Commerce Cloud (SFRA). Refonte totale du site Kenzo.",
    },
    {
      role: "Développeur Front",
      company: "Isobar",
      start: 2016,
      end: 2016,
      color: "#e84545",
      description:
        "Création d'une application interne de type dashboard pour le management. Stack : React.js, SCSS. (Melbourne, Australie)",
    },
    {
      role: "Développeur Front",
      company: "Optus",
      start: 2016,
      end: 2016,
      color: "#00a8e0",
      description:
        "Création d'une application web pour tablettes utilisée en points de vente pour comparer les différents modèles de téléphone. Stack : AngularJS, SCSS. (Sydney, Australie)",
    },
    {
      role: "Développeur Web",
      company: "Open Colleges",
      start: 2015,
      end: 2015,
      color: "#5c9e6b",
      description:
        "Refonte du design et développement de nouvelles fonctionnalités pour une plateforme d'études en ligne. Stack : AngularJS, jQuery, SCSS, Bootstrap. (Sydney, Australie)",
    },
  ],

  skills,

  skillCategoryTitles: {
    frontend: "Front-end",
    backend: "Back-end",
    tools: "Outils",
    practices: "Bonnes pratiques",
  },

  socials,

  availability: {
    open: availabilityOpen,
    label: "Disponible pour missions",
  },

  stats: {
    yearsLabel: "Ans d'expérience",
    projectsLabel: "Projets",
    projects: statsProjects,
  },

  tagline,

  now: {
    text: "En train de construire ce portfolio. À la recherche de projets front-end ambitieux — eCommerce, applications web, ou tout autre défi stimulant.",
    tags: nowTags,
  },

  aboutShort:
    "Développeur front-end avec 10+ ans d'expérience sur des plateformes eCommerce à fort trafic. Spécialisé en Salesforce Commerce Cloud (SFCC), je me concentre sur la performance, l'accessibilité et la maintenabilité du code.\n\nPassionné par l'expérience utilisateur, j'apprécie collaborer avec les équipes design et produit pour créer des solutions intuitives et évolutives. J'utilise des outils de développement modernes assistés par IA pour améliorer ma productivité tout en maintenant des standards élevés de qualité.",

  about:
    "Développeur front-end avec plus de 10 ans d'expérience dans la création d'expériences digitales à fort trafic et de plateformes eCommerce à grande échelle. Spécialisé en Salesforce Commerce Cloud (SFCC), je me concentre sur la création d'applications rapides, accessibles et maintenables offrant une expérience utilisateur exceptionnelle.\n\nJe crois que les grands produits naissent d'une collaboration étroite entre les équipes engineering, design et produit. Que ce soit pour optimiser les performances, améliorer l'accessibilité ou affiner les parcours utilisateurs, j'aime trouver des solutions pragmatiques qui équilibrent qualité technique et objectifs métier.\n\nMa philosophie de développement est centrée sur un code propre, réutilisable et maintenable sur le long terme. Aujourd'hui, je combine cette expérience avec des outils de développement modernes assistés par IA pour travailler plus efficacement et livrer des solutions de haute qualité sans compromis sur les standards d'ingénierie.",

  contact: {
    tagline: "Une idée, une opportunité, une question ?",
    cta: "Contactez-moi",
    introHeading: "Parlons-en.",
    introText:
      "Un projet en tête, une opportunité à partager, ou juste envie de dire bonjour ? Remplissez le formulaire et je vous réponds.",
  },

  resume: {
    tagline: "Tu veux mon CV ?",
    downloadLabel: "Télécharger mon CV",
  },

  contactForm: {
    emailLabel: "Votre email",
    emailPlaceholder: "vous@example.com",
    whoLabel: "Qui êtes-vous ?",
    whoPlaceholder: "Développeur, recruteur, collaborateur...",
    messageLabel: "Votre message",
    messagePlaceholder:
      "Rédigez votre message ici, ou décrivez brièvement ce que vous souhaitez dire et laissez l'IA le mettre en forme.",
    emailError: "Veuillez entrer une adresse email valide.",
    generateBtn: "✦ Peaufiner avec l'IA",
    generatingBtn: "Génération en cours...",
    nextBtn: "Suivant →",
    sendBtn: "Envoyer →",
    sendingBtn: "Envoi en cours...",
    successMsg: "✓ Message envoyé !",
    errorGeneral: "Une erreur est survenue",
  },

  ui: {
    present: "Présent",
    back: "← Retour",
    viewMore: "Voir plus →",
    close: "Fermer",
    widgets: {
      about: "À propos",
      experience: "Expériences",
      skills: "Stack",
      contact: "Contact",
      resume: "CV",
      settings: "Settings",
      now: "En ce moment",
      social: "Links",
    },
    pages: {
      about: "À propos",
      experiences: "Expériences",
      contact: "Contact",
      skills: "Skills",
    },
    settings: {
      lightMode: { label: "Mode clair", sub: "Thème lumineux" },
      accessible: { label: "Accessibilité", sub: "Réduit les animations" },
      language: { label: "Langue", sub: "" },
    },
  },
};
