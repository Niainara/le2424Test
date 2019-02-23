import React from 'react';
import './index.css';
import { Field, reduxForm } from 'redux-form';
import { NavLink } from 'react-router-dom';

const validate = values => {
    const errors = {}
    if (!values.email) {
      errors.email = 'Email Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address'
    }
    if (!values.password) {
      errors.password = 'Password Required'
    } else if (values.password.length < 8) {
      errors.password = 'Must be 8 characters or more'
    } 
    return errors
  };

const renderFieldSignIn = ({
    input,
    label,
    type,
    meta: { touched, error, warning }
  }) => (
    <div className="sing-in__container__form__field">
      <div className="sing-in__container__form__field__item">
        <input {...input} placeholder={label} type={type} className="form__sign-in" />
        {touched &&
          ((error && <span className="text-danger">{error}</span>) ||
            (warning && <span>{warning}</span>))}
      </div>
    </div>
  )

let SignIn = props =>{
    const { handleSubmit, pristine, submitting } = props;
        return(
            <div className="sign-in">
                <div className="sign-in__container">
                    <header className="sign-in__container__header">
                        <h1 className="sign-in__container__header__text">Sign-in</h1>
                    </header>
                    <form onSubmit = { handleSubmit } className="sign-in__container__form">
                        <div className="sign-in__container__form__item">
                            <Field name="email" component={renderFieldSignIn} type="email" label="E-mail"/>
                        </div>
                        <div className="sign-in__container__form__item">
                            <Field name="password" component={renderFieldSignIn} type="password" label="Password"/>
                        </div>
                        <div className="sign-in__container__options">
                        <label className="sign-in__container__checkbox">
                            Keep me logged
                            <input type="checkbox" />
                            <span className="sign-in__container__checkbox__checkmark"></span>
                        </label>
                        <NavLink className="password-link" to="/sign-up"> 
                          <p className="sign-in__container__options__password-forgotten">Forgot your password ?</p>
                        </NavLink>
                        </div>
                        <button type="submit" className="sign-in__container__form__btn">Login</button>
                    </form>
                    <div className="sign-in__container__sign-up">
                    <p>Need an account ? </p>
                      <NavLink className="sign-up-link" to="/sign-up"> 
                        <p> Sign up</p>
                      </NavLink>
                    </div>
                </div>
            </div>
        )
};
SignIn = reduxForm({
    form: 'sign',
    validate
})(SignIn);

export default SignIn;
