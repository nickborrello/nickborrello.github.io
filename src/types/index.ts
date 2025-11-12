/**
 * Character represents the portfolio owner
 */
export interface Character {
  name: string;
  class: string;
  experience: number;
  bio: string;
  avatar: string;
}

/**
 * Stat represents a professional attribute
 */
export interface Stat {
  name: string;
  value: number;
  maxValue: number;
  description: string;
  icon: string;
}

/**
 * Skill represents a technical skill
 */
export interface Skill {
  name: string;
  category: string;
  level: number;
  description: string;
  icon: string;
}

/**
 * Project represents a development project
 */
export interface Project {
  title: string;
  description: string;
  status: ProjectStatus;
  technologies: string[];
  links: {
    live?: string;
    github?: string;
  };
  image?: string;
  currentlyWorking?: boolean;
  lastCommit?: string; // ISO date string
}

/**
 * PortfolioData is the complete data structure for the portfolio
 */
export interface PortfolioData {
  character: Character;
  stats: Stat[];
  skills: Skill[];
  projects: Project[];
}

/**
 * Props for the HomePage component
 */
export interface HomePageProps {
  character: Character;
  projects: Project[];
  prefersReducedMotion: boolean;
}
