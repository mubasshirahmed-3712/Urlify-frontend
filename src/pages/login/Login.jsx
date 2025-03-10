import React, { useContext, useRef } from 'react';
import './login.css';
import { loginCall } from '../../apiCalls';
import { AuthContext } from '../../context/AuthContext';
import { Link } from 'react-router-dom';

export default function Login() {
  const email = useRef();
  const password = useRef();

  const { isFetching, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    loginCall({ email: email.current.value, password: password.current.value }, dispatch);
  };

  return (
    <div className="login">
      <div className="loginContainer">
        <div className="loginLeft">
          <h3 className="loginLogo">
            <span className="highlight">{"<URL"}</span>ify<span className="highlight">{"/>"}</span>
          </h3>
          <p className="loginDesc">
            Get your URLs shortened and saved within seconds, with notes!
          </p>
        </div>

        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <h2 className="loginTitle">Welcome Back!</h2>

            <input
              placeholder="Email"
              type="email"
              required
              ref={email}
              className="loginInput"
            />
            <input
              placeholder="Password"
              type="password"
              required
              minLength={6}
              ref={password}
              className="loginInput"
            />

            <button type="submit" className="loginButton" disabled={isFetching}>
              {isFetching ? 'Loading...' : 'Log In'}
            </button>

            <Link to="/forgot-password" className="loginForgot">
              Forgot Password?
            </Link>

            <span className="loginDivider">OR</span>

            <Link to="/register" className="loginRegisterButton">
              Create a New Account
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
