import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import JewelSlots from '../components/JewelSlots';
import type { JewelSlot } from '../types';

describe('JewelSlots', () => {
  it('renders correct number of slots', () => {
    const jewelSlots: JewelSlot[] = [
      { jewel: 'React', slotNumber: 1 },
      { jewel: 'TypeScript', slotNumber: 2 },
      { jewel: 'Node.js', slotNumber: 3 },
    ];

    render(<JewelSlots jewelSlots={jewelSlots} />);

    expect(screen.getByTitle('React (Slot 1)')).toBeInTheDocument();
    expect(screen.getByTitle('TypeScript (Slot 2)')).toBeInTheDocument();
    expect(screen.getByTitle('Node.js (Slot 3)')).toBeInTheDocument();
  });

  it('shows filled slots for jewels', () => {
    const jewelSlots: JewelSlot[] = [
      { jewel: 'React', slotNumber: 1 },
      { jewel: 'TypeScript', slotNumber: 2 },
    ];

    render(<JewelSlots jewelSlots={jewelSlots} />);

    expect(screen.getByTitle('React (Slot 1)')).toBeInTheDocument();
    expect(screen.getByTitle('TypeScript (Slot 2)')).toBeInTheDocument();
  });

  it('shows empty slots for null jewels', () => {
    const jewelSlots: JewelSlot[] = [
      { jewel: 'React', slotNumber: 1 },
      { jewel: null, slotNumber: 2 },
      { jewel: 'TypeScript', slotNumber: 3 },
    ];

    const { container } = render(<JewelSlots jewelSlots={jewelSlots} />);

    // Check for filled jewels
    expect(screen.getByTitle('React (Slot 1)')).toBeInTheDocument();
    expect(screen.getByTitle('TypeScript (Slot 3)')).toBeInTheDocument();

    // Check for empty slot
    const emptySlot = container.querySelector('[title="Empty slot 2"]');
    expect(emptySlot).toBeInTheDocument();
  });

  it('handles empty jewelSlots array', () => {
    const { container } = render(<JewelSlots jewelSlots={[]} />);

    // Should render container but no slots
    const slotsContainer = container.querySelector('[data-jewel-slots]');
    expect(slotsContainer).toBeInTheDocument();

    // No jewel icons should be rendered
    const jewelIcons = container.querySelectorAll('.rounded-full');
    expect(jewelIcons).toHaveLength(0);
  });

  it('handles undefined jewelSlots', () => {
    const { container } = render(<JewelSlots jewelSlots={undefined} />);

    const slotsContainer = container.querySelector('[data-jewel-slots]');
    expect(slotsContainer).toBeInTheDocument();

    // No jewel icons should be rendered
    const jewelIcons = container.querySelectorAll('.rounded-full');
    expect(jewelIcons).toHaveLength(0);
  });

  it('handles missing jewelSlots prop', () => {
    const { container } = render(<JewelSlots />);

    const slotsContainer = container.querySelector('[data-jewel-slots]');
    expect(slotsContainer).toBeInTheDocument();

    // No jewel icons should be rendered
    const jewelIcons = container.querySelectorAll('.rounded-full');
    expect(jewelIcons).toHaveLength(0);
  });

  it('renders slots in correct order', () => {
    const jewelSlots: JewelSlot[] = [
      { jewel: 'React', slotNumber: 1 },
      { jewel: 'TypeScript', slotNumber: 2 },
      { jewel: 'Node.js', slotNumber: 3 },
    ];

    render(<JewelSlots jewelSlots={jewelSlots} />);

    // Check that all jewels are present with correct slot numbers
    expect(screen.getByTitle('React (Slot 1)')).toBeInTheDocument();
    expect(screen.getByTitle('TypeScript (Slot 2)')).toBeInTheDocument();
    expect(screen.getByTitle('Node.js (Slot 3)')).toBeInTheDocument();
  });

  it('applies flexbox layout classes', () => {
    const jewelSlots: JewelSlot[] = [
      { jewel: 'React', slotNumber: 1 },
    ];

    const { container } = render(<JewelSlots jewelSlots={jewelSlots} />);

    const slotsContainer = container.querySelector('[data-jewel-slots]');
    expect(slotsContainer).toHaveClass('flex');
    expect(slotsContainer).toHaveClass('gap-1');
    expect(slotsContainer).toHaveClass('items-center');
  });

  it('handles mixed filled and empty slots', () => {
    const jewelSlots: JewelSlot[] = [
      { jewel: null, slotNumber: 1 },
      { jewel: null, slotNumber: 2 },
      { jewel: 'React', slotNumber: 3 },
      { jewel: null, slotNumber: 4 },
      { jewel: 'TypeScript', slotNumber: 5 },
    ];

    const { container } = render(<JewelSlots jewelSlots={jewelSlots} />);

    // Check filled slots
    expect(screen.getByTitle('React (Slot 3)')).toBeInTheDocument();
    expect(screen.getByTitle('TypeScript (Slot 5)')).toBeInTheDocument();

    // Check empty slots
    expect(container.querySelector('[title="Empty slot 1"]')).toBeInTheDocument();
    expect(container.querySelector('[title="Empty slot 2"]')).toBeInTheDocument();
    expect(container.querySelector('[title="Empty slot 4"]')).toBeInTheDocument();
  });

  it('passes size prop to JewelIcon components', () => {
    const jewelSlots: JewelSlot[] = [
      { jewel: 'React', slotNumber: 1 },
    ];

    const { container } = render(<JewelSlots jewelSlots={jewelSlots} size="sm" />);

    // Check that small size class is applied
    const jewelElement = container.querySelector('.w-4.h-4');
    expect(jewelElement).toBeInTheDocument();
  });

  it('defaults to md size when no size prop provided', () => {
    const jewelSlots: JewelSlot[] = [
      { jewel: 'React', slotNumber: 1 },
    ];

    const { container } = render(<JewelSlots jewelSlots={jewelSlots} />);

    // Check that medium size class is applied by default
    const jewelElement = container.querySelector('.w-6.h-6');
    expect(jewelElement).toBeInTheDocument();
  });
});
