import React, { Component } from 'react';
import classes from './NavBar.module.css';
import { Link, /*animateScroll as scroll*/ } from 'react-scroll';

class NavBar extends Component {
    render() {
        return (
            <nav className={classes.Nav}>
                <div className={classes.NavRight}>
                    <Link className={classes.NavLink}>Home</Link>
                    <span className={classes.Dot}></span>
                    <Link className={classes.NavLink}>Forum</Link>
                    <span className={classes.Dot}></span>
                </div>
            </nav>
        );
    }
}

export default NavBar;