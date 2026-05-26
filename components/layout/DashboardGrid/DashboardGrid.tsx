"use client";

import { useEffect, useState } from "react";
import AboutWidget from "@/components/widgets/AboutWidget/AboutWidget";
import SkillsWidget from "@/components/widgets/SkillsWidget/SkillsWidget";
import ExperienceWidget from "@/components/widgets/ExperienceWidget/ExperienceWidget";
import ResumeWidget from "@/components/widgets/ResumeWidget/ResumeWidget";
import ContactWidget from "@/components/widgets/ContactWidget/ContactWidget";
import SocialWidget from "@/components/widgets/SocialWidget/SocialWidget";
import SettingsWidget from "@/components/widgets/SettingsWidget/SettingsWidget";
import styles from "./DashboardGrid.module.scss";

interface Props {
  isPageOpen: boolean;
  onNavigate: (page: string) => void;
}

export default function DashboardGrid({ isPageOpen, onNavigate }: Props) {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [displayed, setDisplayed] = useState<boolean[]>([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  useEffect(() => {
    if (hasScrolled) return;

    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    window.scrollTo(0, 0);

    const handleScroll = () => {
      if (window.scrollY > 0) setHasScrolled(true);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasScrolled]);

  const handleTransitionEnd = (index: number, propertyName: string) => {
    if (propertyName !== "opacity") return;
    setDisplayed((prev) => {
      if (prev[index]) return prev;
      const next = [...prev];
      next[index] = true;
      return next;
    });
  };

  const widgets = [
    { area: "about", node: (d: boolean) => <AboutWidget displayed={d} /> },
    { area: "skills", node: (d: boolean) => <SkillsWidget displayed={d} onNavigate={onNavigate} /> },
    {
      area: "experience",
      node: (d: boolean) => (
        <ExperienceWidget displayed={d} onNavigate={onNavigate} />
      ),
    },
    { area: "cv", node: (d: boolean) => <ResumeWidget displayed={d} /> },
    {
      area: "contact",
      node: (d: boolean) => (
        <ContactWidget displayed={d} onNavigate={onNavigate} />
      ),
    },
    { area: "social", node: (d: boolean) => <SocialWidget displayed={d} /> },
    { area: "settings", node: () => <SettingsWidget /> },
  ];

  return (
    <>
    <section
      className={`${styles.dashboard} ${hasScrolled ? styles.scrolled : ""} ${isPageOpen ? styles.pageOpen : ""}`}
      aria-label="Dashboard"
    >
      <div
        className={`${styles.scrollHint} ${hasScrolled ? styles.scrollHintHidden : ""}`}
        aria-hidden
      >
        <div className={styles.scrollMouse}>
          <div className={styles.scrollDot} />
        </div>
        <span className={styles.scrollLabel}>Scroll</span>
      </div>
      <div className={styles.grid}>
        <header className={styles.header}>
          <div className={styles.headerContent}>
            <h1 className={styles.name}>
              LUCAS
              <br />
              HALADJIAN
            </h1>
            <p className={styles.subtitle}>Front-end Developer</p>
          </div>
        </header>
        {widgets.map(({ area, node }, index) => (
          <div
            key={index}
            className={styles.gridItem}
            style={{ gridArea: area, transitionDelay: `${index * 0.1}s` }}
            onTransitionEnd={(e) => handleTransitionEnd(index, e.propertyName)}
          >
            {node(displayed[index])}
          </div>
        ))}
      </div>
    </section>
    <div aria-hidden="true" style={{ height: 1 }} />
    </>
  );
}
