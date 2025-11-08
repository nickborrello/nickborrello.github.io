import { motion } from 'framer-motion';
import type { Stat } from '../types';
import StatBar from './StatBar';
import SkillProficiency from './SkillProficiency';
import { usePortfolioData } from '../hooks/usePortfolioData';
import { useSkillCalculation } from '../hooks/useSkillCalculation';

interface StatsPanelProps {
  stats: Stat[];
}

export default function StatsPanel({ stats }: StatsPanelProps) {
  // Get portfolio data to access quests
  const { data } = usePortfolioData();
  
  // Calculate proficiency from jewels in quests
  const proficiencyMap = useSkillCalculation(data?.quests || []);
  
  // Convert proficiency map to sorted array (highest level first, then alphabetically)
  const proficiencies = Array.from(proficiencyMap.values()).sort((a, b) => {
    if (b.currentLevel !== a.currentLevel) {
      return b.currentLevel - a.currentLevel;
    }
    return a.techName.localeCompare(b.techName);
  });
  
  const hasProficiencies = proficiencies.length > 0;

  return (
    <motion.aside
      className="relative bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] border-2 border-[#d4af37] rounded-lg p-5 shadow-2xl h-fit sticky top-6"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {/* Panel Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-[#d4af37] tracking-wide border-b-2 border-[#d4af37] pb-2">
          STATS
        </h2>
      </div>

      {/* Stats List */}
      <div className="space-y-4">
        {stats.length === 0 ? (
          <p className="text-gray-500 text-sm text-center py-4">No stats available</p>
        ) : (
          stats.map((stat, index) => (
            <motion.div
              key={stat.name}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
            >
              <StatBar
                name={stat.name}
                value={stat.value}
                maxValue={stat.maxValue}
                description={stat.description}
                icon={stat.icon}
              />
            </motion.div>
          ))
        )}
      </div>

      {/* Proficiency Section - Only show if there are proficiencies */}
      {hasProficiencies && (
        <>
          {/* Section Divider */}
          <motion.div
            data-testid="proficiency-divider"
            className="my-6 border-t border-[#d4af37] opacity-30"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 0.3, scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          />

          {/* Proficiency Header */}
          <motion.div
            className="mb-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
          >
            <h3 className="text-lg font-bold text-[#d4af37] tracking-wide">
              PROFICIENCY
            </h3>
          </motion.div>

          {/* Proficiency List */}
          <div className="space-y-1">
            {proficiencies.map((proficiency, index) => (
              <motion.div
                key={proficiency.techName}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.7 + index * 0.05 }}
              >
                <SkillProficiency
                  techName={proficiency.techName}
                  currentLevel={proficiency.currentLevel}
                  maxLevel={proficiency.maxLevel}
                />
              </motion.div>
            ))}
          </div>
        </>
      )}

      {/* Decorative corner elements */}
      <div className="absolute top-2 left-2 w-3 h-3 border-l-2 border-t-2 border-[#d4af37] opacity-50" />
      <div className="absolute top-2 right-2 w-3 h-3 border-r-2 border-t-2 border-[#d4af37] opacity-50" />
      <div className="absolute bottom-2 left-2 w-3 h-3 border-l-2 border-b-2 border-[#d4af37] opacity-50" />
      <div className="absolute bottom-2 right-2 w-3 h-3 border-r-2 border-b-2 border-[#d4af37] opacity-50" />
    </motion.aside>
  );
}
