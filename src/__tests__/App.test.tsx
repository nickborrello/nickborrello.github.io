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

  it('renders HomePage component by default', async () => {
    render(<App />);
    
    // Wait for data to load - now checking for HomePage content
    await waitFor(() => {
      const welcomeText = screen.getByText(/Nick Borrello/);
      expect(welcomeText).toBeTruthy();
    });
  });

  it('renders HomePage component without stats', async () => {
    render(<App />);
    
    // Wait for data to load
    await waitFor(() => {
      // Check for HomePage content
      const welcomeText = screen.getByText(/Nick Borrello/);
      expect(welcomeText).toBeTruthy();
      
      // Ensure STATS panel is not present
      expect(screen.queryByText('STATS')).not.toBeInTheDocument();
    });
  });

  it('renders full app structure with header and home page', async () => {
    render(<App />);
    
    // Wait for data to load
    await waitFor(() => {
      // Character name should be present
      const characterText = screen.getByText(/Nick Borrello/);
      expect(characterText).toBeTruthy();
      
      // HomePage content should be present
      const welcomeText = screen.getByText(/Nick Borrello/);
      expect(welcomeText).toBeTruthy();
      
      // Ensure STATS panel is not present
      expect(screen.queryByText('STATS')).not.toBeInTheDocument();
    });
  });

  it('maintains responsive layout structure', async () => {
    const { container } = render(<App />);
    
    await waitFor(() => {
      const appRoot = container.querySelector('[data-testid="app-root"]');
      expect(appRoot).toBeTruthy();
      
      // Should have home page content without stats
      const welcomeText = screen.getByText(/Nick Borrello/);
      expect(welcomeText).toBeTruthy();
      
      // Ensure STATS panel is not present
      expect(screen.queryByText('STATS')).not.toBeInTheDocument();
    });
  });
});
