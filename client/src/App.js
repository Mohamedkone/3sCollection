import './style/App.css';
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
      <Home />
      {/* <Route path="/Community" component={Community} />
      <Route path="/Fan_art" component={Fan_art}/>
      <Route path="/Manwha" component={Manhwa}/>
      <Route path="/Manga" component={Manga}/>
      <Route path="/Profile" component={Profile}/>
      <Route path="/Read" component={Read}/> */}

      
      <Footer />
    </div>
  );
}

export default App;
