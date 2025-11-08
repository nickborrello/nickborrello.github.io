import { useMemo } from 'react';
import type { Quest, TechJewel, SkillProficiency } from '../types';

/**
 * Custom hook to calculate skill proficiency levels based on jewels equipped across quests
 * Following Monster Hunter's jewel/skill system where each jewel adds 1 level to a skill
 * 
 * @param quests - Array of quests that may contain jewelSlots
 * @returns Map of TechJewel to SkillProficiency with calculated levels
 */
export function useSkillCalculation(quests: Quest[]): Map<TechJewel, SkillProficiency> {
  return useMemo(() => {
    const jewelCounts = new Map<TechJewel, number>();
    const DEFAULT_MAX_LEVEL = 5;

    // Count all jewels across all quests
    quests.forEach((quest) => {
      if (!quest.jewelSlots) return;

      quest.jewelSlots.forEach((slot) => {
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
  }, [quests]);
}
