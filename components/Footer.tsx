import React from 'react';
import { USER_INFO, CONTACTS } from '../data';
import { NierBorderBand } from './NierDecorations';

export const Footer: React.FC = () => {
  return (
    <footer className="relative mt-20 bg-nier-beige/95 border-t border-nier-dark/20 text-nier-darker">
      {/* Top Decorative Border Band */}
      <NierBorderBand position="top" className="opacity-70" />

      {/* Main Terminal Status & Control Bar (Authentic NieR:Automata UI) */}
      <div className="max-w-5xl mx-auto px-5 sm:px-8 py-5">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {/* Left: Dual Vertical Bracket Indicator & Status Line */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 flex-shrink-0" aria-hidden="true">
              <span className="w-1.5 h-5 bg-nier-darker" />
              <span className="w-0.5 h-5 bg-accent" />
            </div>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-2">
              <span className="font-tech font-bold tracking-[0.16em] text-sm text-nier-darker uppercase">
                {USER_INFO.name}
              </span>
              <span className="font-tech font-medium tracking-[0.14em] text-xs text-nier-dark/90 uppercase">
                // SYSTEM STATUS: OPERATIONAL · ALL SERVICES NOMINAL
              </span>
            </div>
          </div>

          {/* Right: Technical Cues / Action Navigation Hints */}
          <div className="flex items-center justify-between sm:justify-end gap-6 text-xs font-tech font-bold tracking-[0.16em] text-nier-dark uppercase">
            <div className="flex items-center gap-4">
              {CONTACTS.map((c) => (
                <a
                  key={c.platform}
                  href={c.link}
                  target={c.link.startsWith('http') ? '_blank' : undefined}
                  rel={c.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="relative hover:text-accent transition-colors duration-150 flex items-center gap-1 after:absolute after:-inset-x-2 after:-inset-y-3.5 after:content-['']"
                >
                  <span className="text-[9px] text-accent">◆</span>
                  <span>{c.platform}</span>
                </a>
              ))}
            </div>

            {/* Far-Right Square Anchor Mark */}
            <span className="w-2 h-2 bg-nier-darker flex-shrink-0" aria-hidden="true" />
          </div>
        </div>

        {/* Bottom copyright / terminal metadata row */}
        <div className="mt-4 pt-3 border-t border-nier-dark/10 flex flex-col sm:flex-row sm:items-center sm:justify-between text-[11px] font-tech tracking-[0.14em] text-nier-dark/90 uppercase">
          <span>© {new Date().getFullYear()} {USER_INFO.name.toUpperCase()} · ALL RIGHTS RESERVED</span>
          <span>TERMINAL PROTOCOL 1.0.4 · YORHA FIELD INTERFACE</span>
        </div>
      </div>

      {/* Bottom Decorative Border Band */}
      <NierBorderBand position="bottom" className="opacity-70" />
    </footer>
  );
};
