import React from 'react';
import { CONTACTS, USER_INFO } from '../../data';
import { useGitHubCommits } from '../../hooks/useGitHubCommits';
import { GitHubCalendar } from '../GitHubCalendar';

export const MessagesView: React.FC = () => {
   const { commits, loading, error } = useGitHubCommits('nickborrello');
   const [copied, setCopied] = React.useState<string | null>(null);

   const handleCopy = (e: React.MouseEvent, contact: typeof CONTACTS[0]) => {
      if (contact.link.startsWith('mailto:')) {
         const email = contact.link.replace('mailto:', '');
         navigator.clipboard.writeText(email);
         setCopied(contact.platform);
         setTimeout(() => setCopied(null), 2000);
      }
   };

   return (
      <div className="flex flex-col h-full w-full animate-fadeIn">

         {/* Nier Header */}
         <div className="flex items-baseline gap-2 md:gap-4 mb-6 select-none flex-shrink-0">
            <div className="relative">
               <h1 className="text-4xl md:text-5xl font-tech font-bold text-nier-dark/10 absolute top-0 left-0 translate-x-1 translate-y-1 tracking-[0.1em]">
                  ABOUT
               </h1>
               <h1 className="text-4xl md:text-5xl font-tech font-bold text-nier-dark relative z-10 tracking-[0.1em]">
                  ABOUT
               </h1>
            </div>
            <span className="text-xl md:text-2xl font-tech text-nier-dark/70 tracking-widest uppercase -ml-2">
               - User Profile
            </span>
         </div>

         <div className="flex flex-col lg:flex-row gap-8 flex-1 min-h-0 overflow-hidden">
            {/* Left: Contact List / Connect */}
            <div className="w-full lg:w-[25%] flex flex-col border border-nier-dark/20 bg-nier-beige-dim h-full overflow-hidden">
               {/* Header for list - Flush */}
               <div className="flex items-center justify-between bg-nier-dark text-nier-beige px-3 py-1 flex-shrink-0">
                  <span className="text-sm md:text-base font-tech font-bold uppercase tracking-widest">
                     CONNECT
                  </span>
               </div>

               <div className="flex-1 overflow-y-auto custom-scrollbar p-2">
                  <div className="space-y-2">
                     {CONTACTS.map((contact, idx) => {
                        const isMailto = contact.link.startsWith('mailto:');
                        return (
                           <a
                              key={idx}
                              href={contact.link}
                              target={isMailto ? undefined : "_blank"}
                              rel={isMailto ? undefined : "noopener noreferrer"}
                              onClick={(e) => handleCopy(e, contact)}
                              className="flex items-center gap-3 p-3 bg-nier-beige-dim/10 border border-nier-dark/5 hover:bg-nier-dark hover:text-nier-beige transition-colors group cursor-pointer relative overflow-hidden"
                           >
                              <contact.icon size={18} />
                              <div className="flex-1 font-tech text-lg font-medium uppercase tracking-wide group-hover:font-bold">
                                 {copied === contact.platform ? "COPIED TO CLIPBOARD!" : contact.platform}
                              </div>
                              <span className={`transition-opacity text-xs ${copied === contact.platform ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                                 {copied === contact.platform ? "✓" : "→"}
                              </span>

                              {copied === contact.platform && (
                                 <div className="absolute inset-0 bg-nier-dark/20 animate-pulse pointer-events-none"></div>
                              )}
                           </a>
                        );
                     })}
                  </div>
               </div>
            </div>

            {/* Right: Bio / About Details */}
            <div className="flex-1 bg-nier-beige-dim border border-nier-dark/10 flex flex-col overflow-hidden h-full">

               {/* Dark Header Label */}
               <div className="w-full bg-nier-dark py-1 px-3 shadow-sm flex flex-shrink-0 z-10">
                  <span className="text-sm md:text-base font-tech font-bold uppercase tracking-widest text-nier-beige">
                     USER DATA
                  </span>
               </div>

               <div className="p-6 overflow-y-auto custom-scrollbar flex-1">
                  <div className="w-full text-left">
                     <div className="flex items-center gap-2 mb-4">
                        <div className="w-4 h-4 bg-nier-dark"></div>
                        <h3 className="text-3xl font-tech text-black font-bold uppercase tracking-widest">
                           {USER_INFO.name}
                        </h3>
                     </div>

                     <div className="mb-6">
                        <span className="bg-nier-dark text-nier-beige px-3 py-1 text-xs font-tech font-bold uppercase tracking-widest">
                           {USER_INFO.title}
                        </span>
                        <span className="ml-3 font-tech text-black/70 font-medium tracking-wide">
                           {USER_INFO.location}
                        </span>
                     </div>

                     <p className="font-tech text-xl text-black font-medium leading-relaxed text-justify border-t border-nier-dark/20 pt-6">
                        {USER_INFO.bio}
                     </p>

                     <div className="mt-8 p-4 bg-nier-beige border border-nier-dark/10">
                        <div className="text-xs text-black font-bold uppercase tracking-widest mb-1 opacity-70">Focus</div>
                        <p className="font-tech text-lg text-black font-medium">
                           {USER_INFO.tagline}
                        </p>
                     </div>

                     {/* GitHub Activity Log */}
                     <div className="mt-8">
                        <div className="flex items-center justify-between mb-2 opacity-70">
                           <div className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-nier-dark rotate-45"></div>
                              <div className="text-xs text-black font-bold uppercase tracking-widest">Memory Log // Recent Commits</div>
                           </div>
                           {!loading && commits.length > 0 && (
                              <div className="hidden md:block text-[10px] text-nier-dark font-bold uppercase tracking-widest bg-nier-dark/10 px-2 py-0.5 border border-nier-dark/20">
                                 LAST ACTIVE: {commits[0].repoName}
                              </div>
                           )}
                        </div>

                        {/* Contribution Activity Summary */}
                        {!loading && !error && (
                           <div className="mb-4 border border-nier-dark/20 bg-nier-dark/5 p-3">
                              <div className="text-[10px] font-bold uppercase tracking-widest mb-2 opacity-80">
                                 Contribution activity
                              </div>
                              <div className="text-sm font-bold opacity-60 mb-2">
                                 {new Date().toLocaleString('default', { month: 'long', year: 'numeric' })}
                              </div>
                              <div className="max-h-32 overflow-y-auto custom-scrollbar space-y-1">
                                 {(() => {
                                    const now = new Date();
                                    const currentMonth = now.getMonth();
                                    const currentYear = now.getFullYear();

                                    // Filter for current month
                                    const filtered = commits.filter(c => {
                                       const d = new Date(c.date);
                                       return d.getMonth() === currentMonth && d.getFullYear() === currentYear;
                                    });

                                    if (filtered.length === 0) {
                                       return <div className="text-xs opacity-50 italic">No public activity recorded this month. (Private Work Encrypted)</div>;
                                    }

                                    // Group by repo
                                    const counts: Record<string, number> = {};
                                    filtered.forEach(c => {
                                       counts[c.repoName] = (counts[c.repoName] || 0) + 1;
                                    });

                                    return Object.entries(counts)
                                       .sort(([, a], [, b]) => b - a)
                                       .map(([repo, count]) => (
                                          <div key={repo} className="flex justify-between items-center text-xs border-b border-nier-dark/10 pb-1 last:border-0">
                                             <span className="font-bold text-nier-dark">{repo}</span>
                                             <div className="flex items-center gap-2">
                                                <div className="h-[1px] bg-nier-dark/20 w-8"></div>
                                                <span className="font-mono opacity-70">{count} commits</span>
                                             </div>
                                          </div>
                                       ));
                                 })()}
                              </div>
                           </div>
                        )}

                        <GitHubCalendar />


                     </div>

                  </div>
               </div>

            </div>
         </div>

      </div >
   );
};