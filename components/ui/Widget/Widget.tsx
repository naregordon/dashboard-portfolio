import styles from "./Widget.module.scss";

interface WidgetProps {
  title?: string;
  children?: React.ReactNode;
  className?: string;
}

export default function Widget({ title, children, className }: WidgetProps) {
  return (
    <article className={`${styles.widget} ${className ?? ""}`}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <div className={styles.content}>{children}</div>
    </article>
  );
}
