import React, { useState } from 'react';
import classes from'./NavBar.module.css'
import { NavLink } from 'react-router-dom';


function NavBar ({menu, setActiveFalse, setActiveTrue, active}) {    
let nav = menu.map(s => <div key={s.id}><li><NavLink onClick={active ? setActiveFalse : setActiveTrue} to={s.path}>{s.name}</NavLink></li></div>);
    return (<form className={classes.form}>
        
        <div className={active ? classes.sidebar + ' ' + classes.active : classes.sidebar}  >
            <div className={classes.toggle_btn} onClick={active ? setActiveFalse : setActiveTrue} >
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul>
                {nav}
            </ul>
      </div>
      </form>
    );
}

export default NavBar; 