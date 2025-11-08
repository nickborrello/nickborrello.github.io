import { motion } from 'framer-motion';
import type { Quest } from '../types';
import QuestCard from './QuestCard';

interface QuestLogProps {
  quests: Quest[];
}

export default function QuestLog({ quests }: QuestLogProps) {
  const hasQuests = quests.length > 0;

  return (
    <section className="w-full" data-testid="quest-log">
      {/* Section Header */}
      <motion.div
        className="mb-6"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-[#d4af37] tracking-wide border-b-2 border-[#d4af37] pb-3 flex items-center justify-between">
          <span>⚔️ QUEST LOG</span>
          {hasQuests && (
            <span className="text-lg font-normal text-gray-400">
              {quests.length} {quests.length === 1 ? 'Quest' : 'Quests'}
            </span>
          )}
        </h2>
      </motion.div>

      {/* Quest Cards Grid or Empty State */}
      {hasQuests ? (
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {quests.map((quest, index) => (
            <motion.div
              key={`${quest.title}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
            >
              <QuestCard quest={quest} />
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <motion.div
          className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] border-2 border-[#8b7355] rounded-lg p-12 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xl text-gray-500">
            📜 No quests available
          </p>
          <p className="text-sm text-gray-600 mt-2">
            Check back later for new adventures!
          </p>
        </motion.div>
      )}
    </section>
  );
}
