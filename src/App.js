import React from 'react';
import './App.css';

import HomeBackground from './Components/HomeBackground/HomeBackground';
import NavBar from './Components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
        <NavBar></NavBar>
      <HomeBackground></HomeBackground>
    </div>
  );
}

export default App;
