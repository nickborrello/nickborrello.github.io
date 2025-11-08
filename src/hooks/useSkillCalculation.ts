import { useMemo } from 'react';
import type { Project, TechJewel, SkillProficiency } from '../types';

/**
 * Custom hook to calculate skill proficiency levels based on jewels equipped across projects
 * Following Monster Hunter's jewel/skill system where each jewel adds 1 level to a skill
 * 
 * @param projects - Array of projects that may contain jewelSlots
 * @returns Map of TechJewel to SkillProficiency with calculated levels
 */
export function useSkillCalculation(projects: Project[]): Map<TechJewel, SkillProficiency> {
  return useMemo(() => {
    const jewelCounts = new Map<TechJewel, number>();
    const DEFAULT_MAX_LEVEL = 5;

    // Count all jewels across all projects
    projects.forEach((project) => {
      if (!project.jewelSlots) return;

      project.jewelSlots.forEach((slot) => {
        if (slot.jewel !== null) {
          const currentCount = jewelCounts.get(slot.jewel) || 0;
          jewelCounts.set(slot.jewel, currentCount + 1);
        }
      });
    });

    // Convert counts to SkillProficiency objects, capping at maxLevel
    const proficiencyMap = new Map<TechJewel, SkillProficiency>();
    
    jewelCounts.forEach((count, techName) => {
      const currentLevel = Math.min(count, DEFAULT_MAX_LEVEL);
      proficiencyMap.set(techName, {
        techName,
        currentLevel,
        maxLevel: DEFAULT_MAX_LEVEL,
      });
    });

    return proficiencyMap;
  }, [projects]);
}
