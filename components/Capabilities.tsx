import React, { useState } from 'react';
import { CAPABILITY_GROUPS, PROOF_EVIDENCE } from '../data';
import { CapabilitySkill } from '../types';
import { Section } from './Section';
import { CornerTicks } from './CornerTicks';

export const Capabilities: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<CapabilitySkill | null>(null);

  const toggle = (skill: CapabilitySkill) => {
    setSelectedSkill(selectedSkill?.name === skill.name ? null : skill);
  };

  return (
    <Section
      id="skills"
      index="03"
      label="Skills"
      heading="Capabilities, with receipts"
      intro="No tier scores — every capability below traces to something real I shipped. Select one to see where it was used."
    >
      <div className="grid gap-10 md:grid-cols-3 md:gap-8">
        {CAPABILITY_GROUPS.map((group) => (
          <div key={group.id}>
            <h3 className="font-tech font-bold text-lg tracking-[0.12em] text-nier-darker uppercase">
              {group.label}
            </h3>
            <p className="mt-1.5 text-[13px] leading-relaxed text-nier-dark/90">{group.description}</p>
            <div className="mt-4 flex flex-wrap gap-2" role="group" aria-label={`${group.label} capabilities`}>
              {group.skills.map((skill) => {
                const isActive = selectedSkill?.name === skill.name;
                return (
                  <button
                    key={skill.name}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => toggle(skill)}
                    className={`px-2.5 py-1.5 font-tech font-semibold tracking-[0.1em] text-[13px] uppercase transition-colors duration-150 border ${
                      isActive
                        ? 'bg-nier-darker text-nier-beige border-nier-darker'
                        : 'border-nier-dark/25 text-nier-darker hover:border-nier-darker hover:bg-nier-darker/5'
                    }`}
                  >
                    {skill.name}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Proof panel */}
      <div
        className="relative mt-12 border border-nier-dark/20 bg-nier-beige-dim/50 p-6 sm:p-8 min-h-[120px]"
        role="region"
        aria-live="polite"
        aria-label="Capability evidence"
      >
        <CornerTicks />
        {selectedSkill ? (
          <div className="rise-in">
            <p className="font-tech font-semibold tracking-[0.22em] text-[11px] text-accent uppercase">
              {selectedSkill.name} — shipped in
            </p>
            <ul className="mt-4 space-y-3.5">
              {selectedSkill.proofIds.map((proofId) => {
                const proof = PROOF_EVIDENCE[proofId];
                if (!proof) return null;
                return (
                  <li key={proofId} className="max-w-3xl">
                    <p className="font-tech font-bold tracking-[0.08em] text-sm text-nier-darker uppercase">
                      {proof.context}
                    </p>
                    <p className="mt-0.5 text-sm leading-relaxed text-nier-dark/90">{proof.detail}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        ) : (
          <div>
            <p className="font-tech font-semibold tracking-[0.22em] text-[11px] text-nier-dark uppercase">
              Select a capability
            </p>
            <p className="mt-2.5 max-w-3xl text-[15px] leading-relaxed text-nier-dark/90">
              Each chip reveals the projects and roles where that capability shipped — the proof behind the
              claim.
            </p>
          </div>
        )}
      </div>
    </Section>
  );
};
