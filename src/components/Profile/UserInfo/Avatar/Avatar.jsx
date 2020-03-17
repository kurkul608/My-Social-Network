import React from 'react';
import classes from './Avatar.module.css'

function Avatar(props) {
    return(
        <div className={classes.avatar}>
        <img src={props.avatar} />
        </div>
    );
}
export default Avatar;