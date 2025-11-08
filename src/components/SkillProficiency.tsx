import { motion } from 'framer-motion';
import type { TechJewel } from '../types';

interface SkillProficiencyProps {
  techName: TechJewel;
  currentLevel: number;
  maxLevel: number;
}

export default function SkillProficiency({ 
  techName, 
  currentLevel, 
  maxLevel 
}: SkillProficiencyProps) {
  // Generate arrays for filled and empty pips
  const filledPips = Array.from({ length: currentLevel }, (_, i) => i);
  const emptyPips = Array.from({ length: maxLevel - currentLevel }, (_, i) => i);

  return (
    <motion.div
      className="flex items-center justify-between py-2"
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Tech name on the left */}
      <span className="text-[#d4af37] text-sm font-medium flex-shrink-0">
        {techName}
      </span>

      {/* Pips and level display on the right */}
      <div className="flex items-center gap-3">
        {/* Visual pips */}
        <div 
          className="flex gap-1" 
          data-testid="pips-container"
        >
          {/* Filled pips */}
          {filledPips.map((index) => (
            <div
              key={`filled-${index}`}
              data-testid="filled-pip"
              className="w-2 h-2 bg-[#d4af37] border border-[#d4af37] shadow-sm"
              style={{
                boxShadow: '0 0 4px rgba(212, 175, 55, 0.5)'
              }}
            />
          ))}
          
          {/* Empty pips */}
          {emptyPips.map((index) => (
            <div
              key={`empty-${index}`}
              data-testid="empty-pip"
              className="w-2 h-2 bg-transparent border border-gray-600"
            />
          ))}
        </div>

        {/* Level text */}
        <span className="text-gray-400 text-xs font-mono min-w-[2rem] text-right">
          {currentLevel}/{maxLevel}
        </span>
      </div>
    </motion.div>
  );
}
