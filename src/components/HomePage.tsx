import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import CharacterHeader from './CharacterHeader';
import CurrentlyWorking from './CurrentlyWorking';
import ParticlesBackground from './ParticlesBackground';
import type { Character, Project } from '../types';

interface HomePageProps {
  character: Character;
  projects: Project[];
  prefersReducedMotion: boolean;
}

export default function HomePage({ character, projects, prefersReducedMotion }: HomePageProps) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        name: 'Nick Borrello',
        url: 'https://nickborrello.github.io/',
        sameAs: [
          'https://github.com/nickborrello',
          'https://www.linkedin.com/in/nick-borrello/',
        ],
        jobTitle: 'Frontend Developer & Full-Stack Engineer',
        worksFor: {
          '@type': 'Organization',
          name: 'Self-Employed',
        },
      },
      {
        '@type': 'WebSite',
        url: 'https://nickborrello.github.io/',
        name: 'Nick Borrello\'s Portfolio',
        author: {
          '@type': 'Person',
          name: 'Nick Borrello',
        },
        description:
          'The portfolio of Nick Borrello, a frontend developer specializing in React, TypeScript, and modern web development.',
      },
    ],
  };

  return (
    <div className="min-h-screen text-white relative">
      <ParticlesBackground />
      <Helmet>
        <title>Nick Borrello - Frontend Developer & Full-Stack Engineer</title>
        <meta
          name="description"
          content="The portfolio of Nick Borrello, a frontend developer specializing in React, TypeScript, and modern web development."
        />
        <meta property="og:title" content="Nick Borrello - Frontend Developer & Full-Stack Engineer" />
        <meta
          property="og:description"
          content="Explore the portfolio of Nick Borrello, a skilled developer building modern web applications."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nickborrello.github.io/" />
        <meta property="og:image" content="https://nickborrello.github.io/public/bg.png" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Character Header */}
        <CharacterHeader character={character} />

        {/* Currently Working Section */}
        <CurrentlyWorking projects={projects} prefersReducedMotion={prefersReducedMotion} />

        {/* Main Content Area - Welcome/Overview */}
        <motion.div
          className="bg-black/60 backdrop-blur-sm border-2 border-[#8b7355] rounded-lg p-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
        >
          <h2 className="text-3xl font-bold text-[#d4af37] mb-6">Welcome to My Portfolio</h2>

          <div className="space-y-6 text-gray-300">
            <p className="text-lg leading-relaxed">
              Welcome to my portfolio. I'm a frontend developer specializing in React, TypeScript,
              and modern web development. Here you'll find my completed projects, current work,
              and the solutions I've built along the way.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#d4af37]/10 border border-[#d4af37]/30 rounded-lg p-4">
                <h3 className="text-xl font-semibold text-[#d4af37] mb-3">🎯 Current Focus</h3>
                <p className="text-sm">
                  Building modern web applications with cutting-edge technologies like React, TypeScript,
                  and efficient development tools.
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
                Use the navigation in the bottom left to explore different sections of my portfolio!
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}