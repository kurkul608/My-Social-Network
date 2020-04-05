import React from 'react';
import UserInfo from './UserInfo'
import { connect } from 'react-redux';



let mapStateToProps =(state) => {
    return {
        usersInfo: state.profilePage.usersInfo
    }

}

const UserInfoContainer = connect(mapStateToProps)(UserInfo);
export default UserInfoContainer;