import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { InvoiceLogo1 } from '../_components/imagepath';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const { handleSubmit, control, setError, formState: { errors } } = useForm();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [eye, setEye] = useState(false);

  const history = useHistory();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:8000/api/superadmin/login', {
        email: data.email,
        password: data.password,
      });
      console.log(response.data);

      // Redirect to the dashboard (Header) after a successful login
      history.push('/index');
    } catch (error) {
      if (error.response.status === 401) {
        // Handle authentication error (invalid email or password)
        setError('authentication', {
          type: 'manual',
          message: 'Invalid email or password',
        });
      } else {
        console.error(error);
      }
    }
  };

  const onEyeClick = () => {
    setEye(!eye);
  };

  return (
    <>
      <div className="main-wrapper login-body">
        <div className="login-wrapper">
          <div className="container">
            <img className="img-fluid logo-dark mb-2" src={InvoiceLogo1} alt="Logo" />
            <div className="loginbox">
              <div className="login-right">
                <div className="login-right-wrap">
                  <h1>Login</h1>
                  <p className="account-subtitle">Access to our dashboard</p>
                  <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="form-group input_text">
                        <label className="form-control-label">Email Address</label>
                        <input
                          type="text"
                          className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                          {...register('email', {
                            required: 'Email is required',
                            pattern: {
                              value: /\S+@\S+\.\S+/,
                              message: 'Invalid email address',
                            },
                          })}
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          autoComplete="false"
                        />
                        {errors.email && (
                          <div className="invalid-feedback">{errors.email.message}</div>
                        )}
                      </div>

                      <div className="form-group input_text login-eye">
                        <label className="form-control-label">Password</label>
                        <div className="pass-group">
                          <input
                            type={eye ? 'password' : 'text'}
                            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                            {...register('password', {
                              required: 'Password is required',
                            })}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            autoComplete="false"
                          />
                          <span
                            onClick={onEyeClick}
                            className={`fa toggle-password ${eye ? 'fa-eye-slash' : 'fa-eye'}`}
                          />
                        </div>
                        {errors.password && (
                          <div className="invalid-feedback">{errors.password.message}</div>
                        )}
                      </div>

                      <div className="form-group">
                        <div className="row">
                          <div className="col-6">
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="cb1"
                              />
                              <label className="custom-control-label ms-1" htmlFor="cb1">
                                Remember me
                              </label>
                            </div>
                          </div>
                          <div className="col-6 text-end">
                            <Link className="forgot-link" to="/forgot-password">
                              Forgot Password ?
                            </Link>
                          </div>
                        </div>
                      </div>
                      <button className="btn btn-lg btn-block w-100 btn-primary" type="submit">
                        Login
                      </button>
                      {errors.authentication && (
                        <div className="invalid-feedback">{errors.authentication.message}</div>
                      )}
                    </form>
                    <div className="login-or">
                      <span className="or-line" />
                      <span className="span-or">or</span>
                    </div>
                    {/* Social Login */}
                    <div className="social-login mb-3">
                      <span>Login with</span>
                      <Link to="#" className="facebook">
                        <i className="fab fa-facebook-f" />
                      </Link>
                      <Link to="#" className="google">
                        <i className="fab fa-google" />
                      </Link>
                    </div>
                    {/* /Social Login */}
                    <div className="text-center dont-have">
                      Don't have an account yet? <Link to="/register">Register</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
