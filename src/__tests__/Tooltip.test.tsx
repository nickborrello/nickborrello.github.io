import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Tooltip from '../components/Tooltip';

describe('Tooltip', () => {
  it('renders children trigger element', () => {
    render(
      <Tooltip content="Test tooltip content">
        <button>Hover me</button>
      </Tooltip>
    );
    
    expect(screen.getByText('Hover me')).toBeInTheDocument();
  });

  it('shows tooltip content on mouse enter', async () => {
    const user = userEvent.setup();
    
    render(
      <Tooltip content="Test tooltip content">
        <button>Hover me</button>
      </Tooltip>
    );
    
    const trigger = screen.getByText('Hover me');
    await user.hover(trigger);
    
    await waitFor(() => {
      expect(screen.getByText('Test tooltip content')).toBeInTheDocument();
    });
  });

  it('hides tooltip on mouse leave', async () => {
    const user = userEvent.setup();
    
    render(
      <Tooltip content="Test tooltip content">
        <button>Hover me</button>
      </Tooltip>
    );
    
    const trigger = screen.getByText('Hover me');
    await user.hover(trigger);
    
    await waitFor(() => {
      expect(screen.getByText('Test tooltip content')).toBeInTheDocument();
    });
    
    await user.unhover(trigger);
    
    await waitFor(() => {
      expect(screen.queryByText('Test tooltip content')).not.toBeInTheDocument();
    });
  });

  it('renders ReactNode content', async () => {
    const user = userEvent.setup();
    
    render(
      <Tooltip content={<div><strong>Bold</strong> content</div>}>
        <button>Hover me</button>
      </Tooltip>
    );
    
    const trigger = screen.getByText('Hover me');
    await user.hover(trigger);
    
    await waitFor(() => {
      expect(screen.getByText('Bold')).toBeInTheDocument();
      expect(screen.getByText('content')).toBeInTheDocument();
    });
  });

  it('has proper ARIA attributes for accessibility', () => {
    render(
      <Tooltip content="Test tooltip">
        <button>Hover me</button>
      </Tooltip>
    );
    
    const trigger = screen.getByText('Hover me');
    expect(trigger).toHaveAttribute('aria-describedby');
  });

  it('shows tooltip on focus for keyboard accessibility', async () => {
    const user = userEvent.setup();
    
    render(
      <Tooltip content="Test tooltip content">
        <button>Focus me</button>
      </Tooltip>
    );
    
    const trigger = screen.getByText('Focus me');
    await user.tab(); // Focus the button
    
    await waitFor(() => {
      expect(screen.getByText('Test tooltip content')).toBeInTheDocument();
    });
  });

  it('hides tooltip on blur', async () => {
    const user = userEvent.setup();
    
    render(
      <div>
        <Tooltip content="Test tooltip content">
          <button>Focus me</button>
        </Tooltip>
        <button>Other button</button>
      </div>
    );
    
    const trigger = screen.getByText('Focus me');
    await user.tab(); // Focus the first button
    
    await waitFor(() => {
      expect(screen.getByText('Test tooltip content')).toBeInTheDocument();
    });
    
    await user.tab(); // Focus the second button (blur the first)
    
    await waitFor(() => {
      expect(screen.queryByText('Test tooltip content')).not.toBeInTheDocument();
    });
  });
});
