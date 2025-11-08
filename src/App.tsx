import { usePortfolioData } from './hooks/usePortfolioData';
import CharacterHeader from './components/CharacterHeader';
import StatsPanel from './components/StatsPanel';

function App() {
  const { data, loading, error } = usePortfolioData();

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

  return (
    <div data-testid="app-root" className="min-h-screen bg-dark text-white">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Character Header */}
        <CharacterHeader character={data.character} />

        {/* Main Layout: Stats Sidebar + Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-6">
          {/* Stats Panel - Sidebar */}
          <div className="order-2 lg:order-1">
            <StatsPanel stats={data.stats} />
          </div>

          {/* Main Content Area - Placeholder for Phase 4 & 5 */}
          <div className="order-1 lg:order-2">
            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] border-2 border-[#d4af37] rounded-lg p-8 shadow-2xl">
              <h2 className="text-3xl font-bold text-[#d4af37] mb-4">⚔️ Coming Soon</h2>
              <p className="text-gray-300 mb-4">
                The adventure continues in Phase 4 with the Skills Inventory Grid and Phase 5 with the Quest Log!
              </p>
              <div className="space-y-2 text-gray-400">
                <p>✅ Phase 1: Project Setup - Complete</p>
                <p>✅ Phase 2: Data Architecture - Complete</p>
                <p>✅ Phase 3: Character Header & Stats Panel - Complete</p>
                <p>⏳ Phase 4: Inventory Grid (Skills) - Coming Next</p>
                <p>⏳ Phase 5: Quest Log (Projects) - Coming Soon</p>
                <p>⏳ Phase 6: Polish & Deployment - Final Step</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
