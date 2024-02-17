import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string()
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[$#@]).{8,}$/,
      'Password must contain at least one uppercase letter, lowercase letter, number, special character, and be at least 8 characters long'
    )
    .required('Password is required'),
});

const logIn = () => {
  const navigate = useNavigate();

  return (
    <div className='signin-body'>
      <div className='signin-container'>
        <div className='signin-header'>
          <h2>Login</h2>
          <Link to='/' className='close-icon'></Link>
        </div>

        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={LoginSchema}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
              navigate('/');
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className='form-group'>
                <Field type='email' name='email' id='email' placeholder='Email' />
                <ErrorMessage name='email' component='div' className='error-message' />
              </div>
              <div className='form-group'>
                <Field type='password' name='password' id='password' placeholder='Password' />
                <ErrorMessage name='password' component='div' className='error-message' />
              </div>
              <button type='submit' disabled={isSubmitting} className='submit-btn'>
                Login
              </button>
            </Form>
          )}
        </Formik>

        <div className='toggle-signin'>
          <p>
            Don't have an account? <Link to='/signin'>Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default logIn;
