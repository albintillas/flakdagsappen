import logo from './logo.svg';
import './App.css';
import React from 'react'
import StartPage from './pages/StartPage.js';
import JoinGamePage from './pages/JoinGamePage.js';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage/>}/>
        <Route path="/joingame" element={<JoinGamePage/>}/>

       
      </Routes>
    </BrowserRouter>


  );
}

export default App;


