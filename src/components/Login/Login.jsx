import React from "react";
import { reduxForm } from "redux-form";
import {
  Input,
  CreateField,
} from "../common/preloader/FormsControls/FormsControls";
import { requiredField } from "../../utils/validators/validators";
import { connect } from "react-redux";
import { login } from "../../Redux/auth-reducer";
import { Redirect } from "react-router-dom";
import classes from "../common/preloader/FormsControls/FormsControls.module.css";

const LoginForm = ({ handleSubmit, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      {CreateField("email", "email", Input, [requiredField], "")}
        {CreateField("password","password",Input,[requiredField],"password")}
        {CreateField("", "rememberMe", "input", "", "checkbox", 'remember me')} 
      {error && <div className={classes.formSummaryError}>{error}</div>}
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxStore = reduxForm({ form: "login" })(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };
  if (props.isAuth === true) return <Redirect to="/profile" />;
  return (
    <div>
      <h1>LOGIN</h1>
      <LoginReduxStore onSubmit={onSubmit} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login })(Login);
