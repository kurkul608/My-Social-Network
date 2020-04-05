import React from 'react';
import HeaderImage from './HeaderImage'


function HeaderImageContainer(props) {
    let state = props.store.getState();
    return(<HeaderImage profileIMG={state.profilePage.profileIMG}/>)
}

export default HeaderImageContainer;