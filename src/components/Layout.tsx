import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth >= 1024); // Open by default on large screens
  const location = useLocation();
  const navigate = useNavigate();

  // Update sidebar state on window resize
  useEffect(() => {
    const handleResize = () => {
      setSidebarOpen(window.innerWidth >= 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Don't show game menu on home page
  const showGameMenu = location.pathname !== '/';

  return (
    <div className="min-h-screen bg-dark text-white flex">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main Content */}
      <div className="flex-1 ml-64 mb-12 flex flex-col">
        {/* Mobile Header */}
        <motion.div
          className="lg:hidden bg-[#1a1a1a] border-b border-[#d4af37]/30 p-4 flex items-center justify-between"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 text-[#d4af37] hover:bg-[#d4af37]/10 rounded-lg transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <h1 className="text-lg font-bold text-[#d4af37]">🧙‍♂️ Portfolio</h1>

          <div className="w-10" /> {/* Spacer for centering */}
        </motion.div>

        {/* Page Content */}
        <main className={`flex-1 p-4 lg:p-8 ${showGameMenu ? 'pb-24' : ''}`}>
          {children}
        </main>
      </div>

      {/* Game Menu Bar - Only show on non-home pages */}
      {showGameMenu && (
        <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent backdrop-blur-sm shadow-lg z-50">
          <div className="flex items-center justify-start py-3 px-4">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 px-4 py-2 bg-amber-700/80 hover:bg-amber-600/80 text-amber-100 rounded-lg border border-amber-500/50 transition-all duration-200 hover:scale-105 active:scale-95"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back
            </button>
          </div>
        </div>
      )}
    </div>
  );
}