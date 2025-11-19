'use client';

import { useEffect, useState } from 'react';
import { getLatestActivity } from '../../services/github';
import styles from './MessageOfTheDay.module.css';

interface GitHubEvent {
  type: string;
  repo?: {
    name: string;
  };
}

export default function MessageOfTheDay() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activity, setActivity] = useState<GitHubEvent | null>(null);

  useEffect(() => {
    const fetchActivity = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await getLatestActivity('octocat');
        if (data) {
          setActivity(data);
        } else {
          setError('No activity found');
        }
      } catch {
        setError('Failed to fetch dispatch.');
      } finally {
        setLoading(false);
      }
    };
    fetchActivity();
  }, []);

  if (loading) {
    return <div className={styles.container}>Fetching latest dispatch...</div>;
  }

  if (error) {
    return <div className={styles.container}>Failed to fetch dispatch.</div>;
  }

  if (activity) {
    let message = '';
    if (activity.type === 'PushEvent') {
      message = `Latest dispatch: Pushed to ${activity.repo.name}`;
    } else {
      message = `Latest dispatch: ${activity.type}`;
    }
    return <div className={styles.container}>{message}</div>;
  }

  return null;
}