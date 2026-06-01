import { SiGithub, SiMalt } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa6";
import { skills } from "./skills";
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

  socials: [
    {
      icon: SiGithub,
      label: "GitHub",
      handle: "@naregordon",
      href: "https://github.com/naregordon",
      color: "#ffffff",
      bg: "#1a1a1a",
    },
    {
      icon: FaLinkedinIn,
      label: "LinkedIn",
      handle: "Lucas Haladjian",
      href: "https://linkedin.com/in/placeholder",
      color: "#ffffff",
      bg: "#0A66C2",
    },
    {
      icon: SiMalt,
      label: "Malt",
      handle: "@lucashaladjian1",
      href: "https://www.malt.fr/profile/lucashaladjian1",
      color: "#ffffff",
      bg: "#FC4F38",
    },
  ],

  availability: {
    open: true,
    label: "Disponible pour missions",
  },

  stats: {
    yearsLabel: "Ans d'expérience",
    projectsLabel: "Projets",
    projects: "15+",
  },

  tagline: "From pixel to production.",

  now: {
    text: "En freelance et en train de construire ce portfolio. À la recherche de projets front-end ambitieux — eCommerce, interfaces produit, ou tout autre défi stimulant.",
    tags: ["#Freelance", "#React", "#Next.js", "#SFCC"],
  },

  about:
    "Développeur front-end avec plus de 10 ans d'expérience, spécialisé dans le développement eCommerce sur Salesforce Commerce Cloud. J'ai contribué à des projets pour de grandes marques comme Dior, Royal Canin et Kenzo. Passionné par les interfaces performantes et accessibles, je suis aujourd'hui disponible en freelance pour de nouveaux défis.",

  contact: {
    tagline: "Une idée, une opportunité, une question ?",
    cta: "Contactez-moi",
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
    reasonLabel: "Pourquoi me contacter ?",
    reasonPlaceholder:
      "Opportunité de poste, collaboration, retour sur le portfolio...",
    messageLabel: "Message",
    messagePlaceholder:
      "Le message apparaîtra ici après génération. Vous pouvez aussi l'écrire directement.",
    generateBtn: "✦ Générer avec l'IA",
    generatingBtn: "Génération en cours...",
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
