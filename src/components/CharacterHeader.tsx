import { motion } from 'framer-motion';
import type { Character } from '../types';

interface CharacterHeaderProps {
  character: Character;
}

export default function CharacterHeader({ character }: CharacterHeaderProps) {
  return (
    <motion.div
      className="relative bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] border-2 border-[#d4af37] rounded-lg p-6 shadow-2xl mb-6"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-start gap-6">
        {/* Avatar */}
        <div className="flex-shrink-0">
          <div className="w-24 h-24 border-2 border-[#d4af37] rounded-lg overflow-hidden bg-black">
            <img
              src={character.avatar}
              alt={character.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                // Fallback to a colored div if image fails to load
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
        </div>

        {/* Character Info */}
        <div className="flex-1">
          {/* Name */}
          <h1 className="text-4xl font-bold text-[#d4af37] mb-2 tracking-wide">
            {character.name}
          </h1>

          {/* Class and Level */}
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xl text-[#4ade80] font-semibold">
              {character.class}
            </span>
            <span className="text-gray-500">•</span>
            <span className="text-lg text-gray-400 font-mono">
              Lvl {character.level}
            </span>
          </div>

          {/* Bio */}
          <p className="text-gray-300 leading-relaxed max-w-3xl">
            {character.bio}
          </p>
        </div>
      </div>

      {/* Decorative corner elements */}
      <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-[#d4af37] opacity-50" />
      <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-[#d4af37] opacity-50" />
      <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-[#d4af37] opacity-50" />
      <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-[#d4af37] opacity-50" />
    </motion.div>
  );
}
