import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Footer.css'


const Footer = () => {

    return (
        <div>
            <div className="footer-container bg-dark">
                <div className="container text-center text-md-left mt-5 ">
                    <div className="row">

                        <div className="col-md-3 mx-auto mb-4">
                            <h5 className="text-uppercase font-weight-bold text-white">The providers</h5>
                            <hr className="bg-success mb-4 mt-0 d-inline-block mx-auto" />
                            <h2 className="text-white">DSL LTD</h2>
                        </div>

                        <div className="col-md-3 mx-auto mb-4">
                            <h5 className="text-uppercase font-weight-bold text-white">navigation</h5>
                            <hr className="bg-success mb-4 mt-0 d-inline-block mx-auto" />
                            <ul className="text-white mb-2">
                                <li>home</li>
                                <li>address</li>
                                <li>aboutus</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3 mx-auto mb-4">
                        <h5 className="text-uppercase font-weight-bold text-white">services</h5>
                        <hr className="bg-success mb-4 mt-0 d-inline-block mx-auto" />
                        <ul className="text-white mb-2">
                            <li>FaQ</li>
                            <li>Contacts</li>
                            <li>about us</li>
                        </ul>
                    </div>

                    <div>
                        <img src="" alt="" />

                        <input type="text" className="bg-success" />
                        <p className="text-white"> email:</p> <br />
                        <p className="text-white"> faizullah.noa2014@gmail.com</p>
                        <p className="text-warning">mobile:</p> <br />
                        <p className="text-white">+6746754664576554</p>
                    </div>



                </div>
            </div>
            <div className="mt-2">
                <h5>© 2020 TravRio. Designd By naz. All Rights Reserved</h5>
            </div>
        </div>
    );
};

export default Footer;