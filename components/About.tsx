import React from 'react';
import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import { CONTACTS, USER_INFO } from '../data';
import { Section } from './Section';
import { NierCornerFrame } from './NierDecorations';

const ICONS = {
  Email: Mail,
  GitHub: Github,
  LinkedIn: Linkedin,
} as const;

export const About: React.FC = () => {
  return (
    <Section id="about" label="About" heading="About & Contact">
      <div className="max-w-2xl space-y-6">
        <NierCornerFrame bracketSize={6} className="p-4 sm:p-5 bg-nier-beige-dim/30 border border-nier-dark/20">
          <p className="text-[16px] leading-relaxed text-nier-dark">
            {USER_INFO.bio}
          </p>
        </NierCornerFrame>

        {/* Contact Links with NieR styling */}
        <div className="pt-2 flex flex-wrap items-center gap-3">
          {CONTACTS.map((contact) => {
            const Icon = ICONS[contact.platform as keyof typeof ICONS] ?? Mail;
            return (
              <a
                key={contact.platform}
                href={contact.link}
                target={contact.link.startsWith('http') ? '_blank' : undefined}
                rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group inline-flex items-center gap-2 px-4 py-2.5 bg-nier-beige-dim/40 border border-nier-dark/30 font-tech font-bold tracking-[0.14em] text-xs uppercase text-nier-darker hover:bg-nier-darker hover:text-nier-beige transition-all duration-150"
              >
                <span className="text-[8px] text-nier-dark/50 group-hover:text-accent transition-colors" aria-hidden="true">■</span>
                <Icon size={15} strokeWidth={2} aria-hidden="true" className="text-nier-dark/70 group-hover:text-nier-beige" />
                <span>{contact.platform}</span>
                <ArrowUpRight size={13} strokeWidth={2.5} aria-hidden="true" className="text-nier-dark/40 group-hover:text-nier-beige group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            );
          })}
        </div>
      </div>
    </Section>
  );
};
