import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom'
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
      <Route path="/" render={Home} />
      <Footer />
    </div>
  );
}

export default App;
