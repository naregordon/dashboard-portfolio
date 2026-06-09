"use client";

import { memo } from "react";
import Widget from "@/components/ui/Widget/Widget";
import { MdOutlineFileDownload } from "react-icons/md";
import { useContent } from "@/context/LocaleContext";
import styles from "./ResumeWidget.module.scss";

interface Props {
  displayed?: boolean;
}

function ResumeWidget({ displayed }: Props) {
  const content = useContent();
  return (
    <Widget>
      <div className={`${styles.body} ${displayed ? styles.visible : ""}`}>
        <p className={styles.tagline}>{content.resume.tagline}</p>
        <a
          href="/assets/resume_lucas_haladjian.pdf"
          download="Resume_Lucas_Haladjian.pdf"
          className={styles.button}
        >
          <MdOutlineFileDownload className={styles.icon} aria-hidden="true" />
          {content.resume.downloadLabel}
        </a>
      </div>
    </Widget>
  );
}

export default memo(ResumeWidget);
