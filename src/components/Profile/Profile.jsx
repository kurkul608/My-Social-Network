import React from 'react';
import classes from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import HeaderImage from './HeaderImage/HeaderImage';
import UserInfo from './UserInfo/UserInfo';



function Content() {
    return(
        <div className={classes.profile}>
          <HeaderImage />
          <UserInfo />
        <MyPosts />
        </div>
    );
}
export default Content;