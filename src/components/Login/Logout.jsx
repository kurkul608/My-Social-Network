import React from 'react'
import { Redirect } from 'react-router-dom';
import { logout } from '../../Redux/auth-reducer';
import { connect } from 'react-redux';

const LogOut = (props) => {
return <div>
    {props.logout()}
    <Redirect to="/login"/></div>
}


export default connect(null, {logout})(LogOut);