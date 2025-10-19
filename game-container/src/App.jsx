import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate, BrowserRouter, Link } from 'react-router-dom';
import TempMainPage from "./pages/MainPage"
import GameCollectionPage from "./pages/GameCollectionPage"

function App(){
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <nav>
          <Link to="/">Temperary Home Page</Link>
          <Link to="/Home">Home Page</Link>
          <Link to="/GamesCollection">Games Collection</Link>
      </nav>

      <Routes>
        <Route path="/" element={<TestHome />} />
        <Route path="/Home" element={<TempMainPage />} />
        <Route path="/GamesCollection" element={<GameCollectionPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

function TestHome(){
  return <h1>Welcome!</h1>
}

export default App
