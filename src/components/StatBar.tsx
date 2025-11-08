import { motion } from 'framer-motion';

interface StatBarProps {
  name: string;
  value: number;
  maxValue: number;
  description: string;
  icon?: string;
}

export default function StatBar({ name, value, maxValue, description, icon }: StatBarProps) {
  const percentage = (value / maxValue) * 100;

  return (
    <div className="mb-3" title={description}>
      {/* Stat name and value */}
      <div className="flex items-center justify-between mb-1 text-sm">
        <div className="flex items-center gap-2">
          {icon && <span className="text-base">{icon}</span>}
          <span className="text-[#d4af37] font-semibold">{name}</span>
        </div>
        <span className="text-gray-400 text-xs">{value}</span>
      </div>

      {/* Progress bar container */}
      <div className="relative h-5 bg-black border border-[#d4af37] rounded overflow-hidden">
        {/* Animated progress bar fill */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-[#4ade80] to-[#22c55e]"
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1, ease: 'easeOut' }}
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin={0}
          aria-valuemax={maxValue}
          aria-label={`${name}: ${value} out of ${maxValue}`}
        />

        {/* Inner border glow effect */}
        <div className="absolute inset-0 border-2 border-[#d4af37] opacity-30 rounded pointer-events-none" />
      </div>
    </div>
  );
}
