import React from 'react';
import classes from './UserInfo.module.css';
import Avatar from './Avatar/Avatar';
import Data from './Data/Data';

function UserInfo(props) {
    let postUserInfo = props.usersInfo
        .map(p => <div className={classes.userinfo}>
            <Avatar avatar={p.avatar } key={p.key}/>
            <div>
                <Data name={p.name} city={p.city} key={p.key}/>
            </div>
            </div>);
    return(
        <div>
            {postUserInfo}
        </div>
    );
}
export default UserInfo;