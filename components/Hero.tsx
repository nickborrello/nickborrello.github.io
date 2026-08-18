import React from 'react';
import { ArrowDown, Github, Mail } from 'lucide-react';
import { USER_INFO } from '../data';

export const Hero: React.FC = () => {
  return (
    <section aria-label="Introduction" className="mesh relative">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 pt-16 pb-16 sm:pt-24 sm:pb-24 flex flex-col">
        {/* Location & Status */}
        <div className="rise-in flex items-center gap-2.5">
          <span aria-hidden="true" className="w-2 h-2 bg-accent" />
          <span className="font-tech font-semibold tracking-[0.18em] text-xs text-nier-dark uppercase">
            {USER_INFO.location} · {USER_INFO.status}
          </span>
        </div>

        {/* Name */}
        <h1
          className="rise-in mt-6 font-tech font-bold text-nier-darker leading-[0.95] tracking-[0.01em] text-[clamp(2.75rem,9vw,5.25rem)]"
          style={{ animationDelay: '60ms' }}
        >
          {USER_INFO.name}
        </h1>

        {/* Role */}
        <p
          className="rise-in mt-3 font-tech font-semibold tracking-[0.24em] text-base sm:text-lg text-accent uppercase"
          style={{ animationDelay: '120ms' }}
        >
          {USER_INFO.title}
        </p>

        {/* Summary */}
        <p
          className="rise-in mt-6 max-w-2xl text-[16px] sm:text-[18px] leading-relaxed text-nier-dark"
          style={{ animationDelay: '180ms' }}
        >
          {USER_INFO.summary}
        </p>

        {/* CTAs — 3 actions */}
        <div
          className="rise-in mt-8 sm:mt-10 flex flex-wrap items-center gap-3"
          style={{ animationDelay: '240ms' }}
        >
          <a
            href="#work"
            className="inline-flex items-center gap-2 bg-nier-darker text-nier-beige px-5 py-3 font-tech font-bold tracking-[0.14em] text-sm uppercase hover:bg-nier-panel transition-colors duration-150"
          >
            View Work
            <ArrowDown size={16} strokeWidth={2.5} aria-hidden="true" />
          </a>
          <a
            href="https://github.com/nickborrello"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-nier-darker/35 px-5 py-3 font-tech font-bold tracking-[0.14em] text-sm uppercase text-nier-darker hover:bg-nier-darker hover:text-nier-beige transition-colors duration-150"
          >
            <Github size={16} strokeWidth={2} aria-hidden="true" />
            GitHub
          </a>
          <a
            href="mailto:nvborrello@gmail.com"
            className="inline-flex items-center gap-2 border border-nier-darker/35 px-5 py-3 font-tech font-bold tracking-[0.14em] text-sm uppercase text-nier-darker hover:bg-nier-darker hover:text-nier-beige transition-colors duration-150"
          >
            <Mail size={16} strokeWidth={2} aria-hidden="true" />
            Email
          </a>
        </div>
      </div>
    </section>
  );
};
