import styles from "./Footer.module.scss";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <p className={styles.text}>© {year} Lucas Haladjian. All rights reserved.</p>
    </footer>
  );
}
