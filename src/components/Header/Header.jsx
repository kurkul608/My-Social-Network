/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import logo from './images/logo.svg';
import classes from './Header.module.css'
import { NavLink } from 'react-router-dom';




function Header(props) {
    return(
          <header className={classes.header}>
            <img src={logo}/>
          
          <div className={classes.loginBlock}>
            {props.isAuth ? (props.islogin)
            : <NavLink to='/login'>Login</NavLink>}
            <div>{props.isAuth && <NavLink to='/logout'>LogOut</NavLink>}</div>
            
          </div>
          
          </header>
      
    );
}
export default Header;