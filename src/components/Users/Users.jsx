import React from 'react';
import classes from './Users.module.css'
import * as axios from 'axios'
import defaultAva from '../../assets/images/defaultAva.png'



class Users extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.pagesCount}&count=${this.props.pageSize}`).then(response => {
                debugger;
                this.props.setUsers(response.data.items, response.data.totalCount);
            });
    }
    onPageChanged = (e) => {
        this.props.setCurrentPage(e);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${e}&count=${this.props.pageSize}`).then(response => {
                debugger;
                this.props.setUsers(response.data.items, response.data.totalCount);
            });
    }

    // eslint-disable-next-line react/require-render-return
    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];
        for (let i=1; i<pagesCount; i++) {
            pages.push(i);
        }
        return(<div>
            <div>
                {pages.map(p => {
                    return <span onClick={(e) => this.onPageChanged(p)} className={this.props.currentPage === p && classes.selectedPage}>{p} </span>
                }
                )}  
            </div>
            <div>
                {this.props.users.map(u => 
            <div key={u.id}>
                    <span className={classes.avatar}>
                        <div><img src={u.photos.small != null ? u.photos.small : defaultAva}/></div>
                        {u.followed 
                        ? <div><button onClick={() => {this.props.unfollow(u.id)}}>Unfollowed</button></div> 
                        : <div><button onClick={() => {this.props.follow(u.id)} }>Followed</button></div>}
                    </span>
                    <span>  
                        <span>
                            <div>Name: {u.name}</div>
                            <div>Status: {u.status}</div>
                        </span>
                        <span>
                            <div>Company: {u.company}</div>
                            <div>Russia</div>
                            <div>Moscow</div>
                            <div>Time: {u.time}</div>
                        </span>
                        
                    </span>
                  
             </div>
    )  }
            </div>
            </div>
        );

    }
}
export default Users;