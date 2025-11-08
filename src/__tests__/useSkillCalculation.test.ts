import { describe, it, expect } from 'vitest';
import { renderHook } from '@testing-library/react';
import { useSkillCalculation } from '../hooks/useSkillCalculation';
import type { Project } from '../types';

describe('useSkillCalculation Hook', () => {
  it('should return empty map when no projects are provided', () => {
    const { result } = renderHook(() => useSkillCalculation([]));
    
    expect(result.current.size).toBe(0);
  });

  it('should calculate proficiency from a single jewel', () => {
    const projects: Project[] = [
      {
        title: 'Test Project',
        description: 'A test project',
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

    const { result } = renderHook(() => useSkillCalculation(projects));
    
    expect(result.current.size).toBe(1);
    expect(result.current.get('React')).toEqual({
      techName: 'React',
      currentLevel: 1,
      maxLevel: 5
    });
  });

  it('should calculate proficiency from multiple jewels across projects', () => {
    const projects: Project[] = [
      {
        title: 'Project 1',
        description: 'First project',
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
        title: 'Project 2',
        description: 'Second project',
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

    const { result } = renderHook(() => useSkillCalculation(projects));
    
    expect(result.current.size).toBe(1);
    expect(result.current.get('React')).toEqual({
      techName: 'React',
      currentLevel: 3,
      maxLevel: 5
    });
  });

  it('should cap proficiency at max level', () => {
    const projects: Project[] = [
      {
        title: 'Project with many React jewels',
        description: 'A project',
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

    const { result } = renderHook(() => useSkillCalculation(projects));
    
    expect(result.current.get('React')).toEqual({
      techName: 'React',
      currentLevel: 5,
      maxLevel: 5
    });
  });

  it('should calculate proficiency for multiple tech types simultaneously', () => {
    const projects: Project[] = [
      {
        title: 'Multi-tech Project',
        description: 'A project with multiple technologies',
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

    const { result } = renderHook(() => useSkillCalculation(projects));
    
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
    const projects: Project[] = [
      {
        title: 'Project with empty slots',
        description: 'A project',
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

    const { result } = renderHook(() => useSkillCalculation(projects));
    
    expect(result.current.size).toBe(1);
    expect(result.current.get('React')).toEqual({
      techName: 'React',
      currentLevel: 2,
      maxLevel: 5
    });
  });

  it('should handle projects without jewelSlots property', () => {
    const projects: Project[] = [
      {
        title: 'Project without jewels',
        description: 'A project',
        status: 'completed',
        rewards: [],
        technologies: ['React'],
        links: { live: '', github: '' },
        image: ''
        // No jewelSlots property
      }
    ];

    const { result } = renderHook(() => useSkillCalculation(projects));
    
    expect(result.current.size).toBe(0);
  });

  it('should recalculate when projects change', () => {
    const initialProjects: Project[] = [
      {
        title: 'Project 1',
        description: 'First project',
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
      ({ projects }) => useSkillCalculation(projects),
      { initialProps: { projects: initialProjects } }
    );
    
    expect(result.current.get('React')?.currentLevel).toBe(1);

    // Add more projects
    const updatedProjects: Project[] = [
      ...initialProjects,
      {
        title: 'Project 2',
        description: 'Second project',
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

    rerender({ projects: updatedProjects });
    
    expect(result.current.get('React')?.currentLevel).toBe(3);
  });
});
