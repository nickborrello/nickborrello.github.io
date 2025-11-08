/**
 * Character represents the portfolio owner as an RPG character
 */
export interface Character {
  name: string;
  class: string;
  level: number;
  bio: string;
  avatar: string;
}

/**
 * Stat represents a character attribute (like RPG stats)
 */
export interface Stat {
  name: string;
  value: number;
  maxValue: number;
  description: string;
  icon: string;
}

/**
 * Skill rarity levels (RPG item rarity)
 */
export type SkillRarity = 'common' | 'rare' | 'epic' | 'legendary';

/**
 * Skill represents a technical skill as an RPG inventory item
 */
export interface Skill {
  name: string;
  category: string;
  level: number;
  description: string;
  icon: string;
  rarity: SkillRarity;
}

/**
 * TechJewel represents a technology skill that can be slotted into quests
 * (Monster Hunter-style jewel system)
 */
export type TechJewel = 
  | 'React'
  | 'TypeScript'
  | 'JavaScript'
  | 'Node.js'
  | 'Python'
  | 'CSS'
  | 'HTML'
  | 'Tailwind CSS'
  | 'Vite'
  | 'Vue'
  | 'Angular'
  | 'Express'
  | 'MongoDB'
  | 'PostgreSQL'
  | 'GraphQL'
  | 'REST API'
  | 'Docker'
  | 'Git'
  | 'Jest'
  | 'Vitest'
  | 'Redux'
  | 'Socket.io'
  | 'JWT'
  | 'Stripe API'
  | 'Firebase'
  | 'Material-UI'
  | 'React DnD';

/**
 * JewelSlot represents a slot in a quest that can hold a TechJewel
 */
export interface JewelSlot {
  jewel: TechJewel | null;
  slotNumber: number;
}

/**
 * SkillProficiency represents the calculated proficiency level for a technology
 * based on how many jewels of that type are equipped across all quests
 */
export interface SkillProficiency {
  techName: TechJewel;
  currentLevel: number;
  maxLevel: number;
}

/**
 * Project status values
 */
export type ProjectStatus = 'completed' | 'in-progress' | 'available';

/**
 * Project represents a project as an RPG quest
 */
export interface Project {
  title: string;
  description: string;
  status: ProjectStatus;
  technologies: string[];
  links: {
    live: string;
    github: string;
  };
  image: string;
  jewelSlots?: JewelSlot[];
  currentlyWorking?: boolean;
  lastCommit?: string; // ISO date string
}

/**
 * PortfolioData is the complete data structure for the RPG portfolio
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
