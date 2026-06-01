"use client";

import { useEffect, useState } from "react";
import { useContent } from "@/context/LocaleContext";
import type { SkillCategoryKey } from "@/content/types";
import styles from "./SkillsPage.module.scss";

const CATEGORY_ORDER: SkillCategoryKey[] = ["frontend", "backend", "tools", "practices"];

export default function SkillsPage({ isOpen = false }: { isOpen?: boolean }) {
  const { skills, skillCategoryTitles } = useContent();
  const [animKey, setAnimKey] = useState(0);

  useEffect(() => {
    if (isOpen) setAnimKey((k) => k + 1);
  }, [isOpen]);

  const grouped = CATEGORY_ORDER.map((key) => ({
    title: skillCategoryTitles[key],
    skills: skills.filter((s) => s.category === key),
  }));

  let itemIndex = 0;
  const groupedWithIndices = grouped.map((group, groupIndex) => ({
    ...group,
    groupIndex,
    skills: group.skills.map((skill) => ({ ...skill, index: itemIndex++ })),
  }));

  return (
    <div key={animKey} className={styles.page}>
      <div className={styles.table}>
        {groupedWithIndices.map(({ title, groupIndex, skills: groupSkills }) => (
          <div key={title} className={styles.column}>
            <h3
              className={styles.categoryTitle}
              style={{ "--group-i": groupIndex } as React.CSSProperties}
            >
              {title}
            </h3>
            <ul className={styles.skillList}>
              {groupSkills.map(({ label, icon: Icon, index }) => (
                <li
                  key={label}
                  className={styles.skillItem}
                  style={{ "--i": index } as React.CSSProperties}
                >
                  <Icon className={styles.skillIcon} aria-hidden="true" />
                  <span>{label}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
