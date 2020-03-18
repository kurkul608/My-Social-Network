import React from 'react';
import classes from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import HeaderImage from './HeaderImage/HeaderImage';
import UserInfo from './UserInfo/UserInfo';


function Content(props) {
  let postUserInfo = props.profilePage.usersInfo
  .map(p => <UserInfo name={p.name} city={p.city} avatar={p.avatar}/>);
    return(
        <div className={classes.profile}>
          <HeaderImage profileIMG={props.profilePage.profileIMG}/>
          {/* <UserInfo UsersInfo={props.profilePage.usersInfo}/> */}
          {postUserInfo}
          <MyPosts postData={props.profilePage.postData} addPost={props.addPost}/>
        </div>
    );
}
export default Content;