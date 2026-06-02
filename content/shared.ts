import { SiGithub, SiMalt } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa6";
import type { Social } from "./types";

export const tagline = "From pixel to production.";
export const availabilityOpen = true;
export const statsProjects = "15+";
export const nowTags = ["#React", "#Next.js", "#ClaudeCode"];

export const socials: Social[] = [
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
    href: "https://www.linkedin.com/in/lucashaladjian/",
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
];
