import React from 'react';
import classes from './DialogName.module.css'
import { NavLink } from 'react-router-dom';

function DialogName(props){
    return(
    <div><NavLink to={`/messages/${props.id}`} activeClassName={classes.active}>{props.name}</NavLink></div>
    
    );
}
export default DialogName;