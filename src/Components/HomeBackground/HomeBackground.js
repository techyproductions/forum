import React, { Component } from 'react';

import classes from './HomeBackground.module.css';

class HomeBackground extends Component {
    render() {
        return (
            <div className={classes.BG} id={this.props.id}>
                
            </div>
        );
    }
}

export default HomeBackground;