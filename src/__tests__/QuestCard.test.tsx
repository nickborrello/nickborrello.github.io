import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import QuestCard from '../components/QuestCard';
import type { Quest } from '../types';

describe('QuestCard', () => {
  const mockCompletedQuest: Quest = {
    title: 'Test Quest',
    description: 'A test quest description for unit testing',
    status: 'completed',
    rewards: ['100 Gold', 'Achievement: Test Master'],
    technologies: ['React', 'TypeScript'],
    links: {
      live: 'https://example.com',
      github: 'https://github.com/test',
    },
    image: '/test-image.png',
    jewelSlots: [
      { jewel: 'React', slotNumber: 1 },
      { jewel: 'TypeScript', slotNumber: 2 },
    ],
  };

  const mockActiveQuest: Quest = {
    title: 'Active Quest',
    description: 'An in-progress quest',
    status: 'in-progress',
    rewards: ['200 Gold'],
    technologies: ['JavaScript'],
    links: {
      live: 'https://example.com',
      github: 'https://github.com/test',
    },
    image: '/active-image.png',
    jewelSlots: [
      { jewel: 'JavaScript', slotNumber: 1 },
    ],
  };

  const mockQuestWithoutJewels: Quest = {
    title: 'Simple Quest',
    description: 'A quest without jewel slots',
    status: 'completed',
    rewards: ['50 Gold'],
    technologies: ['HTML', 'CSS'],
    links: {
      live: 'https://example.com',
      github: 'https://github.com/test',
    },
    image: '/simple-image.png',
  };

  it('renders quest name correctly', () => {
    render(<QuestCard quest={mockCompletedQuest} />);
    expect(screen.getByText('Test Quest')).toBeTruthy();
  });

  it('renders quest description', () => {
    render(<QuestCard quest={mockCompletedQuest} />);
    expect(screen.getByText('A test quest description for unit testing')).toBeTruthy();
  });

  it('displays quest status for completed quest', () => {
    render(<QuestCard quest={mockCompletedQuest} />);
    const statusElement = screen.getByText('Completed');
    expect(statusElement).toBeTruthy();
  });

  it('displays quest status for in-progress quest', () => {
    render(<QuestCard quest={mockActiveQuest} />);
    const statusElement = screen.getByText('In Progress');
    expect(statusElement).toBeTruthy();
  });

  it('renders jewel slots using JewelSlots component', () => {
    const { container } = render(<QuestCard quest={mockCompletedQuest} />);
    const jewelSlotsContainer = container.querySelector('[data-jewel-slots]');
    expect(jewelSlotsContainer).toBeTruthy();
  });

  it('handles quests without jewelSlots gracefully', () => {
    render(<QuestCard quest={mockQuestWithoutJewels} />);
    // Should not crash and should render the quest title
    expect(screen.getByText('Simple Quest')).toBeTruthy();
  });

  it('applies correct styling for completed status', () => {
    render(<QuestCard quest={mockCompletedQuest} />);
    const statusElement = screen.getByText('Completed');
    
    // Check that completed status has green/success styling
    expect(statusElement.className).toContain('green');
  });

  it('applies correct styling for in-progress status', () => {
    render(<QuestCard quest={mockActiveQuest} />);
    const statusElement = screen.getByText('In Progress');
    
    // Check that in-progress status has gold/yellow styling
    expect(statusElement.className).toContain('yellow');
  });

  it('renders quest rewards when present', () => {
    render(<QuestCard quest={mockCompletedQuest} />);
    expect(screen.getByText(/100 Gold/)).toBeTruthy();
  });

  it('displays project links', () => {
    render(<QuestCard quest={mockCompletedQuest} />);
    const liveLink = screen.getByRole('link', { name: /live/i });
    const githubLink = screen.getByRole('link', { name: /github/i });
    
    expect(liveLink).toBeTruthy();
    expect(githubLink).toBeTruthy();
    expect(liveLink.getAttribute('href')).toBe('https://example.com');
    expect(githubLink.getAttribute('href')).toBe('https://github.com/test');
  });

  it('has RPG-styled card appearance', () => {
    const { container } = render(<QuestCard quest={mockCompletedQuest} />);
    const card = container.firstChild as HTMLElement;
    
    // Check for border styling
    expect(card.className).toContain('border');
    // Check for background styling
    expect(card.className).toContain('bg-');
  });
});
