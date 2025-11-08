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
    expect(data).toHaveProperty('projects');

    // Verify character structure
    expect(data?.character).toHaveProperty('name');
    expect(data?.character).toHaveProperty('class');
    expect(data?.character).toHaveProperty('level');
    expect(data?.character).toHaveProperty('bio');
    expect(data?.character).toHaveProperty('avatar');

    // Verify arrays
    expect(Array.isArray(data?.stats)).toBe(true);
    expect(Array.isArray(data?.skills)).toBe(true);
    expect(Array.isArray(data?.projects)).toBe(true);
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

  it('should return projects with correct properties and valid status', async () => {
    const { result } = renderHook(() => usePortfolioData());

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    const { data } = result.current;
    const projects = data?.projects || [];

    expect(projects.length).toBeGreaterThan(0);

    const validStatuses = ['completed', 'in-progress', 'available'];
    
    projects.forEach((project) => {
      expect(project).toHaveProperty('title');
      expect(project).toHaveProperty('description');
      expect(project).toHaveProperty('status');
      expect(project).toHaveProperty('technologies');
      expect(project).toHaveProperty('links');
      expect(project).toHaveProperty('image');
      expect(validStatuses).toContain(project.status);
      expect(Array.isArray(project.technologies)).toBe(true);
      // Check that links object exists (github and live are optional)
      expect(project.links).toBeDefined();
      if (project.links.github) {
        expect(typeof project.links.github).toBe('string');
      }
      if (project.links.live) {
        expect(typeof project.links.live).toBe('string');
      }
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
