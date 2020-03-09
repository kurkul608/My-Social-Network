import React from 'react';
import avatar from '../images/avatar.jpg';
import ozweego from '../images/ozweego.jpg';
import classes from './Profile.module.css'


function Content() {
    return(
        <div className={classes.profile}>
        <div className={classes.headerImg}>
          <img src={ozweego}/>
          </div>
        <div className={classes.avatar}>
        <img src={avatar} />
        </div>
        <div className={classes.posts}>
          My posts
          <div className={classes.item}>
            New post
          </div>
        </div>
        <div className={classes.item}>
          <div className={classes.item}>
            Post 1
          </div>
          <div className={classes.item}>
            Post 2
          </div>
        </div>
        
        </div>
    );
}
export default Content;