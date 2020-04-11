import React from 'react';
import logo from './images/logo.svg';
import classes from './Header.module.css'
import { NavLink } from 'react-router-dom';

function Header(props) {
  debugger
    return(
          <header className={classes.header}>
            <img src={logo}/>
          
          <div className={classes.loginBlock}>
            {props.isAuth ? props.islogin
            : <NavLink to='/login'>Login</NavLink>}
          </div>
          </header>
      
    );
}
export default Header;