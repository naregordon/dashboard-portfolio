"use client";

import Widget from "@/components/ui/Widget/Widget";
import { useContent } from "@/context/LocaleContext";
import styles from "./ExperienceWidget.module.scss";

interface Props {
  displayed?: boolean;
  onNavigate?: (page: string) => void;
}

export default function ExperienceWidget({ displayed, onNavigate }: Props) {
  const content = useContent();
  return (
    <Widget title={content.ui.widgets.experience}>
      <ol className={`${styles.timeline} ${displayed ? styles.displayed : ""}`}>
        {content.experiences.map((exp) => (
          <li key={`${exp.company}-${exp.start}`} className={styles.item}>
            <span className={styles.dot} />
            <div className={styles.content}>
              <p className={styles.role}>{exp.role}</p>
              <p className={styles.meta}>
                {exp.company}{" "}
                <span className={styles.period}>
                  · {exp.start} – {exp.end ?? content.ui.present}
                </span>
              </p>
            </div>
          </li>
        ))}
      </ol>
      {onNavigate && (
        <button className={styles.moreButton} onClick={() => onNavigate("experiences")}>
          {content.ui.viewMore}
        </button>
      )}
    </Widget>
  );
}
