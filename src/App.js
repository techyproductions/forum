import React from 'react';
import classes from './App.module.css';

import HomeBackground from './Components/HomeBackground/HomeBackground';
import NavBar from './Components/NavBar/NavBar';
import Login from './Components/Login/Login';

function App() {
    return (
        <div className={classes.App}>
            <NavBar />
            <HomeBackground />
            <div className={classes.Center}>
                <Login></Login>
            </div>
        </div>
    );
}

export default App;
