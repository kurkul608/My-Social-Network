import React from 'react';
import classes from './UserInfo.module.css';
import Avatar from './Avatar/Avatar';
import Data from './Data/Data';

function UserInfo(props) {
    return(
        <div className={classes.userinfo}>
            <Avatar avatar={props.avatar}/>
            <div className={classes.data}>
                <Data name={props.name} city={props.city}/>
            </div>
        </div>
    );
}
export default UserInfo;