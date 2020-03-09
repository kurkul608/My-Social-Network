import React from 'react';
import classes from'./NavBar.module.css'

function Nav () {
    return (
        <nav className={classes.nav}>
        <div className={classes.item}>
          My Profile
        </div>
        <div className={classes.item}>
          News
        </div>
        <div className={classes.item}>
          Friends
        </div>
        <div className={classes.item}>
          Communities
        </div>
        <div className={classes.item}>
          Photo
        </div>
        <div className={classes.item}>
          Music
        </div>
        <div className={classes.item}>
          Videos
        </div>
        <div className={classes.item}>
          Games
        </div>
      </nav>
    );
}

export default Nav;