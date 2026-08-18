import React from 'react';
import { ArrowUpRight, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { CONTACTS, RESUME_URL, USER_INFO } from '../data';
import { Section } from './Section';
import { CornerTicks } from './CornerTicks';

const ICONS = {
  Email: Mail,
  Phone: Phone,
  GitHub: Github,
  LinkedIn: Linkedin,
} as const;

export const About: React.FC = () => {
  return (
    <Section id="about" index="04" label="About" heading="About & Contact">
      <div className="grid gap-10 lg:grid-cols-[1.35fr_1fr] lg:gap-14 items-start">
        {/* Bio */}
        <div className="space-y-4">
          <p className="text-[16px] leading-relaxed text-nier-dark max-w-2xl">
            {USER_INFO.bio}
          </p>
          <p className="text-[15px] leading-relaxed text-nier-dark/90 max-w-2xl">
            I'm based in {USER_INFO.location} and open to software and AI engineering roles focused on practical LLM tooling, agent execution, and intelligent data systems.
          </p>
        </div>

        {/* Contact panel */}
        <aside aria-label="Contact information" className="relative border border-nier-dark/20 bg-nier-beige-dim/40 p-6 sm:p-7">
          <CornerTicks />
          <p className="font-tech font-semibold tracking-[0.22em] text-[11px] text-nier-dark uppercase">
            Get in touch
          </p>
          <ul className="mt-4 space-y-1">
            {CONTACTS.map((contact) => {
              const Icon = ICONS[contact.platform as keyof typeof ICONS] ?? Mail;
              return (
                <li key={contact.platform}>
                  <a
                    href={contact.link}
                    target={contact.link.startsWith('http') ? '_blank' : undefined}
                    rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="group flex items-center justify-between gap-3 py-2.5 border-b border-nier-dark/10 hover:border-nier-dark/30 transition-colors"
                  >
                    <span className="flex items-center gap-3 min-w-0">
                      <Icon size={16} strokeWidth={1.75} aria-hidden="true" className="text-nier-dark/80 flex-shrink-0" />
                      <span className="flex flex-col min-w-0">
                        <span className="font-tech font-bold tracking-[0.12em] text-sm uppercase text-nier-darker">
                          {contact.platform}
                        </span>
                        <span className="text-[12px] text-nier-dark/80 truncate">{contact.handle}</span>
                      </span>
                    </span>
                    <ArrowUpRight
                      size={14}
                      strokeWidth={2}
                      aria-hidden="true"
                      className="text-nier-dark/40 group-hover:text-accent transition-colors duration-150 flex-shrink-0"
                    />
                  </a>
                </li>
              );
            })}
          </ul>

          <a
            href={RESUME_URL}
            className="mt-5 flex items-center justify-center gap-2 bg-nier-darker text-nier-beige px-5 py-3 font-tech font-bold tracking-[0.16em] text-sm uppercase hover:bg-nier-panel transition-colors duration-150"
          >
            Download Resume
            <ArrowUpRight size={15} strokeWidth={2.5} aria-hidden="true" />
          </a>
        </aside>
      </div>
    </Section>
  );
};
