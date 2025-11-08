import { motion } from 'framer-motion';
import { useState } from 'react';
import { useGitHubActivity } from '../hooks/useGitHubActivity';
import type { Project } from '../types';
import JewelSlots from './JewelSlots';
import SkeletonLoader from './SkeletonLoader';

interface ProjectsPageProps {
  projects: Project[];
  prefersReducedMotion: boolean;
}

export default function ProjectsPage({ projects, prefersReducedMotion }: ProjectsPageProps) {
  // Use GitHub API to check for recent activity (last 30 days)
  const { activeProjects, loading } = useGitHubActivity(projects, 30);
  const [selectedProject, setSelectedProject] = useState<Project | null>(projects[0] || null);

  const hasProjects = projects.length > 0;

  if (loading) {
    return (
      <section className="w-full h-full" data-testid="project-showcase-loading">
        <div className="flex justify-between h-full overflow-hidden">
          {/* Left side: Projects */}
          <div className="w-64 bg-black/60 backdrop-blur-sm border-2 border-[#8b7355] rounded-lg p-6 overflow-y-auto">
            <SkeletonLoader className="h-8 w-3/4 mb-6" />
            <div className="space-y-4">
              {[...Array(3)].map((_, i) => (
                <SkeletonLoader key={i} className="h-20 w-full" />
              ))}
            </div>
          </div>

          {/* Right side: Description and Technologies */}
          <div className="flex gap-6 h-full">
            <div className="w-120 flex flex-col">
              <SkeletonLoader className="h-full w-full" />
            </div>
            <div className="w-80 flex flex-col">
              <SkeletonLoader className="h-full w-full" />
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (!hasProjects) {
    return (
      <motion.div
        className="bg-black/60 backdrop-blur-sm border-2 border-[#8b7355] rounded-lg p-12 text-center max-w-md mx-auto mt-20"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.5 }}
      >
        <p className="text-xl text-gray-500">
          📜 No projects available
        </p>
        <p className="text-sm text-gray-400 mt-2">
          Check back later for new projects!
        </p>
      </motion.div>
    );
  }

  return (
    <section className="w-full h-full" data-testid="project-showcase">
      {/* Layout: Projects on left, Description & Technologies together on right with space between */}
      <div className="flex flex-col md:flex-row justify-between h-full overflow-hidden gap-6">
        {/* Left side: Projects */}
        <div className="w-full md:w-64 bg-black/60 backdrop-blur-sm border-2 border-[#8b7355] rounded-lg p-6 overflow-y-auto">
          <h3 className="text-lg font-semibold text-[#d4af37] mb-6">PROJECTS</h3>
          <div className="space-y-4" role="list">
            {projects.map((project, index) => {
              const isSelected = selectedProject?.title === project.title;

              return (
                <motion.button
                  key={project.title}
                  role="listitem"
                  onClick={() => setSelectedProject(project)}
                  className={`w-full text-left p-3 rounded transition-all duration-200 relative overflow-hidden ${
                    isSelected
                      ? 'bg-gradient-to-r from-yellow-400/20 to-transparent text-yellow-400'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: prefersReducedMotion ? 0 : 0.4, delay: prefersReducedMotion ? 0 : index * 0.1 }}
                >
                  <div className="flex items-center gap-3 mb-2 relative z-10">
                    <h4 className={`font-semibold ${isSelected ? 'text-yellow-400' : 'text-white'}`}>
                      {project.title}
                    </h4>
                  </div>

                  {/* Jewel Icons */}
                  {project.jewelSlots && project.jewelSlots.length > 0 && (
                    <div className="flex flex-wrap gap-1 relative z-10">
                      <JewelSlots jewelSlots={project.jewelSlots} size="sm" />
                    </div>
                  )}
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Right side: Description and Technologies together */}
        <div className="flex flex-col md:flex-row gap-6 h-full">
          {/* Project Details */}
          <div className="w-full md:w-120 flex flex-col">
            {selectedProject && (
              <motion.div
                key={selectedProject.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: prefersReducedMotion ? 0 : 0.4 }}
                className="bg-black/60 backdrop-blur-sm rounded-lg p-6 flex-1 overflow-y-auto"
              >
                <div className="flex flex-col gap-3 mb-4">
                  <h3 className="text-2xl font-bold text-[#d4af37]">
                    {selectedProject.title}
                  </h3>
                  {(activeProjects.includes(selectedProject.title) ||
                    selectedProject.currentlyWorking ||
                    selectedProject.status === 'in-progress') && (
                    <span className="px-3 py-1 bg-[#d4af37] text-black text-sm font-bold rounded-full w-fit">
                      <span aria-hidden="true">⚡</span> Currently Working
                    </span>
                  )}
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {selectedProject.description}
                </p>

                {/* Status */}
                <div className="mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-bold border ${
                    selectedProject.status === 'completed' ? 'bg-green-900 text-green-100 border-green-600' :
                    selectedProject.status === 'in-progress' ? 'bg-yellow-900 text-yellow-100 border-yellow-600' :
                    'bg-gray-800 text-gray-300 border-gray-600'
                  }`}>
                    {selectedProject.status === 'completed' ? 'Completed' :
                     selectedProject.status === 'in-progress' ? 'In Progress' : 'Available'}
                  </span>
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  {selectedProject.links.live && (
                    <a
                      href={selectedProject.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-[#d4af37] text-black font-semibold rounded hover:bg-[#f0c850] transition-colors"
                    >
                      <span aria-hidden="true">🌐</span> Live Demo
                    </a>
                  )}
                  {selectedProject.links.github && (
                    <a
                      href={selectedProject.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 border border-[#d4af37] text-[#d4af37] font-semibold rounded hover:bg-[#d4af37] hover:text-black transition-colors"
                    >
                      <span aria-hidden="true">💻</span> GitHub
                    </a>
                  )}
                </div>
              </motion.div>
            )}
          </div>

          {/* Technologies */}
          <div className="w-full md:w-80 flex flex-col">
            {selectedProject && (
              <motion.div
                key={`${selectedProject.title}-jewels`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: prefersReducedMotion ? 0 : 0.4, delay: prefersReducedMotion ? 0 : 0.1 }}
                className="bg-black/60 backdrop-blur-sm rounded-lg p-6 flex-1 overflow-y-auto"
              >
                <h4 className="text-xl font-bold text-[#d4af37] mb-6 visually-hidden">TECHNOLOGIES</h4>

                {/* Jewel Slots Display */}
                {selectedProject.jewelSlots && selectedProject.jewelSlots.length > 0 && (
                  <div className="space-y-3">
                    {selectedProject.jewelSlots
                      .filter(slot => slot.jewel !== null)
                      .map((slot, index) => (
                      <motion.div
                        key={`${selectedProject.title}-jewel-${slot.slotNumber}`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: prefersReducedMotion ? 0 : 0.3, delay: prefersReducedMotion ? 0 : index * 0.1 }}
                        className="flex items-center gap-3 p-3 bg-[#d4af37]/5 border border-[#d4af37]/20 rounded-lg"
                      >
                        <div className="w-4 h-4 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-sm border border-white/20 shadow-sm"></div>
                        <div className="flex-1">
                          <div className="font-semibold text-white text-sm">{slot.jewel}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
