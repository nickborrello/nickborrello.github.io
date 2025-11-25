
export type NavigationItem = 'GUILD_CARD' | 'QUEST_BOARD' | 'HUNTERS_NOTES';

export type QuestType = 'ASSIGNED' | 'OPTIONAL' | 'SPECIAL';

export interface Project {
  id: string;
  title: string;
  client: string;
  difficulty: 1 | 2 | 3 | 4 | 5; // Stars
  description: string;
  rewards: string[];
  completed: boolean;
  tags: string[];
  type: QuestType;
  image?: string; // Main Preview image URL
  images?: string[]; // Gallery images
  location?: string; // Company or School
  duration?: string; // Time Limit analogy
  targetMonsters?: string[]; // "Other Monsters" analogy (Related tech)
  questTypeLabel?: string; // "Hunting Quest", "Slaying Quest" etc.
  role?: string; // Replaces "Conditions"
  challenges?: string[]; // Replaces "Failure Conditions"
}

export interface Skill {
  name: string;
  level: number; // 1-7 (MHW Skill Levels)
  maxLevel: number;
  description: string;
  type: 'FRONTEND' | 'BACKEND' | 'TOOLS';
}

export interface EquipmentItem {
  slot: 'Weapon' | 'Helm' | 'Mail' | 'Arms' | 'Coil' | 'Legs' | 'Charm' | 'Tool';
  name: string;
  iconType: string;
  color: string;
}

export interface HunterData {
  name: string;
  title: string;
  hr: number;
  mr: number;
  unity: number;
  quote: string;
  equipment: EquipmentItem[];
  questStats: {
    lowRank: number;
    highRank: number;
    masterRank: number;
    investigations: number;
    arena: number;
    guidingLands: number;
  };
}

export interface PortfolioData {
  hunter: HunterData;
  quests: Project[];
  skills: Skill[];
}
