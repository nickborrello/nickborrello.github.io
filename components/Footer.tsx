import React from 'react';
import { USER_INFO, CONTACTS } from '../data';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-nier-dark/15 bg-nier-beige">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 py-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-xs text-nier-dark/80">
        <span className="font-tech font-bold tracking-[0.14em] text-sm text-nier-darker uppercase">
          {USER_INFO.name}
        </span>

        <div className="flex items-center gap-5">
          {CONTACTS.map((c) => (
            <a
              key={c.platform}
              href={c.link}
              target={c.link.startsWith('http') ? '_blank' : undefined}
              rel={c.link.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="hover:text-accent transition-colors duration-150"
            >
              {c.platform}
            </a>
          ))}
        </div>

        <p className="text-[11px] text-nier-dark/60">
          © {new Date().getFullYear()} {USER_INFO.name}
        </p>
      </div>
    </footer>
  );
};
