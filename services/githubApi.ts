// GitHub API Service for fetching user activity
export interface GitHubEvent {
  id: string;
  type: string;
  repo: {
    name: string;
    url: string;
  };
  payload: any;
  created_at: string;
}

export interface GitHubCommit {
  sha: string;
  message: string;
  url: string;
  repository: string;
  created_at: string;
}

export interface GitHubActivityMessage {
  id: string;
  message: string;
  type: 'commit' | 'pr' | 'issue' | 'repo' | 'fallback';
  timestamp: string;
  url?: string;
}

class GitHubApiService {
  private baseUrl = 'https://api.github.com';
  private username = 'nickborrello';
  private cacheKey = 'github-activity-cache';
  private cacheExpiryKey = 'github-activity-expiry';
  private cacheDuration = 60 * 60 * 1000; // 1 hour in milliseconds

  private async fetchWithRetry(url: string, retries = 3): Promise<any> {
    for (let i = 0; i < retries; i++) {
      try {
        const response = await fetch(url);
        if (response.status === 403) {
          // Rate limited, wait and retry
          await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1)));
          continue;
        }
        if (!response.ok) {
          throw new Error(`GitHub API error: ${response.status}`);
        }
        return await response.json();
      } catch (error) {
        if (i === retries - 1) throw error;
        await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1)));
      }
    }
  }

  private getCachedData(): GitHubActivityMessage[] | null {
    try {
      const cached = localStorage.getItem(this.cacheKey);
      const expiry = localStorage.getItem(this.cacheExpiryKey);

      if (cached && expiry) {
        const expiryTime = parseInt(expiry);
        if (Date.now() < expiryTime) {
          return JSON.parse(cached);
        }
      }
    } catch (error) {
      console.warn('Failed to read from localStorage:', error);
    }
    return null;
  }

  private setCachedData(data: GitHubActivityMessage[]): void {
    try {
      localStorage.setItem(this.cacheKey, JSON.stringify(data));
      localStorage.setItem(this.cacheExpiryKey, (Date.now() + this.cacheDuration).toString());
    } catch (error) {
      console.warn('Failed to write to localStorage:', error);
    }
  }

  private formatTimeAgo(dateString: string): string {
    const now = new Date();
    const date = new Date(dateString);
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));

    if (diffInHours < 1) return 'just now';
    if (diffInHours < 24) return `${diffInHours}h ago`;
    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 7) return `${diffInDays}d ago`;
    const diffInWeeks = Math.floor(diffInDays / 7);
    if (diffInWeeks < 4) return `${diffInWeeks}w ago`;
    const diffInMonths = Math.floor(diffInDays / 30);
    return `${diffInMonths}mo ago`;
  }

  private processEvent(event: GitHubEvent): GitHubActivityMessage | null {
    const repoName = event.repo.name.replace(`${this.username}/`, '');

    switch (event.type) {
      case 'PushEvent':
        if (event.payload.commits && event.payload.commits.length > 0) {
          const commit = event.payload.commits[0];
          return {
            id: event.id,
            message: `Pushed to ${repoName}: "${commit.message}"`,
            type: 'commit',
            timestamp: this.formatTimeAgo(event.created_at),
            url: `https://github.com/${event.repo.name}/commit/${commit.sha}`
          };
        }
        break;

      case 'PullRequestEvent':
        if (event.payload.pull_request) {
          const pr = event.payload.pull_request;
          const action = event.payload.action;
          return {
            id: event.id,
            message: `${action === 'opened' ? 'Opened' : 'Updated'} PR in ${repoName}: "${pr.title}"`,
            type: 'pr',
            timestamp: this.formatTimeAgo(event.created_at),
            url: pr.html_url
          };
        }
        break;

      case 'IssuesEvent':
        if (event.payload.issue) {
          const issue = event.payload.issue;
          const action = event.payload.action;
          return {
            id: event.id,
            message: `${action === 'opened' ? 'Created' : 'Updated'} issue in ${repoName}: "${issue.title}"`,
            type: 'issue',
            timestamp: this.formatTimeAgo(event.created_at),
            url: issue.html_url
          };
        }
        break;

      case 'CreateEvent':
        if (event.payload.ref_type === 'repository') {
          return {
            id: event.id,
            message: `Created repository: ${repoName}`,
            type: 'repo',
            timestamp: this.formatTimeAgo(event.created_at),
            url: `https://github.com/${event.repo.name}`
          };
        }
        break;
    }

    return null;
  }

  async getRecentActivity(): Promise<GitHubActivityMessage[]> {
    // Check cache first
    const cached = this.getCachedData();
    if (cached) {
      return cached;
    }

    try {
      // Fetch recent events from GitHub API
      const events: GitHubEvent[] = await this.fetchWithRetry(
        `${this.baseUrl}/users/${this.username}/events?per_page=20`
      );

      // Process events into messages
      const messages: GitHubActivityMessage[] = [];
      for (const event of events) {
        const message = this.processEvent(event);
        if (message) {
          messages.push(message);
          if (messages.length >= 10) break; // Limit to 10 messages
        }
      }

      // If we don't have enough messages, add fallbacks
      if (messages.length < 3) {
        messages.push(
          {
            id: 'fallback-1',
            message: 'Always learning, always optimizing.',
            type: 'fallback',
            timestamp: 'recently'
          },
          {
            id: 'fallback-2',
            message: 'Building the future, one commit at a time.',
            type: 'fallback',
            timestamp: 'recently'
          },
          {
            id: 'fallback-3',
            message: 'Code is poetry in motion.',
            type: 'fallback',
            timestamp: 'recently'
          }
        );
      }

      // Cache the results
      this.setCachedData(messages);
      return messages;

    } catch (error) {
      console.error('Failed to fetch GitHub activity:', error);

      // Return fallback messages if API fails
      return [
        {
          id: 'error-fallback-1',
          message: 'Adapting to new challenges daily.',
          type: 'fallback',
          timestamp: 'recently'
        },
        {
          id: 'error-fallback-2',
          message: 'Innovation through iteration.',
          type: 'fallback',
          timestamp: 'recently'
        },
        {
          id: 'error-fallback-3',
          message: 'Crafting digital experiences.',
          type: 'fallback',
          timestamp: 'recently'
        }
      ];
    }
  }
}

export const githubApiService = new GitHubApiService();