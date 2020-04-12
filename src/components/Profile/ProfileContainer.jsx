import React from 'react';
import Content from './Profile';
import { connect } from 'react-redux';
import { setUserProfileThunkCreator } from '../../Redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import { WithAuthRedirect } from '../../hoc/auth-redirect';
import { compose } from 'redux';

 
class ProfileContainer extends React.Component {

  componentDidMount() {
    
    this.props.setUserProfileThunkCreator(this.props.match.params.userid);
  }

  render() {
    
    return <Content {...this.props} profile={this.props.profile} />
  }
}



let mapStateToProps = (state) => ({profile: state.profilePage.profile})


export default compose(connect (mapStateToProps, {setUserProfileThunkCreator}),withRouter, WithAuthRedirect)(ProfileContainer);