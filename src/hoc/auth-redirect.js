import React from 'react'
import { Redirect } from "react-router-dom"
import { connect } from 'react-redux'
let mapStateToPropsForRedirect = (state) => ({isAuth: state.auth.isAuth})

export let WithAuthRedirect =(Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Redirect to='/login' />
            return <Component {...this.props} />}
        
        }

        
        let ConnectedAuthRedirextComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)
        return ConnectedAuthRedirextComponent
    }
    
