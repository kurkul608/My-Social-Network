import React from 'react';
// import head from './images/Head.jpg';
import classes from './HeaderImage.module.css'
function HeaderImage(props) {
    return(
        <div className={classes.headerImage}>
          <img src={props.profileIMG}/>
          </div>
    );
}

export default HeaderImage;