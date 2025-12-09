
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
      <nav className="h-14 w-full bg-nier-beige border-y-2 border-nier-dark/20 relative flex items-center justify-center nier-header-grid shadow-sm">

        {/* Navigation Items */}
        <div className="flex flex-row items-center h-10 bg-nier-beige border-x border-nier-dark/10">
          {MENU_ITEMS.map((item, index) => {
            const isActive = activeTab === item.id;

            return (
              <React.Fragment key={item.id}>
                <button
                  onClick={() => onSelect(item.id)}
                  className={`
                    h-full px-5 md:px-8 flex flex-row items-center justify-center gap-2 transition-all duration-0 relative group whitespace-nowrap
                    ${isActive
                      ? 'bg-nier-dark text-nier-beige'
                      : 'bg-nier-beige text-nier-dark hover:bg-nier-dark/10'}
                  `}
                >
                  <div className={`transition-transform duration-200 ${isActive ? 'scale-110' : 'scale-100 opacity-70'}`}>
                    <item.icon size={18} strokeWidth={isActive ? 2.5 : 1.5} />
                  </div>

                  <span className={`font-tech text-xl tracking-[0.1em] uppercase leading-none mt-0.5 ${isActive ? 'font-bold' : 'font-medium'}`}>
                    {item.label}
                  </span>
                </button>

                {/* Vertical Separator - Only between unselected items or if desired style */}
                {index < MENU_ITEMS.length - 1 && !isActive && (MENU_ITEMS[index + 1].id !== activeTab) && (
                  <div className="h-4 w-px bg-nier-dark/30 mx-0"></div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </nav>
    </div>
  );
};
