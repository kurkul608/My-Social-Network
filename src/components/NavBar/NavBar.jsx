import React from 'react';
import classes from'./NavBar.module.css'
import { NavLink } from 'react-router-dom';

function NavBar () {
    return (
        <nav className={classes.nav}>
        <div className={classes.item}>
          <NavLink to='/profile' activeClassName={classes.active}>My Profile</NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to='message' activeClassName={classes.active}> Message</NavLink>
          </div>
        <div className={classes.item}>
          <NavLink to='/news' activeClassName={classes.active}>News</NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to='/friends' activeClassName={classes.active}>Friends</NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to='/communities' activeClassName={classes.active}>Сommunities</NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to='/photo' activeClassName={classes.active}>Photo</NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to='/music' activeClassName={classes.active}>Music</NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to='/videos' activeClassName={classes.active}>Videos</NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to='/games' activeClassName={classes.active}>Games</NavLink>
        </div>
      </nav>
    );
}

export default NavBar;