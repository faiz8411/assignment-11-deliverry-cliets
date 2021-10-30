import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import "./Footer.css"

const Footer = () => {


    return (
        <div className="footer-container">
            <div className="container">
                <div className="row d-flex justify-content-between">
                    <div className="col-md-4">
                        <Nav.Link as={HashLink} to="/home" className="text-white">home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home" className="text-white">home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home" className="text-white">home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home" className="text-white">home</Nav.Link>
                        {/* < Nav.Link as={HashLink} to="/home" className="text-white navbar">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/service" className="text-white navbar">Services</Nav.Link>
                        <Nav.Link as={HashLink} to="/catagory" className="text-white navbar">Catagory</Nav.Link> */}
                    </div>
                    <div className="col-md-4">
                        <h5>delivery solution</h5>
                        <input type="text" placeholder="" />
                        <h5 className="text-white">mobile</h5>
                        <h5>email</h5>
                    </div>

                </div>
            </div>

        </div >



    );
};

export default Footer;