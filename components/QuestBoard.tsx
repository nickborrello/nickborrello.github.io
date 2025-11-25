
import React, { useState } from 'react';
import { Star, Scroll, ChevronRight, Briefcase, Code, GraduationCap, Shield, Clock, Cpu } from 'lucide-react';
import { Project, QuestType } from '../types';
import ProjectGallery from './ProjectGallery';
import BookLayout from './BookLayout';

interface QuestBoardProps {
  onBack: () => void;
  quests: Project[];
}

// Reusable Components for the Category Button Style
const CategoryButton: React.FC<{ 
  title: string; 
  theme: 'green' | 'red' | 'standard'; 
  onClick: () => void;
  icon?: React.ReactNode; 
}> = ({ title, theme, onClick, icon }) => {
  
  const colors = {
    green: "bg-gradient-to-r from-green-900/80 via-green-600/90 to-green-900/80 border-green-400 text-green-100 shadow-[0_0_15px_rgba(74,222,128,0.3)]",
    red: "bg-gradient-to-r from-red-900/90 via-red-700/90 to-red-900/90 border-red-500 text-red-100 shadow-[0_0_15px_rgba(239,68,68,0.3)]",
    standard: "bg-gradient-to-r from-stone-800/90 via-stone-600/90 to-stone-800/90 border-stone-500 text-stone-200"
  };

  const glowColor = theme === 'green' ? 'bg-green-400' : theme === 'red' ? 'bg-red-500' : 'bg-stone-400';

  return (
    <button 
      onClick={onClick}
      className={`
        group relative w-full h-24 max-w-2xl mx-auto flex items-center justify-center 
        border-y-2 mb-4 transition-all duration-300 hover:scale-[1.02]
        ${colors[theme]}
      `}
    >
      <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/scratch-ink.png')] mix-blend-overlay"></div>
      <div className={`absolute -left-6 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full ${glowColor} opacity-0 group-hover:opacity-100 shadow-[0_0_10px_currentColor] transition-opacity`}></div>
      <div className="absolute left-4 opacity-80 group-hover:opacity-100 transition-opacity">
        <Shield size={32} className={theme === 'green' ? 'fill-green-900' : theme === 'red' ? 'fill-red-900' : 'fill-stone-900'} />
      </div>
      <div className="text-center z-10 flex flex-col items-center gap-1">
        <span className={`font-cinzel font-bold text-2xl tracking-[0.2em] drop-shadow-md ${theme === 'green' ? 'text-white' : ''}`}>
          {title}
        </span>
        {icon && <div className="opacity-70 scale-75">{icon}</div>}
      </div>
      <div className="absolute right-4 opacity-80 group-hover:opacity-100 transition-opacity">
        <Shield size={32} className={theme === 'green' ? 'fill-green-900' : theme === 'red' ? 'fill-red-900' : 'fill-stone-900'} />
      </div>
      <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors"></div>
    </button>
  );
};


const QuestBoard: React.FC<QuestBoardProps> = ({ onBack, quests }) => {
  const [viewState, setViewState] = useState<'CATEGORIES' | 'LIST'>('CATEGORIES');
  const [selectedCategory, setSelectedCategory] = useState<QuestType | null>(null);
  const [hoveredQuest, setHoveredQuest] = useState<Project | null>(null);

  const handleCategorySelect = (type: QuestType) => {
    setSelectedCategory(type);
    setViewState('LIST');
    const first = quests.find(q => q.type === type);
    if (first) setHoveredQuest(first);
  };

  const handleInternalBack = () => {
    if (viewState === 'LIST') {
      setViewState('CATEGORIES');
      setSelectedCategory(null);
      setHoveredQuest(null);
    } else {
      onBack();
    }
  };

  const filteredQuests = quests.filter(q => q.type === selectedCategory);

  return (
    <div className="w-full h-full animate-fade-in flex flex-col relative bg-slate-900/50">
      
      {/* Top Banner (Breadcrumbs) - Only visible in CATEGORIES view */}
      {viewState === 'CATEGORIES' && (
        <div className="absolute top-0 left-0 p-4 z-20 pointer-events-none">
          <div className="flex items-center gap-2 font-cinzel text-blue-300 drop-shadow-md text-lg md:text-xl">
            <div className="w-8 h-8 bg-blue-900/80 border border-blue-500 flex items-center justify-center rotate-45">
               <Scroll className="text-blue-200 -rotate-45" size={16}/>
            </div>
            <span className="font-bold tracking-widest text-shadow">Quest Counter</span>
            <ChevronRight size={18} className="text-slate-500" />
            <span className="text-slate-200 tracking-wider">Select Category</span>
          </div>
        </div>
      )}

      {/* --- VIEW 1: CATEGORY SELECTION --- */}
      {viewState === 'CATEGORIES' && (
        <div className="w-full h-full flex flex-col items-center justify-center p-8 animate-fade-in">
          <div className="w-full max-w-4xl relative">
             <div className="absolute inset-y-[-50px] inset-x-[-100px] bg-[url('https://www.transparenttextures.com/patterns/aged-paper.png')] opacity-10 pointer-events-none mask-image-faded-edges"></div>
             <h2 className="text-center font-cinzel text-3xl md:text-4xl text-yellow-500 mb-2 drop-shadow-lg tracking-widest">
               Master Rank
             </h2>
             <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-yellow-700 to-transparent mb-12 opacity-70"></div>
             <div className="space-y-6 relative z-10">
                <CategoryButton title="Assigned" theme="green" onClick={() => handleCategorySelect('ASSIGNED')} icon={<Briefcase size={20} className="text-green-200"/>} />
                <CategoryButton title="Optional" theme="standard" onClick={() => handleCategorySelect('OPTIONAL')} icon={<Code size={20} className="text-stone-300"/>} />
                <CategoryButton title="Special Assignments" theme="red" onClick={() => handleCategorySelect('SPECIAL')} icon={<GraduationCap size={20} className="text-red-200"/>} />
                <div className="max-w-2xl mx-auto mt-8 border-t border-slate-700/50 pt-4">
                   <div className="bg-gradient-to-r from-slate-900/90 via-slate-800/90 to-slate-900/90 border-y border-slate-600 h-16 flex items-center justify-center text-slate-400 font-cinzel tracking-wider opacity-60">
                      Events
                   </div>
                </div>
             </div>
             
             {/* Footer for Category View (Standard Back Button) */}
             <div className="fixed bottom-0 left-0 w-full p-4 z-50 pointer-events-none flex justify-between items-end">
                <div className="flex gap-4 pointer-events-auto">
                   <button 
                      onClick={onBack}
                      className="flex items-center gap-2 bg-slate-900/80 hover:bg-slate-800 text-slate-200 px-4 py-1 border border-slate-600 rounded-sm backdrop-blur transition-all active:scale-95 group"
                   >
                      <div className="w-6 h-6 rounded-full border border-slate-400 flex items-center justify-center text-xs font-bold bg-slate-800 group-hover:bg-slate-700">Esc</div>
                      <span className="font-bold text-shadow-sm group-hover:text-white">Main Menu</span>
                   </button>
                </div>
             </div>
          </div>
        </div>
      )}

      {/* --- VIEW 2: QUEST COUNTER (Using BookLayout) --- */}
      {viewState === 'LIST' && (
        <BookLayout 
          onBack={handleInternalBack}
          backLabel="Back"
          footerLeftActions={
            hoveredQuest && (
                <button 
                  className="flex items-center gap-2 bg-slate-900/80 hover:bg-slate-800 text-slate-200 px-4 py-2 border border-slate-600 rounded-sm shadow-md transition-all active:scale-95 group"
                >
                    <div className="w-5 h-5 rounded-full border border-slate-400 flex items-center justify-center text-[10px] font-bold bg-slate-800 group-hover:bg-slate-700">F</div>
                    <span className="font-bold text-sm text-shadow-sm group-hover:text-white">Confirm</span>
                </button>
             )
          }
          leftContent={
            <div className="flex flex-col min-h-full">
                {/* Header */}
                <div className="relative z-10 px-6 py-4 border-b-2 border-[#8c8574]/30 flex items-center justify-between">
                   <div className="flex items-center gap-2">
                      <div className="bg-orange-700 rounded-full w-6 h-6 flex items-center justify-center shadow-sm">
                         <Star size={14} fill="white" className="text-white"/>
                      </div>
                      <span className="text-orange-800 font-cinzel font-bold text-xl tracking-wide">Master Rank</span>
                   </div>
                   <span className="text-[#5c5546] font-cinzel font-bold text-sm">Page 1 / 1</span>
                </div>

                {/* Quest List */}
                <div className="flex-1 relative z-10 pt-2 pb-6">
                   {filteredQuests.map((quest) => {
                      const isHovered = hoveredQuest?.id === quest.id;
                      return (
                         <div 
                           key={quest.id}
                           onMouseEnter={() => setHoveredQuest(quest)}
                           className={`
                             relative px-6 py-3 cursor-pointer transition-all duration-200 border-b border-[#8c8574]/10
                             ${isHovered ? 'bg-[#4ade80]/20 mix-blend-multiply' : 'hover:bg-[#8c8574]/10'}
                           `}
                         >
                            <div className="flex justify-between items-center mb-1">
                                <div className="flex items-center gap-3">
                                  {/* Selection Diamond */}
                                  <div className={`w-3 h-3 transform rotate-45 transition-colors ${isHovered ? 'bg-green-700' : 'bg-[#8c8574]'}`}></div>
                                  <span className={`font-cinzel font-bold text-lg ${isHovered ? 'text-green-900' : 'text-[#3e3a32]'}`}>
                                    {quest.title}
                                  </span>
                               </div>
                               {quest.completed && (
                                 <span className="text-red-800 font-bold text-[10px] uppercase border border-red-800/40 px-1 bg-red-100/50">
                                    Completed
                                 </span>
                               )}
                            </div>
                            <div className="flex justify-between items-center pl-6">
                               <span className="text-[#5c5546] font-serif italic text-sm">{quest.client}</span>
                               <div className="flex gap-[1px]">
                                 {[...Array(quest.difficulty)].map((_, i) => (
                                    <Star key={i} size={10} fill="#b45309" className="text-yellow-700" />
                                 ))}
                               </div>
                            </div>
                         </div>
                      );
                   })}
                </div>

                {/* Bottom Summary (Stamped Look) */}
                <div className="relative z-10 h-32 m-4 mt-auto border-t-2 border-[#8c8574]/30 pt-2 flex gap-4">
                   <div className="w-24 h-24 bg-[#d6d3c9] border border-[#8c8574] shadow-inner flex items-center justify-center shrink-0 rotate-1">
                      {hoveredQuest?.type === 'ASSIGNED' ? <Briefcase size={40} className="text-[#3e3a32] opacity-80"/> : <Code size={40} className="text-[#3e3a32] opacity-80"/>}
                   </div>
                   <div className="flex-1 flex flex-col justify-center">
                      <h4 className="font-cinzel font-bold text-[#b45309] text-sm uppercase tracking-wider mb-1">Target</h4>
                      <div className="font-serif text-2xl font-bold text-[#2a2824] leading-none mb-2">
                         {hoveredQuest?.targetMonsters?.[0] || "Unknown"}
                      </div>
                      <div className="flex gap-6 text-[#5c5546] font-serif text-sm font-bold">
                         <span className="flex items-center gap-1"><span className="text-yellow-700">z</span> 28800</span>
                         <span className="flex items-center gap-1"><Clock size={12}/> {hoveredQuest?.duration}</span>
                      </div>
                   </div>
                </div>
            </div>
          }
          rightContent={
            <div className="flex flex-col min-h-full py-8 pr-8 relative mx-4">
               {hoveredQuest ? (
                 <>
                    {/* Header and Image Container - 50% */}
                    <div className="h-[50%] flex flex-col">
                       {/* TITLE HEADER (Top Center) */}
                       <div className="relative z-10 w-full text-center mb-2 flex-shrink-0">
                          <h3 className="font-cinzel font-bold text-xl md:text-2xl text-[#b45309] drop-shadow-sm tracking-wide">
                             {hoveredQuest.location || hoveredQuest.title}
                          </h3>
                       </div>

                       {/* GALLERY / IMAGE PREVIEW AREA */}
                       <div className="relative w-full h-full mb-4 group select-none bg-[#1a1814]">
                           <ProjectGallery 
                             key={hoveredQuest.id} // Force reset on quest change
                             images={hoveredQuest.images && hoveredQuest.images.length > 0 
                               ? hoveredQuest.images 
                               : (hoveredQuest.image ? [hoveredQuest.image] : [])} 
                             altText={hoveredQuest.title}
                           />
                       </div>
                    </div>

                    {/* Details and Client Container - 50% */}
                    <div className="h-[50%] flex flex-col justify-between">
                       {/* Details Grid */}
                       <div className="relative z-10 flex flex-col flex-1 h-full">
                          {/* Role and Tech Stack Row */}
                          <div className="flex gap-8 h-full">
                             {/* Role */}
                             <div className="flex-1">
                                <h4 className="font-bold text-[#8c8574] text-xs uppercase tracking-wider border-b border-[#8c8574]/50 mb-1 pb-1">Role & Scope</h4>
                                <p className="font-serif text-sm font-bold text-[#2a2824]">{hoveredQuest.role || "Specialist"}</p>
                             </div>
                             
                             {/* Tech Stack */}
                             <div className="flex-1">
                                <h4 className="font-bold text-[#8c8574] text-xs uppercase tracking-wider border-b border-[#8c8574]/50 mb-1 pb-1">Tech Stack</h4>
                                <div className="flex flex-wrap gap-x-3 gap-y-1">
                                   {hoveredQuest.tags.map((tag, i) => (
                                      <span key={i} className="font-serif text-sm text-[#2a2824] flex items-center gap-1">
                                         <Cpu size={10} className="text-[#5c5546]"/> {tag}
                                      </span>
                                   ))}
                                </div>
                             </div>
                          </div>

                          {/* Challenges */}
                          <div className="h-full">
                             <h4 className="font-bold text-[#8c8574] text-xs uppercase tracking-wider border-b border-[#8c8574]/50 mb-1 pb-1">Key Challenges</h4>
                             <ul className="font-serif text-sm text-[#2a2824] space-y-1 list-disc list-inside marker:text-red-800">
                                {hoveredQuest.challenges?.map((c, i) => (
                                   <li key={i}>{c}</li>
                                )) || <li>Deadline Constraints</li>}
                             </ul>
                          </div>
                       </div>

                       {/* Client Description Box - Styled like MHW Request Card */}
                       <div className="relative z-10 bg-[#c5bca8] shadow-[0_2px_5px_rgba(0,0,0,0.1)] overflow-hidden min-h-[140px] border border-[#8c8574]/50">
                          {/* Texture Overlay */}
                          <div className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/aged-paper.png')] mix-blend-multiply pointer-events-none"></div>
                          
                          {/* Rough Left Edge Simulation */}
                          <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#5c5546] opacity-30"></div>

                          <div className="p-4 pl-6 relative z-10">
                             {/* Header with gradient background pill */}
                             <div className="relative inline-flex items-center justify-center gap-4 mb-2 px-10 py-2 self-start">
                                {/* Gradient Background - Linear Fade on sides */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/70 to-transparent"></div>
                                <span className="relative z-10 font-cinzel font-bold text-[#fbbf24] text-lg tracking-wide drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                                   Client
                                </span>
                                <span className="relative z-10 font-cinzel font-bold text-white text-lg tracking-wide drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                                   {hoveredQuest.client}
                                </span>
                             </div>

                             {/* Dashed Lines Background for Text */}
                             <div className="relative mt-2">
                                {/* Lines matching leading-7 (28px) */}
                                <div className="absolute inset-0 w-full h-full pointer-events-none opacity-20" 
                                     style={{ backgroundImage: 'repeating-linear-gradient(transparent 0px, transparent 27px, #2a2824 28px)' }}>
                                </div>
                                
                                <p className="font-serif text-[15px] leading-7 text-[#2a2824] font-medium relative z-10">
                                   "{hoveredQuest.description}"
                                </p>
                             </div>
                          </div>

                          {/* Guild Crest Watermark */}
                          <div className="absolute -bottom-6 -right-6 text-white opacity-40 pointer-events-none transform rotate-[-15deg] mix-blend-overlay">
                             <Shield size={140} strokeWidth={1} fill="white" />
                          </div>
                       </div>
                    </div>
                 </>
               ) : (
                 <div className="flex-1 flex items-center justify-center text-[#8c8574] font-cinzel italic opacity-50">
                    Select an assignment from the left...
                 </div>
               )}
            </div>
          }
        />
      )}
    </div>
  );
};

export default QuestBoard;
