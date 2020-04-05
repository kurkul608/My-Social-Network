import React from 'react';
import classes from './Profile.module.css'
import UserInfoContainer from './UserInfo/UserInfoContainer';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import HeaderImageContainer from './HeaderImage/HeaderImageContainer';


function Content(props) {
  
    return(
        <div className={classes.profile}>
          <HeaderImageContainer store={props.store}/>
          <UserInfoContainer store={props.store}/>
          <MyPostsContainer store={props.store} />
        </div>
    );
}
export default Content;