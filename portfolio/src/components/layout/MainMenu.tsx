import styles from './MainMenu.module.css';

export default function MainMenu() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li><button className={styles.button}>Character</button></li>
        <li><button className={styles.button}>Projects</button></li>
        <li><button className={styles.button}>Contact</button></li>
      </ul>
    </nav>
  );
}