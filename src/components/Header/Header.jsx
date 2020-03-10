import React from 'react';
import logo from './images/logo.svg';
import classes from './Header.module.css'

function Header() {
    return(
        <header className={classes.header}>
      <img src={logo}/>
      </header>
    );
}
export default Header;