import React from 'react';
import NavBar from './NavBar';
import { connect } from 'react-redux';
import { setActiveTrue, setActiveFalse  } from '../../Redux/sidebar-reducer';



let mapStateToProps =(state) => {
  return {
      menu: state.sideBar.menu,
      active: state.sideBar.active
  }

}

const NavBarContainer = connect(mapStateToProps, {setActiveFalse, setActiveTrue})(NavBar);

export default NavBarContainer;