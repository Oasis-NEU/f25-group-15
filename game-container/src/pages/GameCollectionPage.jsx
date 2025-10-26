import React from 'react';
import { useNavigate } from 'react-router-dom';

function GameCollectionPage(){
    const navigate = useNavigate();
        
    const goToHome = () => {
            navigate('/');
    };


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
                        />
                    </div>

                    {/* Buttons */}
                    <div className="flex-1 flex justify-end">
                        <div className="flex space-x-4">
                            <button
                                className="px-5 py-2 bg-white text-gray-800 rounded-xl text-base font-medium hover:bg-gray-400 transition"
                                onClick={goToHome}
                            >
                                Home
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default GameCollectionPage;