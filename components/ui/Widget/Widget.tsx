import styles from "./Widget.module.scss";

interface WidgetProps {
  title?: string;
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  ariaLabel?: string;
}

export default function Widget({ title, children, className, onClick, ariaLabel }: WidgetProps) {
  const Tag = onClick ? "button" : "article";
  return (
    <Tag
      className={`${styles.widget} ${onClick ? styles.clickable : ""} ${className ?? ""}`}
      {...(onClick ? { onClick, type: "button" as const, "aria-label": ariaLabel ?? title } : {})}
    >
      {title && <h2 className={styles.title}>{title}</h2>}
      <div className={styles.content}>{children}</div>
    </Tag>
  );
}
