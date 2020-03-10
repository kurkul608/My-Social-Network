import React from 'react';
import classes from './Post.module.css'
import logo from './images/logo.svg';


function Post(props){
    return(
        <div className={classes.item}>
            <img src={logo} />
            {props.message}
            <div>
            <span> Like</span>
            <span> DissLike</span>
            </div> 
          </div>
    );
}
export default Post;