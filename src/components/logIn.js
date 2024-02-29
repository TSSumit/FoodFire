import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import { LogInAuth } from '../utils/helperFunctions';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string()
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
              try {
                const logInMessage=LogInAuth(values.email,values.password);
                if(logInMessage==='Successfully logged in!'){
                  alert(logInMessage+" with \n"+JSON.stringify(values, null, 2));
                  navigate('/');
                  setSubmitting(false);
                }
                else if(logInMessage==='Wrong password'){
                  alert(logInMessage+" with \n"+JSON.stringify(values, null, 2));
                }
                else{
                  alert(logInMessage+" with \n"+JSON.stringify(values, null, 2));
                  navigate('/signIn');
                }
              } 
              catch (error) {
                alert('Error during login:', error);    // Handle error appropriately
              }            
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
