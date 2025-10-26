
import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate, BrowserRouter, Link } from 'react-router-dom';
import TempMainPage from "./pages/MainPage"
import GameCollectionPage from "./pages/GameCollectionPage"
import LoginPage from './pages/LoginPage.jsx'

function App(){

  return (
    <BrowserRouter>
      <nav>
          <Link to="/">[Home Page] </Link>
          <Link to="/GamesCollection">[Games Collection] </Link>
          <Link to="/Login">[Login Page] </Link>
      </nav>

      <Routes>
        <Route path="/" element={<TempMainPage/>} />
        <Route path="/GamesCollection" element={<GameCollectionPage/>} />
        <Route path="/Login" element={<LoginPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

function TestHome(){
  return <h1>Welcome!</h1>
}

export default App
