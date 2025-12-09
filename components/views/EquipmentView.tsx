import React, { useState } from 'react';
import { SKILLS, PROJECTS } from '../../data';
import { SkillItem } from '../../types';

export const EquipmentView: React.FC = () => {
  const [hoveredSkillId, setHoveredSkillId] = useState<string | null>(null);

  // Define categories for grouping the list
  const listCategories: Array<SkillItem['category']> = ['Language', 'Framework', 'Tool'];
  
  // Define order for the stack visualizer (Bottom to Top)
  const stackCategories: Array<SkillItem['category']> = ['Language', 'Framework', 'Tool'];

  // Helper to find projects using the skill
  const getAssociatedProjects = (skillName: string) => {
    return PROJECTS.filter(p => p.tech.includes(skillName));
  };

  const activeSkill = SKILLS.find(s => s.id === hoveredSkillId);

  return (
    <div className="flex flex-col h-full w-full animate-fadeIn">
      
      {/* Nier Header */}
      <div className="flex items-baseline gap-2 md:gap-4 mb-4 select-none flex-shrink-0">
        <div className="relative">
          <h1 className="text-2xl md:text-4xl font-tech font-bold text-nier-dark/20 absolute top-0 left-0 translate-x-2 translate-y-2 tracking-[0.1em]">
            SKILLS
          </h1>
          <h1 className="text-2xl md:text-4xl font-tech font-bold text-nier-dark relative z-10 tracking-[0.1em]">
            SKILLS
          </h1>
        </div>
        <span className="text-sm md:text-lg font-tech text-nier-dark/70 tracking-widest uppercase -ml-1">
          - Proficiency
        </span>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 flex-1 min-h-0 h-full overflow-hidden">
        
        {/* LEFT COLUMN: Skill List */}
        <div className="w-full lg:w-[35%] flex flex-col border border-nier-dark/20 bg-nier-beige/30 p-1 h-full overflow-hidden">
           <div className="flex-1 overflow-y-auto custom-scrollbar p-1 space-y-6">
              {listCategories.map((category) => {
                const categorySkills = SKILLS.filter(s => s.category === category);
                if (categorySkills.length === 0) return null;

                return (
                  <div key={category}>
                    {/* Category Header */}
                    <div className="flex items-center justify-between bg-nier-dark text-nier-beige px-3 py-1 mb-2">
                       <span className="text-xs font-tech font-bold uppercase tracking-widest">
                         {category}S
                       </span>
                       <span className="text-[10px] font-tech opacity-70 tracking-widest">
                         LEVEL
                       </span>
                    </div>

                    {/* Skills in Category */}
                    <div className="space-y-1">
                      {categorySkills.map((skill) => {
                        const cost = skill.level === 'S-Tier' ? '[21]' : skill.level === 'A-Tier' ? '[14]' : '[7]';
                        const isHovered = hoveredSkillId === skill.id;

                        return (
                          <div 
                            key={skill.id} 
                            onMouseEnter={() => setHoveredSkillId(skill.id)}
                            onMouseLeave={() => setHoveredSkillId(null)}
                            className={`
                                group flex items-center gap-2 cursor-pointer p-1 transition-all border-b border-nier-dark/5 last:border-0
                                ${isHovered ? 'bg-nier-dark/10' : 'hover:bg-nier-dark/5'}
                            `}
                          >
                            <div className="w-4 flex justify-center">
                               <div className={`w-1.5 h-1.5 bg-nier-dark rotate-45 transition-opacity ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>
                            </div>
                            <div className={`w-6 h-6 border flex items-center justify-center transition-colors ${isHovered ? 'bg-nier-dark border-nier-dark text-nier-beige' : 'border-nier-dark/30 bg-white/50 text-nier-dark'}`}>
                               <skill.icon size={14} />
                            </div>
                            <div className="flex-1 font-tech text-lg font-bold tracking-wide uppercase text-black">
                               {skill.name}
                            </div>
                            <div className="font-tech text-sm tracking-widest opacity-70 font-bold text-black">
                               {cost}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
              
              {/* Filler/Empty Slots */}
              <div className="opacity-40 mt-4 pt-4 border-t border-nier-dark/10">
                 <div className="text-[10px] font-tech uppercase tracking-widest mb-1 pl-2">Available Slots</div>
                 {Array.from({ length: 3 }).map((_, i) => (
                    <div key={`filler-${i}`} className="flex items-center gap-2 p-1">
                       <div className="w-4"></div>
                       <div className="w-6 h-6 border border-nier-dark/30 border-dashed"></div>
                       <div className="flex-1 font-tech text-lg tracking-wide uppercase text-black font-medium">
                          EMPTY
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
        <div className="hidden lg:flex lg:w-[25%] flex-col items-center justify-center bg-nier-grid-bg relative border border-nier-dark/10">
           
           {/* The Stack Stick */}
           <div className="w-32 h-[80%] border-2 border-nier-dark bg-nier-beige flex flex-col-reverse p-1 gap-[1px] shadow-lg relative">
              {/* Core (Bottom) */}
              <div className="h-12 w-full bg-nier-dark/10 border border-nier-dark flex items-center justify-center relative flex-shrink-0 z-10">
                 <span className="text-[10px] font-tech uppercase tracking-tighter text-black font-bold rotate-90 opacity-60">CORE</span>
              </div>
              
              {/* Categorized Blocks */}
              {stackCategories.map((cat, index) => {
                 const skillsInCat = SKILLS.filter(s => s.category === cat);
                 if (skillsInCat.length === 0) return null;

                 return (
                    <React.Fragment key={cat}>
                        {skillsInCat.map((skill) => {
                            const height = skill.level === 'S-Tier' ? 'h-10' : skill.level === 'A-Tier' ? 'h-8' : 'h-6';
                            const isHovered = hoveredSkillId === skill.id;
                            const isDimmed = hoveredSkillId !== null && !isHovered;
                            
                            // Base styles
                            let bgClass = '';
                            if (skill.category === 'Language') bgClass = 'bg-nier-panel/60 text-nier-beige'; 
                            if (skill.category === 'Framework') bgClass = 'bg-nier-panel/40 text-black';
                            if (skill.category === 'Tool') bgClass = 'bg-nier-panel/20 text-black';

                            return (
                                <div 
                                  key={`stack-${skill.id}`} 
                                  onMouseEnter={() => setHoveredSkillId(skill.id)}
                                  onMouseLeave={() => setHoveredSkillId(null)}
                                  className={`
                                    ${height} w-full border border-nier-dark/40 relative flex items-center justify-center transition-all duration-200
                                    ${isHovered ? 'bg-nier-dark text-nier-beige scale-105 z-20 shadow-xl border-nier-beige' : bgClass}
                                    ${isDimmed ? 'opacity-30 grayscale' : 'opacity-100'}
                                  `}
                                >
                                    <skill.icon size={16} strokeWidth={1.5} className="opacity-90" />
                                </div>
                            );
                        })}
                        
                        {/* Divider */}
                        {index < stackCategories.length - 1 && (
                            <div className="w-full h-3 my-0.5 flex items-center justify-center relative">
                                <div className="absolute w-full border-t border-nier-dark border-dashed opacity-30"></div>
                            </div>
                        )}
                    </React.Fragment>
                 );
              })}
              
              <div className="flex-1 bg-transparent"></div>
           </div>
        </div>

        {/* RIGHT COLUMN: Details Panel */}
        <div className="flex-1 bg-nier-beige-dim/20 border border-nier-dark/10 p-6 relative flex flex-col overflow-y-auto custom-scrollbar">
             <div className="absolute top-0 left-0 bg-nier-dark text-nier-beige px-3 py-1 text-xs font-tech font-bold uppercase tracking-widest">
                SKILL DETAILS
             </div>

             {activeSkill ? (
                <div className="mt-8 animate-fadeIn">
                   <div className="flex items-end justify-between border-b-2 border-nier-dark pb-2 mb-6">
                      <h2 className="text-4xl font-tech uppercase font-bold text-black tracking-wide">
                        {activeSkill.name}
                      </h2>
                      <div className="text-lg font-tech text-black/60 font-bold tracking-widest">
                        LVL: {activeSkill.level}
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
                            getAssociatedProjects(activeSkill.name).map(p => (
                               <div key={p.id} className="flex items-center gap-3 text-black group bg-nier-beige border border-transparent hover:border-nier-dark/20 p-2 transition-all">
                                  <span className="text-xs text-nier-dark">▶</span>
                                  <span className="font-tech text-xl font-bold uppercase">{p.title}</span>
                                  <span className="text-xs font-tech opacity-50 ml-auto tracking-widest">APP</span>
                               </div>
                            ))
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
                      Hover over a technology to view usage data
                   </div>
                </div>
             )}
        </div>

      </div>
    </div>
  );
};