import { useState, useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { usePortfolioData } from './hooks/usePortfolioData';
import { usePrefersReducedMotion } from './hooks/usePrefersReducedMotion';
import HomePage from './components/HomePage';
import ProjectsPage from './components/ProjectsPage';

type Page = 'home' | 'projects';

function App() {
  const { data, loading, error } = usePortfolioData();
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const prefersReducedMotion = usePrefersReducedMotion();
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    // Start loading video after initial render
    setVideoLoaded(true);
  }, []);

  if (loading) {
    return (
      <div data-testid="app-root" className="min-h-screen bg-dark text-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gold mx-auto mb-4"></div>
          <p className="text-xl text-gray-300">Loading character data...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div data-testid="app-root" className="min-h-screen bg-dark text-white flex items-center justify-center">
        <div className="text-center text-red-400">
          <p className="text-2xl font-bold mb-2">⚠️ Error</p>
          <p>{error.message}</p>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div data-testid="app-root" className="min-h-screen bg-dark text-white flex items-center justify-center">
        <p className="text-xl text-gray-300">No data available</p>
      </div>
    );
  }

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <HomePage
            character={data.character}
            projects={data.projects}
            prefersReducedMotion={prefersReducedMotion}
          />
        );
      case 'projects':
        return <ProjectsPage projects={data.projects} prefersReducedMotion={prefersReducedMotion} />;
      default:
        return (
          <HomePage
            character={data.character}
            projects={data.projects}
            prefersReducedMotion={prefersReducedMotion}
          />
        );
    }
  };

  return (
    <div data-testid="app-root" className="relative min-h-screen">
      <a href="#main-content" className="sr-only focus:not-sr-only">
        Skip to main content
      </a>
      <Analytics />
      {/* Persistent Background Video */}
      {!prefersReducedMotion && (
        <video
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
          className="fixed inset-0 w-full h-full object-cover z-0"
          onError={(e) => {
            // Hide video if file doesn't exist, fallback to gradient background
            e.currentTarget.style.display = 'none';
          }}
        >
          {videoLoaded && <source src="/background-video.mp4" type="video/mp4" />}
        </video>
      )}

      {/* Overlay to ensure content is readable */}
      <div className="fixed inset-0 bg-black/40 z-10"></div>

      {/* Navigation Options - Bottom Left */}
      {currentPage === 'home' && (
        <nav role="navigation" aria-label="Main navigation" className="fixed bottom-6 left-6 z-50 flex gap-3">
          <button
            onClick={() => setCurrentPage('projects')}
            className="bg-black/60 hover:bg-black/80 text-[#d4af37] px-4 py-2 rounded-lg border border-[#d4af37]/50 transition-all duration-200 hover:scale-105"
          >
            <span aria-hidden="true">⚔️</span> Projects
          </button>
        </nav>
      )}

      {/* Back Button - Bottom Center */}
      {currentPage !== 'home' && (
        <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent backdrop-blur-sm shadow-lg z-50">
          <div className="flex items-center justify-start py-3 px-4">
            <button
              onClick={() => setCurrentPage('home')}
              className="bg-[#d4af37]/80 hover:bg-[#d4af37] text-black px-6 py-3 rounded-lg border border-[#d4af37]/50 transition-all duration-200 hover:scale-105 active:scale-95 flex items-center gap-2 font-semibold"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back
            </button>
          </div>
        </div>
      )}

      {/* Page Content */}
      <main id="main-content" className={`relative z-20 ${currentPage !== 'home' ? 'pb-20' : ''}`}>
        {renderCurrentPage()}
      </main>
    </div>
  );
}

export default App;
