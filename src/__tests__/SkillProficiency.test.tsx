import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import SkillProficiency from '../components/SkillProficiency';

describe('SkillProficiency', () => {
  it('renders skill name correctly', () => {
    render(<SkillProficiency techName="React" currentLevel={3} maxLevel={5} />);
    
    expect(screen.getByText('React')).toBeInTheDocument();
  });

  it('displays current level and max level', () => {
    render(<SkillProficiency techName="TypeScript" currentLevel={4} maxLevel={5} />);
    
    expect(screen.getByText('4/5')).toBeInTheDocument();
  });

  it('renders correct number of filled pips', () => {
    const { container } = render(
      <SkillProficiency techName="React" currentLevel={3} maxLevel={5} />
    );
    
    const filledPips = container.querySelectorAll('[data-testid="filled-pip"]');
    expect(filledPips).toHaveLength(3);
  });

  it('renders correct number of empty pips', () => {
    const { container } = render(
      <SkillProficiency techName="React" currentLevel={3} maxLevel={5} />
    );
    
    const emptyPips = container.querySelectorAll('[data-testid="empty-pip"]');
    expect(emptyPips).toHaveLength(2);
  });

  it('handles level 0 with no filled pips', () => {
    const { container } = render(
      <SkillProficiency techName="Vue" currentLevel={0} maxLevel={5} />
    );
    
    const filledPips = container.querySelectorAll('[data-testid="filled-pip"]');
    const emptyPips = container.querySelectorAll('[data-testid="empty-pip"]');
    
    expect(filledPips).toHaveLength(0);
    expect(emptyPips).toHaveLength(5);
  });

  it('handles max level with all pips filled', () => {
    const { container } = render(
      <SkillProficiency techName="JavaScript" currentLevel={5} maxLevel={5} />
    );
    
    const filledPips = container.querySelectorAll('[data-testid="filled-pip"]');
    const emptyPips = container.querySelectorAll('[data-testid="empty-pip"]');
    
    expect(filledPips).toHaveLength(5);
    expect(emptyPips).toHaveLength(0);
  });

  it('applies correct styling classes', () => {
    const { container } = render(
      <SkillProficiency techName="Node.js" currentLevel={2} maxLevel={5} />
    );
    
    // Check for container with flex layout
    const skillContainer = container.firstChild as HTMLElement;
    expect(skillContainer).toHaveClass('flex');
    
    // Check for pips container
    const pipsContainer = container.querySelector('[data-testid="pips-container"]');
    expect(pipsContainer).toBeInTheDocument();
  });

  it('displays level text for partially filled skills', () => {
    render(<SkillProficiency techName="MongoDB" currentLevel={2} maxLevel={5} />);
    
    expect(screen.getByText('2/5')).toBeInTheDocument();
  });

  it('renders different tech names correctly', () => {
    const { rerender } = render(
      <SkillProficiency techName="Tailwind CSS" currentLevel={3} maxLevel={5} />
    );
    
    expect(screen.getByText('Tailwind CSS')).toBeInTheDocument();
    
    rerender(<SkillProficiency techName="Socket.io" currentLevel={2} maxLevel={5} />);
    
    expect(screen.getByText('Socket.io')).toBeInTheDocument();
  });
});
