import React from 'react';
import classes from './Profile.module.css'
import UserInfo from './UserInfo/UserInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';



function Content(props) {
 
    return(
        <div className={classes.profile}>
          <UserInfo saveProfile={props.saveProfile} savePhoto={props.savePhoto} isOwner={props.isOwner} putStatus={props.putStatus} profile={props.profile} status={props.status}/>
          <MyPostsContainer  />
        </div>
    );
}
export default Content;