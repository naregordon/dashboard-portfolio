"use client";

import Widget from "@/components/ui/Widget/Widget";
import { useContent } from "@/context/LocaleContext";
import styles from "./SkillsWidget.module.scss";

interface Props {
  displayed?: boolean;
  onNavigate?: (page: string) => void;
}

export default function SkillsWidget({ displayed: _displayed, onNavigate }: Props) {
  const content = useContent();
  const featured = content.skills.filter((s) => s.level !== undefined).slice(0, 8);

  return (
    <Widget
      title={content.ui.widgets.skills}
      onClick={onNavigate ? () => onNavigate("skills") : undefined}
    >
      <div className={styles.grid}>
        {featured.map(({ icon: Icon, label }) => (
          <div key={label} className={styles.pill}>
            <Icon className={styles.icon} aria-hidden />
            <span className={styles.label}>{label}</span>
          </div>
        ))}
      </div>
    </Widget>
  );
}
