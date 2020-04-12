import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, setUsers, setCurrentPage, changeFetching } from '../../Redux/users-reducer';
import Users from './Users';
import Preloader from '../common/preloader/preloader'
import { userAPI } from '../../api/api';



class UsersAPIContainer extends React.Component {
 
    componentDidMount() {
        this.props.changeFetching(true);
        userAPI.getUsers(this.props.pagesCount, this.props.pageSize).then(data => {
          this.props.changeFetching(false);
          this.props.setUsers(data.items, data.totalCount);
            });
        
    }
    onPageChanged = (e) => {
        this.props.setCurrentPage(e);
        this.props.changeFetching(true);
        userAPI.getUsers(e, this.props.pageSize).then(data => {
          this.props.changeFetching(false);
          this.props.setUsers(data.items, data.totalCount);
            });
        
    }

    // eslint-disable-next-line react/require-render-return

    render() {
        return(<>
                {this.props.isFetching ? <Preloader /> : null}
                <Users 
                  onPageChanged={this.onPageChanged}  
                  currentPage={this.props.currentPage} 
                  totalUsersCount={this.props.totalUsersCount} 
                  pageSize={this.props.pageSize}
                  unfollow={this.props.unfollow}
                  follow={this.props.follow}
                  users={this.props.users}/>
              </>);
            
    }
}


let mapStateToProps =(state) => {
    return {
      users: state.usersPage.users,
      pageSize: state.usersPage.pageSize,
      totalUsersCount: state.usersPage.totalUsersCount,
      currentPage: state.usersPage.currentPage,
      isFetching: state.usersPage.isFetching
    }
  
  }

  
  export default connect(mapStateToProps, {follow, unfollow, setUsers, setCurrentPage, changeFetching })(UsersAPIContainer);
  