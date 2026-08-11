import React, { useEffect, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { USER_INFO, RESUME_URL } from '../data';

const NAV_LINKS = [
  { href: '#work', label: 'Work' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#about', label: 'About' },
];

export const Header: React.FC = () => {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.getElementById(l.href.slice(1))).filter(
      (el): el is HTMLElement => Boolean(el)
    );
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-nier-beige border-b border-nier-dark/15 mesh">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Primary row */}
        <div className="h-16 flex items-center justify-between gap-4">
          <a href="#top" className="flex items-baseline gap-2 min-w-0" aria-label="Nicholas Borrello — home">
            <span className="font-tech font-bold tracking-[0.18em] text-[15px] text-nier-darker whitespace-nowrap">
              {USER_INFO.name.toUpperCase()}
            </span>
            <span className="hidden md:inline font-tech font-medium tracking-[0.22em] text-[11px] text-nier-dark whitespace-nowrap">
              {USER_INFO.title.toUpperCase()}
            </span>
          </a>

          <nav aria-label="Primary" className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = activeId === link.href.slice(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? 'true' : undefined}
                  className={`relative px-3 py-2 font-tech font-semibold tracking-[0.16em] text-[13px] uppercase transition-colors duration-150 ${
                    isActive ? 'text-nier-darker' : 'text-nier-dark hover:text-nier-darker'
                  }`}
                >
                  {link.label}
                  <span
                    aria-hidden="true"
                    className={`absolute left-3 right-3 -bottom-px h-0.5 bg-accent transition-opacity duration-150 ${
                      isActive ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          <a
            href={RESUME_URL}
            className="inline-flex items-center gap-1.5 bg-nier-darker text-nier-beige px-4 py-2 font-tech font-bold tracking-[0.16em] text-xs uppercase hover:bg-nier-panel transition-colors duration-150"
            aria-label="Download resume (PDF)"
          >
            Resume
            <ArrowUpRight size={14} strokeWidth={2.5} aria-hidden="true" />
          </a>
        </div>

        {/* Mobile nav row */}
        <nav aria-label="Primary" className="md:hidden flex items-center gap-1 border-t border-nier-dark/10 py-1.5">
          {NAV_LINKS.map((link) => {
            const isActive = activeId === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={isActive ? 'true' : undefined}
                className={`px-2.5 py-1.5 font-tech font-semibold tracking-[0.14em] text-xs uppercase ${
                  isActive ? 'text-nier-darker underline underline-offset-4 decoration-accent decoration-2' : 'text-nier-dark/90'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
