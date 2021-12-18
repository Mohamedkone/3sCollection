import './style/App.css';
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from "./components/Home"
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import Community from "./components/Community"
import Fan_art from "./components/Fan_art"
import Manhwa from "./components/Manhwa"
import Manga from "./components/Manga"
import Profile from "./components/Profile"
import Read from "./components/Read"

function App() {
  return (
    <div className="App">
      <Nav />
      <BrowserRouter>
      <Routes>
      <Route  path="/" element={<Home />} />
      <Route path="/Community" element={<Community />} />
      <Route path="/Fan_art" element={<Fan_art />}/>
      <Route path="/Manwha" element={<Manhwa />}/>
      <Route path="/Manga" element={<Manga />}/>
      <Route path="/Profile" element={<Profile />}/>
      <Route path="/Read" element={<Read />}/>
      </Routes>
      </BrowserRouter>
      
      <Footer />
    </div>
  );
}

export default App;
