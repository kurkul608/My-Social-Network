import React from 'react';
import logo from './images/logo.svg';
import classes from './Header.module.css'
import { NavLink } from 'react-router-dom';

function Header() {
    return(
          <header className={classes.header}>
            <img src={logo}/>
          
          <div className={classes.loginBlock}>
            <NavLink to='/login'>Login</NavLink>
          </div>
          </header>
      
    );
}
export default Header;