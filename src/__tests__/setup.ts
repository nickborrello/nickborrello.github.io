import '@testing-library/jest-dom';
import { vi } from 'vitest';
import fs from 'fs';
import path from 'path';

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
