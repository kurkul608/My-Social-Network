import React from 'react';
import classes from './Users.module.css'
import defaultAva from '../../assets/images/defaultAva.png'
import { NavLink } from 'react-router-dom';
import Pagination from '../common/pagination';


let User = ({users, followingInProgress, unFollow, follow}) =>{
    return( 
        <div>
                <span className={classes.avatar}>
                    <div>
                        <NavLink to={'/profile/' + users.id}>
                            <img src={users.photos.small != null ? users.photos.small : defaultAva}/>
                        </NavLink>
                    </div>
                        
                    {users.followed 
                    ? <div><button disabled={followingInProgress.some(id=> id ===users.id)} onClick={() =>{ unFollow(users.id) }}>Unfollowed</button></div> 
                    : <div><button disabled={followingInProgress.some(id=> id ===users.id)} onClick={() => { follow(users.id) }}>Followed</button></div>}
                </span>
                <span>  
                    <span>
                        <div>Name: {users.name}</div>
                        <div>Status: {users.status}</div>
                    </span>                        
                </span>
              
         </div>
)  }


export default User;