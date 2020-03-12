import React from 'react';
import classes from './Post.module.css'
import logo from './images/logo.svg';


function Post(props){
    return(
        <div className={classes.item}>
            <img src={logo} />
            {props.message}
            <div>
            <span>{props.likesCount} Like </span>
            <span>{props.disslikesCount} DissLike</span>
            </div> 
          </div>
    );
}
export default Post;
