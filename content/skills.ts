import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiSass,
  SiHtml5,
  SiGit,
  SiGithub,
  SiFramer,
  SiNodedotjs,
  SiFigma,
  SiVercel,
} from "react-icons/si";
import {
  TbApi,
  TbRobot,
  TbSearch,
  TbAccessible,
  TbDevices,
  TbGauge,
  TbCode,
  TbFileText,
  TbBrandVscode,
  TbMail,
} from "react-icons/tb";
import type { Skill } from "./types";

export const skills: Skill[] = [
  // Front-end
  { icon: SiJavascript, label: "JavaScript", category: "frontend" },
  { icon: SiTypescript, label: "TypeScript", category: "frontend" },
  { icon: SiReact, label: "React", category: "frontend" },
  { icon: SiNextdotjs, label: "Next.js", category: "frontend" },
  { icon: SiHtml5, label: "HTML5", category: "frontend" },
  { icon: SiSass, label: "CSS3 / SCSS", category: "frontend" },
  // Back-end
  { icon: SiNodedotjs, label: "Node.js", category: "backend" },
  { icon: SiVercel, label: "Vercel", category: "backend" },
  // Tools
  { icon: SiGit, label: "Git", category: "tools" },
  { icon: TbRobot, label: "Claude Code", category: "tools" },
  { icon: SiFigma, label: "Figma", category: "tools" },
  { icon: TbMail, label: "Outlook 365", category: "tools" },
  // Practices
  { icon: TbSearch, label: "SEO", category: "practices" },
  { icon: TbAccessible, label: "Accessibility", category: "practices" },
  { icon: TbDevices, label: "Responsive Design", category: "practices" },
  { icon: TbGauge, label: "Web Performance", category: "practices" },
  { icon: TbCode, label: "Clean Code", category: "practices" },
];
