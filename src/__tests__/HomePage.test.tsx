import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import HomePage from '../components/HomePage';
import type { Character, Project } from '../types';

// Mock the sub-components
vi.mock('../components/CharacterHeader', () => ({
  default: ({ character }: { character: Character }) => <div data-testid="character-header">{character.name}</div>,
}));

vi.mock('../components/CurrentlyWorking', () => ({
  default: ({ projects, prefersReducedMotion }: { projects: Project[]; prefersReducedMotion: boolean }) => (
    <div data-testid="currently-working">{projects.length} projects - {prefersReducedMotion ? 'reduced' : 'normal'}</div>
  ),
}));

const mockCharacter: Character = {
  name: 'Test Character',
  class: 'Developer',
  experience: 10,
  bio: 'Test bio',
  avatar: 'test-avatar.png',
};

const mockProjects: Project[] = [
  {
    title: 'Project 1',
    description: 'Description 1',
    status: 'completed',
    technologies: ['React', 'TypeScript'],
    links: { live: 'https://example.com', github: 'https://github.com' },
    image: 'project1.png',
  },
  {
    title: 'Project 2',
    description: 'Description 2',
    status: 'in-progress',
    technologies: ['Vue', 'JavaScript'],
    links: { live: 'https://example2.com', github: 'https://github2.com' },
    image: 'project2.png',
  },
];

describe('HomePage', () => {
  it('renders the HomePage with props and displays all sections', () => {
    render(<HomePage character={mockCharacter} projects={mockProjects} prefersReducedMotion={false} />);

    expect(screen.getByTestId('character-header')).toHaveTextContent('Test Character');
    expect(screen.getByTestId('currently-working')).toHaveTextContent('2 projects - normal');
    expect(screen.getByText('Welcome to My Portfolio')).toBeInTheDocument();
  });

  it('passes prefersReducedMotion correctly', () => {
    render(<HomePage character={mockCharacter} projects={mockProjects} prefersReducedMotion={true} />);

    expect(screen.getByTestId('currently-working')).toHaveTextContent('2 projects - reduced');
  });
});