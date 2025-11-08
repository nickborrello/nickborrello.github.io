import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import JewelIcon from '../components/JewelIcon';

describe('JewelIcon', () => {
  it('renders jewel with correct tech name', () => {
    render(<JewelIcon jewel="React" slotNumber={1} />);

    const jewelElement = screen.getByTitle('React (Slot 1)');
    expect(jewelElement).toBeInTheDocument();
  });

  it('shows tooltip on hover with tech name and slot number', () => {
    render(<JewelIcon jewel="TypeScript" slotNumber={2} />);

    const jewelElement = screen.getByTitle('TypeScript (Slot 2)');
    expect(jewelElement).toHaveAttribute('title', 'TypeScript (Slot 2)');
  });

  it('handles React tech type with correct gradient colors', () => {
    const { container } = render(<JewelIcon jewel="React" slotNumber={1} />);

    const jewelElement = container.querySelector('.bg-gradient-to-br.from-blue-400');
    expect(jewelElement).toBeInTheDocument();
    expect(jewelElement).toHaveClass('to-cyan-400');
  });

  it('handles TypeScript tech type with correct gradient colors', () => {
    const { container } = render(<JewelIcon jewel="TypeScript" slotNumber={1} />);

    const jewelElement = container.querySelector('.bg-gradient-to-br.from-blue-600');
    expect(jewelElement).toBeInTheDocument();
    expect(jewelElement).toHaveClass('to-blue-800');
  });

  it('handles Node.js tech type with correct gradient colors', () => {
    const { container } = render(<JewelIcon jewel="Node.js" slotNumber={1} />);

    const jewelElement = container.querySelector('.bg-gradient-to-br.from-green-500');
    expect(jewelElement).toBeInTheDocument();
    expect(jewelElement).toHaveClass('to-green-700');
  });

  it('handles JavaScript tech type with correct gradient colors', () => {
    const { container } = render(<JewelIcon jewel="JavaScript" slotNumber={1} />);

    const jewelElement = container.querySelector('.bg-gradient-to-br.from-yellow-400');
    expect(jewelElement).toBeInTheDocument();
    expect(jewelElement).toHaveClass('to-yellow-600');
  });

  it('renders empty slot when jewel is null', () => {
    const { container } = render(<JewelIcon jewel={null} slotNumber={1} />);

    const emptySlot = container.querySelector('.border-gray-600');
    expect(emptySlot).toBeInTheDocument();
    expect(emptySlot).toHaveClass('bg-gray-800/50');
    expect(emptySlot).toHaveAttribute('title', 'Empty slot 1');
  });

  it('applies correct size classes for default (md)', () => {
    const { container } = render(<JewelIcon jewel="React" slotNumber={1} />);

    const jewelElement = container.querySelector('.w-6');
    expect(jewelElement).toBeInTheDocument();
    expect(jewelElement).toHaveClass('h-6');
  });

  it('applies correct size classes for sm', () => {
    const { container } = render(<JewelIcon jewel="React" slotNumber={1} size="sm" />);

    const jewelElement = container.querySelector('.w-4');
    expect(jewelElement).toBeInTheDocument();
    expect(jewelElement).toHaveClass('h-4');
  });

  it('applies correct size classes for lg', () => {
    const { container } = render(<JewelIcon jewel="React" slotNumber={1} size="lg" />);

    const jewelElement = container.querySelector('.w-8');
    expect(jewelElement).toBeInTheDocument();
    expect(jewelElement).toHaveClass('h-8');
  });

  it('includes slot number in title for filled jewels', () => {
    render(<JewelIcon jewel="React" slotNumber={3} />);

    const jewelElement = screen.getByTitle('React (Slot 3)');
    expect(jewelElement).toBeInTheDocument();
  });

  it('handles different tech types with appropriate gradient colors', () => {
    const techTypes = [
      { tech: 'Python' as const, fromColor: 'from-yellow-500', toColor: 'to-blue-600' },
      { tech: 'HTML' as const, fromColor: 'from-orange-400', toColor: 'to-red-500' },
      { tech: 'CSS' as const, fromColor: 'from-blue-500', toColor: 'to-purple-500' },
      { tech: 'Tailwind CSS' as const, fromColor: 'from-teal-400', toColor: 'to-cyan-500' },
      { tech: 'Vue' as const, fromColor: 'from-green-400', toColor: 'to-emerald-500' },
      { tech: 'Angular' as const, fromColor: 'from-red-500', toColor: 'to-red-700' },
    ];

    techTypes.forEach(({ tech, fromColor, toColor }) => {
      const { container } = render(<JewelIcon jewel={tech} slotNumber={1} />);
      const jewelElement = container.querySelector(`.${fromColor}`);
      expect(jewelElement).toBeInTheDocument();
      expect(jewelElement).toHaveClass(toColor);
    });
  });

  it('renders with proper jewel styling effects', () => {
    const { container } = render(<JewelIcon jewel="React" slotNumber={1} />);

    const jewelElement = container.querySelector('.bg-gradient-to-br');
    expect(jewelElement).toHaveClass('shadow-lg');
    expect(jewelElement).toHaveClass('border');
    expect(jewelElement).toHaveClass('border-white/20');
    expect(jewelElement).toHaveClass('rounded-full');
  });

  it('includes inner highlight and sparkle effects for filled jewels', () => {
    const { container } = render(<JewelIcon jewel="React" slotNumber={1} />);

    const innerHighlight = container.querySelector('.bg-gradient-to-t');
    expect(innerHighlight).toBeInTheDocument();

    // Check for sparkle effect using a more specific selector
    const sparkle = container.querySelector('div.absolute.top-0\\.5');
    expect(sparkle).toBeInTheDocument();
    expect(sparkle).toHaveClass('bg-white');
  });
});
