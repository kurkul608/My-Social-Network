import React from 'react';
import classes from './UserInfo.module.css';
import Avatar from './Avatar/Avatar';
import Data from './Data/Data';
import UserInfo from './UserInfo'

function UserInfoContainer(props) {
    let state = props.store.getState();
    return (<UserInfo usersInfo={state.profilePage.usersInfo}/>)
    // let postUserInfo = state.profilePage.usersInfo
    //     .map(p => <UserInfo name={p.name} city={p.city} avatar={p.avatar}/>);
    // return(
    //     <div className={classes.userinfo}>
    //         <Avatar avatar={props.avatar}/>
    //         <div className={classes.data}>
    //             <Data name={props.name} city={props.city}/>
    //         </div>
    //     </div>
    // );
}
export default UserInfoContainer;