import React, { useEffect, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { USER_INFO, RESUME_URL } from '../data';
import { NierBorderBand } from './NierDecorations';

const NAV_LINKS = [
  { href: '#work', label: 'Work', code: '01' },
  { href: '#experience', label: 'Experience', code: '02' },
  { href: '#skills', label: 'Skills', code: '03' },
  { href: '#about', label: 'About', code: '04' },
];

export const Header: React.FC = () => {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.getElementById(l.href.slice(1))).filter(
      (el): el is HTMLElement => Boolean(el)
    );
    if (sections.length === 0) return;

    const lastLinkId = NAV_LINKS[NAV_LINKS.length - 1].href.slice(1);
    let bandId = '';

    const sync = () => {
      const atBottom =
        window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2;
      setActiveId(atBottom ? lastLinkId : bandId);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) bandId = visible[0].target.id;
        sync();
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );

    sections.forEach((s) => observer.observe(s));
    window.addEventListener('scroll', sync, { passive: true });
    window.addEventListener('resize', sync);
    sync();
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', sync);
      window.removeEventListener('resize', sync);
    };
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-nier-beige/95 backdrop-blur-[2px] border-b border-nier-dark/20">
      {/* Top Decorative NieR Micro-Pattern Band */}
      <NierBorderBand position="top" className="opacity-75" />

      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        {/* Primary row */}
        <div className="h-16 flex items-center justify-between gap-4">
          <a href="#top" className="flex items-center gap-2.5 min-w-0 group" aria-label="Nicholas Borrello — home">
            <span className="w-2 h-2 bg-nier-darker group-hover:bg-accent transition-colors" aria-hidden="true" />
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-2">
              <span className="font-tech font-bold tracking-[0.16em] text-[15px] sm:text-[16px] text-nier-darker whitespace-nowrap nier-shadow-sm">
                {USER_INFO.name.toUpperCase()}
              </span>
              <span className="hidden md:inline font-tech font-medium tracking-[0.16em] text-[11px] text-nier-dark/90 whitespace-nowrap">
                // {USER_INFO.title.toUpperCase()}
              </span>
            </div>
          </a>

          {/* Desktop Nav with NieR Selection Rails & Accents */}
          <nav aria-label="Primary" className="hidden md:flex items-center gap-1.5">
            {NAV_LINKS.map((link) => {
              const isActive = activeId === link.href.slice(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? 'true' : undefined}
                  className={`group relative px-3 py-1.5 font-tech font-semibold tracking-[0.14em] text-[13px] uppercase transition-all duration-150 flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-nier-darker text-nier-beige shadow-sm'
                      : 'text-nier-dark hover:text-nier-darker hover:bg-nier-beige-dim/60'
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className={`text-[10px] transition-transform ${
                      isActive ? 'text-accent scale-110' : 'text-nier-dark/40 group-hover:text-nier-darker'
                    }`}
                  >
                    {isActive ? '◆' : '■'}
                  </span>
                  <span>{link.label}</span>
                </a>
              );
            })}
          </nav>

          <a
            href={RESUME_URL}
            className="group relative inline-flex items-center gap-1.5 bg-nier-darker text-nier-beige px-4 py-2 font-tech font-bold tracking-[0.14em] text-xs uppercase hover:bg-nier-panel transition-all duration-150 border border-nier-darker"
            aria-label="Download resume (PDF)"
          >
            <span className="w-1.5 h-1.5 bg-accent group-hover:scale-125 transition-transform" aria-hidden="true" />
            <span>Resume</span>
            <ArrowUpRight size={14} strokeWidth={2.5} aria-hidden="true" className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile nav row */}
        <nav aria-label="Primary mobile" className="md:hidden flex items-center justify-between border-t border-nier-dark/15 py-2">
          {NAV_LINKS.map((link) => {
            const isActive = activeId === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={isActive ? 'true' : undefined}
                className={`relative px-2.5 py-1 font-tech font-semibold tracking-[0.12em] text-xs uppercase flex items-center gap-1 transition-colors after:absolute after:-inset-x-1 after:-inset-y-1.5 after:content-[''] ${
                  isActive
                    ? 'bg-nier-darker text-nier-beige font-bold'
                    : 'text-nier-dark hover:text-nier-darker'
                }`}
              >
                <span className="text-[9px] text-accent">{isActive ? '◆' : '■'}</span>
                <span>{link.label}</span>
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
