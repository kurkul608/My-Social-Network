import React from 'react';
import classes from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import HeaderImage from './HeaderImage/HeaderImage';
import UserInfo from './UserInfo/UserInfo';


function Content(props) {
    return(
        <div className={classes.profile}>
          <HeaderImage />
          <UserInfo />
          <MyPosts postData={props.postData}/>
        </div>
    );
}
export default Content;