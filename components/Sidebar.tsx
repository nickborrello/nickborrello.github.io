
import React from 'react';
import { MenuTab } from '../types';
import { User, Briefcase, FolderOpen, Cpu, FileText } from 'lucide-react';

interface SidebarProps {
  activeTab: MenuTab;
  onSelect: (tab: MenuTab) => void;
}

const MENU_ITEMS = [
  { id: MenuTab.About, label: 'ABOUT', icon: User },
  { id: MenuTab.Profile, label: 'EXPERIENCE', icon: Briefcase },
  { id: MenuTab.Projects, label: 'PROJECTS', icon: FolderOpen },
  { id: MenuTab.Skills, label: 'SKILLS', icon: Cpu },
  { id: MenuTab.Credits, label: 'CREDITS', icon: FileText },
];

export const Sidebar: React.FC<SidebarProps> = ({ activeTab, onSelect }) => {
  return (
    <div className="w-full z-50 relative">
      {/* Main Header Strip */}
      <nav className="h-14 w-full bg-[#dad4bb] border-y border-nier-dark/20 relative flex items-center justify-center nier-header-grid shadow-sm">
        
        {/* Navigation Items */}
        <div className="flex flex-row items-center h-8 bg-nier-dark/5 border border-nier-dark/10 backdrop-blur-[1px]">
          {MENU_ITEMS.map((item, index) => {
            const isActive = activeTab === item.id;
            
            return (
              <React.Fragment key={item.id}>
                <button
                  onClick={() => onSelect(item.id)}
                  className={`
                    h-full px-4 md:px-6 flex flex-row items-center justify-center gap-3 transition-all duration-200 relative group whitespace-nowrap
                    ${isActive 
                      ? 'bg-nier-dark text-nier-beige shadow-inner' 
                      : 'text-nier-dark/60 hover:text-nier-dark hover:bg-nier-dark/5'}
                  `}
                >
                  <item.icon 
                    size={16} 
                    strokeWidth={isActive ? 2.5 : 2}
                    className="relative z-10"
                  />
                  
                  <span className={`font-tech text-lg tracking-[0.15em] uppercase leading-none mt-0.5 ${isActive ? 'font-bold' : 'font-medium'}`}>
                    {item.label}
                  </span>
                </button>
                
                {/* Vertical Separator */}
                {index < MENU_ITEMS.length - 1 && (
                  <div className="h-4 w-px bg-nier-dark/20 mx-0.5"></div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </nav>
    </div>
  );
};
