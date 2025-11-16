import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export function Header({
    buttons = [],
}){
    const navigate = useNavigate();
    
    const goToGameCatalog = () => navigate('/GamesCollection');
    const goToLogin = () => navigate('/Login');
    const goToHome = () => navigate('/');

    return (
        <header className="w-full bg-[#C8102E]/85 shadow-md p-4 fixed top-0 left-0">
            <div className="flex items-center">

                {/* Logo Section */}
                <div className="flex-1">
                    <h1 className="text-3xl font-bold text-gray-800">GameBoard</h1>
                </div>

                {/* Buttons */}
                <div className="flex-1 flex justify-end">
                    <div className="flex space-x-4">
                        

                        {buttons.includes("Home") && (
                            <button
                                className="px-5 py-2 bg-white text-gray-400 rounded-xl text-base font-medium hover:bg-gray-400 transition"
                                onClick={goToHome}
                            >
                                Home
                            </button>
                            )
                        }

                        {buttons.includes("GameCatalog") && (
                            <button
                                className="px-5 py-2 bg-white text-gray-400 rounded-xl text-base font-medium hover:bg-gray-400 transition"
                                onClick={goToGameCatalog}
                            >
                                Game Catalog
                            </button>
                            )
                        }

                        {buttons.includes("Login") && (
                            <button
                                className="px-5 py-2 bg-white text-gray-400 rounded-xl text-base font-medium hover:bg-gray-400 transition"
                                onClick={goToLogin}
                            >
                                Login
                            </button>
                            )
                        }
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header