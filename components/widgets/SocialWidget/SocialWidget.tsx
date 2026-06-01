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
      <ul className={styles.list}>
        {content.socials.map(
          ({ icon: Icon, label, handle, href, color, bg }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.row}
                aria-label={`${label} — ${handle}`}
              >
                <span
                  className={styles.iconWrap}
                  style={{ backgroundColor: bg }}
                >
                  <Icon style={{ color }} aria-hidden="true" />
                </span>
                <span className={styles.info}>
                  <span className={styles.network}>{label}</span>
                </span>
              </a>
            </li>
          ),
        )}
      </ul>
    </Widget>
  );
}
