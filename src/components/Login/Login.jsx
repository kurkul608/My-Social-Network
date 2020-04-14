import React from 'react'
import {reduxForm, Field} from 'redux-form'
import { logAPI } from '../../api/api'
import { Input, Textarea } from '../common/preloader/FormsControls/FormsControls'
import { requiredField } from '../../utils/validators/validators'


const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'login'} name={'login'} component={Input} validate={[requiredField]}/>
            </div>
            <div>
                <Field placeholder={'password'} name={'password'}component={Input} validate={[requiredField]} type={'password'}/>
            </div>
            <div>
                <Field component={'input'} name={'rememberMe'} type={'checkbox'}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
        )

}

const LoginReduxStore = reduxForm ({
    form: 'login'
}) (LoginForm)


const Login = (props) => {
    const onSubmit = (formData) => {
        // formData.login, formData.password, formData.rememberMe;
        logAPI.loginMe(formData.login, formData.password, formData.rememberMe)
        
    }
    return <div>
        <h1>LOGIN</h1>
        <LoginReduxStore onSubmit={onSubmit} />
    </div>
}
export default Login;