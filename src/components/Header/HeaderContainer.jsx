import React from 'react';
import Header from './Header';
import * as axios from 'axios'
import { connect } from 'react-redux';
import { setAuthUserData } from '../../Redux/auth-reducer';
import { userAPI } from '../../api/api';



class HeaderContainer extends React.Component {
  componentDidMount() {
    userAPI.getAuthMe().then(data => {
      if (data.resultCode === 0) {
        let {id, email, login} = data.data;
        this.props.setAuthUserData(id, email, login);
      }
      
        });    
}
  render() {
    return <Header {...this.props}/>
  }
}

let mapStateToProps = (state) => ({isAuth: state.auth.isAuth, islogin: state.auth.login })

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);