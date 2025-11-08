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

    const { container } = render(<JewelSlots jewelSlots={jewelSlots} />);

    const slots = container.querySelectorAll('[data-slot]');
    expect(slots).toHaveLength(3);
  });

  it('shows filled slots for jewels', () => {
    const jewelSlots: JewelSlot[] = [
      { jewel: 'React', slotNumber: 1 },
      { jewel: 'TypeScript', slotNumber: 2 },
    ];

    render(<JewelSlots jewelSlots={jewelSlots} />);

    expect(screen.getByTitle('React')).toBeInTheDocument();
    expect(screen.getByTitle('TypeScript')).toBeInTheDocument();
  });

  it('shows empty slots for null jewels', () => {
    const jewelSlots: JewelSlot[] = [
      { jewel: 'React', slotNumber: 1 },
      { jewel: null, slotNumber: 2 },
      { jewel: 'TypeScript', slotNumber: 3 },
    ];

    const { container } = render(<JewelSlots jewelSlots={jewelSlots} />);

    const emptySlots = container.querySelectorAll('[data-slot-empty="true"]');
    expect(emptySlots).toHaveLength(1);

    const filledSlots = container.querySelectorAll('[data-tech]');
    expect(filledSlots).toHaveLength(2);
  });

  it('handles empty jewelSlots array', () => {
    const { container } = render(<JewelSlots jewelSlots={[]} />);

    const slots = container.querySelectorAll('[data-slot]');
    expect(slots).toHaveLength(0);

    // Should render container but no slots
    const slotsContainer = container.querySelector('[data-jewel-slots]');
    expect(slotsContainer).toBeInTheDocument();
  });

  it('handles undefined jewelSlots', () => {
    const { container } = render(<JewelSlots jewelSlots={undefined} />);

    // Should render nothing or empty state
    const slotsContainer = container.querySelector('[data-jewel-slots]');
    expect(slotsContainer).toBeInTheDocument();

    const slots = container.querySelectorAll('[data-slot]');
    expect(slots).toHaveLength(0);
  });

  it('handles missing jewelSlots prop', () => {
    const { container } = render(<JewelSlots />);

    const slotsContainer = container.querySelector('[data-jewel-slots]');
    expect(slotsContainer).toBeInTheDocument();
  });

  it('renders slots in correct order', () => {
    const jewelSlots: JewelSlot[] = [
      { jewel: 'React', slotNumber: 1 },
      { jewel: 'TypeScript', slotNumber: 2 },
      { jewel: 'Node.js', slotNumber: 3 },
    ];

    const { container } = render(<JewelSlots jewelSlots={jewelSlots} />);

    const slots = container.querySelectorAll('[data-slot]');
    expect(slots[0]).toHaveAttribute('data-slot', '1');
    expect(slots[1]).toHaveAttribute('data-slot', '2');
    expect(slots[2]).toHaveAttribute('data-slot', '3');
  });

  it('applies flexbox layout classes', () => {
    const jewelSlots: JewelSlot[] = [
      { jewel: 'React', slotNumber: 1 },
    ];

    const { container } = render(<JewelSlots jewelSlots={jewelSlots} />);

    const slotsContainer = container.querySelector('[data-jewel-slots]');
    expect(slotsContainer).toHaveClass('flex');
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

    const emptySlots = container.querySelectorAll('[data-slot-empty="true"]');
    expect(emptySlots).toHaveLength(3);

    const filledSlots = container.querySelectorAll('[data-tech]');
    expect(filledSlots).toHaveLength(2);
  });
});
