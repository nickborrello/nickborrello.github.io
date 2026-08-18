import React from 'react';
import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import { CONTACTS, USER_INFO } from '../data';
import { Section } from './Section';

const ICONS = {
  Email: Mail,
  GitHub: Github,
  LinkedIn: Linkedin,
} as const;

export const About: React.FC = () => {
  return (
    <Section id="about" label="About" heading="About & Contact">
      <div className="max-w-2xl space-y-6">
        <p className="text-[16px] leading-relaxed text-nier-dark">
          {USER_INFO.bio}
        </p>

        {/* Simple horizontal link row */}
        <div className="pt-2 flex flex-wrap items-center gap-6">
          {CONTACTS.map((contact) => {
            const Icon = ICONS[contact.platform as keyof typeof ICONS] ?? Mail;
            return (
              <a
                key={contact.platform}
                href={contact.link}
                target={contact.link.startsWith('http') ? '_blank' : undefined}
                rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="inline-flex items-center gap-2 font-tech font-semibold tracking-[0.12em] text-sm uppercase text-nier-darker hover:text-accent transition-colors duration-150"
              >
                <Icon size={16} strokeWidth={2} aria-hidden="true" className="text-nier-dark/70" />
                <span>{contact.platform}</span>
                <ArrowUpRight size={13} strokeWidth={2} aria-hidden="true" className="text-nier-dark/40" />
              </a>
            );
          })}
        </div>
      </div>
    </Section>
  );
};
