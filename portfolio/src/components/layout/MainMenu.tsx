import React from 'react';
import styles from './MainMenu.module.css';
import { useBook } from '../../context/BookContext';
import CharacterSection from '../sections/CharacterSection';
import ProjectsSection from '../sections/ProjectsSection';

export default function MainMenu() {
  const { openBook } = useBook();

  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li><button className={styles.button} onClick={() => openBook(<CharacterSection />)}>Character</button></li>
        <li><button className={styles.button} onClick={() => openBook(<ProjectsSection />)}>Projects</button></li>
        <li><button className={styles.button}>Contact</button></li>
      </ul>
    </nav>
  );
}