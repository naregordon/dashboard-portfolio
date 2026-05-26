"use client";

import Widget from "@/components/ui/Widget/Widget";
import { useContent } from "@/context/LocaleContext";
import styles from "./SocialWidget.module.scss";

interface Props {
  displayed?: boolean;
}

export default function SocialWidget({ displayed: _displayed }: Props) {
  const content = useContent();
  return (
    <Widget>
      <div className={styles.list}>
        {content.socials.map(({ icon: Icon, label, href, color, bg }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.icon}
            style={{ backgroundColor: bg }}
            aria-label={label}
          >
            <Icon style={{ color }} />
          </a>
        ))}
      </div>
    </Widget>
  );
}
