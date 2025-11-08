import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import StatsPanel from '../components/StatsPanel';
import type { Stat } from '../types';

// Mock the hooks at the module level
vi.mock('../hooks/usePortfolioData');
vi.mock('../hooks/useSkillCalculation');

import { usePortfolioData } from '../hooks/usePortfolioData';
import { useSkillCalculation } from '../hooks/useSkillCalculation';

describe('StatsPanel', () => {
  // Reset mocks before each test
  beforeEach(() => {
    vi.clearAllMocks();
    // Mock the default return value for all tests
    vi.mocked(usePortfolioData).mockReturnValue({
      data: null,
      loading: false,
      error: null
    });
    // Mock useSkillCalculation to return empty map by default
    vi.mocked(useSkillCalculation).mockReturnValue(new Map());
  });

  // Restore mocks after each test
  afterEach(() => {
    vi.restoreAllMocks();
  });
  const mockStats: Stat[] = [
    {
      name: 'React',
      value: 85,
      maxValue: 100,
      description: 'Frontend framework expertise',
      icon: '⚛️'
    },
    {
      name: 'TypeScript',
      value: 90,
      maxValue: 100,
      description: 'Type-safe JavaScript',
      icon: '📘'
    },
    {
      name: 'Node.js',
      value: 75,
      maxValue: 100,
      description: 'Backend runtime',
      icon: '🟢'
    }
  ];

  it('renders all stats', () => {
    render(<StatsPanel stats={mockStats} />);
    
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
    expect(screen.getByText('Node.js')).toBeInTheDocument();
  });

  it('renders correct number of stat bars', () => {
    render(<StatsPanel stats={mockStats} />);
    
    const progressBars = screen.getAllByRole('progressbar');
    expect(progressBars).toHaveLength(3);
  });

  it('displays stat values correctly', () => {
    render(<StatsPanel stats={mockStats} />);
    
    expect(screen.getByText('85')).toBeInTheDocument();
    expect(screen.getByText('90')).toBeInTheDocument();
    expect(screen.getByText('75')).toBeInTheDocument();
  });

  it('renders empty state when no stats provided', () => {
    render(<StatsPanel stats={[]} />);
    
    const progressBars = screen.queryAllByRole('progressbar');
    expect(progressBars).toHaveLength(0);
  });

  it('applies sidebar styling', () => {
    const { container } = render(<StatsPanel stats={mockStats} />);
    const panel = container.firstChild as HTMLElement;
    
    // Check for RPG-themed panel styling
    expect(panel).toHaveClass('border-2');
  });

  it('passes correct props to StatBar components', () => {
    render(<StatsPanel stats={mockStats} />);
    
    const firstProgressBar = screen.getAllByRole('progressbar')[0];
    expect(firstProgressBar).toHaveAttribute('aria-valuenow', '85');
    expect(firstProgressBar).toHaveAttribute('aria-valuemax', '100');
  });

  describe('Proficiency Section', () => {
    it('renders proficiency section when quests have jewels', () => {
      vi.mocked(usePortfolioData).mockReturnValue({
        data: {
          character: { name: 'Test', class: 'Warrior', level: 1, bio: 'Test bio', avatar: '/avatar.png' },
          stats: [],
          skills: [],
          quests: [
            {
              title: 'Test Quest',
              description: 'Test',
              status: 'completed',
              rewards: [],
              technologies: [],
              links: { live: '', github: '' },
              image: '',
              jewelSlots: [
                { jewel: 'React', slotNumber: 1 },
                { jewel: 'React', slotNumber: 2 },
                { jewel: 'TypeScript', slotNumber: 3 }
              ]
            }
          ]
        },
        loading: false,
        error: null
      });

      // Mock proficiency calculation result
      const mockProficiencyMap = new Map();
      mockProficiencyMap.set('React', { techName: 'React', currentLevel: 2, maxLevel: 5 });
      mockProficiencyMap.set('TypeScript', { techName: 'TypeScript', currentLevel: 1, maxLevel: 5 });
      vi.mocked(useSkillCalculation).mockReturnValue(mockProficiencyMap);

      render(<StatsPanel stats={mockStats} />);
      
      expect(screen.getByText('PROFICIENCY')).toBeInTheDocument();
    });

    it('integrates with useSkillCalculation hook', () => {
      const mockProficiencyMap = new Map();
      mockProficiencyMap.set('React', { techName: 'React', currentLevel: 3, maxLevel: 5 });
      
      vi.mocked(useSkillCalculation).mockReturnValue(mockProficiencyMap);
      vi.mocked(usePortfolioData).mockReturnValue({
        data: {
          character: { name: 'Test', class: 'Warrior', level: 1, bio: 'Test bio', avatar: '/avatar.png' },
          stats: [],
          skills: [],
          quests: []
        },
        loading: false,
        error: null
      });

      render(<StatsPanel stats={mockStats} />);
      
      expect(useSkillCalculation).toHaveBeenCalled();
    });

    it('displays proficiencies for quests with jewels', () => {
      vi.mocked(usePortfolioData).mockReturnValue({
        data: {
          character: { name: 'Test', class: 'Warrior', level: 1, bio: 'Test bio', avatar: '/avatar.png' },
          stats: [],
          skills: [],
          quests: [
            {
              title: 'Test Quest',
              description: 'Test',
              status: 'completed',
              rewards: [],
              technologies: [],
              links: { live: '', github: '' },
              image: '',
              jewelSlots: [
                { jewel: 'Vue', slotNumber: 1 },
                { jewel: 'Vue', slotNumber: 2 },
                { jewel: 'Angular', slotNumber: 3 }
              ]
            }
          ]
        },
        loading: false,
        error: null
      });

      // Mock proficiency calculation result
      const mockProficiencyMap = new Map();
      mockProficiencyMap.set('Vue', { techName: 'Vue', currentLevel: 2, maxLevel: 5 });
      mockProficiencyMap.set('Angular', { techName: 'Angular', currentLevel: 1, maxLevel: 5 });
      vi.mocked(useSkillCalculation).mockReturnValue(mockProficiencyMap);

      const nonConflictingStats: Stat[] = [
        {
          name: 'Intelligence',
          value: 85,
          maxValue: 100,
          description: 'Backend development',
          icon: '🧠'
        }
      ];

      render(<StatsPanel stats={nonConflictingStats} />);
      
      // Should render proficiency items
      expect(screen.getByText('Vue')).toBeInTheDocument();
      expect(screen.getByText('Angular')).toBeInTheDocument();
    });

    it('renders section divider between stats and proficiencies', () => {
      vi.mocked(usePortfolioData).mockReturnValue({
        data: {
          character: { name: 'Test', class: 'Warrior', level: 1, bio: 'Test bio', avatar: '/avatar.png' },
          stats: [],
          skills: [],
          quests: [
            {
              title: 'Test Quest',
              description: 'Test',
              status: 'completed',
              rewards: [],
              technologies: [],
              links: { live: '', github: '' },
              image: '',
              jewelSlots: [{ jewel: 'React', slotNumber: 1 }]
            }
          ]
        },
        loading: false,
        error: null
      });

      // Mock proficiency calculation result
      const mockProficiencyMap = new Map();
      mockProficiencyMap.set('React', { techName: 'React', currentLevel: 1, maxLevel: 5 });
      vi.mocked(useSkillCalculation).mockReturnValue(mockProficiencyMap);

      const { container } = render(<StatsPanel stats={mockStats} />);
      
      // Check for divider element (border or hr)
      const divider = container.querySelector('[data-testid="proficiency-divider"]');
      expect(divider).toBeInTheDocument();
    });

    it('handles empty state when no proficiencies exist', () => {
      vi.mocked(usePortfolioData).mockReturnValue({
        data: {
          character: { name: 'Test', class: 'Warrior', level: 1, bio: 'Test bio', avatar: '/avatar.png' },
          stats: [],
          skills: [],
          quests: []
        },
        loading: false,
        error: null
      });

      render(<StatsPanel stats={mockStats} />);
      
      // Should not render proficiency section when no jewels
      expect(screen.queryByText('PROFICIENCY')).not.toBeInTheDocument();
    });
  });
});
