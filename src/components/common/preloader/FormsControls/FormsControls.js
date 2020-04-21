import React from 'react'
import classes from './FormsControls.module.css'
import {Field} from 'redux-form'

const FormControl = ({input, meta, ...props}) =>{
    const hasError = meta.touched && meta.error;
    return (
        <div className={hasError && classes.formControl + ' ' + classes.error}>
            {props.children}
    {hasError && <span className={classes.formControl + ' ' + classes.error}>{meta.error}</span>}
        </div>)
}

export const Textarea = (props) => {
    const {input, meta, ...restProps} = props
    return<FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
}

export const Input = (props) => {
    const {input, meta, ...restProps} = props
    return<FormControl {...props}><input {...input} {...restProps}/></FormControl>
}
export const CreateField = (placeholder, name, component, validate, type, text) => {
return <span> <Field placeholder={placeholder} name={name} component={component} validate={validate} type={type} /> {text}</span> 
}