import { describe, it, expect } from 'vitest';
import { renderHook } from '@testing-library/react';
import { useSkillCalculation } from '../hooks/useSkillCalculation';
import type { Quest } from '../types';

describe('useSkillCalculation Hook', () => {
  it('should return empty map when no quests are provided', () => {
    const { result } = renderHook(() => useSkillCalculation([]));
    
    expect(result.current.size).toBe(0);
  });

  it('should calculate proficiency from a single jewel', () => {
    const quests: Quest[] = [
      {
        title: 'Test Quest',
        description: 'A test quest',
        status: 'completed',
        rewards: ['Test reward'],
        technologies: ['React'],
        links: { live: '', github: '' },
        image: '',
        jewelSlots: [
          { jewel: 'React', slotNumber: 1 }
        ]
      }
    ];

    const { result } = renderHook(() => useSkillCalculation(quests));
    
    expect(result.current.size).toBe(1);
    expect(result.current.get('React')).toEqual({
      techName: 'React',
      currentLevel: 1,
      maxLevel: 5
    });
  });

  it('should calculate proficiency from multiple jewels across projects', () => {
    const quests: Quest[] = [
      {
        title: 'Quest 1',
        description: 'First quest',
        status: 'completed',
        rewards: [],
        technologies: ['React'],
        links: { live: '', github: '' },
        image: '',
        jewelSlots: [
          { jewel: 'React', slotNumber: 1 },
          { jewel: 'React', slotNumber: 2 }
        ]
      },
      {
        title: 'Quest 2',
        description: 'Second quest',
        status: 'completed',
        rewards: [],
        technologies: ['React'],
        links: { live: '', github: '' },
        image: '',
        jewelSlots: [
          { jewel: 'React', slotNumber: 1 }
        ]
      }
    ];

    const { result } = renderHook(() => useSkillCalculation(quests));
    
    expect(result.current.size).toBe(1);
    expect(result.current.get('React')).toEqual({
      techName: 'React',
      currentLevel: 3,
      maxLevel: 5
    });
  });

  it('should cap proficiency at max level', () => {
    const quests: Quest[] = [
      {
        title: 'Quest with many React jewels',
        description: 'A quest',
        status: 'completed',
        rewards: [],
        technologies: ['React'],
        links: { live: '', github: '' },
        image: '',
        jewelSlots: [
          { jewel: 'React', slotNumber: 1 },
          { jewel: 'React', slotNumber: 2 },
          { jewel: 'React', slotNumber: 3 },
          { jewel: 'React', slotNumber: 4 },
          { jewel: 'React', slotNumber: 5 },
          { jewel: 'React', slotNumber: 6 }
        ]
      }
    ];

    const { result } = renderHook(() => useSkillCalculation(quests));
    
    expect(result.current.get('React')).toEqual({
      techName: 'React',
      currentLevel: 5,
      maxLevel: 5
    });
  });

  it('should calculate proficiency for multiple tech types simultaneously', () => {
    const quests: Quest[] = [
      {
        title: 'Multi-tech Quest',
        description: 'A quest with multiple technologies',
        status: 'completed',
        rewards: [],
        technologies: ['React', 'TypeScript', 'Node.js'],
        links: { live: '', github: '' },
        image: '',
        jewelSlots: [
          { jewel: 'React', slotNumber: 1 },
          { jewel: 'React', slotNumber: 2 },
          { jewel: 'TypeScript', slotNumber: 3 },
          { jewel: 'Node.js', slotNumber: 4 }
        ]
      }
    ];

    const { result } = renderHook(() => useSkillCalculation(quests));
    
    expect(result.current.size).toBe(3);
    expect(result.current.get('React')).toEqual({
      techName: 'React',
      currentLevel: 2,
      maxLevel: 5
    });
    expect(result.current.get('TypeScript')).toEqual({
      techName: 'TypeScript',
      currentLevel: 1,
      maxLevel: 5
    });
    expect(result.current.get('Node.js')).toEqual({
      techName: 'Node.js',
      currentLevel: 1,
      maxLevel: 5
    });
  });

  it('should ignore null jewels in slots', () => {
    const quests: Quest[] = [
      {
        title: 'Quest with empty slots',
        description: 'A quest',
        status: 'completed',
        rewards: [],
        technologies: ['React'],
        links: { live: '', github: '' },
        image: '',
        jewelSlots: [
          { jewel: 'React', slotNumber: 1 },
          { jewel: null, slotNumber: 2 },
          { jewel: 'React', slotNumber: 3 }
        ]
      }
    ];

    const { result } = renderHook(() => useSkillCalculation(quests));
    
    expect(result.current.size).toBe(1);
    expect(result.current.get('React')).toEqual({
      techName: 'React',
      currentLevel: 2,
      maxLevel: 5
    });
  });

  it('should handle quests without jewelSlots property', () => {
    const quests: Quest[] = [
      {
        title: 'Quest without jewels',
        description: 'A quest',
        status: 'completed',
        rewards: [],
        technologies: ['React'],
        links: { live: '', github: '' },
        image: ''
        // No jewelSlots property
      }
    ];

    const { result } = renderHook(() => useSkillCalculation(quests));
    
    expect(result.current.size).toBe(0);
  });

  it('should recalculate when quests change', () => {
    const initialQuests: Quest[] = [
      {
        title: 'Quest 1',
        description: 'First quest',
        status: 'completed',
        rewards: [],
        technologies: ['React'],
        links: { live: '', github: '' },
        image: '',
        jewelSlots: [
          { jewel: 'React', slotNumber: 1 }
        ]
      }
    ];

    const { result, rerender } = renderHook(
      ({ quests }) => useSkillCalculation(quests),
      { initialProps: { quests: initialQuests } }
    );
    
    expect(result.current.get('React')?.currentLevel).toBe(1);

    // Add more quests
    const updatedQuests: Quest[] = [
      ...initialQuests,
      {
        title: 'Quest 2',
        description: 'Second quest',
        status: 'completed',
        rewards: [],
        technologies: ['React'],
        links: { live: '', github: '' },
        image: '',
        jewelSlots: [
          { jewel: 'React', slotNumber: 1 },
          { jewel: 'React', slotNumber: 2 }
        ]
      }
    ];

    rerender({ quests: updatedQuests });
    
    expect(result.current.get('React')?.currentLevel).toBe(3);
  });
});
