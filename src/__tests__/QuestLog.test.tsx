import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import QuestLog from '../components/QuestLog';
import type { Quest } from '../types';

describe('QuestLog', () => {
  const mockQuests: Quest[] = [
    {
      title: 'First Quest',
      description: 'First quest description',
      status: 'completed',
      rewards: ['100 Gold'],
      technologies: ['React'],
      links: {
        live: 'https://example1.com',
        github: 'https://github.com/test1',
      },
      image: '/test1.png',
      jewelSlots: [
        { jewel: 'React', slotNumber: 1 },
      ],
    },
    {
      title: 'Second Quest',
      description: 'Second quest description',
      status: 'in-progress',
      rewards: ['200 Gold'],
      technologies: ['TypeScript'],
      links: {
        live: 'https://example2.com',
        github: 'https://github.com/test2',
      },
      image: '/test2.png',
      jewelSlots: [
        { jewel: 'TypeScript', slotNumber: 1 },
      ],
    },
    {
      title: 'Third Quest',
      description: 'Third quest description',
      status: 'completed',
      rewards: ['300 Gold'],
      technologies: ['JavaScript'],
      links: {
        live: 'https://example3.com',
        github: 'https://github.com/test3',
      },
      image: '/test3.png',
    },
  ];

  it('renders all quests from data', () => {
    render(<QuestLog quests={mockQuests} />);
    
    expect(screen.getByText('First Quest')).toBeTruthy();
    expect(screen.getByText('Second Quest')).toBeTruthy();
    expect(screen.getByText('Third Quest')).toBeTruthy();
  });

  it('maps quests to QuestCard components correctly', () => {
    render(<QuestLog quests={mockQuests} />);
    
    // Check that all quest descriptions are rendered
    expect(screen.getByText('First quest description')).toBeTruthy();
    expect(screen.getByText('Second quest description')).toBeTruthy();
    expect(screen.getByText('Third quest description')).toBeTruthy();
  });

  it('handles empty quest array', () => {
    render(<QuestLog quests={[]} />);
    
    // Should display an empty state message
    expect(screen.getByText(/no quests/i)).toBeTruthy();
  });

  it('displays quest count or section title', () => {
    render(<QuestLog quests={mockQuests} />);
    
    // Should have a section header - use getAllByText since there are multiple matches
    const headers = screen.getAllByText(/quest log/i);
    expect(headers.length).toBeGreaterThan(0);
  });

  it('applies grid layout correctly', () => {
    const { container } = render(<QuestLog quests={mockQuests} />);
    
    // Check for grid styling in the cards container
    const gridContainer = container.querySelector('.grid');
    expect(gridContainer).toBeTruthy();
    expect(gridContainer?.className).toContain('grid');
  });

  it('renders section header with proper styling', () => {
    const { container } = render(<QuestLog quests={mockQuests} />);
    
    // Check the h2 header element directly
    const header = container.querySelector('h2');
    expect(header).toBeTruthy();
    expect(header?.className).toContain('text-');
  });

  it('renders correct number of quest cards', () => {
    render(<QuestLog quests={mockQuests} />);
    
    // Count the number of quest cards by looking for unique quest titles
    const questTitles = ['First Quest', 'Second Quest', 'Third Quest'];
    questTitles.forEach(title => {
      expect(screen.getByText(title)).toBeTruthy();
    });
  });

  it('handles single quest correctly', () => {
    const singleQuest = [mockQuests[0]];
    render(<QuestLog quests={singleQuest} />);
    
    expect(screen.getByText('First Quest')).toBeTruthy();
    expect(screen.queryByText('Second Quest')).toBeFalsy();
  });

  it('has proper container styling', () => {
    const { container } = render(<QuestLog quests={mockQuests} />);
    
    const questLogContainer = container.querySelector('[data-testid="quest-log"]');
    expect(questLogContainer).toBeTruthy();
    // Check that quest cards have proper styling
    const questCards = container.querySelectorAll('article');
    expect(questCards.length).toBeGreaterThan(0);
  });
});
