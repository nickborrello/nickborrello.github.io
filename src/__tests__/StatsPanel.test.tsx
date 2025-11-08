import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import StatsPanel from '../components/StatsPanel';
import type { Stat } from '../types';

describe('StatsPanel', () => {
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
});
