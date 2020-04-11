import React from 'react';
import Header from './Header';
import * as axios from 'axios'
import { connect } from 'react-redux';
import { setAuthUserData } from '../../Redux/auth-reducer';



class HeaderContainer extends React.Component {
  componentDidMount() {
   
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
      withCredentials: true
    }).then(response => {
      if (response.data.resulCode === 0) {
        let {userId, email, login} = response.data.data;
        this.props.setAuthUserData(userId, email, login);
      }
        });    
}
  render() {
    return <Header />
  }
}

let mapStateToProps = (state) => ({auth: state.auth})

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);