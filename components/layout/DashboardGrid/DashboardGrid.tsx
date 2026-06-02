"use client";

import { useEffect, useState } from "react";
import AboutWidget from "@/components/widgets/AboutWidget/AboutWidget";
import SkillsWidget from "@/components/widgets/SkillsWidget/SkillsWidget";
import ExperienceWidget from "@/components/widgets/ExperienceWidget/ExperienceWidget";
import ResumeWidget from "@/components/widgets/ResumeWidget/ResumeWidget";
import ContactWidget from "@/components/widgets/ContactWidget/ContactWidget";
import SocialWidget from "@/components/widgets/SocialWidget/SocialWidget";
import SettingsWidget from "@/components/widgets/SettingsWidget/SettingsWidget";
import NowWidget from "@/components/widgets/NowWidget/NowWidget";
import { useContent } from "@/context/LocaleContext";
import styles from "./DashboardGrid.module.scss";

interface Props {
  isPageOpen: boolean;
  onNavigate: (page: string) => void;
}

export default function DashboardGrid({ isPageOpen, onNavigate }: Props) {
  const content = useContent();
  const [hasScrolled, setHasScrolled] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [typingDone, setTypingDone] = useState(false);
  const [displayed, setDisplayed] = useState<boolean[]>(Array(8).fill(false));

  // Typewriter — starts after subtitle animation (~0.8s)
  useEffect(() => {
    const full = content.tagline;
    let i = 0;

    const start = setTimeout(() => {
      const interval = setInterval(() => {
        i++;
        setTypedText(full.slice(0, i));
        if (i >= full.length) {
          clearInterval(interval);
          setTypingDone(true);
        }
      }, 60);

      return () => clearInterval(interval);
    }, 0);

    return () => clearTimeout(start);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Block mobile scroll from the start, enable touch detection only after typing
  useEffect(() => {
    if (hasScrolled || !typingDone) return;

    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);

    const isMobile = window.innerWidth <= 900;

    if (isMobile) {
      const handleTouch = () => setHasScrolled(true);
      window.addEventListener("touchmove", handleTouch, {
        passive: true,
        once: true,
      });
      return () => window.removeEventListener("touchmove", handleTouch);
    }

    const handleScroll = () => {
      if (window.scrollY > 0) setHasScrolled(true);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasScrolled, typingDone]);

  // Block mobile scroll from mount (independently of typing)
  useEffect(() => {
    const isMobile = window.innerWidth <= 900;
    if (!isMobile) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  // Unlock scroll once all widgets have finished animating
  useEffect(() => {
    if (displayed.every(Boolean)) {
      document.body.style.overflow = "";
    }
  }, [displayed]);

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
    {
      area: "skills",
      node: (d: boolean) => (
        <SkillsWidget displayed={d} onNavigate={onNavigate} />
      ),
    },
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
    { area: "now", node: (d: boolean) => <NowWidget displayed={d} /> },
  ];

  return (
    <>
      <section
        className={`${styles.dashboard} ${hasScrolled ? styles.scrolled : ""} ${isPageOpen ? styles.pageOpen : ""}`}
        aria-label="Dashboard"
      >
        <div
          className={`${styles.scrollHint} ${hasScrolled || !typingDone ? styles.scrollHintHidden : ""}`}
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
              <div
                className={`${styles.availBadge} ${content.availability.open ? styles.availOpen : styles.availClosed}`}
              >
                <span className={styles.availDot} />
                {content.availability.label}
              </div>
            </div>
            <p
              className={`${styles.tagline} ${hasScrolled ? styles.taglineHidden : ""}`}
              aria-label={content.tagline}
            >
              {typedText}
              <span
                className={`${styles.cursor} ${typingDone ? styles.cursorDone : ""}`}
                aria-hidden
              />
            </p>
          </header>

          {widgets.map(({ area, node }, index) => (
            <div
              key={index}
              className={styles.gridItem}
              style={{ gridArea: area, transitionDelay: `${index * 0.1}s` }}
              onTransitionEnd={(e) =>
                handleTransitionEnd(index, e.propertyName)
              }
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
