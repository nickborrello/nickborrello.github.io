import '@testing-library/jest-dom';
import { vi } from 'vitest';
import * as React from 'react';
import fs from 'fs';
import path from 'path';

// Mock react-helmet-async
vi.mock('react-helmet-async', () => ({
  Helmet: ({ children, ...props }: any) => null,
  HelmetProvider: ({ children, context }: any) => children,
}));

// Mock react-lottie
vi.mock('react-lottie', () => ({
  default: ({ options, ...props }: any) => null,
}));

// Mock GridGlobe
vi.mock('../components/ui/GridGlobe', () => ({
  GlobeDemo: () => null,
}));

// Mock TextGenerateEffect
vi.mock('../components/ui/TextGenerateEffect', () => ({
  TextGenerateEffect: ({ words, className }: { words: string; className?: string }) =>
    React.createElement('div', { className }, words),
}));

// Mock SVG methods for jsdom
if (typeof window !== 'undefined') {
  const mockGetTotalLength = () => 100;
  const mockGetPointAtLength = () => ({ x: 0, y: 0 });

  // Mock for SVGRectElement if exists
  if ((window as any).SVGRectElement) {
    Object.defineProperty((window as any).SVGRectElement.prototype, 'getTotalLength', {
      value: mockGetTotalLength,
      writable: true,
    });
    Object.defineProperty((window as any).SVGRectElement.prototype, 'getPointAtLength', {
      value: mockGetPointAtLength,
      writable: true,
    });
  }

  // Also for SVGPathElement if exists
  if ((window as any).SVGPathElement) {
    Object.defineProperty((window as any).SVGPathElement.prototype, 'getTotalLength', {
      value: mockGetTotalLength,
      writable: true,
    });
    Object.defineProperty((window as any).SVGPathElement.prototype, 'getPointAtLength', {
      value: mockGetPointAtLength,
      writable: true,
    });
  }
}

// Mock window.matchMedia for prefers-reduced-motion
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // deprecated
    removeListener: vi.fn(), // deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

// Mock fetch globally for tests
global.fetch = vi.fn((url: string | URL | Request) => {
  const urlString = typeof url === 'string' ? url : url instanceof URL ? url.pathname : (url as Request).url;

  // Handle /data.json requests
  if (urlString.includes('/data.json') || urlString.includes('data.json')) {
    try {
      // Read the actual data.json file from the public folder
      const dataPath = path.join(process.cwd(), 'public', 'data.json');
      const data = fs.readFileSync(dataPath, 'utf-8');

      return Promise.resolve({
        ok: true,
        statusText: 'OK',
        json: () => Promise.resolve(JSON.parse(data)),
      } as Response);
    } catch (error) {
      return Promise.resolve({
        ok: false,
        statusText: 'Not Found',
        json: () => Promise.reject(new Error('File not found')),
      } as Response);
    }
  }

  // Default response for unmocked URLs
  return Promise.resolve({
    ok: false,
    statusText: 'Not Found',
    json: () => Promise.reject(new Error('Not mocked')),
  } as Response);
}) as unknown as typeof fetch;
