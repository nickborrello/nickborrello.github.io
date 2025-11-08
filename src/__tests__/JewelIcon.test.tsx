import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import JewelIcon from '../components/JewelIcon';

describe('JewelIcon', () => {
  it('renders jewel with correct tech name', () => {
    render(<JewelIcon jewel="React" slotNumber={1} />);

    const jewelElement = screen.getByTitle('React');
    expect(jewelElement).toBeInTheDocument();
  });

  it('shows tooltip on hover with tech name', () => {
    render(<JewelIcon jewel="TypeScript" slotNumber={1} />);

    const jewelElement = screen.getByTitle('TypeScript');
    expect(jewelElement).toHaveAttribute('title', 'TypeScript');
  });

  it('handles React tech type with correct color', () => {
    const { container } = render(<JewelIcon jewel="React" slotNumber={1} />);

    const jewelElement = container.querySelector('[data-tech="React"]');
    expect(jewelElement).toBeInTheDocument();
    expect(jewelElement).toHaveClass('bg-cyan-400');
  });

  it('handles TypeScript tech type with correct color', () => {
    const { container } = render(<JewelIcon jewel="TypeScript" slotNumber={1} />);

    const jewelElement = container.querySelector('[data-tech="TypeScript"]');
    expect(jewelElement).toBeInTheDocument();
    expect(jewelElement).toHaveClass('bg-blue-500');
  });

  it('handles Node.js tech type with correct color', () => {
    const { container } = render(<JewelIcon jewel="Node.js" slotNumber={1} />);

    const jewelElement = container.querySelector('[data-tech="Node.js"]');
    expect(jewelElement).toBeInTheDocument();
    expect(jewelElement).toHaveClass('bg-green-600');
  });

  it('handles JavaScript tech type with correct color', () => {
    const { container } = render(<JewelIcon jewel="JavaScript" slotNumber={1} />);

    const jewelElement = container.querySelector('[data-tech="JavaScript"]');
    expect(jewelElement).toBeInTheDocument();
    expect(jewelElement).toHaveClass('bg-yellow-400');
  });

  it('renders empty slot when jewel is null', () => {
    const { container } = render(<JewelIcon jewel={null} slotNumber={1} />);

    const emptySlot = container.querySelector('[data-slot-empty="true"]');
    expect(emptySlot).toBeInTheDocument();
    expect(emptySlot).toHaveClass('border-gray-500');
  });

  it('applies correct size classes', () => {
    const { container } = render(<JewelIcon jewel="React" slotNumber={1} />);

    const jewelElement = container.querySelector('[data-tech="React"]');
    expect(jewelElement).toHaveClass('w-2.5');
    expect(jewelElement).toHaveClass('h-2.5');
  });

  it('includes slot number in data attribute', () => {
    const { container } = render(<JewelIcon jewel="React" slotNumber={3} />);

    const jewelElement = container.querySelector('[data-slot="3"]');
    expect(jewelElement).toBeInTheDocument();
  });

  it('handles different tech types with appropriate colors', () => {
    const techTypes = [
      { tech: 'Python' as const, color: 'bg-blue-600' },
      { tech: 'HTML' as const, color: 'bg-orange-600' },
      { tech: 'CSS' as const, color: 'bg-blue-400' },
      { tech: 'Tailwind CSS' as const, color: 'bg-cyan-500' },
      { tech: 'Vue' as const, color: 'bg-green-500' },
      { tech: 'Angular' as const, color: 'bg-red-600' },
    ];

    techTypes.forEach(({ tech, color }) => {
      const { container } = render(<JewelIcon jewel={tech} slotNumber={1} />);
      const jewelElement = container.querySelector(`[data-tech="${tech}"]`);
      expect(jewelElement).toHaveClass(color);
    });
  });
});
