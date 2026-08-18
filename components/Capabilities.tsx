import React from 'react';
import { CAPABILITY_GROUPS } from '../data';
import { Section } from './Section';

export const Capabilities: React.FC = () => {
  return (
    <Section
      id="skills"
      index="03"
      label="Skills"
      heading="Technical capabilities"
      intro="Core technologies, frameworks, and engineering competencies used across production systems."
    >
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 md:gap-8">
        {CAPABILITY_GROUPS.map((group) => (
          <div key={group.id} className="flex flex-col">
            <h3 className="font-tech font-bold text-base tracking-[0.14em] text-nier-darker uppercase pb-2 border-b border-nier-dark/15">
              {group.label}
            </h3>
            {group.description && (
              <p className="mt-2 text-xs leading-relaxed text-nier-dark/80">{group.description}</p>
            )}
            <ul className="mt-4 flex flex-wrap gap-1.5" aria-label={`${group.label} skills`}>
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="px-2.5 py-1 border border-nier-dark/20 bg-nier-beige-dim/30 font-tech font-semibold tracking-[0.08em] text-[12px] uppercase text-nier-darker"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
};
