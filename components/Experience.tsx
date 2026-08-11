import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { WORK_EXPERIENCE, EDUCATION } from '../data';
import { Section } from './Section';

const ExperienceItem: React.FC<{ item: (typeof WORK_EXPERIENCE)[number]; isCurrent?: boolean }> = ({
  item,
  isCurrent,
}) => {
  return (
    <li className="relative pl-10">
      {/* Rail dot */}
      <span
        aria-hidden="true"
        className={`absolute left-0 top-1.5 w-3 h-3 rotate-45 border ${
          isCurrent ? 'bg-nier-darker border-nier-darker' : 'bg-nier-beige border-nier-dark/50'
        }`}
      />
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <h3 className="font-tech font-bold text-2xl tracking-[0.01em] text-nier-darker">{item.role}</h3>
        <span className="font-tech font-semibold text-base tracking-[0.04em] text-nier-dark/90 uppercase">
          {item.company}
        </span>
      </div>
      <p className="mt-1 text-[13px] text-nier-dark/90">
        {item.period}
        {item.location ? ` · ${item.location}` : ''}
        {item.type ? ` · ${item.type}` : ''}
      </p>

      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-nier-dark/90">{item.summary}</p>

      <ul className="mt-3.5 max-w-2xl space-y-2">
        {item.achievements.map((a) => (
          <li key={a} className="flex gap-2.5 text-sm leading-relaxed text-nier-dark/90 items-start">
            <span aria-hidden="true" className="mt-[7px] w-1.5 h-1.5 bg-nier-grid rotate-45 flex-shrink-0" />
            {a}
          </li>
        ))}
      </ul>

      <div className="mt-3.5 flex flex-wrap items-center gap-1.5">
        {item.skills.map((s) => (
          <span
            key={s}
            className="px-2 py-0.5 border border-nier-dark/20 text-[11px] font-tech font-semibold tracking-[0.08em] uppercase text-nier-dark"
          >
            {s}
          </span>
        ))}
        {item.proofUrl && (
          <a
            href={item.proofUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 inline-flex items-center gap-1 font-tech font-bold tracking-[0.14em] text-xs uppercase text-accent hover:text-nier-darker transition-colors duration-150"
          >
            {item.proofLabel ?? 'View proof'}
            <ArrowUpRight size={13} strokeWidth={2.5} aria-hidden="true" />
          </a>
        )}
      </div>
    </li>
  );
};

export const Experience: React.FC = () => {
  return (
    <Section
      id="experience"
      index="02"
      label="Experience"
      heading="Where I've built"
      intro="Employment first — then education, kept separate."
    >
      <ol className="relative space-y-12 border-l border-nier-dark/20 pl-0">
        {WORK_EXPERIENCE.map((item, i) => (
          <ExperienceItem key={item.id} item={item} isCurrent={i === 0} />
        ))}
      </ol>

      {/* Education — separate block */}
      <div className="mt-16 pt-10 border-t border-nier-dark/15">
        <div className="flex items-center gap-4">
          <span className="font-tech font-semibold tracking-[0.22em] text-[11px] text-nier-dark uppercase whitespace-nowrap">
            Education
          </span>
          <span aria-hidden="true" className="h-px flex-1 bg-nier-dark/15" />
        </div>
        <ol className="mt-7 space-y-8">
          {EDUCATION.map((edu) => (
            <li key={edu.id} className="relative pl-10">
              <span aria-hidden="true" className="absolute left-0 top-1.5 w-3 h-3 rotate-45 border border-nier-dark/50 bg-nier-beige" />
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="font-tech font-bold text-2xl tracking-[0.01em] text-nier-darker">{edu.degree}</h3>
                <span className="font-tech font-semibold text-base tracking-[0.04em] text-nier-dark/90 uppercase">
                  {edu.school}
                </span>
              </div>
              <p className="mt-1 text-[13px] text-nier-dark/90">
                {edu.period}
                {edu.location ? ` · ${edu.location}` : ''}
              </p>
              <ul className="mt-3.5 max-w-2xl space-y-2">
                {edu.highlights.map((h) => (
                  <li key={h} className="flex gap-2.5 text-sm leading-relaxed text-nier-dark/90 items-start">
                    <span aria-hidden="true" className="mt-[7px] w-1.5 h-1.5 bg-nier-grid rotate-45 flex-shrink-0" />
                    {h}
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
