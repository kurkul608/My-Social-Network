import React from 'react';
import Content from './Profile';
import { connect } from 'react-redux';
import { setUserProfileThunkCreator } from '../../Redux/profile-reducer';
import { withRouter, Redirect } from 'react-router-dom';
import { WithAuthRedirect } from '../../hoc/auth-redirect';

 
class ProfileContainer extends React.Component {

  componentDidMount() {
    
    this.props.setUserProfileThunkCreator(this.props.match.params.userid);
  }

  render() {
    
    return <Content {...this.props} profile={this.props.profile} />
  }
}

let AuthRedirextComponent = WithAuthRedirect(ProfileContainer)
let mapStateToProps = (state) => ({profile: state.profilePage.profile, isAuth: state.auth.isAuth})

let withURLDataContainerComponent = withRouter (AuthRedirextComponent);

export default connect (mapStateToProps, {setUserProfileThunkCreator})(withURLDataContainerComponent);