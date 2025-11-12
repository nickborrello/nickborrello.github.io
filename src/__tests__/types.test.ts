import { describe, it, expect } from 'vitest';
import type { Character, Stat, Skill, Project, PortfolioData } from '../types';

describe('TypeScript Type Definitions', () => {
  describe('Character type', () => {
    it('should accept valid character data', () => {
      const character: Character = {
        name: 'Nick Borrello',
        class: 'Frontend Developer',
        experience: 24,
        bio: 'A skilled developer who specializes in crafting powerful web applications',
        avatar: '/avatar.png',
      };

      expect(character.name).toBe('Nick Borrello');
      expect(character.class).toBe('Frontend Developer');
      expect(character.experience).toBe(24);
      expect(character.bio).toBeDefined();
      expect(character.avatar).toBeDefined();
    });
  });

  describe('Stat type', () => {
    it('should accept valid stat data', () => {
      const stat: Stat = {
        name: 'Frontend Development',
        value: 85,
        maxValue: 100,
        description: 'Frontend development expertise',
        icon: 'code',
      };

      expect(stat.name).toBe('Frontend Development');
      expect(stat.value).toBeLessThanOrEqual(stat.maxValue);
      expect(stat.description).toBeDefined();
      expect(stat.icon).toBeDefined();
    });
  });

  describe('Skill type', () => {
    it('should accept valid skill data', () => {
      const skill: Skill = {
        name: 'React',
        category: 'Frontend',
        level: 90,
        description: 'Component-based UI development',
        icon: 'react-icon',
      };

      expect(skill.name).toBe('React');
      expect(skill.category).toBe('Frontend');
      expect(skill.level).toBeGreaterThan(0);
    });
  });

  describe('Project type', () => {
    it('should accept valid project data', () => {
      const project: Project = {
        title: 'Portfolio Website',
        description: 'Modern portfolio website showcasing development skills',
        status: 'in-progress',
        technologies: ['React', 'TypeScript', 'Tailwind CSS'],
        links: {
          live: 'https://example.com',
          github: 'https://github.com/example',
        },
        image: '/project.png',
        currentlyWorking: true,
        lastCommit: '2025-01-01T00:00:00Z',
      };

      expect(project.title).toBeDefined();
      expect(project.status).toMatch(/completed|in-progress|available/);
      expect(Array.isArray(project.technologies)).toBe(true);
      expect(project.links.live).toBeDefined();
      expect(project.links.github).toBeDefined();
    });
  });

  describe('PortfolioData type', () => {
    it('should accept complete portfolio data structure', () => {
      const portfolioData: PortfolioData = {
        character: {
          name: 'Nick Borrello',
          class: 'Frontend Developer',
          experience: 24,
          bio: 'A skilled developer',
          avatar: '/avatar.png',
        },
        stats: [
          {
            name: 'Frontend Development',
            value: 85,
            maxValue: 100,
            description: 'Frontend expertise',
            icon: 'code',
          },
        ],
        skills: [
          {
            name: 'React',
            category: 'Frontend',
            level: 90,
            description: 'React development',
            icon: 'react',
          },
        ],
        projects: [
          {
            title: 'Sample Project',
            description: 'Description',
            status: 'completed',
            technologies: ['React'],
            links: {
              live: 'https://example.com',
              github: 'https://github.com/example',
            },
            image: '/image.png',
            currentlyWorking: false,
          },
        ],
      };

      expect(portfolioData.character).toBeDefined();
      expect(Array.isArray(portfolioData.stats)).toBe(true);
      expect(Array.isArray(portfolioData.skills)).toBe(true);
      expect(Array.isArray(portfolioData.projects)).toBe(true);
    });
  });
});
