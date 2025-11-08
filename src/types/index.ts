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
 * Quest status values
 */
export type QuestStatus = 'completed' | 'in-progress' | 'available';

/**
 * Quest represents a project as an RPG quest
 */
export interface Quest {
  title: string;
  description: string;
  status: QuestStatus;
  rewards: string[];
  technologies: string[];
  links: {
    live: string;
    github: string;
  };
  image: string;
}

/**
 * PortfolioData is the complete data structure for the RPG portfolio
 */
export interface PortfolioData {
  character: Character;
  stats: Stat[];
  skills: Skill[];
  quests: Quest[];
}
