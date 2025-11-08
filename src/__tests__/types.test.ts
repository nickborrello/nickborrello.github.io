import { describe, it, expect } from 'vitest';
import type { Character, Stat, Skill, Quest, PortfolioData } from '../types';

describe('TypeScript Type Definitions', () => {
  describe('Character type', () => {
    it('should accept valid character data', () => {
      const character: Character = {
        name: 'Nick Borrello',
        class: 'Frontend Mage',
        level: 24,
        bio: 'A skilled developer on a quest for clean code',
        avatar: '/avatar.png',
      };

      expect(character.name).toBe('Nick Borrello');
      expect(character.class).toBe('Frontend Mage');
      expect(character.level).toBe(24);
      expect(character.bio).toBeDefined();
      expect(character.avatar).toBeDefined();
    });
  });

  describe('Stat type', () => {
    it('should accept valid stat data', () => {
      const stat: Stat = {
        name: 'Intelligence',
        value: 85,
        maxValue: 100,
        description: 'Backend development prowess',
        icon: 'brain',
      };

      expect(stat.name).toBe('Intelligence');
      expect(stat.value).toBeLessThanOrEqual(stat.maxValue);
      expect(stat.description).toBeDefined();
      expect(stat.icon).toBeDefined();
    });
  });

  describe('Skill type', () => {
    it('should accept valid skill data', () => {
      const skill: Skill = {
        name: 'React',
        category: 'Weapons',
        level: 90,
        description: 'Master of the React framework',
        icon: 'react-icon',
        rarity: 'epic',
      };

      expect(skill.name).toBe('React');
      expect(skill.category).toBe('Weapons');
      expect(skill.level).toBeGreaterThan(0);
      expect(skill.rarity).toMatch(/common|rare|epic|legendary/);
    });

    it('should accept valid rarity values', () => {
      const rarities: Array<'common' | 'rare' | 'epic' | 'legendary'> = [
        'common',
        'rare',
        'epic',
        'legendary',
      ];

      rarities.forEach((rarity) => {
        const skill: Skill = {
          name: 'Test Skill',
          category: 'Weapons',
          level: 50,
          description: 'Test description',
          icon: 'test-icon',
          rarity,
        };

        expect(skill.rarity).toBe(rarity);
      });
    });
  });

  describe('Quest type', () => {
    it('should accept valid quest data', () => {
      const quest: Quest = {
        title: 'Build the Ultimate Portfolio',
        description: 'Create an RPG-themed portfolio that showcases skills',
        status: 'in-progress',
        rewards: ['Experience Points', 'New Skills'],
        technologies: ['React', 'TypeScript', 'Tailwind CSS'],
        links: {
          live: 'https://example.com',
          github: 'https://github.com/example',
        },
        image: '/project.png',
      };

      expect(quest.title).toBeDefined();
      expect(quest.status).toMatch(/completed|in-progress|available/);
      expect(Array.isArray(quest.rewards)).toBe(true);
      expect(Array.isArray(quest.technologies)).toBe(true);
      expect(quest.links).toHaveProperty('live');
      expect(quest.links).toHaveProperty('github');
    });
  });

  describe('PortfolioData type', () => {
    it('should accept complete portfolio data structure', () => {
      const portfolioData: PortfolioData = {
        character: {
          name: 'Nick Borrello',
          class: 'Frontend Mage',
          level: 24,
          bio: 'A skilled developer',
          avatar: '/avatar.png',
        },
        stats: [
          {
            name: 'Intelligence',
            value: 85,
            maxValue: 100,
            description: 'Backend prowess',
            icon: 'brain',
          },
        ],
        skills: [
          {
            name: 'React',
            category: 'Weapons',
            level: 90,
            description: 'React mastery',
            icon: 'react',
            rarity: 'epic',
          },
        ],
        quests: [
          {
            title: 'Sample Quest',
            description: 'Description',
            status: 'completed',
            rewards: ['XP'],
            technologies: ['React'],
            links: {
              live: 'https://example.com',
              github: 'https://github.com/example',
            },
            image: '/image.png',
          },
        ],
      };

      expect(portfolioData.character).toBeDefined();
      expect(Array.isArray(portfolioData.stats)).toBe(true);
      expect(Array.isArray(portfolioData.skills)).toBe(true);
      expect(Array.isArray(portfolioData.quests)).toBe(true);
    });
  });
});
