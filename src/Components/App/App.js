import React from 'react';
import classes from './App.module.css';

import HomeBackground from '../HomeBackground/HomeBackground';
import NavBar from '../NavBar/NavBar';
import Login from '../Login/Login';

function App() {
    return (
        <div className={classes.App}>
            <NavBar />
            <HomeBackground />
            <div className={classes.Center + " " + classes.LoginTopPad}>
                <Login></Login>
            </div>
        </div>
    );
}

export default App;
