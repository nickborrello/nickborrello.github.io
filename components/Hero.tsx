import React from 'react';
import { ArrowDown, Github, Mail } from 'lucide-react';
import { USER_INFO } from '../data';
import { NierCornerFrame } from './NierDecorations';

export const Hero: React.FC = () => {
  return (
    <section aria-label="Introduction" className="relative">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 pt-14 pb-16 sm:pt-20 sm:pb-24 flex flex-col">
        {/* System Telemetry / Location Header Badge */}
        <div className="rise-in inline-flex flex-wrap items-center gap-2.5">
          <NierCornerFrame bracketSize={4} className="inline-flex items-center gap-2 px-2.5 py-1 bg-nier-beige-dim/40 border border-nier-dark/20">
            <span aria-hidden="true" className="w-1.5 h-1.5 bg-accent animate-pulse" />
            <span className="font-tech font-bold tracking-[0.2em] text-[11px] text-nier-darker uppercase">
              [ STATUS: ONLINE ]
            </span>
            <span className="hidden sm:inline font-tech font-semibold tracking-[0.16em] text-[11px] text-nier-dark uppercase">
              // {USER_INFO.location} · {USER_INFO.status}
            </span>
          </NierCornerFrame>
        </div>

        {/* Hero Title with NieR Offset Ghost Shadow */}
        <div className="rise-in mt-6 flex items-start gap-4" style={{ animationDelay: '60ms' }}>
          {/* NieR vertical left indicator rail */}
          <div className="hidden sm:flex flex-col items-center pt-2 select-none" aria-hidden="true">
            <span className="w-1.5 h-12 bg-nier-darker" />
            <span className="w-0.5 h-8 bg-accent mt-1" />
            <span className="text-[12px] text-accent mt-1 font-bold">◆</span>
          </div>

          <div>
            <h1
              className="font-tech font-bold text-nier-darker leading-[0.95] tracking-[0.01em] text-[clamp(2.75rem,9vw,5.25rem)] nier-shadow"
            >
              {USER_INFO.name}
            </h1>

            {/* Role / Subheading with NieR styling */}
            <div className="mt-3 flex items-center gap-2">
              <span className="w-2 h-0.5 bg-accent" aria-hidden="true" />
              <p
                className="font-tech font-semibold tracking-[0.22em] text-base sm:text-lg text-accent uppercase"
              >
                {USER_INFO.title}
              </p>
            </div>
          </div>
        </div>

        {/* Summary with NieR left quote/hairline bar */}
        <div
          className="rise-in mt-6 max-w-2xl pl-4 border-l-2 border-nier-dark/25"
          style={{ animationDelay: '180ms' }}
        >
          <p className="text-[16px] sm:text-[18px] leading-relaxed text-nier-dark">
            {USER_INFO.summary}
          </p>
        </div>

        {/* CTAs — Styled with NieR geometric buttons */}
        <div
          className="rise-in mt-8 sm:mt-10 flex flex-wrap items-center gap-3.5"
          style={{ animationDelay: '240ms' }}
        >
          <a
            href="#work"
            className="group relative inline-flex items-center gap-2 bg-nier-darker text-nier-beige px-6 py-3 font-tech font-bold tracking-[0.14em] text-sm uppercase hover:bg-nier-panel transition-all duration-150 border border-nier-darker shadow-sm"
          >
            <span className="text-accent group-hover:translate-x-0.5 transition-transform" aria-hidden="true">◆</span>
            <span>View Work</span>
            <ArrowDown size={15} strokeWidth={2.5} aria-hidden="true" className="group-hover:translate-y-0.5 transition-transform" />
          </a>

          <a
            href="https://github.com/nickborrello"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 bg-nier-beige-dim/30 border border-nier-dark/35 px-5 py-3 font-tech font-bold tracking-[0.14em] text-sm uppercase text-nier-darker hover:bg-nier-darker hover:text-nier-beige transition-all duration-150"
          >
            <span className="text-nier-dark/50 group-hover:text-accent transition-colors" aria-hidden="true">■</span>
            <Github size={16} strokeWidth={2} aria-hidden="true" />
            <span>GitHub</span>
          </a>

          <a
            href="mailto:nvborrello@gmail.com"
            className="group relative inline-flex items-center gap-2 bg-nier-beige-dim/30 border border-nier-dark/35 px-5 py-3 font-tech font-bold tracking-[0.14em] text-sm uppercase text-nier-darker hover:bg-nier-darker hover:text-nier-beige transition-all duration-150"
          >
            <span className="text-nier-dark/50 group-hover:text-accent transition-colors" aria-hidden="true">■</span>
            <Mail size={16} strokeWidth={2} aria-hidden="true" />
            <span>Email</span>
          </a>
        </div>
      </div>
    </section>
  );
};
