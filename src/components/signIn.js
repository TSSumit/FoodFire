import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from "react-router-dom";

const SignInSchema = Yup.object().shape({
  fullName: Yup.string().required('Full name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  agreeToTerms: Yup.boolean().oneOf([true])
});

const SignIn = () => {  
  const navigate = useNavigate();
  return (
    <div className='signin-body'> 
      <div className="signin-container" >
        <div className="signin-header">
          <h2>SignUp</h2>
          <Link to="/login" className="close-icon"></Link>
        </div>
        
        <Formik
          initialValues={{
            fullName: '',
            email: '',
            agreeToTerms: false,
          }}
          validationSchema={SignInSchema}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
              navigate("/login");
            }, 400);
          }}
        >
          {({ isSubmitting }) => ( // Destructuring 'isSubmitting' from the Formik props
            <Form>  
              <div className="form-group">
                <Field type="text" name="fullName" id="fullName"  placeholder="Full Name"/> {/* Input field for full name */}
                <ErrorMessage name="fullName" component="div" className="error-message" /> {/* Display validation error message if any */}
              </div>
              <div className="form-group">
                <Field type="email" name="email" id="email" placeholder="Email" /> {/* Input field for email */}
                <ErrorMessage name="email" component="div" className="error-message" /> {/* Display validation error message if any */}
              </div>
              <div className="form-group" id='agreeToTermsLabelError'>
                <div id='agreeToTermsLabel'>
                  <Field type="checkbox" name="agreeToTerms" id="agreeToTerms" />
                  <label htmlFor="agreeToTerms">I agree to Foodies's <span className='color-red'>Terms of Service, Privacy Policy</span> and <span className='color-red'>Content Policies</span></label>
                </div>
                <ErrorMessage name="agreeToTerms" component="div" className="error-message" />
              </div>
              <button type="submit" disabled={isSubmitting} className="submit-btn"> {/* Submit button */}
                Create Account
              </button>
            </Form>
          )}
        </Formik>

        <div className="toggle-signin">
          <p>Already have an account? <Link to="/" >LogIn</Link> </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
