import React from 'react';
import { WORK_EXPERIENCE, EDUCATION } from '../data';
import { Section } from './Section';

const ExperienceItem: React.FC<{ item: (typeof WORK_EXPERIENCE)[number]; isCurrent?: boolean }> = ({
  item,
  isCurrent,
}) => {
  return (
    <li className="relative pl-8 sm:pl-10 group">
      {/* NieR Milestone Diamond Marker */}
      <div
        aria-hidden="true"
        className={`absolute left-[-5px] top-1.5 w-3 h-3 flex items-center justify-center transition-transform group-hover:scale-125 ${
          isCurrent ? 'text-accent' : 'text-nier-darker'
        }`}
      >
        <span className="text-xs font-bold">{isCurrent ? '◆' : '◇'}</span>
      </div>

      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-0.5">
        <h3 className="font-tech font-bold text-xl sm:text-2xl tracking-[0.01em] text-nier-darker nier-shadow-sm">
          {item.role}
        </h3>
        <span className="font-tech font-bold text-sm sm:text-base tracking-[0.08em] text-accent uppercase">
          // {item.company}
        </span>
      </div>

      <div className="mt-0.5 inline-flex items-center gap-2 text-xs font-tech font-semibold tracking-[0.08em] text-nier-dark/90 uppercase">
        <span>{item.period}</span>
        {item.location && <span>· {item.location}</span>}
        {item.type && <span>· [ {item.type} ]</span>}
      </div>

      <p className="mt-2.5 max-w-2xl text-sm leading-relaxed text-nier-dark/90">{item.summary}</p>

      <ul className="mt-3 max-w-2xl space-y-1.5">
        {item.achievements.map((a) => (
          <li key={a} className="flex gap-2.5 text-sm leading-relaxed text-nier-dark/90 items-start">
            <span aria-hidden="true" className="mt-[5px] text-accent font-bold text-xs flex-shrink-0">
              ◆
            </span>
            <span>{a}</span>
          </li>
        ))}
      </ul>

      <div className="mt-3.5 flex flex-wrap items-center gap-1.5">
        {item.skills.map((s) => (
          <span
            key={s}
            className="inline-flex items-center gap-1 px-2 py-0.5 border border-nier-dark/25 bg-nier-beige-dim/30 text-[11px] font-tech font-semibold tracking-[0.06em] uppercase text-nier-dark"
          >
            <span className="text-[8px] text-nier-dark/50">■</span>
            <span>{s}</span>
          </span>
        ))}
      </div>
    </li>
  );
};

export const Experience: React.FC = () => {
  return (
    <Section
      id="experience"
      label="Experience"
      heading="Engineering history"
      intro="Professional engineering experience and computer science education."
    >
      {/* Dual Track Timeline Line */}
      <div className="relative">
        <div className="absolute left-0 top-2 bottom-2 w-px bg-nier-dark/30" aria-hidden="true" />
        <div className="absolute left-[3px] top-2 bottom-2 w-px bg-nier-dark/15 border-r border-dashed border-nier-dark/30" aria-hidden="true" />

        <ol className="relative space-y-10 pl-0">
          {WORK_EXPERIENCE.map((item, i) => (
            <ExperienceItem key={item.id} item={item} isCurrent={i === 0} />
          ))}
        </ol>
      </div>

      {/* Education block with NieR styling */}
      <div className="mt-14 pt-10 border-t border-nier-dark/20">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-accent" aria-hidden="true" />
          <p className="font-tech font-bold tracking-[0.2em] text-xs text-nier-darker uppercase">
            [ ACADEMIC_RECORD // EDUCATION ]
          </p>
        </div>

        <ol className="mt-6 space-y-6">
          {EDUCATION.map((edu) => (
            <li key={edu.id} className="relative pl-8 sm:pl-10 group">
              <span
                aria-hidden="true"
                className="absolute left-0 top-1.5 text-xs text-nier-darker group-hover:text-accent font-bold transition-colors"
              >
                ◆
              </span>
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-0.5">
                <h3 className="font-tech font-bold text-xl sm:text-2xl tracking-[0.01em] text-nier-darker nier-shadow-sm">
                  {edu.degree}
                </h3>
                <span className="font-tech font-bold text-sm sm:text-base tracking-[0.06em] text-nier-dark uppercase">
                  // {edu.school}
                </span>
              </div>
              <p className="mt-0.5 text-xs font-tech font-semibold tracking-[0.08em] text-nier-dark/90 uppercase">
                {edu.period}
                {edu.location ? ` · ${edu.location}` : ''}
              </p>
              <ul className="mt-2 max-w-2xl space-y-1">
                {edu.highlights.map((h) => (
                  <li key={h} className="flex gap-2.5 text-sm leading-relaxed text-nier-dark/90 items-start">
                    <span aria-hidden="true" className="mt-[5px] text-accent font-bold text-xs flex-shrink-0">
                      ◆
                    </span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
};
