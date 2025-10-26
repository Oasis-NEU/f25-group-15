import React from 'react';
import { useNavigate } from 'react-router-dom';


function MainPage() {
    const navigate = useNavigate();

    const goToGameCatalog = () => {
        navigate('/GamesCollection');
    };
    
    const goToLogin = () => {
        navigate('/Login');
    };

    return (
        <div className = "min-h-screen min-w-screen bg-[#000000]/75">
            {/* Top Navigation Bar */}
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
                        />
                    </div>

                    {/* Buttons */}
                    <div className="flex-1 flex justify-end">
                        <div className="flex space-x-4">
                            <button
                                className="px-5 py-2 bg-white text-gray-800 rounded-xl text-base font-medium hover:bg-gray-400 transition"
                                onClick={goToGameCatalog}
                            >
                                Game Catalog
                            </button>
                            <button
                                className="px-5 py-2 bg-white text-gray-800 rounded-xl text-base font-medium hover:bg-gray-400 transition"
                                onClick={goToLogin}
                            >
                                Login
                            </button>
                        </div>
                    </div>

                </div>
            </header>
            {/* End of Top Navigation Bar */}

            {/* Main Content Area */}
            <div className="flex flex-col items-center justify-center pt-24">
                <main className="pt-24 px-8">
                    <h2 className="text-2xl font-semibold text-white mb-6">Welcome to GameBoard!</h2>
                    <p className="text-white text-lg mb-3">
                        Discover and explore a vast collection of board games. Use the search bar above to find your favorite games or browse through our extensive catalog.
                    </p>
                    <h2 className="text-2xl font-semibold text-white mb-6">Community</h2>
                </main>
            </div>


        </div>
    )
}

export default MainPage;