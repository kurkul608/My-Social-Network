import React from 'react';
import Content from './Profile';
import { connect } from 'react-redux';
import { setUserProfileThunkCreator, getStatus, putStatus, savePhoto } from '../../Redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import { WithAuthRedirect } from '../../hoc/auth-redirect';
import { compose } from 'redux';

 
class ProfileContainer extends React.Component {

  refreshProfile() {
    let userid = this.props.match.params.userid
    if (!userid) {userid = this.props.autorizedUserid}
    this.props.setUserProfileThunkCreator(userid);
    this.props.getStatus(userid); 
  }
  componentDidMount() {
    this.refreshProfile()
  }
  componentDidUpdate(prevProps, prevState, snapsot){
    if (this.props.match.params.userid !== prevProps.match.params.userid){
      this.refreshProfile()
    }
    // } else if (this.props.profilePage.profile.photos != prevState.profilePage.profile.photos) {
    //   this.refreshProfile()
    // }
  }

  render() {
    // if (!this.props.isAuth) return <Redirect to='/login' />
    return <Content {...this.props} savePhoto={this.props.savePhoto}  isOwner={!this.props.match.params.userid} profile={this.props.profile} status={this.props.status} putStatus={this.props.putStatus} />
  }
}



let mapStateToProps = (state) => ({
  profile: state.profilePage.profile, 
  status: state.profilePage.status,
  autorizedUserid: state.auth.userID})


export default compose(connect (mapStateToProps, {setUserProfileThunkCreator, getStatus, putStatus, savePhoto}),withRouter, WithAuthRedirect)(ProfileContainer);