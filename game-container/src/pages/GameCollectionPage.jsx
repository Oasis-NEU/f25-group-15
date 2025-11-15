import React from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase_client } from '../config/supabaseClient';
import Header from '../components/Header'
import GameGrid from '../components/GameGrid';

function GameCollectionPage({
    gameList
}){

    return (
        <div className='min-h-screen min-w-screen bg-[#3B3F44]/75'>
            <Header
                buttons={['Home']}
            />
            
            {/* Game Grid */}
            <main className="max-w-6xl mx-auto px-4 py-24">
                <GameGrid
                    gameList={gameList}
                />
            </main>
        </div>
    );
}

export default GameCollectionPage;