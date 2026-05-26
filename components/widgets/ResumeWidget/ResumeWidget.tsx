"use client";

import Widget from "@/components/ui/Widget/Widget";
import { MdOutlineFileDownload } from "react-icons/md";
import { useContent } from "@/context/LocaleContext";
import styles from "./ResumeWidget.module.scss";

interface Props {
  displayed?: boolean;
}

export default function ResumeWidget({ displayed }: Props) {
  const content = useContent();
  return (
    <Widget>
      <div className={`${styles.body} ${displayed ? styles.visible : ""}`}>
        <div className={styles.iconWrap}>
          <MdOutlineFileDownload className={styles.icon} aria-hidden="true" />
        </div>
        <p className={styles.label}>Lucas Haladjian</p>
        <p className={styles.sublabel}>Front-end Developer</p>
        <a
          href="/assets/resume_lucas_haladjian.pdf"
          download="Resume_Lucas_Haladjian.pdf"
          className={styles.button}
        >
          {content.resume.downloadLabel}
        </a>
      </div>
    </Widget>
  );
}
