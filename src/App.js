import logo from './logo.svg';
import './App.css';
import React from 'react'
import StartPage from './pages/StartPage.js';
import JoinGamePage from './pages/JoinGamePage.js';
import CreateGamePage from './pages/CreateGamePage.js';
import FeedPage from './pages/FeedPage.js';
import LobbyPage from './pages/LobbyPage.js';
import PostImg from './overlays/PostImg';
import PostText from './overlays/PostText';
import StatisticsPage from './pages/StatisticsPage.js';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import LobbyInfoPage from './pages/LobbyInfoPage';

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage/>}/>
        <Route path="/joingame" element={<JoinGamePage/>}/>
        <Route path="/creategame" element={<CreateGamePage/>}/>
        <Route path="/feed" element={<FeedPage/>}/>
        <Route path="/lobby" element={<LobbyPage/>}/>
        <Route path="/statistics" element={<StatisticsPage/>}/>
        <Route path="/postImg" element={<PostImg/>}/>
        <Route path="/postText" element={<PostText/>}/>
        <Route path="/lobbyInfoPage" element={<LobbyInfoPage/>}/>
      </Routes>
    </BrowserRouter>


  );
}

export default App;


