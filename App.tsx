import React, { useState, useEffect } from 'react';
import { MenuTab } from './types';
import { Sidebar } from './components/Sidebar';
import { StatusView } from './components/views/StatusView';
import { InventoryView } from './components/views/InventoryView';
import { MessagesView } from './components/views/MessagesView';
import { EquipmentView } from './components/views/EquipmentView';
import { Footer } from './components/Footer';
import { BootScreen } from './components/BootScreen';

function App() {
  const [mounted, setMounted] = useState(false);
  const [gameState, setGameState] = useState<'BOOT' | 'APP'>('BOOT');
  // Default to About (Intro)
  const [activeTab, setActiveTab] = useState<MenuTab>(MenuTab.About);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    if (gameState !== 'APP') return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Get tabs in the same order as Sidebar
      const tabs = [MenuTab.About, MenuTab.Profile, MenuTab.Projects, MenuTab.Skills, MenuTab.Credits];
      const currentIndex = tabs.indexOf(activeTab);

      if (e.key === 'ArrowRight' || e.key === 'd') {
        const nextIndex = (currentIndex + 1) % tabs.length;
        setActiveTab(tabs[nextIndex]);
      } else if (e.key === 'ArrowLeft' || e.key === 'a') {
        const prevIndex = (currentIndex - 1 + tabs.length) % tabs.length;
        setActiveTab(tabs[prevIndex]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeTab, gameState]);

  // Boot Sequence Effect - Removed as TitleScreen now handles the boot sequence
  // useEffect(() => {
  //   if (gameState === 'BOOT') { ... }
  // }, [gameState]);

  const renderContent = () => {
    switch (activeTab) {
      case MenuTab.Profile: return <StatusView />;
      case MenuTab.Projects: return <InventoryView />;
      case MenuTab.Skills: return <EquipmentView />;
      case MenuTab.About: return <MessagesView />;
      case MenuTab.Credits:
        return (
          <div className="flex flex-col items-center justify-center h-full text-center p-8 animate-fadeIn">
            <h2 className="text-4xl font-tech text-nier-dark mb-4 tracking-widest">CREDITS</h2>
            <div className="space-y-4 text-nier-dark/70 font-tech text-xl">
              <p>DEVELOPER: Nick Borrello</p>
              <p className="text-sm opacity-60">INSPIRED BY: Nier: Automata © SQUARE ENIX</p>
              <div className="w-16 h-px bg-nier-dark mx-auto my-4"></div>
              <button
                onClick={() => setGameState('BOOT')}
                className="px-6 py-2 border border-nier-dark hover:bg-nier-dark hover:text-nier-beige transition-colors uppercase tracking-widest text-sm"
              >
                Restart
              </button>
            </div>
          </div>
        );
      default: return <StatusView />;
    }
  };

  if (!mounted) return <div className="bg-nier-darker h-screen w-screen" />;

  if (gameState === 'BOOT') {
    return <BootScreen onComplete={() => setGameState('APP')} />;
  }

  return (
    <div className="flex flex-col h-screen w-screen bg-nier-beige text-nier-dark overflow-hidden font-sans select-none relative nier-grid-bg">
      {/* Global Grid Overlay - fine mesh */}
      <div className="scanline-overlay opacity-50"></div>

      {/* Vignette */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.1)_100%)]"></div>

      {/* Main Container - Full Screen */}
      <div className="flex-1 relative z-10 flex flex-col w-full h-full bg-nier-beige/80 backdrop-blur-sm">

        {/* Top Navigation (Header) */}
        <div className="flex-shrink-0 z-50">
          <Sidebar activeTab={activeTab} onSelect={setActiveTab} />
        </div>

        {/* Content Area */}
        <main className="flex-1 relative overflow-hidden flex flex-col">
          {/* Top decorative dots */}
          <div className="h-2 flex items-center justify-between px-2 opacity-50 border-b border-nier-dark/10">
            {Array.from({ length: 120 }).map((_, i) => (
              <div key={i} className="w-0.5 h-0.5 bg-nier-dark rounded-full"></div>
            ))}
          </div>

          {/* Inner Content Content */}
          <div className="flex-1 overflow-y-auto custom-scrollbar px-6 py-4 md:px-12 md:py-6 relative">
            {renderContent()}
          </div>

          {/* Bottom decorative dots */}
          <div className="h-2 flex items-center justify-between px-2 opacity-50 border-t border-nier-dark/10">
            {Array.from({ length: 120 }).map((_, i) => (
              <div key={i} className="w-0.5 h-0.5 bg-nier-dark rounded-full"></div>
            ))}
          </div>
        </main>

        <Footer />
      </div>

    </div>
  );
}

export default App;