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
  { icon: SiJavascript, label: "JavaScript",  category: "frontend", level: 92 },
  { icon: SiTypescript, label: "TypeScript",  category: "frontend", level: 85 },
  { icon: SiReact,      label: "React",       category: "frontend", level: 90 },
  { icon: SiNextdotjs,  label: "Next.js",     category: "frontend", level: 80 },
  { icon: SiHtml5,      label: "HTML5",       category: "frontend", level: 95 },
  { icon: SiSass,       label: "CSS3 / SCSS", category: "frontend", level: 90 },
  // Back-end
  { icon: SiNodedotjs, label: "Node.js", category: "backend", level: 65 },
  { icon: SiVercel,    label: "Vercel",  category: "backend", level: 75 },
  // Tools
  { icon: SiGit,   label: "Git",        category: "tools", level: 82 },
  { icon: TbRobot, label: "Claude Code", category: "tools" },
  { icon: SiFigma, label: "Figma",      category: "tools", level: 70 },
  { icon: TbMail,  label: "Outlook 365", category: "tools" },
  // Practices
  { icon: TbSearch,     label: "SEO",              category: "practices" },
  { icon: TbAccessible, label: "Accessibility",    category: "practices" },
  { icon: TbDevices,    label: "Responsive Design", category: "practices" },
  { icon: TbGauge,      label: "Web Performance",  category: "practices" },
  { icon: TbCode,       label: "Clean Code",       category: "practices" },
];
