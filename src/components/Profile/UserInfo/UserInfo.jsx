import React from 'react';
import classes from './UserInfo.module.css';
import Avatar from './Avatar/Avatar';
import Data from './Data/Data';

function UserInfo(props) {
    let postUserInfo = props.usersInfo
        .map(p => <div className={classes.userinfo}>
            <Avatar avatar={p.avatar}/>
            <div>
                <Data name={p.name} city={p.city}/>
            </div>
            </div>);
    return(
        // <div className={classes.userinfo}>
        //     <Avatar avatar={props.avatar}/>
        //     <div className={classes.data}>
        //         <Data name={props.name} city={props.city}/>
        //     </div>
        // </div>
        <div>
            {postUserInfo}
        </div>
    );
}
export default UserInfo;