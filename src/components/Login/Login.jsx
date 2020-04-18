import React from 'react'
import {reduxForm, Field} from 'redux-form'
import { Input, Textarea } from '../common/preloader/FormsControls/FormsControls'
import { requiredField } from '../../utils/validators/validators'
import { connect } from 'react-redux'
import { login, logout } from '../../Redux/auth-reducer'
import { Redirect } from 'react-router-dom'
import classes from '../common/preloader/FormsControls/FormsControls.module.css'


const LoginForm = (props) => {
    return ( 
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'email'} name={'email'} component={Input} validate={[requiredField]}/>
            </div>
            <div>
                <Field placeholder={'password'} name={'password'}component={Input} validate={[requiredField]} type={'password'}/>
            </div>
            <div>
                <Field component={'input'} name={'rememberMe'} type={'checkbox'}/> remember me
            </div>
            {props.error && <div className={classes.formSummaryError}>
                {props.error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
        )

}

const LoginReduxStore = reduxForm ({form: 'login'}) (LoginForm)


const Login = (props) => {
    const onSubmit = (formData) => {
        // formData.login, formData.password, formData.rememberMe;
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth === true) return <Redirect to="/profile" />
    return <div>
        <h1>LOGIN</h1>
        <LoginReduxStore onSubmit={onSubmit} />
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);