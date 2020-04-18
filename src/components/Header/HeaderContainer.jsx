import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { setAuthUserDataThunkCreator } from '../../Redux/auth-reducer';




class HeaderContainer extends React.Component {
  render() {
    return <Header {...this.props}/>
  }
}

let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth, 
  islogin: state.auth.login,
  isProfile: state.profilePage.profile})

export default connect(mapStateToProps)(HeaderContainer);