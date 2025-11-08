/**
 * Utility functions for GitHub API integration
 * Used to determine which projects are currently being worked on
 */

export interface GitHubCommit {
  sha: string;
  commit: {
    author: {
      date: string;
    };
  };
}

export interface GitHubRepoActivity {
  hasRecentActivity: boolean;
  lastCommitDate: Date | null;
  commitCount: number;
}

/**
 * Check if a GitHub repository has recent activity
 * @param owner - GitHub username/organization
 * @param repo - Repository name
 * @param daysThreshold - Number of days to consider as "recent" (default: 30)
 * @returns Promise<GitHubRepoActivity>
 */
export async function checkGitHubActivity(
  owner: string,
  repo: string,
  daysThreshold: number = 30
): Promise<GitHubRepoActivity> {
  try {
    // GitHub API endpoint for recent commits
    const response = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/commits?per_page=10`,
      {
        headers: {
          // Optional: Add GitHub token for higher rate limits
          // 'Authorization': `token ${process.env.GITHUB_TOKEN}`,
          'Accept': 'application/vnd.github.v3+json',
        },
      }
    );

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const commits: GitHubCommit[] = await response.json();

    if (commits.length === 0) {
      return {
        hasRecentActivity: false,
        lastCommitDate: null,
        commitCount: 0,
      };
    }

    // Check if any commits are within the threshold
    const thresholdDate = new Date();
    thresholdDate.setDate(thresholdDate.getDate() - daysThreshold);

    const recentCommits = commits.filter(commit => {
      const commitDate = new Date(commit.commit.author.date);
      return commitDate > thresholdDate;
    });

    const lastCommitDate = new Date(commits[0].commit.author.date);

    return {
      hasRecentActivity: recentCommits.length > 0,
      lastCommitDate,
      commitCount: recentCommits.length,
    };
  } catch (error) {
    console.error(`Failed to check GitHub activity for ${owner}/${repo}:`, error);
    // Return safe defaults on error
    return {
      hasRecentActivity: false,
      lastCommitDate: null,
      commitCount: 0,
    };
  }
}

/**
 * Extract owner and repo from GitHub URL
 * @param githubUrl - Full GitHub URL
 * @returns Object with owner and repo, or null if invalid
 */
export function parseGitHubUrl(githubUrl: string): { owner: string; repo: string } | null {
  const match = githubUrl.match(/github\.com\/([^\/]+)\/([^\/]+)/);
  if (!match) return null;

  const [, owner, repo] = match;
  return { owner, repo };
}

/**
 * Example usage in a React component:
 *
 * ```tsx
 * const [activeProjects, setActiveProjects] = useState<string[]>([]);
 *
 * useEffect(() => {
 *   const checkActivity = async () => {
 *     const active: string[] = [];
 *
 *     for (const quest of quests) {
 *       if (quest.links.github) {
 *         const repoInfo = parseGitHubUrl(quest.links.github);
 *         if (repoInfo) {
 *           const activity = await checkGitHubActivity(repoInfo.owner, repoInfo.repo);
 *           if (activity.hasRecentActivity) {
 *             active.push(quest.title);
 *           }
 *         }
 *       }
 *     }
 *
 *     setActiveProjects(active);
 *   };
 *
 *   checkActivity();
 * }, [quests]);
 * ```
 */