import React, { useEffect, useRef, useState } from 'react';
import { NierBorderBand } from './NierDecorations';

interface SectionProps {
  id: string;
  label: string;
  heading: string;
  intro?: string;
  children: React.ReactNode;
}

const SECTION_CODES: Record<string, string> = {
  work: '01',
  experience: '02',
  skills: '03',
  about: '04',
};

export const Section: React.FC<SectionProps> = ({ id, label, heading, intro, children }) => {
  const headRef = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = headRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    const fallback = window.setTimeout(() => setRevealed(true), 1500);
    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  const code = SECTION_CODES[id] || '00';

  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="scroll-mt-[120px] md:scroll-mt-20 relative">
      {/* Decorative NieR Border Band Divider */}
      <NierBorderBand position="top" className="opacity-60" />

      <div className="max-w-5xl mx-auto px-5 sm:px-8 py-16 sm:py-20">
        <div ref={headRef} className={revealed ? 'rise-in' : 'opacity-0'}>
          {/* Section System Code & Kicker */}
          <div className="flex items-center gap-2">
            <span className="font-tech font-bold tracking-[0.2em] text-xs text-accent uppercase">
              [ {code} // {label} ]
            </span>
            <span className="h-px flex-1 max-w-[80px] bg-nier-dark/20" aria-hidden="true" />
          </div>

          {/* Section Heading with NieR Dual Vertical Rail & Drop Shadow */}
          <div className="mt-2 flex items-start gap-3.5">
            <div className="flex flex-col items-center pt-1.5 select-none" aria-hidden="true">
              <span className="w-1.5 h-6 bg-nier-darker" />
              <span className="w-0.5 h-4 bg-accent mt-0.5" />
            </div>

            <div>
              <h2
                id={`${id}-heading`}
                className="font-tech font-bold text-3xl sm:text-4xl tracking-[0.01em] text-nier-darker nier-shadow"
              >
                {heading}
              </h2>

              {intro && (
                <p className="mt-2.5 max-w-2xl text-[15px] leading-relaxed text-nier-dark/90">{intro}</p>
              )}
            </div>
          </div>
        </div>

        <div className="mt-10 sm:mt-12">{children}</div>
      </div>
    </section>
  );
};
