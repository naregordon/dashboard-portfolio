import { IconType } from "react-icons";

export type Locale = "fr" | "en";

export type SkillCategoryKey = "frontend" | "backend" | "tools" | "practices";

export type Skill = {
  icon: IconType;
  label: string;
  category: SkillCategoryKey;
};

export type Experience = {
  role: string;
  company: string;
  start: number;
  end: number | null;
  color: string;
  description: string;
};

export type Social = {
  icon: IconType;
  label: string;
  href: string;
  color: string;
  bg: string;
};

export type SiteContent = {
  skills: Skill[];
  skillCategoryTitles: Record<SkillCategoryKey, string>;
  experiences: Experience[];
  socials: Social[];
  about: string;
  contact: {
    tagline: string;
    cta: string;
  };
  resume: {
    downloadLabel: string;
  };
  contactForm: {
    emailLabel: string;
    emailPlaceholder: string;
    whoLabel: string;
    whoPlaceholder: string;
    reasonLabel: string;
    reasonPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    generateBtn: string;
    generatingBtn: string;
    sendBtn: string;
    sendingBtn: string;
    successMsg: string;
    errorGeneral: string;
  };
  ui: {
    present: string;
    back: string;
    viewMore: string;
    close: string;
    widgets: {
      about: string;
      experience: string;
      skills: string;
      contact: string;
      resume: string;
      settings: string;
    };
    pages: {
      experiences: string;
      contact: string;
      skills: string;
    };
    settings: {
      lightMode: { label: string; sub: string };
      accessible: { label: string; sub: string };
      language: { label: string; sub: string };
    };
  };
};
