// Footer

import styles from "./index.module.css";

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <nav className={styles.nav}>
          <ul className={styles.items}>
            <li className={styles.item}>
              <a href="/news">ニュース</a>
            </li>
            <li className={styles.item}>
              <a href="/members">メンバー</a>
            </li>
            <li className={styles.item}>
              <a href="/contact">お問い合わせ</a>
            </li>
          </ul>
        </nav>
        <p className={styles.cr}>&copy; SIMPLE. All Right Reserved 2025. This is a dummy site.</p>
      </footer>
    </>
  );
}
