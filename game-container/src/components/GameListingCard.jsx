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
      
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
        <h3 className="text-lg font-bold display-inline-block;margin-right:10px; width:200px;" style={{ color: colors.text }}>
          {game.ItemTitle}
        </h3>
        
        {!(game.Booked) && 
          (
          <p className="font-bold display-inline width-200px;" style={{ fontSize: "15px", color: colors.green }}>
            {"Avaliable"}
          </p>
          )
        }

        {(game.Booked) && 
          (
          <p className="font-bold display-inline width-200px;" style={{ fontSize: "15px", color: colors.red }}>
            {"Booked"}
          </p>
          )
        }
      </div>
      
      <p className="text-sm text-gray-600 mb-2">
        {game.Description}
      </p>
    </div>
  );
}

export default GameCard;