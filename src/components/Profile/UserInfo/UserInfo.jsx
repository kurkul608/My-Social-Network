import React from 'react';
import classes from './UserInfo.module.css';
import Avatar from './Avatar/Avatar';
import Data from './Data/Data';
import Preloader from '../../common/preloader/preloader';

function UserInfo(props) {
    
    if (!props.profile) {
        return <Preloader/>
    }else
    return(
        <div>
            
           <div className={classes.userinfo}>
               <Avatar avatar={props.profile.photos.large}/>
               <div>
                   <Data profile={props.profile} />
               </div>
            </div> 
           
            
        </div>
    );
    // <Avatar avatar={u.photos.large} key={u.id} />
}
export default UserInfo;