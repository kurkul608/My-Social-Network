import React from 'react';
import classes from './Profile.module.css'
import UserInfo from './UserInfo/UserInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import HeaderImageContainer from './HeaderImage/HeaderImageContainer';


function Content(props) {
    return(
        <div className={classes.profile}>
          <HeaderImageContainer />
          <UserInfo profile={props.profile}/>
          <MyPostsContainer  />
        </div>
    );
}
export default Content;