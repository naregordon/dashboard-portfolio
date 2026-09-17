"use client";

import { memo } from "react";
import Widget from "@/components/ui/Widget/Widget";
import { useContent } from "@/context/LocaleContext";
import styles from "./NowWidget.module.scss";

interface Props {
  displayed?: boolean;
}

function NowWidget({ displayed: _displayed }: Props) {
  const content = useContent();
  return (
    <Widget title={content.ui.widgets.now}>
      <div className={styles.body}>
        <p className={styles.text}>
          {content.now.before}
          <a
            href={content.now.link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            {content.now.link.label}
          </a>
          {content.now.after}
        </p>
        <div className={styles.tags}>
          {content.now.tags.map((tag) => (
            <span key={tag} className={styles.tag}>{tag}</span>
          ))}
        </div>
      </div>
    </Widget>
  );
}

export default memo(NowWidget);
