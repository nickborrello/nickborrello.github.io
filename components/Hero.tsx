import React from 'react';
import { ArrowDown, ArrowUpRight, Github, Mail } from 'lucide-react';
import { USER_INFO, HERO_PROOFS, RESUME_URL } from '../data';

export const Hero: React.FC = () => {
  return (
    <section aria-label="Introduction" className="mesh relative">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-16 pb-14 sm:pt-24 sm:pb-20 flex flex-col">
        {/* Status line */}
        <div className="rise-in order-1 flex items-center gap-2.5">
          <span aria-hidden="true" className="w-2 h-2 bg-accent" />
          <span className="font-tech font-semibold tracking-[0.22em] text-[11px] sm:text-xs text-nier-dark uppercase">
            Status — {USER_INFO.status.toLowerCase()}
          </span>
        </div>

        {/* Name */}
        <h1
          className="rise-in order-2 mt-6 font-tech font-bold text-nier-darker leading-[0.95] tracking-[0.01em] text-[clamp(2.5rem,11vw,5.75rem)]"
          style={{ animationDelay: '60ms' }}
        >
          {USER_INFO.name}
        </h1>

        {/* Role */}
        <p
          className="rise-in order-3 mt-3 sm:mt-4 font-tech font-semibold tracking-[0.3em] text-base sm:text-xl text-accent uppercase"
          style={{ animationDelay: '120ms' }}
        >
          {USER_INFO.title}
        </p>

        {/* Telemetry strip — the proof. Above the fold on mobile, after CTAs on desktop */}
        <div
          className="rise-in order-4 lg:order-7 mt-6 lg:mt-14 border-t border-nier-dark/15"
          style={{ animationDelay: '180ms' }}
        >
          <p className="mt-3 lg:mt-5 font-tech font-semibold tracking-[0.22em] text-[10px] sm:text-[11px] text-nier-dark uppercase">
            Proof points
          </p>
          <div className="mt-3 lg:mt-5 grid grid-cols-3 gap-3 sm:gap-6">
            {HERO_PROOFS.map((metric, i) => (
              <div
                key={metric.label}
                className={i > 0 ? 'min-w-0 border-l border-nier-dark/15 pl-3 sm:pl-6' : 'min-w-0'}
              >
                <p className="font-tech font-bold text-[clamp(0.9rem,4.4vw,1.5rem)] sm:text-4xl lg:text-5xl tracking-[0.01em] text-nier-darker">
                  {metric.value}
                </p>
                <p className="mt-0.5 sm:mt-1 font-tech font-semibold tracking-[0.08em] sm:tracking-[0.14em] text-[9px] sm:text-xs uppercase text-nier-dark">
                  {metric.label}
                </p>
                <p className="hidden lg:block mt-1.5 text-[13px] leading-relaxed text-nier-dark/90">
                  {metric.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Positioning */}
        <p
          className="rise-in order-5 lg:order-4 mt-6 max-w-3xl font-tech font-medium text-lg sm:text-2xl leading-snug text-nier-dark"
          style={{ animationDelay: '240ms' }}
        >
          {USER_INFO.positioning}
        </p>

        {/* Summary */}
        <p
          className="rise-in order-6 lg:order-5 mt-3 sm:mt-4 max-w-2xl text-[15px] leading-relaxed text-nier-dark/90"
          style={{ animationDelay: '300ms' }}
        >
          {USER_INFO.summary}
        </p>

        {/* CTAs */}
        <div className="rise-in order-7 lg:order-6 mt-8 sm:mt-9 flex flex-wrap items-center gap-3" style={{ animationDelay: '360ms' }}>
          <a
            href="#work"
            className="inline-flex items-center gap-2 bg-nier-darker text-nier-beige px-5 py-3 font-tech font-bold tracking-[0.16em] text-sm uppercase hover:bg-nier-panel transition-colors duration-150"
          >
            View Work
            <ArrowDown size={16} strokeWidth={2.5} aria-hidden="true" />
          </a>
          <a
            href="https://github.com/nickborrello"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-nier-darker/40 px-5 py-3 font-tech font-bold tracking-[0.16em] text-sm uppercase text-nier-darker hover:bg-nier-darker hover:text-nier-beige transition-colors duration-150"
          >
            <Github size={16} strokeWidth={2} aria-hidden="true" />
            GitHub
          </a>
          <a
            href={RESUME_URL}
            className="inline-flex items-center gap-2 border border-nier-darker/40 px-5 py-3 font-tech font-bold tracking-[0.16em] text-sm uppercase text-nier-darker hover:bg-nier-darker hover:text-nier-beige transition-colors duration-150"
          >
            Resume
            <ArrowUpRight size={16} strokeWidth={2} aria-hidden="true" />
          </a>
          <a
            href="mailto:nvborrello@gmail.com"
            className="inline-flex items-center gap-2 border border-nier-darker/40 px-5 py-3 font-tech font-bold tracking-[0.16em] text-sm uppercase text-nier-darker hover:bg-nier-darker hover:text-nier-beige transition-colors duration-150"
          >
            <Mail size={16} strokeWidth={2} aria-hidden="true" />
            Email
          </a>
        </div>
      </div>
    </section>
  );
};
