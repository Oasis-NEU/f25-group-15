import { colors } from '../constants/colors';
import { useAuth } from '../contexts/AuthContext';

function GameCard({ game, onClick }) {
  const { user } = useAuth();

  return (
    <div
      onClick={onClick}
      className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition cursor-pointer"
    >
      {/* <img
        src={game.image}
        alt={game.title}
        className="w-full h-48 object-cover rounded mb-3"
      /> */}
      
      <h3 className="text-lg font-bold" style={{ color: colors.text }}>
        {game.Name}
      </h3>
      
      <p className="text-xl font-bold" style={{ color: colors.primary }}>
        {game.Booked}
      </p>
      
      <p className="text-sm text-gray-600 mb-2">
        {game.Description}
      </p>
    </div>
  );
}

export default GameCard;