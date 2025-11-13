import React from 'react';
import Header from '../components/Header'


function MainPage() {
    return (
        <div className = "min-h-screen min-w-screen bg-[#000000]/75">
            <Header
                buttons={['GameCatalog', 'Login']}
            />

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