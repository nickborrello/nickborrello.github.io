import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ProjectsPage from '../components/ProjectsPage';
import type { Project } from '../types';

describe('ProjectsPage', () => {
  const mockProjects: Project[] = [
    {
      title: 'First Quest',
      description: 'First quest description',
      status: 'completed',
      rewards: ['100 Gold'],
      technologies: ['React'],
      links: {
        live: 'https://example1.com',
        github: 'https://github.com/test1',
      },
      image: '/test1.png',
      jewelSlots: [
        { jewel: 'React', slotNumber: 1 },
      ],
    },
    {
      title: 'Second Quest',
      description: 'Second quest description',
      status: 'in-progress',
      rewards: ['200 Gold'],
      technologies: ['TypeScript'],
      links: {
        live: 'https://example2.com',
        github: 'https://github.com/test2',
      },
      image: '/test2.png',
      jewelSlots: [
        { jewel: 'TypeScript', slotNumber: 1 },
      ],
    },
    {
      title: 'Third Quest',
      description: 'Third quest description',
      status: 'completed',
      rewards: ['300 Gold'],
      technologies: ['JavaScript'],
      links: {
        live: 'https://example3.com',
        github: 'https://github.com/test3',
      },
      image: '/test3.png',
    },
  ];

  it('renders all projects from data', () => {
    render(<ProjectsPage projects={mockProjects} />);
    
    // Check that each project title appears (both in sidebar and details)
    const firstProjectTitles = screen.getAllByText('First Quest');
    const secondProjectTitles = screen.getAllByText('Second Quest');
    const thirdProjectTitles = screen.getAllByText('Third Quest');
    
    expect(firstProjectTitles.length).toBeGreaterThan(0);
    expect(secondProjectTitles.length).toBeGreaterThan(0);
    expect(thirdProjectTitles.length).toBeGreaterThan(0);
  });

  it('maps projects to project details correctly', () => {
    render(<ProjectsPage projects={mockProjects} />);
    
    // Check that the first project description is rendered in the detail view (selected by default)
    expect(screen.getByText('First quest description')).toBeTruthy();
    
    // Other descriptions should not be visible initially
    expect(screen.queryByText('Second quest description')).toBeFalsy();
    expect(screen.queryByText('Third quest description')).toBeFalsy();
  });

  it('handles empty project array', () => {
    render(<ProjectsPage projects={[]} />);
    
    // Should display an empty state message
    expect(screen.getByText(/no projects/i)).toBeTruthy();
  });

  it('displays project count or section title', () => {
    render(<ProjectsPage projects={mockProjects} />);
    
    // Should have a section header with "PROJECTS"
    expect(screen.getByText('PROJECTS')).toBeTruthy();
  });

  it('applies flex layout correctly', () => {
    const { container } = render(<ProjectsPage projects={mockProjects} />);
    
    // Check for flex styling in the main container
    const flexContainer = container.querySelector('.flex');
    expect(flexContainer).toBeTruthy();
    expect(flexContainer?.className).toContain('justify-between');
  });

  it('renders section header with proper styling', () => {
    const { container } = render(<ProjectsPage projects={mockProjects} />);
    
    // Check the h3 header element directly
    const header = container.querySelector('h3');
    expect(header).toBeTruthy();
    expect(header?.className).toContain('text-');
  });

  it('renders correct number of project buttons', () => {
    render(<ProjectsPage projects={mockProjects} />);

    // Count the number of project list items in the left sidebar
    const projectButtons = screen.getAllByRole('listitem');
    expect(projectButtons).toHaveLength(3);

    // Check that each project title appears (both in sidebar and details)
    const projectTitles = ['First Quest', 'Second Quest', 'Third Quest'];
    projectTitles.forEach(title => {
      const titleElements = screen.getAllByText(title);
      expect(titleElements.length).toBeGreaterThan(0);
    });
  });

  it('handles single project correctly', () => {
    const singleProject = [mockProjects[0]];
    render(<ProjectsPage projects={singleProject} />);
    
    const firstProjectTitles = screen.getAllByText('First Quest');
    expect(firstProjectTitles.length).toBeGreaterThan(0);
    expect(screen.queryByText('Second Quest')).toBeFalsy();
  });

  it('has proper container styling', () => {
    const { container } = render(<ProjectsPage projects={mockProjects} />);
    
    const projectsContainer = container.querySelector('[data-testid="project-showcase"]');
    expect(projectsContainer).toBeTruthy();
    
    // Check for the new flex layout structure
    const flexContainer = container.querySelector('.flex');
    expect(flexContainer).toBeTruthy();
    
    // Check for project buttons in left sidebar
    const projectButtons = container.querySelectorAll('button');
    expect(projectButtons.length).toBeGreaterThan(0);
  });
});
