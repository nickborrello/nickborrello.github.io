import { useState, useEffect } from 'react';
import type { Project } from '../types';

interface GitHubCommit {
  sha: string;
  commit: {
    author: {
      date: string;
    };
  };
}

interface UseGitHubActivityResult {
  activeProjects: string[]; // Array of project titles currently being worked on
  loading: boolean;
  error: Error | null;
}

/**
 * Custom hook to check GitHub activity for projects
 * Determines which projects are "currently working on" based on recent commits
 *
 * @param projects - Array of project data
 * @param daysThreshold - Number of days to consider as "recent" activity (default: 30)
 * @returns {UseGitHubActivityResult} Object containing active projects, loading state, and error
 */
export function useGitHubActivity(
  projects: Project[],
  daysThreshold: number = 30
): UseGitHubActivityResult {
  const [activeProjects, setActiveProjects] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const checkGitHubActivity = async () => {
      if (!projects.length) return;

      setLoading(true);
      setError(null);

      try {
        const activeProjectTitles: string[] = [];

        // Check each project that has a GitHub link
        for (const project of projects) {
          if (!project.links?.github) continue;

          try {
            // Extract owner/repo from GitHub URL
            const githubUrl = project.links.github;
            const match = githubUrl.match(/github\.com\/([^\/]+)\/([^\/]+)/);
            if (!match) continue;

            const [, owner, repo] = match;

            // Skip obviously placeholder/example repositories
            if (owner === 'example' || repo.includes('example') || 
                owner.includes('placeholder') || repo.includes('placeholder')) {
              // Fall back to manual currentlyWorking flag for placeholder repos
              if (project.currentlyWorking) {
                activeProjectTitles.push(project.title);
              }
              continue;
            }

            // Fetch recent commits from GitHub API
            const response = await fetch(
              `https://api.github.com/repos/${owner}/${repo}/commits?per_page=5`
            );

            if (!response.ok) {
              // If API fails, fall back to manual currentlyWorking flag
              if (project.currentlyWorking) {
                activeProjectTitles.push(project.title);
              }
              continue;
            }

            const commits: GitHubCommit[] = await response.json();

            if (commits.length > 0) {
              // Check if any commits are within the threshold
              const thresholdDate = new Date();
              thresholdDate.setDate(thresholdDate.getDate() - daysThreshold);

              const hasRecentActivity = commits.some(commit => {
                const commitDate = new Date(commit.commit.author.date);
                return commitDate > thresholdDate;
              });

              if (hasRecentActivity) {
                activeProjectTitles.push(project.title);
              }
            }
          } catch (err) {
            // If GitHub API fails for this repo, check manual flag
            console.warn(`Failed to check GitHub activity for ${project.title}:`, err);
            if (project.currentlyWorking) {
              activeProjectTitles.push(project.title);
            }
          }
        }

        setActiveProjects(activeProjectTitles);
      } catch (err) {
        const errorMessage = err instanceof Error ? err : new Error('Unknown error occurred');
        setError(errorMessage);
        console.error('Error checking GitHub activity:', errorMessage);
      } finally {
        setLoading(false);
      }
    };

    checkGitHubActivity();
  }, [projects, daysThreshold]);

  return { activeProjects, loading, error };
}