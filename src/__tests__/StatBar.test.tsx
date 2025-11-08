import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import StatBar from '../components/StatBar';

describe('StatBar', () => {
  it('renders stat name and value', () => {
    render(
      <StatBar
        name="React"
        value={85}
        maxValue={100}
        description="Frontend framework expertise"
      />
    );

    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('85')).toBeInTheDocument();
  });

  it('renders progress bar with correct width percentage', () => {
    render(
      <StatBar
        name="TypeScript"
        value={90}
        maxValue={100}
        description="Type-safe JavaScript"
      />
    );

    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).toBeInTheDocument();
    expect(progressBar).toHaveAttribute('aria-valuenow', '90');
    expect(progressBar).toHaveAttribute('aria-valuemin', '0');
    expect(progressBar).toHaveAttribute('aria-valuemax', '100');
  });

  it('calculates percentage correctly for non-100 max values', () => {
    render(
      <StatBar
        name="Node.js"
        value={40}
        maxValue={50}
        description="Backend runtime"
      />
    );

    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).toHaveAttribute('aria-valuenow', '40');
    expect(progressBar).toHaveAttribute('aria-valuemax', '50');
  });

  it('displays description as tooltip or aria-label', () => {
    const { container } = render(
      <StatBar
        name="Python"
        value={75}
        maxValue={100}
        description="General-purpose programming"
      />
    );

    // Check that the root div has the title attribute
    const statBar = container.firstChild as HTMLElement;
    expect(statBar).toHaveAttribute('title', 'General-purpose programming');
  });

  it('renders with optional icon', () => {
    render(
      <StatBar
        name="Docker"
        value={60}
        maxValue={100}
        description="Containerization"
        icon="🐳"
      />
    );

    expect(screen.getByText('🐳')).toBeInTheDocument();
    expect(screen.getByText('Docker')).toBeInTheDocument();
  });
});
