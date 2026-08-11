import React from 'react';
import { USER_INFO, CONTACTS } from '../data';

const NAV_LINKS = [
  { href: '#work', label: 'Work' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#about', label: 'About' },
];

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-nier-dark/15">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-1">
          <span className="font-tech font-bold tracking-[0.18em] text-sm text-nier-darker uppercase">
            {USER_INFO.name}
          </span>
          <span className="text-xs text-nier-dark/90">
            AI Engineer — production LLM systems, intelligent automation, AI-native products.
          </span>
        </div>

        <nav aria-label="Footer" className="flex items-center gap-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-tech font-semibold tracking-[0.16em] text-xs uppercase text-nier-dark/90 hover:text-nier-darker transition-colors duration-150"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4 text-xs text-nier-dark/90">
          {CONTACTS.map((c) => (
            <a
              key={c.platform}
              href={c.link}
              className="underline underline-offset-4 decoration-nier-grid hover:decoration-accent hover:text-nier-darker transition-colors duration-150"
            >
              {c.platform}
            </a>
          ))}
        </div>
      </div>
      <div className="border-t border-nier-dark/10">
        <p className="max-w-6xl mx-auto px-5 sm:px-8 py-3 text-[11px] text-nier-dark/90">
          © {new Date().getFullYear()} {USER_INFO.name} · Built with React, TypeScript &amp; Tailwind
        </p>
      </div>
    </footer>
  );
};
