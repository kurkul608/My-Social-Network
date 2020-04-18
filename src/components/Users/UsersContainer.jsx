import React from 'react';
import { connect } from 'react-redux';
import { getUsersThunkCreator, setCurrentPageThunkCreator, setUnFollowThunkCreator, setFollowThunkCreator } from '../../Redux/users-reducer';
import Users from './Users';
import Preloader from '../common/preloader/preloader'
import { Redirect } from 'react-router-dom';
import { WithAuthRedirect } from '../../hoc/auth-redirect';
import { compose } from 'redux';




class UsersAPIContainer extends React.Component {
 
    componentDidMount() {
       this.props.getUsersThunkCreator(this.props.pagesCount, this.props.pageSize)     
    }

    onPageChanged = (e) => {
        this.props.setCurrentPageThunkCreator(e, this.props.pageSize)
    }
    unFollow = (userId) => {
      this.props.setUnFollowThunkCreator(userId);
    }
    follow = (userId) => {
      this.props.setFollowThunkCreator(userId);
    }

    

    // eslint-disable-next-line react/require-render-return

    render() {
      if (!this.props.isAuth) return <Redirect to='/login' />
        return(<>
                {this.props.isFetching ? <Preloader /> : null}
                <Users 
                  onPageChanged={this.onPageChanged}
                  unFollow={this.unFollow}
                  follow={this.follow}
                  currentPage={this.props.currentPage} 
                  totalUsersCount={this.props.totalUsersCount} 
                  pageSize={this.props.pageSize}
                  users={this.props.users}
                  followingInProgress={this.props.followingInProgress}/>
              </>);
            
    } 
}



let mapStateToProps =(state) => {
    return {
      users: state.usersPage.users,
      pageSize: state.usersPage.pageSize,
      totalUsersCount: state.usersPage.totalUsersCount,
      currentPage: state.usersPage.currentPage,
      isFetching: state.usersPage.isFetching,
      followingInProgress: state.usersPage.followingInProgress,
    }
  
  }

  
  export default compose(connect(mapStateToProps, {  getUsersThunkCreator, setCurrentPageThunkCreator, setUnFollowThunkCreator, setFollowThunkCreator }), WithAuthRedirect)(UsersAPIContainer);
  