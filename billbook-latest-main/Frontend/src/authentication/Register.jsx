import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { InvoiceLogo1, Logo, logoblack } from '../_components/imagepath';

const Register = () => {
  const { register, handleSubmit, setError, formState: { errors } } = useForm();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');

  const history = useHistory();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:8000/api/superadmin/register', {
        name: data.name,
        email: data.email,
        password: data.password,
        confirmedPassword: data.confirmedPassword,
      });
      history.push('/login');
      console.log(response.data);
      // Redirect or handle success as needed
    } catch (error) {
      if (error.response.status === 422) {
        // Handle validation errors
        error.response.data.errors.forEach((validationError) => {
          setError(validationError.param, {
            type: 'manual',
            message: validationError.msg,
          });
        });
      } else {
        console.error(error);
        // Handle other errors, show message, etc.
      }
    }
  };

  return (
    <div className="main-wrapper  login-body">
      <div className="login-wrapper">
        <div className="container">
          <img className="img-fluid logo-dark mb-2" src={logoblack} alt="Logo" />
          <div className="loginbox">
            <div className="login-right">
              <div className="login-right-wrap">
                <h1>Register</h1>
                <p className="account-subtitle">Access to our dashboard</p>
                {/* Form */}
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-group">
                    <label className="form-control-label">Name</label>
                    <input
                      className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                      type="text"
                      {...register('name', { required: 'Name is required' })}
                    />
                    {errors.name && (
                      <div className="invalid-feedback">{errors.name.message}</div>
                    )}
                  </div>
                  <div className="form-group">
                    <label className="form-control-label">Email Address</label>
                    <input
                      className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                      type="text"
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /\S+@\S+\.\S+/,
                          message: 'Invalid email address',
                        },
                      })}
                    />
                    {errors.email && (
                      <div className="invalid-feedback">{errors.email.message}</div>
                    )}
                  </div>
                  <div className="form-group">
                    <label className="form-control-label">Password</label>
                    <input
                      className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                      type="password"
                      {...register('password', { required: 'Password is required' })}
                    />
                    {errors.password && (
                      <div className="invalid-feedback">{errors.password.message}</div>
                    )}
                  </div>
                  <div className="form-group">
                    <label className="form-control-label">Confirm Password</label>
                    <input
                      className={`form-control ${errors.confirmedPassword ? 'is-invalid' : ''}`}
                      type="password"
                      {...register('confirmedPassword', {
                        required: 'Confirm Password is required',
                        validate: (value) =>
                          value === password || 'Passwords do not match',
                      })}
                    />
                    {errors.confirmedPassword && (
                      <div className="invalid-feedback">
                        {errors.confirmedPassword.message}
                      </div>
                    )}
                  </div>
                  <div className="form-group mb-0">
                    <button className="btn btn-lg btn-block btn-primary w-100" type="submit">
                      Register
                    </button>
                  </div>
                </form>
                {/* /Form */}
                <div className="login-or">
                  <span className="or-line"></span>
                  <span className="span-or">or</span>
                </div>
                {/* Social Login */}
                {/* <div className="social-login">
                  <span>Register with</span>
                  <Link to="#" className="facebook">
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                  <Link to="#" className="google">
                    <i className="fab fa-google"></i>
                  </Link>
                </div> */}
                {/* /Social Login */}
                <div className="text-center dont-have">
                  Already have an account? <Link to="/login">Login</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
