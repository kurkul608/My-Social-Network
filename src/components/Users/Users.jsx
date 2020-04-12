import React from 'react';
import classes from './Users.module.css'
import defaultAva from '../../assets/images/defaultAva.png'
import { NavLink } from 'react-router-dom';
import * as axios from 'axios'
import { userAPI } from '../../api/api';


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
            
            {/* <span onClick={(e) =>this.onPageChanged({pagesCount})} className={this.props.currentPage === pagesCount && classes.selectedPage}>{pagesCount}</span> */}
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
                    ? <div><button onClick={() =>{
                        userAPI.unFollow(u.id).then(data => {
                            if (data.resultCode === 0) {
                                props.unfollow(u.id)
                            }
                         })
                         
                        }
                        
                        }>Unfollowed</button></div> 
                    : <div><button onClick={() => {
                        userAPI.followed(u.id).then(data => {
                            if (data.resultCode === 0) {
                                props.follow(u.id)
                            }
                         })
                         
                        }

                     
                    
                    }>Followed</button></div>}
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
                    case 0:  return <button onClick={(e) => props.onPageChanged(p+1)} className={classes.Page}>First </button>
                    case pagesCount + 1: return <button onClick={(e) => props.onPageChanged(p - 1)} className={classes.Page}>Last</button>
                    default: return <button onClick={(e) => props.onPageChanged(p)} className={props.currentPage === p && classes.selectedPage}> {p} </button>
                }
            }
            )}  
        </div>
    )
}

export default Users;