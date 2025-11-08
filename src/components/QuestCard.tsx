import { motion } from 'framer-motion';
import type { Quest } from '../types';
import JewelSlots from './JewelSlots';

interface QuestCardProps {
  quest: Quest;
}

export default function QuestCard({ quest }: QuestCardProps) {
  const statusText = quest.status === 'completed' ? 'Completed' : 
                     quest.status === 'in-progress' ? 'In Progress' : 
                     'Available';
  
  const statusColorClass = quest.status === 'completed' ? 'bg-green-900 text-green-300 border-green-600' :
                           quest.status === 'in-progress' ? 'bg-yellow-900 text-yellow-300 border-yellow-600' :
                           'bg-gray-800 text-gray-300 border-gray-600';

  return (
    <motion.article
      className="relative bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] border-2 border-[#8b7355] rounded-lg p-6 shadow-2xl hover:scale-[1.02] transition-transform duration-200"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{ 
        boxShadow: '0 0 20px rgba(212, 175, 55, 0.3)',
      }}
    >
      {/* Status Badge */}
      <div className="absolute top-4 right-4">
        <span className={`px-3 py-1 rounded-full text-xs font-bold border ${statusColorClass}`}>
          {statusText}
        </span>
      </div>

      {/* Quest Title */}
      <h3 className="text-xl font-bold text-[#d4af37] mb-3 pr-24">
        {quest.title}
      </h3>

      {/* Quest Description */}
      <p className="text-gray-300 text-sm mb-4 leading-relaxed">
        {quest.description}
      </p>

      {/* Rewards Section */}
      {quest.rewards && quest.rewards.length > 0 && (
        <div className="mb-4">
          <h4 className="text-xs font-semibold text-[#d4af37] mb-2">REWARDS:</h4>
          <ul className="space-y-1">
            {quest.rewards.map((reward, index) => (
              <li key={index} className="text-xs text-gray-400 flex items-start">
                <span className="text-[#d4af37] mr-2">•</span>
                {reward}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Links Section */}
      <div className="flex gap-3 mb-4">
        {quest.links.live && (
          <a
            href={quest.links.live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs px-3 py-1 bg-[#d4af37] text-black font-semibold rounded hover:bg-[#f0c850] transition-colors"
          >
            🌐 Live Demo
          </a>
        )}
        {quest.links.github && (
          <a
            href={quest.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs px-3 py-1 border border-[#d4af37] text-[#d4af37] font-semibold rounded hover:bg-[#d4af37] hover:text-black transition-colors"
          >
            💻 GitHub
          </a>
        )}
      </div>

      {/* Jewel Slots - Display at bottom if available */}
      {quest.jewelSlots && quest.jewelSlots.length > 0 && (
        <div className="pt-4 border-t border-[#8b7355]/30">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-[#d4af37]">JEWELS:</span>
            <JewelSlots jewelSlots={quest.jewelSlots} />
          </div>
        </div>
      )}

      {/* Decorative corner elements */}
      <div className="absolute top-2 left-2 w-2 h-2 border-l border-t border-[#d4af37] opacity-30" />
      <div className="absolute bottom-2 right-2 w-2 h-2 border-r border-b border-[#d4af37] opacity-30" />
    </motion.article>
  );
}
