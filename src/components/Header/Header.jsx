/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import logo from './images/logo.svg';
import classes from './Header.module.css'
import { NavLink } from 'react-router-dom';
import defaultAva from '../../assets/images/defaultAva.png'




function Header(props) {
    return(
          <header className={classes.header}>
            <img src={logo}/>
          
          <div className={classes.loginBlock}>
            {props.isAuth ? (props.isProfile !== null ? (props.isProfile.photos.small ? <span> {props.islogin}<img className={classes.ava} src={props.isProfile.photos.small}/> </span> :< span>{props.islogin} <img className={classes.ava} /></span>) : <></>)
            : <NavLink to='/login'>Login</NavLink>}
            <div className={classes.logout}>
              {props.isAuth && <NavLink to='/logout'><button>LogOut</button></NavLink>}
              
              </div>
            
          </div>        
          </header>
      
    );
}
export default Header;