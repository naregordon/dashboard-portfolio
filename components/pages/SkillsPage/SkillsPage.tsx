"use client";

import { useContent } from "@/context/LocaleContext";
import type { SkillCategoryKey } from "@/content/types";
import styles from "./SkillsPage.module.scss";

const CATEGORY_ORDER: SkillCategoryKey[] = ["frontend", "backend", "tools", "practices"];

export default function SkillsPage() {
  const { skills, skillCategoryTitles } = useContent();

  const grouped = CATEGORY_ORDER.map((key) => ({
    title: skillCategoryTitles[key],
    skills: skills.filter((s) => s.category === key),
  }));

  return (
    <div className={styles.page}>
      <div className={styles.table}>
        {grouped.map(({ title, skills }) => (
          <div key={title} className={styles.column}>
            <h3 className={styles.categoryTitle}>{title}</h3>
            <ul className={styles.skillList}>
              {skills.map(({ label, icon: Icon }) => (
                <li key={label} className={styles.skillItem}>
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
