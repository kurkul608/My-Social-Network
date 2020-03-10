import React from 'react';
import head from './images/Head.jpg';
import classes from './HeaderImage.module.css'
function HeaderImage() {
    return(
        <div className={classes.headerImage}>
          <img src={head}/>
          </div>
    );
}

export default HeaderImage;