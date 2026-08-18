import React, { useEffect, useRef, useState } from 'react';

interface SectionProps {
  id: string;
  label: string;
  heading: string;
  intro?: string;
  children: React.ReactNode;
}

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

  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="scroll-mt-20 border-t border-nier-dark/15">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 py-16 sm:py-20">
        <div ref={headRef} className={revealed ? 'rise-in' : 'opacity-0'}>
          <p className="font-tech font-semibold tracking-[0.2em] text-xs text-accent uppercase">
            {label}
          </p>

          <h2
            id={`${id}-heading`}
            className="mt-2 font-tech font-bold text-3xl sm:text-4xl tracking-[0.01em] text-nier-darker"
          >
            {heading}
          </h2>

          {intro && (
            <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-nier-dark/90">{intro}</p>
          )}
        </div>

        <div className="mt-10 sm:mt-12">{children}</div>
      </div>
    </section>
  );
};
