import { describe, it, expect } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
    expect(document.body).toBeTruthy();
  });

  it('renders RPG-themed content', () => {
    render(<App />);
    const appElement = screen.getByTestId('app-root');
    expect(appElement).toBeTruthy();
  });

  it('renders QuestLog component in main layout', async () => {
    render(<App />);
    
    // Wait for data to load
    await waitFor(() => {
      const questLogHeaders = screen.queryAllByText(/quest log/i);
      expect(questLogHeaders.length).toBeGreaterThan(0);
    });
  });

  it('renders both StatsPanel and QuestLog components', async () => {
    render(<App />);
    
    // Wait for data to load
    await waitFor(() => {
      // Check for StatsPanel presence (STATS header)
      const statsHeader = screen.getByText('STATS');
      expect(statsHeader).toBeTruthy();
      
      // Check for QuestLog presence
      const questLogHeaders = screen.queryAllByText(/quest log/i);
      expect(questLogHeaders.length).toBeGreaterThan(0);
    });
  });

  it('renders full app structure with header, stats, and quest log', async () => {
    render(<App />);
    
    // Wait for data to load
    await waitFor(() => {
      // Character header should be present - use getByRole to target the h1
      const characterName = screen.getByRole('heading', { name: /nick borrello/i });
      expect(characterName).toBeTruthy();
      
      // Stats panel should be present
      const statsHeader = screen.getByText('STATS');
      expect(statsHeader).toBeTruthy();
      
      // Quest log should be present
      const questLogHeaders = screen.queryAllByText(/quest log/i);
      expect(questLogHeaders.length).toBeGreaterThan(0);
    });
  });

  it('displays quests from data in QuestLog', async () => {
    render(<App />);
    
    // Wait for data to load and check for a quest title from data.json
    await waitFor(() => {
      // Looking for the first quest from data.json
      const questTitle = screen.queryByText(/rpg portfolio overhaul/i);
      expect(questTitle).toBeTruthy();
    });
  });

  it('maintains responsive layout structure', async () => {
    const { container } = render(<App />);
    
    await waitFor(() => {
      const appRoot = container.querySelector('[data-testid="app-root"]');
      expect(appRoot).toBeTruthy();
      
      // Should have character header, stats, and quest log
      expect(screen.getByText('STATS')).toBeTruthy();
      const questLog = container.querySelector('[data-testid="quest-log"]');
      expect(questLog).toBeTruthy();
    });
  });
});
