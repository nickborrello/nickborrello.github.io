import { motion } from 'framer-motion';
import CharacterHeader from './CharacterHeader';
import CurrentlyWorking from './CurrentlyWorking';
import type { Character, Project } from '../types';

interface HomePageProps {
  character: Character;
  projects: Project[];
}

export default function HomePage({ character, projects }: HomePageProps) {
  return (
    <div className="min-h-screen text-white">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Character Header */}
        <CharacterHeader character={character} />

        {/* Currently Working Section */}
        <CurrentlyWorking projects={projects} />

        {/* Main Content Area - Welcome/Overview */}
        <motion.div
          className="bg-black/60 backdrop-blur-sm border-2 border-[#8b7355] rounded-lg p-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-[#d4af37] mb-6">Welcome to My Realm</h2>

          <div className="space-y-6 text-gray-300">
            <p className="text-lg leading-relaxed">
              Welcome, adventurer! You've entered the digital realm of a Frontend Mage who transforms
              complex ideas into elegant, interactive experiences. Here you'll find my completed projects,
              ongoing work, and the magical artifacts I've crafted along the way.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#d4af37]/10 border border-[#d4af37]/30 rounded-lg p-4">
                <h3 className="text-xl font-semibold text-[#d4af37] mb-3">🎯 Current Focus</h3>
                <p className="text-sm">
                  Building immersive web experiences with modern technologies like React, TypeScript,
                  and cutting-edge CSS frameworks.
                </p>
              </div>

              <div className="bg-[#d4af37]/10 border border-[#d4af37]/30 rounded-lg p-4">
                <h3 className="text-xl font-semibold text-[#d4af37] mb-3">⚔️ Project Showcase</h3>
                <p className="text-sm">
                  Explore my project showcase to see detailed information about each completed
                  project and the technologies used.
                </p>
              </div>
            </div>

            <div className="text-center pt-4">
              <p className="text-[#d4af37] font-semibold">
                Use the navigation in the bottom left to explore different sections of my portfolio realm!
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}