import { describe, it, expect, beforeEach, vi } from 'vitest';
import { renderHook, waitFor } from '@testing-library/react';
import { usePortfolioData } from '../hooks/usePortfolioData';

describe('usePortfolioData Hook', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    vi.clearAllMocks();
  });

  it('should start with loading state', () => {
    const { result } = renderHook(() => usePortfolioData());

    expect(result.current.loading).toBe(true);
    expect(result.current.data).toBeNull();
    expect(result.current.error).toBeNull();
  });

  it('should fetch and return portfolio data successfully', async () => {
    const { result } = renderHook(() => usePortfolioData());

    // Wait for the data to be loaded
    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.data).toBeDefined();
    expect(result.current.data).not.toBeNull();
    expect(result.current.error).toBeNull();
  });

  it('should return data with correct structure', async () => {
    const { result } = renderHook(() => usePortfolioData());

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    const { data } = result.current;

    expect(data).toHaveProperty('character');
    expect(data).toHaveProperty('stats');
    expect(data).toHaveProperty('skills');
    expect(data).toHaveProperty('quests');

    // Verify character structure
    expect(data?.character).toHaveProperty('name');
    expect(data?.character).toHaveProperty('class');
    expect(data?.character).toHaveProperty('level');
    expect(data?.character).toHaveProperty('bio');
    expect(data?.character).toHaveProperty('avatar');

    // Verify arrays
    expect(Array.isArray(data?.stats)).toBe(true);
    expect(Array.isArray(data?.skills)).toBe(true);
    expect(Array.isArray(data?.quests)).toBe(true);
  });

  it('should return stats with correct properties', async () => {
    const { result } = renderHook(() => usePortfolioData());

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    const { data } = result.current;
    const stats = data?.stats || [];

    expect(stats.length).toBeGreaterThan(0);
    
    stats.forEach((stat) => {
      expect(stat).toHaveProperty('name');
      expect(stat).toHaveProperty('value');
      expect(stat).toHaveProperty('maxValue');
      expect(stat).toHaveProperty('description');
      expect(stat).toHaveProperty('icon');
      expect(typeof stat.value).toBe('number');
      expect(typeof stat.maxValue).toBe('number');
    });
  });

  it('should return skills with correct properties and valid rarity', async () => {
    const { result } = renderHook(() => usePortfolioData());

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    const { data } = result.current;
    const skills = data?.skills || [];

    expect(skills.length).toBeGreaterThan(0);

    const validRarities = ['common', 'rare', 'epic', 'legendary'];
    
    skills.forEach((skill) => {
      expect(skill).toHaveProperty('name');
      expect(skill).toHaveProperty('category');
      expect(skill).toHaveProperty('level');
      expect(skill).toHaveProperty('description');
      expect(skill).toHaveProperty('icon');
      expect(skill).toHaveProperty('rarity');
      expect(validRarities).toContain(skill.rarity);
      expect(typeof skill.level).toBe('number');
    });
  });

  it('should return quests with correct properties and valid status', async () => {
    const { result } = renderHook(() => usePortfolioData());

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    const { data } = result.current;
    const quests = data?.quests || [];

    expect(quests.length).toBeGreaterThan(0);

    const validStatuses = ['completed', 'in-progress', 'available'];
    
    quests.forEach((quest) => {
      expect(quest).toHaveProperty('title');
      expect(quest).toHaveProperty('description');
      expect(quest).toHaveProperty('status');
      expect(quest).toHaveProperty('rewards');
      expect(quest).toHaveProperty('technologies');
      expect(quest).toHaveProperty('links');
      expect(quest).toHaveProperty('image');
      expect(validStatuses).toContain(quest.status);
      expect(Array.isArray(quest.rewards)).toBe(true);
      expect(Array.isArray(quest.technologies)).toBe(true);
      expect(quest.links).toHaveProperty('live');
      expect(quest.links).toHaveProperty('github');
    });
  });

  it('should handle errors gracefully', async () => {
    // Mock fetch to simulate an error
    global.fetch = vi.fn().mockRejectedValueOnce(new Error('Network error'));

    const { result } = renderHook(() => usePortfolioData());

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.error).toBeDefined();
    expect(result.current.error).not.toBeNull();
    expect(result.current.data).toBeNull();
  });
});
