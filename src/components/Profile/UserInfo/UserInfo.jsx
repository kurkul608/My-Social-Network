import React from 'react';
import classes from './UserInfo.module.css';
import Avatar from './Avatar/Avatar';
import Data from './Data/Data';
import Preloader from '../../common/preloader/preloader';
import noAva from '../../../assets/images/defaultAva.png'
import ProfileStatus from './ProfileStatus';

function UserInfo(props) {
    
    if (!props.profile) {
        return <Preloader/>
    }else{
        
        let checkAva = () => (props.profile.photos.large) ? <Avatar avatar={props.profile.photos.large}/> : <Avatar avatar={noAva}/>
        
    return(
        <div>
            
           <div className={classes.userinfo}>
               {checkAva()}
               <div>
                   <Data profile={props.profile} />
               </div>
               <div><ProfileStatus status={'status'}/></div>
            </div> 
           
            
        </div>
    );
    }
    // <Avatar avatar={u.photos.large} key={u.id} />
}
export default UserInfo;