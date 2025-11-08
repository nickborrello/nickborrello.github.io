import { usePortfolioData } from './hooks/usePortfolioData';
import CharacterHeader from './components/CharacterHeader';
import StatsPanel from './components/StatsPanel';
import QuestLog from './components/QuestLog';

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

        {/* Main Layout: Stats Sidebar + Quest Log Content */}
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-6">
          {/* Stats Panel - Sidebar */}
          <div className="order-2 lg:order-1">
            <StatsPanel stats={data.stats} />
          </div>

          {/* Main Content Area - Quest Log */}
          <div className="order-1 lg:order-2">
            <QuestLog quests={data.quests} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
