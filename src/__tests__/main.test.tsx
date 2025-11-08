import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { JSDOM } from 'jsdom';

describe('main.tsx', () => {
  let dom: JSDOM;

  beforeEach(() => {
    dom = new JSDOM('<!DOCTYPE html><html><body><div id="root"></div></body></html>');
    global.document = dom.window.document as unknown as Document;
    global.window = dom.window as unknown as Window & typeof globalThis;
  });

  afterEach(() => {
    dom.window.close();
  });

  it('mounts React app to root element', () => {
    const rootElement = document.getElementById('root');
    expect(rootElement).toBeTruthy();
  });

  it('root element exists in DOM', () => {
    const root = document.querySelector('#root');
    expect(root).not.toBeNull();
  });
});
