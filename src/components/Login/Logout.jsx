import React from 'react'
import { logAPI } from '../../api/api'
import { Redirect } from 'react-router-dom';

const LogOut = () => {
    let logOut = () => {
        logAPI.logOutMe();
    }
return <div>
    {logOut()}
    <Redirect to="/login"/></div>
}
export default LogOut;