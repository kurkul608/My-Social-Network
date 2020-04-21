import React from 'react';
import Content from './Profile';
import { connect } from 'react-redux';
import { setUserProfileThunkCreator, getStatus, putStatus } from '../../Redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import { WithAuthRedirect } from '../../hoc/auth-redirect';
import { compose } from 'redux';

 
class ProfileContainer extends React.Component {

  componentDidMount() {
    let userid = this.props.match.params.userid
    if (!userid) {userid = this.props.autorizedUserid}
    this.props.setUserProfileThunkCreator(userid);
    this.props.getStatus(userid); 
  }

  render() {
    // if (!this.props.isAuth) return <Redirect to='/login' />
    return <Content {...this.props} profile={this.props.profile} status={this.props.status} putStatus={this.props.putStatus} />
  }
}



let mapStateToProps = (state) => ({
  profile: state.profilePage.profile, 
  status: state.profilePage.status,
  autorizedUserid: state.auth.userID})


export default compose(connect (mapStateToProps, {setUserProfileThunkCreator, getStatus, putStatus}),withRouter, WithAuthRedirect)(ProfileContainer);