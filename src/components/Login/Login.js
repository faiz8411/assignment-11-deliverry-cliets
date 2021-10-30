import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import { HashLink } from 'react-router-hash-link';

import useAuth from '../../hooks/useAuth';

import image1 from '../../logo/access-control-system-abstract-concept-illustration-security-system-authorize-entry-login-credential.jpg'
import './Login.css'


const Login = () => {
    const {
        user,
        signInUsingGoogle,
        handleUserRegister,
        handleUserLogin,
    } = useAuth();
    const location = useLocation()
    const history = useHistory()
    const redirect_url = location.state?.from || '/home'
    // console.log(location.state?.from)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleEmail = e => {
        setEmail(e.target.value)

    }
    console.log(email)
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_url)
            })
    }
    // console.log(password)
    const handleRegister = () => {
        handleUserRegister(email, password);

    };
    const handleLogin = () => {
        handleUserLogin(email, password);
    };
    console.log(user)

    return (
        <div id="login" className="div d-flex justify-content-center align-items-center">
            <div className="row ">
                <div className="col-md-6">
                    <h4>please login or signup</h4>
                    <div>
                        <div className="form-input mt-5">

                            <input onChange={handleEmail}

                                className="mt-2 p-2"
                                type="email"
                                placeholder="Email"
                            />
                            <br />
                            <input onChange={handlePassword}

                                className="mt-2 p-2"
                                type="password"
                                placeholder="Password"
                            />
                            <br />
                            <div className="login-regiater-btn mt-4">

                                <button onClick={handleLogin} className="btn btn-success ms-1">
                                    Login
                                </button>
                                <h4 className="text-success">Are you new in this site??</h4>
                            </div>
                        </div>
                        <div className="login-btn mt-4 d-flex">
                            <Nav.Link as={HashLink} to="/register" className="text-white navbar"><button className="btn-login m-2 btn btn-success">Register</button></Nav.Link> <h2>or</h2>
                            <button onClick={handleGoogleLogin}

                                className="btn-login m-2 btn btn-primary"
                            >
                                google sign in
                            </button>


                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="right-side-image">
                        <img
                            className="w-100"
                            src="https://i.ibb.co/MSBbLcd/access-control-system-abstract-concept-illustration-security-system-authorize-entry-login-credential.jpg"
                            alt=""
                        />
                    </div>
                    ;
                </div>
            </div>
        </div>

    );
};

export default Login;