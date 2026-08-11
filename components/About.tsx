import React from 'react';
import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import { CONTACTS, RESUME_URL, USER_INFO } from '../data';
import { Section } from './Section';
import { CornerTicks } from './CornerTicks';

const ICONS = {
  Email: Mail,
  GitHub: Github,
  LinkedIn: Linkedin,
} as const;

export const About: React.FC = () => {
  return (
    <Section id="about" index="04" label="About" heading="About">
      <div className="grid gap-10 lg:grid-cols-[1.35fr_1fr] lg:gap-14">
        {/* Bio */}
        <div>
          <p className="text-[16px] leading-relaxed text-nier-dark max-w-2xl">{USER_INFO.bio}</p>

          <div className="mt-8 border-t border-nier-dark/15 pt-5 max-w-2xl">
            <p className="font-tech font-semibold tracking-[0.22em] text-[11px] text-nier-dark uppercase">
              Currently
            </p>
            <div className="mt-2.5 flex items-start gap-2.5 text-sm leading-relaxed text-nier-darker">
              <span aria-hidden="true" className="mt-[7px] w-2 h-2 bg-accent flex-shrink-0" />
              <span>
                AI &amp; Software Engineer at Baystate Pet &amp; Garden — building production LLM systems.
                {USER_INFO.status}.
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-nier-dark/90 max-w-2xl">
              Based in {USER_INFO.location}. Targeting AI Engineer roles where practical AI features,
              intelligent search and extraction, and autonomous agents deliver measurable business value.
            </p>
          </div>
        </div>

        {/* Contact panel */}
        <aside aria-label="Contact" className="relative border border-nier-dark/20 bg-nier-beige-dim/50 p-6 sm:p-7 h-fit">
          <CornerTicks />
          <p className="font-tech font-semibold tracking-[0.22em] text-[11px] text-nier-dark uppercase">
            Direct line
          </p>
          <ul className="mt-4 space-y-1">
            {CONTACTS.map((contact) => {
              const Icon = ICONS[contact.platform as keyof typeof ICONS] ?? Mail;
              return (
                <li key={contact.platform}>
                  <a
                    href={contact.link}
                    className="group flex items-center justify-between gap-3 py-2.5 border-b border-nier-dark/10"
                  >
                    <span className="flex items-center gap-3 min-w-0">
                      <Icon size={16} strokeWidth={1.75} aria-hidden="true" className="text-nier-dark/80 flex-shrink-0" />
                      <span className="flex flex-col min-w-0">
                        <span className="font-tech font-bold tracking-[0.12em] text-sm uppercase text-nier-darker">
                          {contact.platform}
                        </span>
                        <span className="text-[12px] text-nier-dark/90 truncate">{contact.handle}</span>
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
            Resume
            <ArrowUpRight size={15} strokeWidth={2.5} aria-hidden="true" />
          </a>
        </aside>
      </div>
    </Section>
  );
};
