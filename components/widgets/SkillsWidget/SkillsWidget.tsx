"use client";

import Widget from "@/components/ui/Widget/Widget";
import { useContent } from "@/context/LocaleContext";
import type { Skill } from "@/content/types";
import styles from "./SkillsWidget.module.scss";

function Strip({ skills }: { skills: Skill[] }) {
  const doubled = [...skills, ...skills];
  return (
    <div className={styles.strip}>
      <div className={styles.inner}>
        {doubled.map(({ icon: Icon, label }, i) => (
          <span key={`${label}-${i}`} className={styles.pill} aria-hidden={i >= skills.length}>
            <Icon className={styles.icon} />
            <span className={styles.label}>{label}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

interface Props {
  displayed?: boolean;
  onNavigate?: (page: string) => void;
}

export default function SkillsWidget({ displayed: _displayed, onNavigate }: Props) {
  const content = useContent();
  return (
    <Widget title={content.ui.widgets.skills}>
      <div className={styles.strips}>
        <Strip skills={content.skills} />
      </div>
      {onNavigate && (
        <button className={styles.moreButton} onClick={() => onNavigate("skills")}>
          {content.ui.viewMore}
        </button>
      )}
    </Widget>
  );
}
