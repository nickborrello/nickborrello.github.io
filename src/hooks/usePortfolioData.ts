import { useState, useEffect } from 'react';
import type { PortfolioData } from '../types';

interface UsePortfolioDataResult {
  data: PortfolioData | null;
  loading: boolean;
  error: Error | null;
}

/**
 * Custom hook to fetch and manage portfolio data from data.json
 * 
 * @returns {UsePortfolioDataResult} Object containing data, loading state, and error
 */
export function usePortfolioData(): UsePortfolioDataResult {
  const [data, setData] = useState<PortfolioData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch('/data.json');
        
        if (!response.ok) {
          throw new Error(`Failed to fetch portfolio data: ${response.statusText}`);
        }

        const jsonData: PortfolioData = await response.json();
        
        // Validate data structure
        if (!jsonData.character || !jsonData.stats || !jsonData.skills || !jsonData.quests) {
          throw new Error('Invalid data structure: missing required fields');
        }

        setData(jsonData);
      } catch (err) {
        const errorMessage = err instanceof Error ? err : new Error('Unknown error occurred');
        setError(errorMessage);
        console.error('Error fetching portfolio data:', errorMessage);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
}
