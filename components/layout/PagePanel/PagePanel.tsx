"use client";

import { useRouter } from "next/navigation";
import { useContent } from "@/context/LocaleContext";
import styles from "./PagePanel.module.scss";

interface Props {
  isOpen?: boolean;
  onBack?: () => void;
  children: React.ReactNode;
  page: "experiences" | "contact" | "skills";
}

export default function PagePanel({ isOpen = true, onBack, children, page }: Props) {
  const router = useRouter();
  const content = useContent();
  const handleBack = onBack ?? (() => router.push("/"));

  return (
    <div
      className={`${styles.panel} ${isOpen ? styles.open : ""}`}
      aria-hidden={!isOpen}
    >
      <button
        className={styles.backButton}
        onClick={handleBack}
        tabIndex={isOpen ? 0 : -1}
      >
        {content.ui.back}
      </button>
      <div className={styles.content}>
        <h1 className={styles.title}>{content.ui.pages[page]}</h1>
        {children}
      </div>
    </div>
  );
}
