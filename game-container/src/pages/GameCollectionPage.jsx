import { useState } from "react";
import { useAuth } from '../contexts/AuthContext';
import GameGrid from '../components/GameGrid';
import { useNavigate } from 'react-router-dom';


function GameCollectionPage({
    gameList
}){
    const navigate = useNavigate();
    const goToLogin = () => navigate('/Login'); 
    const goToHome = () => navigate('/');

    const { logout, loggedIn } = useAuth();

    const [filteredGames, setFilteredGames] = useState(gameList)
    const [searchGame, setSearchGame] = useState('')

    const handleSearchChange = (event) => {
        setSearchGame(event.target.value);
    };

    var filteredItems = filteredGames.filter(game =>
        game.ItemTitle.toLowerCase().includes(searchGame.toLowerCase())
    );

    return (
        <div className='min-h-screen min-w-screen bg-[#3B3F44]/75'>
            <header className="w-full bg-[#C8102E]/85 shadow-md p-4 fixed top-0 left-0">
                <div className="flex items-center">

                    {/* Logo Section */}
                    <div className="flex-1">
                        <h1 className="text-3xl font-bold text-gray-800">GameBoard</h1>
                    </div>
                    
                    {/* Search Bar */}
                    <div className="flex-1 flex justify-center px-4">
                        <input
                            type="search"
                            placeholder="Search games..."
                            className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-[#000000]/30 hover:placeholder: text-white transition"
                            value={searchGame}
                            onChange={handleSearchChange}
                        />
                    </div>

                    {/* Player Count */}
                    {/* <div className="flex-1 flex justify-center px-4">
                        <input
                            type="player"
                            placeholder="number of players..."
                            className="w-half max-w-md px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-[#000000]/30 hover:placeholder: text-white transition"
                            value={playerCount}
                            onChange={handlePlayerChange}
                        />
                    </div> */}

                    {/* Buttons */}
                    <div className="flex-1 flex justify-end">
                        <div className="flex space-x-4">
                            <button
                                className="px-5 py-2 bg-white text-gray-400 rounded-xl text-base font-medium hover:bg-gray-400 transition"
                                onClick={goToHome}
                            >
                                Home
                            </button>
                                
                            <button
                                className="px-5 py-2 bg-white text-gray-400 rounded-xl text-base font-medium hover:bg-gray-400 transition"
                                onClick={ loggedIn? 
                                    async() => { await logout(); navigate('/'); }
                                    : goToLogin }
                            >
                                {loggedIn ? "Logout" : "Login"}
                            </button>
                        </div>
                    </div>
                </div>
            </header>
            
            {/* Game Grid */}
            <main className="max-w-6xl mx-auto px-4 py-24">
                <GameGrid
                    gameList={filteredItems}
                />
            </main>
        </div>
    );
}

export default GameCollectionPage;