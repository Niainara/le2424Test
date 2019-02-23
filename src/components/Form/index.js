import React from 'react';
import { Field, reduxForm } from 'redux-form';
import './index.css';
import Logo from '../Logo/index';

const validate = values => {
  const errors = {}
  if (!values.name) {
    errors.name = 'Name Required'
  } else if (values.name.length > 25) {
    errors.name = 'Must be 25 characters or less'
  }
  if (!values.email) {
    errors.email = 'Email Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.password) {
    errors.password = 'Password Required'
  } else if (values.password.length < 8) {
    errors.age = 'Must be 8 characters or more'
  } 
  return errors
};

const renderField = ({
    input,
    label,
    type,
    meta: { touched, error, warning }
  }) => (
    <div className="signup-container__form__field">
      <div className="signup-container__form__field__item">
        <input {...input} placeholder={label} type={type} className="form-control" />
        {touched &&
          ((error && <span className="required-tooltip__text">{error}</span>) ||
            (warning && <span>{warning}</span>))}
      </div>
    </div>
  )
  

let SignUp = props => {
    const { handleSubmit, pristine, submitting } = props;
    return (
      <div className="signup">
        <div className="signup-container">
        <Logo />
          <div>
            <p className="signup-container__text">Hey!
            <br/> Thomas Acchiardo has invited you to the project Dimtech - mobile.</p>
          </div>
            <form onSubmit = { handleSubmit } className="signup-container__form">
                <div>
                    <Field name="name" component={renderField} type="name" label="Name"/>
                </div>
                <div>
                    <Field name="email" component={renderField} label="Email"/>
                </div>
                <div>
                    <Field name="password" component={renderField} label="Password"/>
                </div>
                <div>
                  <p className="signup-container__text red-text">Please sign up to accept the invitation.</p>
                  <p className="signup-container__text smaller grey-text">By clicking "Create Account", I confirm that I agree with Terms and Conditions</p>
                </div>
                <button type="submit" className="signup-container__btn">Create Account</button>
            </form>
        </div>
      </div>
    )
};
SignUp = reduxForm({
    form: 'register',
    validate
})(SignUp);

export default SignUp;
