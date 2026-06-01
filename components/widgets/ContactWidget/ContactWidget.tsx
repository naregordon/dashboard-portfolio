"use client";

import Widget from "@/components/ui/Widget/Widget";
import { useContent } from "@/context/LocaleContext";
import styles from "./ContactWidget.module.scss";

interface Props {
  displayed?: boolean;
  onNavigate?: (page: string) => void;
}

export default function ContactWidget({ displayed, onNavigate }: Props) {
  const content = useContent();
  return (
    <Widget
      ariaLabel={content.contact.cta}
      onClick={onNavigate ? () => onNavigate("contact") : undefined}
    >
      <div className={`${styles.body} ${displayed ? styles.visible : ""}`}>
        <p className={styles.tagline}>{content.contact.tagline}</p>
        <span className={styles.button}>{content.contact.cta}</span>
      </div>
    </Widget>
  );
}
