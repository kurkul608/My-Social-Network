import React from 'react';
import classes from './UserInfo.module.css';
import Avatar from './Avatar/Avatar';
import Data from './Data/Data';

function UserInfo() {
    return(
        <div className={classes.userinfo}>
            <Avatar />
            <div className={classes.data}><Data name='Petr M.' city='Saratov'/></div>
        </div>
    );
}
export default UserInfo;