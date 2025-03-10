import React, { useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './register.css';

export default function Register() {
    const email = useRef();
    const password = useRef();
    const passwordAgain = useRef();
    const username = useRef();
    const history = useNavigate();

    const handleClick = async (e) => {
        e.preventDefault();
        if (passwordAgain.current.value !== password.current.value) {
            passwordAgain.current.setCustomValidity("Passwords don't match!");
        } else {
            const user = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value,
            };
            try {
                await axios.post("/auth/register", user);
                history("/login");
            } catch (err) {
                console.log(err);
            }
        }
    };

    return (
        <div className="registerContainer">
            <div className="registerWrapper">
                <div className="registerLeft">
                    <h3 className="registerLogo">
                        &lt;<span className="logoAccent">URL</span>ify/&gt;
                    </h3>
                    <span className="registerDesc">
                        Get your URLs shortened and saved in few seconds. Add a note to it.
                    </span>
                </div>
                <div className="registerRight">
                    <form className="registerBox" onSubmit={handleClick}>
                        <input
                            placeholder="Username"
                            required
                            ref={username}
                            className="registerInput"
                        />
                        <input
                            placeholder="Email"
                            required
                            ref={email}
                            className="registerInput"
                            type="email"
                        />
                        <input
                            placeholder="Password"
                            required
                            ref={password}
                            className="registerInput"
                            type="password"
                            minLength="6"
                        />
                        <input
                            placeholder="Password Again"
                            type="password"
                            required
                            ref={passwordAgain}
                            className="registerInput"
                            minLength="6"
                        />
                        <button className="registerButton" type="submit">
                            Sign Up
                        </button>
                        <span className="registerForgot">Forgot Password?</span>
                        <button className="registerLoginButton">
                            <Link to="/login" className="registerLink">
                                Log in to Account
                            </Link>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
