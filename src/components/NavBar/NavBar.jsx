import React from 'react';
import classes from'./NavBar.module.css'

function NavBar () {
    return (
        <nav className={classes.nav}>
        <div className={classes.item}>
          <a href='/profile'>My Profile</a>
        </div>
        <div className={classes.item}>
          <a href='message'> Message</a>
          </div>
        <div className={classes.item}>
          <a href='/news'>News</a>
        </div>
        <div className={classes.item}>
          <a href='/friends'>Friends</a>
        </div>
        <div className={classes.item}>
          <a href='/communities'>Сommunities</a>
        </div>
        <div className={classes.item}>
          <a href='/photo'>Photo</a>
        </div>
        <div className={classes.item}>
          <a href='/music'>Music</a>
        </div>
        <div className={classes.item}>
          <a href='/videos'>Videos</a>
        </div>
        <div className={classes.item}>
          <a href='/games'>Games</a>
        </div>
      </nav>
    );
}

export default NavBar;