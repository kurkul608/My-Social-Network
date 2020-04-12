import React from 'react';
import classes from './Users.module.css'
import defaultAva from '../../assets/images/defaultAva.png'
import { NavLink } from 'react-router-dom';


let Users = (props) =>{
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    pages.push(0);
    for (let i=props.currentPage - 2; i<props.currentPage + 3; i++) {
        if (i > 0 &&i <= pagesCount) {pages.push(i) }
    }
    pages.push(pagesCount+1)
    
    return(<div>
        <div>
        </div> <br/>
        <div>
            {props.users.map(u => 
        <div key={u.id}>
                <span className={classes.avatar}>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : defaultAva}/>
                        </NavLink>
                    </div>
                        
                    {u.followed 
                    ? <div><button disabled={props.followingInProgress.some(id=> id ===u.id)} onClick={() =>{ props.unFollow(u.id) }}>Unfollowed</button></div> 
                    : <div><button disabled={props.followingInProgress.some(id=> id ===u.id)} onClick={() => { props.follow(u.id) }}>Followed</button></div>}
                </span>
                <span>  
                    <span>
                        <div>Name: {u.name}</div>
                        <div>Status: {u.status}</div>
                    </span>                        
                </span>
              
         </div>
)  }
        </div>
        {pages.map(p => {
                switch (p) {
                    case -1: return <></>
                    case 0:  return <button  onClick={(e) => {
                        props.onPageChanged(p+1) }} className={classes.Page}>First </button>
                    case pagesCount + 1: return <button  onClick={(e) => {
                        props.onPageChanged(p - 1)}} className={classes.Page}>Last</button>
                    default: return <button  onClick={(e) => {
                        props.onPageChanged(p)}} className={props.currentPage === p && classes.selectedPage}> {p} </button>
                }
            }
            )}  
        </div>
    )
}

export default Users;