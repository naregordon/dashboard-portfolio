"use client";

import { useContent } from "@/context/LocaleContext";
import styles from "./AboutPage.module.scss";

export default function AboutPage() {
  const content = useContent();

  const firstYear = Math.min(...content.experiences.map((e) => e.start));
  const years = `${new Date().getFullYear() - firstYear}+`;

  const paragraphs = content.about.split("\n\n");

  return (
    <div className={styles.page}>
      <div className={styles.bio}>
        {paragraphs.map((p, i) => (
          <p key={i} className={styles.paragraph}>
            {p}
          </p>
        ))}
      </div>
      <div className={styles.stats}>
        <div className={styles.stat}>
          <span className={styles.value}>{years}</span>
          <span className={styles.label}>{content.stats.yearsLabel}</span>
        </div>
        <div className={styles.divider} />
        <div className={styles.stat}>
          <span className={styles.value}>{content.stats.projects}</span>
          <span className={styles.label}>{content.stats.projectsLabel}</span>
        </div>
      </div>
    </div>
  );
}
