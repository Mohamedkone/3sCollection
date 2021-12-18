import './style/App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/Home"
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import Community from "./components/Community"
import FanArt from "./components/FanArt"
import Manhwa from "./components/Manhwa"
import Manga from "./components/Manga"
import Profile from "./components/Profile"
import Read from "./components/Read"

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Nav />
      <Routes>
    
      <Route path="/" element={<Home />} />
      <Route path="/Community" element={<Community />} />
      <Route path="/Fan_art" element={<FanArt />}/>
      <Route path="/Manhwa" element={<Manhwa />}/>
      <Route path="/Manga" element={<Manga />}/>
      <Route path="/Profile" element={<Profile />}/>
      <Route path="/Read" element={<Read />}/>
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
