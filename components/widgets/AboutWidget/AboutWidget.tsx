"use client";

import Widget from "@/components/ui/Widget/Widget";
import { useContent } from "@/context/LocaleContext";
import styles from "./AboutWidget.module.scss";

interface Props {
  displayed?: boolean;
  onNavigate?: (page: string) => void;
}

export default function AboutWidget({ displayed: _displayed, onNavigate }: Props) {
  const content = useContent();

  const firstYear = Math.min(...content.experiences.map((e) => e.start));
  const years = `${new Date().getFullYear() - firstYear}+`;

  return (
    <Widget
      title={content.ui.widgets.about}
      onClick={onNavigate ? () => onNavigate("about") : undefined}
    >
      <div className={styles.body}>
        <div className={styles.bio}>
          {content.aboutShort.split("\n\n").map((p, i) => (
            <p key={i}>{p}</p>
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
    </Widget>
  );
}
