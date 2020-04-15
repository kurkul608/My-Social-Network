import React from 'react';
import Content from './Profile';
import { connect } from 'react-redux';
import { setUserProfileThunkCreator, getStatus, putStatus } from '../../Redux/profile-reducer';
import { withRouter, Redirect } from 'react-router-dom';
import { WithAuthRedirect } from '../../hoc/auth-redirect';
import { compose } from 'redux';

 
class ProfileContainer extends React.Component {

  componentDidMount() {
    
    this.props.setUserProfileThunkCreator(this.props.match.params.userid);
    this.props.getStatus(this.props.match.params.userid);
  }

  render() {
    // if (!this.props.isAuth) return <Redirect to='/login' />
    return <Content {...this.props} profile={this.props.profile} status={this.props.status} putStatus={this.props.putStatus} />
  }
}



let mapStateToProps = (state) => ({profile: state.profilePage.profile, status: state.profilePage.status})


export default compose(connect (mapStateToProps, {setUserProfileThunkCreator, getStatus, putStatus}),withRouter, WithAuthRedirect)(ProfileContainer);