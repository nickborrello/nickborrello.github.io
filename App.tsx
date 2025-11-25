import React, { useState } from 'react';
import Scoutflies from './components/Scoutflies';
import Navigation from './components/Navigation';
import GuildCard from './components/GuildCard';
import QuestBoard from './components/QuestBoard';
import HuntersNotes from './components/HuntersNotes';
import { NavigationItem, PortfolioData } from './types';
import { portfolioData } from './data';

// Ambient forest background image (darkened)
const BG_IMAGE_URL = 'https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=2664&auto=format&fit=crop';

type ViewMode = 'MENU' | 'CONTENT';

const App: React.FC = () => {
  const [activeItem, setActiveItem] = useState<NavigationItem>('GUILD_CARD');
  const [viewMode, setViewMode] = useState<ViewMode>('MENU');
  const [isMenuVisible, setIsMenuVisible] = useState(true);

  // Data loaded from data.ts
  const data: PortfolioData = portfolioData;

  const handleNavigate = (item: NavigationItem) => {
    setActiveItem(item);
    setIsMenuVisible(false); // Hide menu first
    // Wait for menu transition (300ms) before showing content
    setTimeout(() => {
      setViewMode('CONTENT');
    }, 300);
  };

  const handleBackToMenu = () => {
    setViewMode('MENU'); // Hide content immediately
    // Small delay to ensure content is gone before menu slides in
    setTimeout(() => {
      setIsMenuVisible(true);
    }, 50);
  };

  return (
    <div className="relative w-full h-screen bg-[#0f172a] text-slate-100 overflow-hidden flex font-sans selection:bg-green-500 selection:text-white">
      
      {/* Background Layer */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 transition-all duration-1000 scale-105"
        style={{ backgroundImage: `url(${BG_IMAGE_URL})` }}
      >
        <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-[1px]"></div>
      </div>

      {/* Scoutflies Effect Layer */}
      <Scoutflies />

      {/* Navigation Layer (Floating) - Controlled by isMenuVisible */}
      <Navigation 
        activeItem={activeItem} 
        onNavigate={handleNavigate} 
        visible={isMenuVisible} 
      />

      {/* Main Content Area - Only visible in CONTENT mode */}
      {viewMode === 'CONTENT' && (
        <div className="absolute inset-0 z-20 w-full h-full animate-fade-in">
          <main className="w-full h-full relative overflow-hidden bg-slate-900/80 backdrop-blur-sm">
             
             {/* Render views */}
             {activeItem === 'GUILD_CARD' && (
               <GuildCard onBack={handleBackToMenu} hunterData={data.hunter} />
             )}
             
             {activeItem === 'QUEST_BOARD' && (
               <QuestBoard onBack={handleBackToMenu} quests={data.quests} />
             )}
             
             {activeItem === 'HUNTERS_NOTES' && (
               <HuntersNotes onBack={handleBackToMenu} skills={data.skills} />
             )}

          </main>
        </div>
      )}
    </div>
  );
};

export default App;