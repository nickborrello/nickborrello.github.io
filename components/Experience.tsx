import React from 'react';
import { WORK_EXPERIENCE, EDUCATION } from '../data';
import { Section } from './Section';

const ExperienceItem: React.FC<{ item: (typeof WORK_EXPERIENCE)[number]; isCurrent?: boolean }> = ({
  item,
  isCurrent,
}) => {
  return (
    <li className="relative pl-8 sm:pl-10">
      {/* Rail dot */}
      <span
        aria-hidden="true"
        className={`absolute left-0 top-2 w-2.5 h-2.5 border ${
          isCurrent ? 'bg-nier-darker border-nier-darker' : 'bg-nier-beige border-nier-dark/50'
        }`}
      />
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-0.5">
        <h3 className="font-tech font-bold text-xl sm:text-2xl tracking-[0.01em] text-nier-darker">{item.role}</h3>
        <span className="font-tech font-semibold text-sm sm:text-base tracking-[0.04em] text-nier-dark uppercase">
          {item.company}
        </span>
      </div>
      <p className="mt-0.5 text-xs text-nier-dark/80">
        {item.period}
        {item.location ? ` · ${item.location}` : ''}
        {item.type ? ` · ${item.type}` : ''}
      </p>

      <p className="mt-2.5 max-w-2xl text-sm leading-relaxed text-nier-dark/90">{item.summary}</p>

      <ul className="mt-3 max-w-2xl space-y-1.5">
        {item.achievements.map((a) => (
          <li key={a} className="flex gap-2.5 text-sm leading-relaxed text-nier-dark/90 items-start">
            <span aria-hidden="true" className="mt-[7px] w-1.5 h-1.5 bg-accent flex-shrink-0" />
            <span>{a}</span>
          </li>
        ))}
      </ul>

      <div className="mt-3.5 flex flex-wrap items-center gap-1.5">
        {item.skills.map((s) => (
          <span
            key={s}
            className="px-2 py-0.5 border border-nier-dark/20 text-[11px] font-tech font-semibold tracking-[0.06em] uppercase text-nier-dark"
          >
            {s}
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
      <ol className="relative space-y-10 border-l border-nier-dark/20 pl-0">
        {WORK_EXPERIENCE.map((item, i) => (
          <ExperienceItem key={item.id} item={item} isCurrent={i === 0} />
        ))}
      </ol>

      {/* Education block */}
      <div className="mt-14 pt-10 border-t border-nier-dark/15">
        <p className="font-tech font-semibold tracking-[0.18em] text-xs text-nier-dark uppercase">
          Education
        </p>
        <ol className="mt-6 space-y-6">
          {EDUCATION.map((edu) => (
            <li key={edu.id} className="relative pl-8 sm:pl-10">
              <span aria-hidden="true" className="absolute left-0 top-2 w-2.5 h-2.5 border border-nier-dark/50 bg-nier-beige" />
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-0.5">
                <h3 className="font-tech font-bold text-xl sm:text-2xl tracking-[0.01em] text-nier-darker">{edu.degree}</h3>
                <span className="font-tech font-semibold text-sm sm:text-base tracking-[0.04em] text-nier-dark uppercase">
                  {edu.school}
                </span>
              </div>
              <p className="mt-0.5 text-xs text-nier-dark/80">
                {edu.period}
                {edu.location ? ` · ${edu.location}` : ''}
              </p>
              <ul className="mt-2 max-w-2xl space-y-1">
                {edu.highlights.map((h) => (
                  <li key={h} className="flex gap-2.5 text-sm leading-relaxed text-nier-dark/90 items-start">
                    <span aria-hidden="true" className="mt-[7px] w-1.5 h-1.5 bg-accent flex-shrink-0" />
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
