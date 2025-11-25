
import React from 'react';
import { NavigationItem } from '../types';

interface NavigationProps {
  activeItem: NavigationItem;
  onNavigate: (item: NavigationItem) => void;
  visible: boolean;
}

// Custom SVG pattern for the left side of the button (Tribal/Wyvern jaw style)
const TribalBorderLeft = ({ color = "currentColor" }: { color?: string }) => (
  <svg viewBox="0 0 20 50" className={`w-5 h-full absolute left-0 top-0 bottom-0 ${color}`} preserveAspectRatio="none">
    <path d="M0,0 L20,0 L15,5 L15,10 L20,15 L15,20 L15,30 L20,35 L15,40 L15,45 L20,50 L0,50 Z" fill="currentColor" opacity="0.8"/>
    <path d="M5,5 L10,10 L5,15 Z M5,35 L10,40 L5,45 Z" fill="#0f172a" opacity="0.6"/>
  </svg>
);

// Custom SVG pattern for the right side
const TribalBorderRight = ({ color = "currentColor" }: { color?: string }) => (
  <svg viewBox="0 0 20 50" className={`w-5 h-full absolute right-0 top-0 bottom-0 ${color}`} preserveAspectRatio="none">
    <path d="M20,0 L0,0 L5,5 L5,10 L0,15 L5,20 L5,30 L0,35 L5,40 L5,45 L0,50 L20,50 Z" fill="currentColor" opacity="0.8"/>
    <path d="M15,5 L10,10 L15,15 Z M15,35 L10,40 L15,45 Z" fill="#0f172a" opacity="0.6"/>
  </svg>
);

const Navigation: React.FC<NavigationProps> = ({ activeItem, onNavigate, visible }) => {
  const menuItems: { id: NavigationItem; label: string }[] = [
    { id: 'GUILD_CARD', label: 'Guild Card' },
    { id: 'QUEST_BOARD', label: 'Quest Board' },
    { id: 'HUNTERS_NOTES', label: "Hunter's Notes" },
  ];

  return (
    <nav 
        className={`fixed left-0 top-0 bottom-0 z-50 flex flex-col justify-center pl-4 md:pl-10 pointer-events-none transition-all duration-300 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}
    >
      <div className="w-72 pointer-events-auto">
        
        {/* Menu Header mimicking "Manage Items" */}
        <div className="relative mb-2">
            {/* Green glowing orb */}
            <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-3 h-3 bg-green-500 rounded-full shadow-[0_0_10px_#22c55e,0_0_20px_#22c55e] animate-pulse"></div>
            
            <div className="bg-gradient-to-r from-green-900/90 via-slate-900/90 to-transparent border-t-2 border-b-2 border-green-700/50 p-3 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-green-500"></div>
                <h1 className="text-xl font-cinzel text-slate-100 text-center tracking-widest drop-shadow-md">
                    HUNTER MENU
                </h1>
                {/* Decoration lines */}
                <div className="absolute right-2 top-1/2 -translate-y-1/2 flex flex-col gap-1 opacity-50">
                    <div className="w-12 h-[1px] bg-green-400"></div>
                    <div className="w-8 h-[1px] bg-green-400 ml-auto"></div>
                </div>
            </div>
        </div>

        {/* Menu Items Container */}
        <div className="flex flex-col gap-1">
            {menuItems.map((item) => {
                const isActive = activeItem === item.id;
                
                return (
                    <button
                        key={item.id}
                        onClick={() => onNavigate(item.id)}
                        className={`
                            relative w-full h-14 group transition-all duration-200
                            flex items-center justify-center
                            ${isActive ? 'translate-x-2' : 'hover:translate-x-1'}
                        `}
                    >
                        {/* Background Layer */}
                        <div className={`
                            absolute inset-0 mx-5 transition-colors duration-300
                            ${isActive 
                                ? 'bg-gradient-to-r from-red-900/80 via-red-800/60 to-red-900/80 border-t border-b border-red-500/50' 
                                : 'bg-slate-900/60 group-hover:bg-slate-800/80 border-t border-b border-slate-600/30'}
                        `}></div>

                        {/* Tribal Borders */}
                        <TribalBorderLeft color={isActive ? 'text-slate-800' : 'text-slate-700 group-hover:text-slate-600'} />
                        <TribalBorderRight color={isActive ? 'text-slate-800' : 'text-slate-700 group-hover:text-slate-600'} />

                        {/* Text Content */}
                        <span className={`
                            font-cinzel text-lg relative z-10 transition-all duration-200 tracking-wide
                            ${isActive 
                                ? 'text-yellow-100 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] scale-105' 
                                : 'text-slate-300 group-hover:text-white'}
                        `}>
                            {item.label}
                        </span>

                        {/* Active Indicator (Hand Icon Simulation) */}
                        {isActive && (
                            <div className="absolute -right-4 top-1/2 -translate-y-1/2 text-yellow-500 animate-pulse drop-shadow-[0_0_5px_rgba(234,179,8,0.8)]">
                                {/* Simple Hand Shape SVG */}
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M10,20 L8,18 L12,14 L4,16 L4,10 L14,0 L18,4 L18,14 Z" transform="rotate(-45 12 12)" />
                                </svg>
                            </div>
                        )}
                    </button>
                );
            })}
        </div>

      </div>
    </nav>
  );
};

export default Navigation;
