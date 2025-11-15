
import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate, BrowserRouter, Link } from 'react-router-dom';
import { supabase_client } from './config/supabaseClient';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import MainPage from './pages/MainPage.jsx';
import GameCollectionPage from "./pages/GameCollectionPage.jsx"
import LoginPage from './pages/LoginPage.jsx'

function AppContent(){
  const navigate = useNavigate()
  const { user, loading } = useAuth()
  const [ games, setGames] = useState([]);

    useEffect(() => {
    fetchGames();
  }, []);

  async function fetchGames() {
    const { data, error } = await supabase_client
      .from('GamesCatalogue')
      .select("*");
        
    if (error) {
      console.error('Error fetching games:', error);
      alert(`Error fetching games: ${error.message}`);
      return;
    }
    setGames(data || []);
  }

  return (
    <Routes>
      <Route 
        path="/" 
        element={
          <MainPage
          />
        } 
      />
      <Route 
        path="/GamesCollection" 
        element={
          <GameCollectionPage
            gameList={games}
          />
        } 
      />
      <Route 
        path="/Login" 
        element={
          <LoginPage
          />
        } 
      />
    </Routes>
  );
}


function App(){

  return (
    <AuthProvider>
      <Router>
        <AppContent></AppContent>
      </Router>
    </AuthProvider>
  );
}

export default App
