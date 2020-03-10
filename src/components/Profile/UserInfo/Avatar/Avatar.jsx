import React from 'react';
import avatar from './images/avatar.jpg';
import classes from './Avatar.module.css'

function Avatar() {
    return(
        <div className={classes.avatar}>
        <img src={avatar} />
        </div>
    );
}
export default Avatar;