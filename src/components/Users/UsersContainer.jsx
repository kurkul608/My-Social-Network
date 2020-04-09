import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import { followAC, unfollowAC, setUsersAC, setCurrentPageAC } from '../../Redux/users-reducer';

let mapStateToProps =(state) => {
    return {
      users: state.usersPage.users,
      pageSize: state.usersPage.pageSize,
      totalUsersCount: state.usersPage.totalUsersCount,
      currentPage: state.usersPage.currentPage
    }
  
  }

  let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userid) => {
        dispatch(followAC(userid));
        },
        unfollow: (userid) => {
            dispatch(unfollowAC(userid));
        },
        setUsers: (users, totalUsersCount) => {
            dispatch(setUsersAC(users, totalUsersCount));
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage));
        }
    }
  
  }
  
  const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
  
export default UsersContainer;