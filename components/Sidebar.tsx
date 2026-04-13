
import React from 'react';
import { MenuTab } from '../types';
import { NAV_ITEMS, PRIMARY_NAV_ITEMS } from '../navigation';

interface SidebarProps {
  activeTab: MenuTab;
  onSelect: (tab: MenuTab) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeTab, onSelect }) => {
  const creditsItem = NAV_ITEMS.find((item) => item.id === MenuTab.Credits);

  return (
    <div className="w-full z-50 relative">
      {/* Main Header Strip */}
      <nav className="h-14 w-full bg-nier-beige border-y-2 border-nier-dark/20 relative flex items-center px-2 sm:px-0 nier-header-grid shadow-sm">

        {/* Navigation Items */}
        <div className="flex min-w-0 flex-1 pr-11 sm:justify-center sm:pr-16">
          <div className="flex w-full min-w-0 flex-row items-center justify-between h-10 bg-nier-beige border-x border-nier-dark/10 sm:w-auto sm:justify-start">
          {PRIMARY_NAV_ITEMS.map((item, index) => {
            const isActive = activeTab === item.id;

            return (
              <React.Fragment key={item.id}>
                <button
                  onClick={() => onSelect(item.id)}
                  className={`
                    h-full px-2 sm:px-5 md:px-8 flex flex-row items-center justify-center gap-0 sm:gap-2 transition-all duration-0 relative group whitespace-nowrap
                    ${isActive
                      ? 'bg-nier-dark text-nier-beige'
                      : 'bg-nier-beige text-nier-dark hover:bg-nier-dark/10'}
                  `}
                >
                  <div className={`hidden sm:block transition-transform duration-200 ${isActive ? 'scale-110' : 'scale-100 opacity-70'}`}>
                    <item.icon size={18} strokeWidth={isActive ? 2.5 : 1.5} />
                  </div>

                  <span className={`font-tech text-[0.7rem] sm:text-xl tracking-[0.06em] sm:tracking-[0.1em] uppercase leading-none mt-0.5 ${isActive ? 'font-bold' : 'font-medium'}`}>
                    {item.label}
                  </span>
                </button>

                {/* Vertical Separator - Only between unselected items or if desired style */}
                {index < PRIMARY_NAV_ITEMS.length - 1 && !isActive && (PRIMARY_NAV_ITEMS[index + 1].id !== activeTab) && (
                  <div className="hidden sm:block h-4 w-px bg-nier-dark/30 mx-0"></div>
                )}
              </React.Fragment>
            );
          })}
          </div>
        </div>

        {/* Credits Icon - Absolutely positioned on right */}
        <div className="absolute right-2 sm:right-4 flex items-center">
          {creditsItem && (
            <button
              onClick={() => onSelect(creditsItem.id)}
              className={`
                p-1.5 sm:p-2 transition-all duration-200 rounded-full
                ${activeTab === creditsItem.id
                  ? 'bg-nier-dark text-nier-beige'
                  : 'text-nier-dark hover:bg-nier-dark/10 opacity-70 hover:opacity-100'}
              `}
              title={creditsItem.label}
            >
              <creditsItem.icon size={18} className="sm:h-5 sm:w-5" />
            </button>
          )}
        </div>
      </nav>
    </div>
  );
};
