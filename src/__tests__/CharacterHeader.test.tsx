import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import CharacterHeader from '../components/CharacterHeader';
import type { Character } from '../types';

describe('CharacterHeader', () => {
  const mockCharacter: Character = {
    name: 'Nick Borrello',
    class: 'Frontend Mage',
    level: 24,
    bio: 'A skilled developer specializing in modern web technologies and user experience design.',
    avatar: '/avatar.png'
  };

  it('renders character name', () => {
    render(<CharacterHeader character={mockCharacter} />);
    expect(screen.getByText('Nick Borrello')).toBeInTheDocument();
  });

  it('renders character class and level', () => {
    render(<CharacterHeader character={mockCharacter} />);
    expect(screen.getByText(/Frontend Mage/)).toBeInTheDocument();
    expect(screen.getByText(/Lvl 24/i)).toBeInTheDocument();
  });

  it('renders character bio', () => {
    render(<CharacterHeader character={mockCharacter} />);
    expect(
      screen.getByText('A skilled developer specializing in modern web technologies and user experience design.')
    ).toBeInTheDocument();
  });

  it('displays level in correct format', () => {
    render(<CharacterHeader character={mockCharacter} />);
    const levelText = screen.getByText(/Lvl 24/i);
    expect(levelText).toBeInTheDocument();
  });

  it('applies RPG-themed styling', () => {
    const { container } = render(<CharacterHeader character={mockCharacter} />);
    // Check that the component has some RPG-themed classes (gold, border, etc.)
    const header = container.firstChild as HTMLElement;
    expect(header).toHaveClass('border-2');
  });
});
