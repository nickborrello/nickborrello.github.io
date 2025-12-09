import { useState, useEffect } from 'react';

interface CommitEvent {
    id: string;
    repo: {
        name: string;
        url: string;
    };
    payload: {
        commits: Array<{
            sha: string;
            message: string;
            url: string;
        }>;
    };
    created_at: string;
}

export interface FormattedCommit {
    id: string;
    repoName: string;
    message: string;
    date: string;
    url: string;
}

export const useGitHubCommits = (username: string, limit: number = 5) => {
    const [commits, setCommits] = useState<FormattedCommit[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const CACHE_KEY = `github_commits_v2_${username}`;
        const CACHE_DURATION = 15 * 60 * 1000; // 15 minutes

        const fetchCommits = async () => {
            const cached = localStorage.getItem(CACHE_KEY);
            if (cached) {
                const { data, timestamp } = JSON.parse(cached);
                if (Date.now() - timestamp < CACHE_DURATION) {
                    setCommits(data);
                    setLoading(false);
                    return;
                }
            }

            try {
                const response = await fetch(`https://api.github.com/users/${username}/events/public`);

                if (response.status === 403 || response.status === 429) {
                    setError('Rate Limit Exceeded (60/hr)');
                    // Fallback to cache if available even if expired
                    if (cached) {
                        setCommits(JSON.parse(cached).data);
                        setError(null); // Hide error if we have stale data
                    } else {
                        setLoading(false);
                    }
                    return;
                }

                if (!response.ok) {
                    throw new Error(`GitHub API Error: ${response.status}`);
                }

                const data = await response.json();

                // Filter for PushEvents
                const pushEvents = data.filter((event: any) => event.type === 'PushEvent');

                // Extract commits from PushEvents
                const extractedCommits: FormattedCommit[] = [];

                for (const event of pushEvents) {
                    if (extractedCommits.length >= limit) break;

                    const evt = event as CommitEvent;

                    if (!evt.payload?.commits) continue;

                    const reverseCommits = [...evt.payload.commits].reverse();

                    for (const commit of reverseCommits) {
                        if (extractedCommits.length >= limit) break;

                        extractedCommits.push({
                            id: commit.sha,
                            repoName: evt.repo.name,
                            message: commit.message,
                            date: evt.created_at,
                            url: `https://github.com/${evt.repo.name}/commit/${commit.sha}`
                        });
                    }
                }

                setCommits(extractedCommits);
                localStorage.setItem(CACHE_KEY, JSON.stringify({
                    data: extractedCommits,
                    timestamp: Date.now()
                }));
                setLoading(false);
            } catch (err) {
                console.error("GitHub API Error:", err);
                setError('Connection Failed');
                // Fallback to cache if available
                if (cached) {
                    setCommits(JSON.parse(cached).data);
                    setError(null);
                }
                setLoading(false);
            }
        };

        fetchCommits();
    }, [username, limit]);

    return { commits, loading, error };
};
