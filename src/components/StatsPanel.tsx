import { motion } from 'framer-motion';
import type { Stat } from '../types';
import StatBar from './StatBar';

interface StatsPanelProps {
  stats: Stat[];
}

export default function StatsPanel({ stats }: StatsPanelProps) {
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

      {/* Decorative corner elements */}
      <div className="absolute top-2 left-2 w-3 h-3 border-l-2 border-t-2 border-[#d4af37] opacity-50" />
      <div className="absolute top-2 right-2 w-3 h-3 border-r-2 border-t-2 border-[#d4af37] opacity-50" />
      <div className="absolute bottom-2 left-2 w-3 h-3 border-l-2 border-b-2 border-[#d4af37] opacity-50" />
      <div className="absolute bottom-2 right-2 w-3 h-3 border-r-2 border-b-2 border-[#d4af37] opacity-50" />
    </motion.aside>
  );
}
