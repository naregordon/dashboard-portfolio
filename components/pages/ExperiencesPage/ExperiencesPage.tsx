"use client";

import { useEffect, useState } from "react";
import { useContent } from "@/context/LocaleContext";
import type { Experience } from "@/content/types";
import styles from "./ExperiencesPage.module.scss";

function endLabel(exp: Experience, present: string): string | number {
  return exp.end === null ? present : exp.end;
}

export default function ExperiencesPage({ isOpen = false }: { isOpen?: boolean }) {
  const content = useContent();
  const sorted = [...content.experiences].sort((a, b) => b.start - a.start);
  const [animKey, setAnimKey] = useState(0);

  useEffect(() => {
    if (isOpen) setAnimKey((k) => k + 1);
  }, [isOpen]);

  return (
    <div key={animKey} className={styles.page}>
      <div className={styles.timeline}>
        {sorted.map((exp, i) => (
          <div
            key={exp.company}
            className={`${styles.item} ${i % 2 === 0 ? styles.itemOdd : styles.itemEven}`}
          >
            <div className={styles.dateSide}>
              <span className={styles.dateBadge} style={{ color: exp.color, borderColor: exp.color }}>
                {exp.start}&thinsp;–&thinsp;{endLabel(exp, content.ui.present)}
              </span>
            </div>
            <div className={styles.center}>
              <div className={styles.dot} style={{ backgroundColor: exp.color }} />
            </div>
            <div className={styles.cardSide}>
              <div
                className={styles.card}
                style={{ borderTopColor: exp.color } as React.CSSProperties}
              >
                <p className={styles.role}>{exp.role}</p>
                <p className={styles.company} style={{ color: exp.color }}>{exp.company}</p>
                <p className={styles.description}>{exp.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
