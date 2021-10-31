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


    } = useAuth();
    const location = useLocation()
    const history = useHistory()
    const redirect_url = location.state?.from || '/home'

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_url)
            })
    }


    return (
        <div id="login" className="div d-flex justify-content-center align-items-center">
            <div className="row ">
                <div className="col-md-6">
                    <h4>please login or signup</h4>
                    <div>
                        <div className="form-input mt-5">


                        </div>
                        <div className="login-btn mt-4 d-flex">

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