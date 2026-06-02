import { skills } from "./skills";
import { tagline, socials, nowTags, statsProjects, availabilityOpen } from "./shared";
import type { SiteContent } from "./types";

export const en: SiteContent = {
  experiences: [
    {
      role: "Lead Front-end Developer",
      company: "LVMH Beauty Tech",
      start: 2022,
      end: 2026,
      color: "#b8941f",
      description:
        "Lead front-end developer on the Dior Perfumes & Cosmetics eCommerce website. Full redesign and new front-end architecture built on Salesforce Commerce Cloud (SFRA). Stack: SFCC, Vanilla JS, jQuery, SCSS.",
    },
    {
      role: "Front-end Developer",
      company: "Razorfish",
      start: 2020,
      end: 2022,
      color: "#1e3a5f",
      description:
        "Built headless web interfaces from scratch using Vue.js/Nuxt.js, TypeScript, and SASS, integrated with headless CMS platforms.",
    },
    {
      role: "Lead Front-end Developer",
      company: "Publicis Sapient",
      start: 2018,
      end: 2020,
      color: "#0078d4",
      description:
        "Lead front-end developer on the new Royal Canin eCommerce site built on SFCC (SFRA). Managed the front-end team based in India.",
    },
    {
      role: "Front-end Developer",
      company: "Itelios",
      start: 2016,
      end: 2018,
      color: "#2d6a9f",
      description:
        "Development and integration of eCommerce websites on Salesforce Commerce Cloud (SFRA). Full redesign of the Kenzo website.",
    },
    {
      role: "Front-end Developer",
      company: "Isobar",
      start: 2016,
      end: 2016,
      color: "#e84545",
      description:
        "Built an internal dashboard application for management. Stack: React.js, SCSS. (Melbourne, Australia)",
    },
    {
      role: "Front-end Developer",
      company: "Optus",
      start: 2016,
      end: 2016,
      color: "#00a8e0",
      description:
        "Built a tablet web application for point-of-sale use, allowing customers to compare phone models. Stack: AngularJS, SCSS. (Sydney, Australia)",
    },
    {
      role: "Web Developer",
      company: "Open Colleges",
      start: 2015,
      end: 2015,
      color: "#5c9e6b",
      description:
        "Redesigned and developed new features for an online learning platform. Stack: AngularJS, jQuery, SCSS, Bootstrap. (Sydney, Australia)",
    },
  ],

  skills,

  skillCategoryTitles: {
    frontend: "Front-end",
    backend: "Back-end",
    tools: "Tools",
    practices: "Best Practices",
  },

  socials,

  availability: {
    open: availabilityOpen,
    label: "Available for projects",
  },

  stats: {
    yearsLabel: "Years of experience",
    projectsLabel: "Projects",
    projects: statsProjects,
  },

  tagline,

  now: {
    text: "Freelancing and building this portfolio. Looking for exciting front-end projects — eCommerce, product interfaces, or anything ambitious.",
    tags: nowTags,
  },

  aboutShort:
    "Front-end Developer with 10+ years of experience building high-traffic eCommerce platforms and digital experiences. Specialized in Salesforce Commerce Cloud (SFCC), I focus on performance, accessibility, and maintainable code.\n\nPassionate about user experience, I enjoy collaborating with designers and product teams to create intuitive, scalable solutions. I leverage modern AI-powered development tools to improve productivity while maintaining high standards of code quality.",

  about:
    "Front-end Developer with over 10 years of experience building high-traffic digital experiences and large-scale eCommerce platforms. Specialized in Salesforce Commerce Cloud (SFCC), I focus on creating fast, accessible, and maintainable applications that deliver exceptional user experiences.\n\nI believe great products emerge from close collaboration between engineering, design, and product teams. Whether optimizing performance, improving accessibility, or refining user journeys, I enjoy finding practical solutions that balance technical quality with business objectives.\n\nMy development philosophy is centered around clean, reusable code and long-term maintainability. Today, I combine this experience with modern AI-powered development tools to work more efficiently and deliver high-quality solutions without compromising engineering standards.",

  contact: {
    tagline: "An idea, an opportunity, a question?",
    cta: "Write a message",
    introHeading: "Let's have a talk.",
    introText:
      "Have a project in mind, an opportunity to share, or just want to say hi? Fill in the form and I'll get back to you.",
  },

  resume: {
    tagline: "Want my resume?",
    downloadLabel: "Download Resume",
  },

  contactForm: {
    emailLabel: "Your email",
    emailPlaceholder: "you@example.com",
    whoLabel: "Who are you?",
    whoPlaceholder: "Developer, recruiter, collaborator...",
    messageLabel: "Your message",
    messagePlaceholder:
      "Write your message here, or briefly describe what you want to say and let AI polish it.",
    emailError: "Please enter a valid email address.",
    generateBtn: "✦ Polish with AI",
    generatingBtn: "Generating...",
    nextBtn: "Next →",
    sendBtn: "Send →",
    sendingBtn: "Sending...",
    successMsg: "✓ Message sent!",
    errorGeneral: "An error occurred",
  },

  ui: {
    present: "Present",
    back: "← Back",
    viewMore: "View more →",
    close: "Close",
    widgets: {
      about: "About",
      experience: "Experience",
      skills: "Stack",
      contact: "Contact",
      resume: "Resume",
      settings: "Settings",
      now: "Right now",
      social: "Links",
    },
    pages: {
      about: "About",
      experiences: "Experience",
      contact: "Contact",
      skills: "Skills",
    },
    settings: {
      lightMode: { label: "Light mode", sub: "Light theme" },
      accessible: { label: "Accessibility", sub: "Reduces animations" },
      language: { label: "Language", sub: "" },
    },
  },
};
