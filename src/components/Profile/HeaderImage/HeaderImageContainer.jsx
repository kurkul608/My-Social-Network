import React from 'react';
import HeaderImage from './HeaderImage'
import { connect } from 'react-redux';



let mapStateToProps =(state) => {
    return {
        profileIMG: state.profilePage.profileIMG
    }

}

const HeaderImageContainer = connect(mapStateToProps)(HeaderImage);

export default HeaderImageContainer;