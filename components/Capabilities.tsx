import React from 'react';
import { CAPABILITY_GROUPS } from '../data';
import { Section } from './Section';
import { NierCornerFrame } from './NierDecorations';

export const Capabilities: React.FC = () => {
  return (
    <Section
      id="skills"
      label="Skills"
      heading="Technical capabilities"
      intro="Core technologies, frameworks, and engineering competencies."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {CAPABILITY_GROUPS.map((group, idx) => (
          <NierCornerFrame
            key={group.id}
            bracketSize={6}
            className="p-4 bg-nier-beige-dim/30 border border-nier-dark/20 flex flex-col justify-between hover:border-nier-dark/40 transition-colors"
          >
            <div>
              {/* Card Header with NieR System Tag */}
              <div className="flex items-center justify-between pb-2 border-b border-nier-dark/20">
                <h3 className="font-tech font-bold text-sm sm:text-base tracking-[0.12em] text-nier-darker uppercase">
                  {group.label}
                </h3>
                <span className="font-tech font-bold text-[10px] tracking-[0.16em] text-accent">
                  [ 0{idx + 1} ]
                </span>
              </div>

              {group.description && (
                <p className="mt-2 text-xs leading-relaxed text-nier-dark/90">{group.description}</p>
              )}

              <ul className="mt-4 flex flex-wrap gap-1.5" aria-label={`${group.label} skills`}>
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="inline-flex items-center gap-1 px-2.5 py-1 border border-nier-dark/25 bg-nier-beige font-tech font-semibold tracking-[0.06em] text-[12px] uppercase text-nier-darker hover:border-nier-darker transition-colors"
                  >
                    <span className="text-[8px] text-nier-dark/50" aria-hidden="true">■</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </NierCornerFrame>
        ))}
      </div>
    </Section>
  );
};
