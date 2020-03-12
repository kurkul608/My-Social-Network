import React from 'react';
import classes from './Data.module.css';

function Data(props){
    return(
        <div className={classes.data}>
            Name:{props.name} <br />
            City: {props.city} <br />
        </div>
    );
}
export default Data;