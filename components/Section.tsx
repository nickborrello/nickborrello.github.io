import React, { useEffect, useRef, useState } from 'react';

interface SectionProps {
  id: string;
  index: string;
  label: string;
  heading: string;
  intro?: string;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ id, index, label, heading, intro, children }) => {
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
      { threshold: 0.2 }
    );
    observer.observe(el);
    // Safety net: never leave the heading hidden
    const fallback = window.setTimeout(() => setRevealed(true), 2000);
    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="scroll-mt-28">
      {/* Divider strip — the world's frame device */}
      <div aria-hidden="true" className="mesh-strong relative h-9 border-y border-nier-dark/15">
        <span className="absolute left-0 top-0 h-2.5 w-2.5 border-l border-t border-nier-dark/50" />
        <span className="absolute right-0 top-0 h-2.5 w-2.5 border-r border-t border-nier-dark/50" />
        <span className="absolute bottom-0 left-0 h-2.5 w-2.5 border-l border-b border-nier-dark/50" />
        <span className="absolute bottom-0 right-0 h-2.5 w-2.5 border-r border-b border-nier-dark/50" />
      </div>

      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16 sm:py-24">
        <div ref={headRef} className={revealed ? 'rise-in' : 'opacity-0'}>
          <div className="flex items-center gap-4">
            <span className="font-tech font-semibold tracking-[0.22em] text-[11px] text-nier-dark uppercase whitespace-nowrap">
              {index} / {label}
            </span>
            <span aria-hidden="true" className="h-px flex-1 bg-nier-dark/15" />
          </div>

          <h2
            id={`${id}-heading`}
            className="mt-5 font-tech font-bold text-4xl sm:text-5xl tracking-[0.01em] text-nier-darker"
          >
            {heading}
          </h2>

          {intro && (
            <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-nier-dark/90">{intro}</p>
          )}
        </div>

        <div className="mt-10 sm:mt-12">{children}</div>
      </div>
    </section>
  );
};
