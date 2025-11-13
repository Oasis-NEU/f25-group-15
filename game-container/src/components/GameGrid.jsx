import { Package } from 'lucide-react';
import { colors } from '../constants/colors';
import { useAuth } from '../contexts/AuthContext';
import GameListingCard from './GameListingCard';

function GameGrid({ gameList, onListingClick }) {
  const { user } = useAuth();
  if (gameList.length === 0) {
    return (
      <div className="text-center py-16">
        <Package size={48} className="mx-auto mb-4" style={{ color: colors.lightText }} />
        <p className="text-xl font-medium" style={{ color: colors.text }}>
          No items found
        </p>
        <p style={{ color: colors.lightText }}>
          Try a different search
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {gameList.map(game => (
        <GameListingCard
          game={game}
          onClick={() => onListingClick(game)}
        />
      ))}
    </div>
  );
}

export default GameGrid;