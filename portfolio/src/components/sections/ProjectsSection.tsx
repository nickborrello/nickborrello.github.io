import React from 'react';
import { projects } from '@/lib/projects-data';
import styles from './ProjectsSection.module.css';

const ProjectsSection: React.FC = () => {
  return (
    <section className={styles.section}>
      <h2>Projects as Quests</h2>
      <div className={styles.questLog}>
        {projects.map(project => (
          <div key={project.id} className={styles.questEntry}>
            <h3 className={styles.questTitle}>{project.questTitle}</h3>
            <p className={styles.description}>{project.description}</p>
            <p className={styles.status}>Status: <span className={project.status === 'Completed' ? styles.completed : styles.inProgress}>{project.status}</span></p>
            <p className={styles.technologies}>Technologies: {project.technologies.join(', ')}</p>
            <div className={styles.links}>
              {project.links.map(link => (
                <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer">{link.name}</a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;