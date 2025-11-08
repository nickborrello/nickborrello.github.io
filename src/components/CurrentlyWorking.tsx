import { motion } from 'framer-motion';
import { useGitHubActivity } from '../hooks/useGitHubActivity';
import type { Project } from '../types';

interface CurrentlyWorkingProps {
  projects: Project[];
}

export default function CurrentlyWorking({ projects }: CurrentlyWorkingProps) {
  // Use GitHub API to check for recent activity (last 30 days)
  const { activeProjects, loading, error } = useGitHubActivity(projects, 30);

  // Get the actual project objects for active projects
  const activeProjectsList = projects.filter(project =>
    activeProjects.includes(project.title)
  );

  // Show loading state
  if (loading) {
    return (
      <motion.section
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="bg-black/60 backdrop-blur-sm border border-[#d4af37]/30 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <motion.div
              className="w-3 h-3 bg-[#d4af37] rounded-full animate-pulse"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <h2 className="text-2xl font-bold text-[#d4af37]">⚡ Checking GitHub Activity...</h2>
          </div>
          <p className="text-gray-400 text-sm">Scanning recent commits across your projects...</p>
        </div>
      </motion.section>
    );
  }

  // Show error state (but still show manually flagged projects)
  if (error) {
    console.warn('GitHub activity check failed:', error);
    // Fall back to manual currentlyWorking flags
    const fallbackActiveProjects = projects.filter(project =>
      project.currentlyWorking || project.status === 'in-progress'
    );

    if (fallbackActiveProjects.length === 0) {
      return null;
    }

    activeProjectsList.splice(0, activeProjectsList.length, ...fallbackActiveProjects);
  }

  if (activeProjectsList.length === 0) {
    return null; // Don't show section if no active projects
  }

  return (
    <motion.section
      className="mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="bg-gradient-to-r from-[#d4af37]/10 to-[#8b7355]/10 border border-[#d4af37]/30 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <motion.div
            className="w-3 h-3 bg-[#d4af37] rounded-full"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <h2 className="text-2xl font-bold text-[#d4af37]">
            ⚡ Currently Working On
            {error && <span className="text-sm font-normal text-gray-400 ml-2">(using cached data)</span>}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {activeProjectsList.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-black/40 backdrop-blur-sm border border-[#d4af37]/50 rounded-lg p-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="text-lg font-semibold text-[#d4af37] mb-2">
                {project.title}
              </h3>
              <p className="text-gray-300 text-sm mb-3 line-clamp-2">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-1 mb-3">
                {project.technologies.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-[#d4af37]/20 text-[#d4af37] text-xs rounded border border-[#d4af37]/30"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 4 && (
                  <span className="text-xs text-gray-400">
                    +{project.technologies.length - 4} more
                  </span>
                )}
              </div>

              {/* Links */}
              <div className="flex gap-2">
                {project.links.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs px-3 py-1 bg-[#d4af37] text-black font-semibold rounded hover:bg-[#f0c850] transition-colors"
                  >
                    🌐 Live
                  </a>
                )}
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs px-3 py-1 border border-[#d4af37] text-[#d4af37] font-semibold rounded hover:bg-[#d4af37] hover:text-black transition-colors"
                  >
                    💻 Code
                  </a>
                )}
              </div>

              {/* Activity indicator */}
              <div className="mt-3 flex items-center gap-2 text-xs text-green-400">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Recent activity detected</span>
              </div>

              {/* Last commit info if available */}
              {project.lastCommit && (
                <div className="mt-2 text-xs text-gray-400">
                  Last updated: {new Date(project.lastCommit).toLocaleDateString()}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}