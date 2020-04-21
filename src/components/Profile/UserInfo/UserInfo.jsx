import React from 'react';
import classes from './UserInfo.module.css';
import Avatar from './Avatar/Avatar';
import Data from './Data/Data';
import Preloader from '../../common/preloader/preloader';
import noAva from '../../../assets/images/defaultAva.png'
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

function UserInfo({savePhoto, profile, putStatus, status, isOwner}) {
    
    if (!profile) {
        return <Preloader/>
    }else{
        const onMainPhotoSelected = (e)=> {
            
                savePhoto(e.target.files[0])
            
        }
    return(
        <div>
            
           <div className={classes.userinfo}>
               <Avatar avatar={profile.photos.large || noAva}/>
               
               
               <div>
                   <Data profile={profile} />
               </div>
               <div>
               {isOwner && <input type="file" onChange={ (e) => onMainPhotoSelected(e)}/>}
               </div><br/>
               <div><ProfileStatusWithHooks putStatus={putStatus} status={status}/></div>
              
            </div> 
           
            
        </div>
    );
    }
    // <Avatar avatar={u.photos.large} key={u.id} />
}
export default UserInfo;