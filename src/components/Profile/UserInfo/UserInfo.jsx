import React from 'react';
import classes from './UserInfo.module.css';
import Avatar from './Avatar/Avatar';
import Data from './Data/Data';

function UserInfo() {
    return(
        <div>
            <Avatar />
            <Data name='Petr M.' city='Saratov'/>
        </div>
    );
}
export default UserInfo;