/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import logo from "./images/logo.svg";
import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { noAva } from "../../assets/images/defaultAva.png";

function Header(props) {
  let avaSrc;
  if (props.isProfile) {
    if (props.isProfile.photos.small) {
      avaSrc = props.isProfile.photos.small;
    }
  }
  return (
    <header className={classes.header}>
      {/* <img src={logo}/>  */}

      <div className={classes.loginBlock}>
        {/* {props.isAuth ? (
          props.isProfile !== null ? (
            props.isProfile.photos.small ? (
              <span>
                {props.islogin}
                <img
                  className={classes.ava}
                  src={props.isProfile.photos.small}
                />
              </span>
            ) : (
              <span>
                {props.islogin} <img className={classes.ava} src={noAva} />
              </span>
            )
          ) : (
            <></>
          )
        ) : (
          <NavLink to="/login">Login</NavLink>
        )} */}
        {!props.isAuth && <NavLink to="/login">Login</NavLink>}
        <div className={classes.loginWindow}>
          {props.isAuth && <img src={avaSrc || noAva} />}
          <div className={classes.logout}>
            <span>
              {props.isAuth && props.islogin}<br />
            </span>
        {props.isAuth && (
            <NavLink to="/logout">
              <button>LogOut</button>
            </NavLink>
          )}
        </div>
        </div>
        
        {/* <div className={classes.logout}>
          {props.isAuth && (
            <NavLink to="/logout">
              <button>LogOut</button>
            </NavLink>
          )}
        </div> */}
      </div>
    </header>
  );
}
export default Header;
