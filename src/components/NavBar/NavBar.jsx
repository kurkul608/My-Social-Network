import React from 'react';
import classes from'./NavBar.module.css'
import { NavLink } from 'react-router-dom';


function NavBar (props) {
let nav = props.menu.map(s => <div key={s.id} className={classes.item}><NavLink to={s.path}  >{s.name}</NavLink></div>);
  
    return (
        <div className={classes.nav}>
         {nav}
      </div>
    );
}

export default NavBar; 