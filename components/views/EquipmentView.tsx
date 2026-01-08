import React, { useState } from 'react';
import { SKILLS, PROJECTS } from '../../data';
import { SkillItem } from '../../types';
import { ExternalLink, Github } from 'lucide-react';

export const EquipmentView: React.FC = () => {
   const [selectedSkillId, setSelectedSkillId] = useState<string | null>(SKILLS[0]?.id || null);

   // Define categories for grouping the list
   const listCategories: Array<SkillItem['category']> = ['Language', 'Framework', 'Tool'];

   // Define order for the stack visualizer (Bottom to Top)
   const stackCategories: Array<SkillItem['category']> = ['Language', 'Framework', 'Tool'];

   // Helper to find projects using the skill
   const getAssociatedProjects = (skillName: string) => {
      const filtered = PROJECTS.filter(p => p.tech.includes(skillName));
      return filtered.sort((a, b) => {
         const getDateValue = (date: string) => {
            if (date === "Present") return 999999;
            const [month, year] = date.split('-').map(Number);
            return year * 100 + month;
         };
         const aEnd = getDateValue(a.endDate || a.startDate || '');
         const bEnd = getDateValue(b.endDate || b.startDate || '');
         return bEnd - aEnd;
      });
   };

   const activeSkill = SKILLS.find(s => s.id === selectedSkillId);

   return (
      <div className="flex flex-col h-full w-full animate-fadeIn">

         {/* Nier Header */}
         <div className="flex items-baseline gap-2 md:gap-4 mb-6 select-none flex-shrink-0">
            <div className="relative">
               <h1 className="text-4xl md:text-5xl font-tech font-bold text-nier-dark/10 absolute top-0 left-0 translate-x-1 translate-y-1 tracking-[0.1em]">
                  SKILLS
               </h1>
               <h1 className="text-4xl md:text-5xl font-tech font-bold text-nier-dark relative z-10 tracking-[0.1em]">
                  SKILLS
               </h1>
            </div>
            <span className="text-xl md:text-2xl font-tech text-nier-dark/70 tracking-widest uppercase -ml-2">
               - Technical Skills
            </span>
         </div>

         <div className="flex flex-col lg:flex-row gap-6 flex-1 min-h-0 h-full overflow-hidden">

            {/* LEFT COLUMN: Skill List */}
            <div className="w-full lg:w-[35%] flex flex-col border border-nier-dark/20 bg-nier-beige-dim h-full overflow-hidden">
               <div className="flex-1 overflow-y-auto custom-scrollbar space-y-0 relative">
                  {listCategories.map((category) => {
                     const categorySkills = SKILLS.filter(s => s.category === category);
                     if (categorySkills.length === 0) return null;

                     return (
                        <div key={category} className="mb-4">
                           {/* Category Header - Sticky & Flush */}
                           <div className="sticky top-0 z-10 flex items-center justify-between bg-nier-dark text-nier-beige px-3 py-1 mb-2 shadow-sm">
                              <span className="text-sm md:text-base font-tech font-bold uppercase tracking-widest">
                                 {category}S
                              </span>
                              <span className="text-[10px] font-tech opacity-70 tracking-widest">
                                 PROFICIENCY
                              </span>
                           </div>

                           {/* Skills in Category */}
                           <div className="space-y-1 px-1">
                              {categorySkills.map((skill) => {
                                 const proficiency = skill.level === 'S-Tier' ? 'Expert' : skill.level === 'A-Tier' ? 'Advanced' : 'Intermediate';
                                 const isSelected = selectedSkillId === skill.id;

                                 return (
                                    <div
                                       key={skill.id}
                                       onClick={() => setSelectedSkillId(skill.id)}
                                       className={`
                                group flex items-center gap-2 cursor-pointer p-1 transition-all border-b border-nier-dark/5 last:border-0
                                ${isSelected ? 'bg-nier-dark/10' : 'hover:bg-nier-dark/5'}
                            `}
                                    >
                                       <div className="w-4 flex justify-center">
                                          <div className={`w-1.5 h-1.5 bg-nier-dark rotate-45 transition-opacity ${isSelected ? 'opacity-100' : 'opacity-0'}`}></div>
                                       </div>
                                       <div className={`w-6 h-6 border flex items-center justify-center transition-colors ${isSelected ? 'bg-nier-dark border-nier-dark text-nier-beige' : 'border-nier-dark/30 bg-white/50 text-nier-dark'}`}>
                                          <skill.icon size={14} />
                                       </div>
                                       <div className="flex-1 font-tech text-lg font-bold tracking-wide uppercase text-black">
                                          {skill.name}
                                       </div>
                                       <div className="font-tech text-xs tracking-widest opacity-70 font-bold text-black uppercase">
                                          {proficiency}
                                       </div>
                                    </div>
                                 );
                              })}
                           </div>
                        </div>
                     );
                  })}

                  {/* Filler/Empty Slots */}
                  <div className="opacity-40 mt-4 pt-4 border-t border-nier-dark/10 px-1">
                     <div className="text-[10px] font-tech uppercase tracking-widest mb-1 pl-2">Future Growth</div>
                     {Array.from({ length: 3 }).map((_, i) => (
                        <div key={`filler-${i}`} className="flex items-center gap-2 p-1">
                           <div className="w-4"></div>
                           <div className="w-6 h-6 border border-nier-dark/30 border-dashed"></div>
                           <div className="flex-1 font-tech text-lg tracking-wide uppercase text-black font-medium">
                              Planned
                           </div>
                           <div className="font-tech text-sm tracking-widest font-bold">
                              [--]
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>

             {/* MIDDLE COLUMN: Visual Stack (Hidden on mobile) */}
             <div className="hidden lg:flex lg:w-[25%] flex-col items-center justify-center bg-nier-grid-bg relative overflow-hidden h-full">
 
                {/* The Stack Stick */}
                <div className="w-32 h-[95%] border-2 border-nier-dark bg-nier-beige flex flex-col-reverse shadow-lg relative my-auto overflow-hidden">
                   {/* Core (Bottom) */}
                   <div className="h-10 w-full bg-nier-dark/10 border border-nier-dark flex items-center justify-center relative flex-shrink-0 z-10">
                      <span className="text-[10px] font-tech uppercase tracking-tighter text-black font-bold rotate-90 opacity-60">CORE</span>
                   </div>
 
                   {/* Categorized Blocks */}
                   <div className="flex-1 flex flex-col-reverse min-h-0 overflow-hidden">
                      {stackCategories.map((cat, index) => {
                         const skillsInCat = SKILLS.filter(s => s.category === cat);
                         if (skillsInCat.length === 0) return null;
 
                         return (
                            <React.Fragment key={cat}>
                               {skillsInCat.map((skill) => {
                                  // Use flex weight based on tier instead of fixed height
                                  const weight = skill.level === 'S-Tier' ? 3 : skill.level === 'A-Tier' ? 2 : 1;
                                  const isSelected = selectedSkillId === skill.id;
                                  const isDimmed = selectedSkillId !== null && !isSelected;
 
                                  // Base styles
                                  let bgClass = '';
                                  if (skill.category === 'Language') bgClass = 'bg-[#dfc87f] text-[#3a3836]';
                                  if (skill.category === 'Framework') bgClass = 'bg-[#c4b090] text-[#3a3836]';
                                  if (skill.category === 'Tool') bgClass = 'bg-[#d6998d] text-[#3a3836]';
 
                                  return (
                                     <div
                                        key={`stack-${skill.id}`}
                                        onClick={() => setSelectedSkillId(skill.id)}
                                        style={{ flexGrow: weight }}
                                        className={`
                                        w-full border border-nier-dark/40 relative flex items-center justify-center transition-all duration-200 cursor-pointer min-h-[12px]
                                        ${isSelected ? 'bg-nier-dark text-nier-beige scale-105 z-20 shadow-xl border-nier-beige' : bgClass}
                                        ${isDimmed ? 'opacity-[0.85] saturate-[.75]' : 'opacity-100'}
                                        hover:brightness-110
                                      `}
                                     >
                                        <skill.icon size={14} strokeWidth={1.5} className="opacity-90" />
                                     </div>
                                  );
                               })}
                            </React.Fragment>
                         );
                      })}
                   </div>
                </div>
             </div>

            {/* RIGHT COLUMN: Details Panel */}
            <div className="flex-1 bg-nier-beige-dim border border-nier-dark/10 p-6 relative flex flex-col overflow-y-auto custom-scrollbar">
               <div className="absolute top-0 left-0 w-full bg-nier-dark text-nier-beige px-3 py-1 text-sm md:text-base font-tech font-bold uppercase tracking-widest">
                  TECHNOLOGY DETAILS
               </div>

               {activeSkill ? (
                  <div className="mt-8 animate-fadeIn">
                     <div className="flex items-end justify-between border-b-2 border-nier-dark pb-2 mb-6">
                        <h2 className="text-4xl font-tech uppercase font-bold text-black tracking-wide">
                           {activeSkill.name}
                        </h2>
                        <div className="text-xs font-tech text-black/60 font-bold tracking-widest uppercase">
                           {activeSkill.level === 'S-Tier' ? 'Expert' : activeSkill.level === 'A-Tier' ? 'Advanced' : 'Intermediate'}
                        </div>
                     </div>

                     <div className="mb-4">
                        <div className="text-xs font-tech font-bold uppercase tracking-widest text-black opacity-70 mb-2">
                           Category
                        </div>
                        <span className="bg-nier-dark/10 border border-nier-dark/20 px-3 py-1 font-tech font-bold text-black uppercase tracking-wider text-sm">
                           {activeSkill.category}
                        </span>
                     </div>

                     <div className="mt-8">
                        <div className="flex items-center gap-2 border-b border-nier-dark/20 pb-2 mb-4">
                           <div className="w-1.5 h-1.5 bg-nier-dark rotate-45"></div>
                           <div className="text-sm font-tech font-bold uppercase tracking-widest text-black">
                              Projects Used In
                           </div>
                        </div>

                        <div className="space-y-3">
                           {getAssociatedProjects(activeSkill.name).length > 0 ? (
                              getAssociatedProjects(activeSkill.name).map(p => {
                                 const url = p.link || p.repoUrl;
                                 const isRepoOnly = !p.link && !!p.repoUrl;

                                 if (!url) {
                                    return (
                                       <div
                                          key={p.id}
                                          className="flex items-center gap-3 text-black/50 bg-nier-beige/30 border border-transparent p-2 cursor-default"
                                       >
                                          <span className="text-xs text-nier-dark/30">●</span>
                                          <span className="font-tech text-xl font-bold uppercase">{p.title}</span>
                                       </div>
                                    );
                                 }

                                 return (
                                    <a
                                       key={p.id}
                                       href={url}
                                       target="_blank"
                                       rel="noopener noreferrer"
                                       className="flex items-center gap-3 text-black group bg-nier-beige border border-transparent hover:border-nier-dark/20 p-2 transition-all cursor-pointer hover:bg-white/50"
                                    >
                                       <span className="text-xs text-nier-dark group-hover:translate-x-1 transition-transform">▶</span>
                                       <span className="font-tech text-xl font-bold uppercase underline decoration-transparent group-hover:decoration-nier-dark/30 underline-offset-4">{p.title}</span>
                                       {isRepoOnly ? (
                                          <Github size={14} className="ml-auto opacity-30 group-hover:opacity-100" />
                                       ) : (
                                          <ExternalLink size={14} className="ml-auto opacity-30 group-hover:opacity-100" />
                                       )}
                                    </a>
                                 );
                              })
                           ) : (
                              <div className="p-4 border border-nier-dark/10 border-dashed text-black/50 font-tech italic text-sm text-center">
                                 No featured projects linked to this skill.
                              </div>
                           )}
                        </div>
                     </div>
                  </div>
               ) : (
                  <div className="flex-1 flex flex-col items-center justify-center text-black/30 space-y-4">
                     <div className="w-16 h-16 border-2 border-dashed border-black/20 flex items-center justify-center">
                        <span className="text-2xl">?</span>
                     </div>
                     <div className="font-tech uppercase tracking-widest text-sm font-bold">
                        Select a technology to view usage data
                     </div>
                  </div>
               )}
            </div>

         </div>
      </div>
   );
};