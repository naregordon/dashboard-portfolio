"use client";

import { MdMailOutline } from "react-icons/md";
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
    <Widget>
      <div className={`${styles.body} ${displayed ? styles.visible : ""}`}>
        <MdMailOutline className={styles.icon} aria-hidden="true" />
        <p className={styles.tagline}>{content.contact.tagline}</p>
        {onNavigate && (
          <button className={styles.button} onClick={() => onNavigate("contact")}>
            {content.contact.cta}
          </button>
        )}
      </div>
    </Widget>
  );
}
