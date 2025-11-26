
import React from 'react';
import {
  Sword, Shield, Shirt, Hand, BoxSelect, Footprints, Gem,
  Wrench, Star, Circle, Quote
} from 'lucide-react';
import { HunterData } from '../types';
import MessageOfTheDay from './MessageOfTheDay';

interface GuildCardProps {
  onBack: () => void;
  hunterData: HunterData;
}

const EquipIcon = ({ type, color }: { type: string, color: string }) => {
  const iconProps = { size: 20, color: color, className: "drop-shadow-md" };
  switch (type) {
    case 'sword': return <Sword {...iconProps} />;
    case 'helm': return <Shield {...iconProps} className="rotate-180" />; // Makeshift helm
    case 'mail': return <Shirt {...iconProps} />;
    case 'arms': return <Hand {...iconProps} />;
    case 'coil': return <BoxSelect {...iconProps} />;
    case 'legs': return <Footprints {...iconProps} />;
    case 'charm': return <Gem {...iconProps} />;
    case 'tool': return <Wrench {...iconProps} />;
    default: return <Circle {...iconProps} />;
  }
};

const GuildCard: React.FC<GuildCardProps> = ({ onBack, hunterData }) => {
  return (
    <div className="w-full h-full relative flex flex-col items-center justify-center animate-fade-in p-4 md:p-0">
      
      {/* Background Overlay to darken the scene for the card */}
      <div className="absolute inset-0 bg-slate-900/40 pointer-events-none"></div>

      {/* Main Card Container */}
      <div className="w-full h-full max-w-[1400px] flex flex-col md:flex-row relative z-10 overflow-hidden md:overflow-visible">
        
        {/* LEFT PANEL: Stats & Equipment */}
        <div className="w-full md:w-[45%] h-full flex flex-col bg-gradient-to-r from-slate-900/90 to-slate-900/60 p-6 md:p-8 text-slate-100 border-r border-slate-700/50 backdrop-blur-sm relative">
           
           {/* Top Header Decoration */}
           <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-transparent to-transparent opacity-70"></div>
           <div className="absolute top-1 left-0 w-full h-[1px] bg-slate-600"></div>

           {/* Header Section */}
           <div className="flex justify-between items-start mb-6">
              <div>
                  <h1 className="text-yellow-500 font-cinzel text-2xl tracking-widest drop-shadow-md mb-1">Guild Card</h1>
                  <div className="h-[2px] w-full bg-gradient-to-r from-yellow-600 to-transparent"></div>
              </div>
           </div>

           {/* Rank & Name Section */}
           <div className="flex gap-4 mb-6">
              {/* Rank Badge (Master Rank) */}
              <div className="flex flex-col items-center justify-center relative w-16 h-20">
                 <div className="absolute inset-0 bg-yellow-900/50 rotate-45 scale-75 border-2 border-yellow-500 shadow-[0_0_10px_#eab308]"></div>
                 <div className="relative z-10 font-cinzel text-yellow-500 font-bold text-xl drop-shadow-md">{hunterData.mr}</div>
                 <div className="absolute -bottom-2 text-[10px] font-bold text-yellow-200 uppercase tracking-widest bg-slate-900 px-1">MR</div>
              </div>
              
              {/* Rank Badge (Hunter Rank) */}
              <div className="flex flex-col items-center justify-center relative w-12 h-16 self-end mb-1 opacity-80">
                 <div className="absolute inset-0 bg-blue-900/50 rotate-45 scale-75 border-2 border-blue-400"></div>
                 <div className="relative z-10 font-cinzel text-blue-300 font-bold text-lg">{hunterData.hr}</div>
                 <div className="absolute -bottom-2 text-[10px] font-bold text-blue-200 uppercase tracking-widest bg-slate-900 px-1">HR</div>
              </div>

              {/* Name Details */}
              <div className="flex-1 ml-4 flex flex-col justify-center space-y-1">
                 <div className="flex items-baseline gap-2">
                    <span className="text-blue-400 text-sm font-bold uppercase tracking-wider">Name</span>
                    <span className="text-2xl font-cinzel text-white drop-shadow-md">{hunterData.name}</span>
                 </div>
                 <div className="flex items-baseline gap-2">
                    <span className="text-blue-400 text-sm font-bold uppercase tracking-wider">Title</span>
                    <span className="text-slate-300">{hunterData.title}</span>
                 </div>
                 <div className="flex items-baseline gap-2">
                    <span className="text-blue-400 text-sm font-bold uppercase tracking-wider">Unity</span>
                    <span className="text-slate-300">{hunterData.unity}</span>
                 </div>
              </div>
           </div>

           {/* Equipment List */}
           <div className="flex-1 mb-4 overflow-y-auto custom-scrollbar pr-2">
              <h3 className="text-blue-400 text-sm font-bold uppercase tracking-widest mb-2 border-b border-slate-600 pb-1 flex items-center gap-2">
                 <span className="w-2 h-2 bg-blue-500 rotate-45"></span> Equipment
              </h3>
              
              <div className="space-y-1">
                 {hunterData.equipment.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-2 hover:bg-white/5 transition-colors group cursor-default">
                       <div className="w-8 h-8 bg-slate-800 border border-slate-600 flex items-center justify-center shadow-inner group-hover:border-slate-400 transition-colors">
                          <EquipIcon type={item.iconType} color={item.color} />
                       </div>
                       <div className="flex flex-col">
                          <span className="text-slate-200 font-serif text-sm group-hover:text-yellow-200 transition-colors shadow-black drop-shadow-md">{item.name}</span>
                       </div>
                    </div>
                 ))}
              </div>
           </div>

           {/* Quest Stats Grid */}
           <div className="mb-4">
              <h3 className="text-blue-400 text-sm font-bold uppercase tracking-widest mb-2 border-b border-slate-600 pb-1 flex items-center gap-2">
                 <span className="w-2 h-2 bg-blue-500 rotate-45"></span> Quests Completed
              </h3>
              <div className="grid grid-cols-2 gap-x-8 gap-y-1 text-sm font-serif text-slate-300">
                 <div className="flex justify-between border-b border-slate-700/50"><span><span className="text-blue-400">★</span> Low Rank</span> <span>{hunterData.questStats.lowRank}</span></div>
                 <div className="flex justify-between border-b border-slate-700/50"><span>Investigations</span> <span>{hunterData.questStats.investigations}</span></div>
                 <div className="flex justify-between border-b border-slate-700/50"><span><span className="text-orange-500">★</span> High Rank</span> <span>{hunterData.questStats.highRank}</span></div>
                 <div className="flex justify-between border-b border-slate-700/50"><span>Arena Quests</span> <span>{hunterData.questStats.arena}</span></div>
                 <div className="flex justify-between border-b border-slate-700/50"><span><span className="text-yellow-500">★</span> Master Rank</span> <span>{hunterData.questStats.masterRank}</span></div>
                 <div className="flex justify-between border-b border-slate-700/50"><span>Guiding Lands</span> <span>{hunterData.questStats.guidingLands}</span></div>
              </div>
           </div>

           {/* Comment Box */}
           <div className="mt-auto bg-black/40 border border-slate-600 p-3 relative min-h-[60px]">
              <div className="absolute top-2 left-2 opacity-20"><Quote size={16}/></div>
              <p className="text-slate-200 font-handwriting italic text-center text-sm pt-2">
                 "{hunterData.quote}"
              </p>
              {/* Sticker Placeholder */}
              <div className="absolute right-1 bottom-1 w-12 h-12 bg-slate-700 border border-slate-500 rotate-12 flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity">
                 <span className="text-[8px] text-center leading-tight">GOOD JOB!</span>
              </div>
           </div>
        </div>

        {/* RIGHT PANEL: Character Showcase */}
        <div className="w-full md:w-[55%] relative h-full flex items-end justify-center overflow-hidden">
           {/* Character Image */}
           <div className="absolute inset-0 flex items-center justify-center">
              {/* Using a fantasy character image to represent the 'Hunter' */}
              <img 
                src="https://images.unsplash.com/photo-1535581652167-3d6b98c085b6?q=80&w=2000&auto=format&fit=crop" 
                alt="Hunter Character" 
                className="h-[120%] w-full object-cover object-top opacity-90 mask-image-gradient"
                style={{ maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)' }}
              />
           </div>
           
           {/* Palico/Sidekick Placeholder */}
           <div className="absolute bottom-10 right-10 md:right-20 w-48 h-48 md:w-64 md:h-64 animate-float-slow hidden md:block">
              {/* Glowing aura */}
              <div className="absolute inset-0 bg-pink-500/20 blur-3xl rounded-full"></div>
              <img 
                 src="https://images.unsplash.com/photo-1574158622682-e40e69881006?q=80&w=800&auto=format&fit=crop"
                 alt="Palico"
                 className="w-full h-full object-cover mask-shape-circle drop-shadow-[0_0_15px_rgba(255,100,200,0.5)]"
                 style={{ borderRadius: '50%', border: '2px solid rgba(255,255,255,0.3)' }}
              />
           </div>
        </div>

      </div>

      {/* Bottom Bar Controls (Simulated) */}
      <div className="fixed bottom-0 left-0 w-full p-4 z-50 pointer-events-none flex justify-between items-end">
          <div className="flex gap-4 pointer-events-auto">
              <button 
                 onClick={onBack}
                 className="flex items-center gap-2 bg-slate-900/80 hover:bg-slate-800 text-slate-200 px-4 py-1 border border-slate-600 rounded-sm backdrop-blur transition-all active:scale-95"
              >
                 <div className="w-6 h-6 rounded-full border border-slate-400 flex items-center justify-center text-xs font-bold bg-slate-800">Esc</div>
                 <span className="font-bold text-shadow-sm">Back</span>
              </button>
              
              <div className="hidden md:flex items-center gap-2 bg-slate-900/80 text-slate-400 px-4 py-1 border border-slate-600 rounded-sm backdrop-blur">
                 <div className="w-6 h-6 rounded-full border border-slate-400 flex items-center justify-center text-xs font-bold bg-slate-800">R</div>
                 <span className="font-bold">Show/Hide Hunter</span>
              </div>
           </div>

           <div className="hidden md:flex gap-2 text-slate-400 text-sm font-bold text-shadow-sm pr-8 pb-2">
              <span> [Q] Previous Page </span>
              <span> 1/1 </span>
              <span> [E] Next Page </span>
           </div>
       </div>

       {/* Message of the Day - Bottom Right Corner */}
       <MessageOfTheDay />
    </div>
  );
};

export default GuildCard;
