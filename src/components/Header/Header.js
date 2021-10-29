import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import logo from '../../logo/logo.jpg'
import './Header.css'

const Header = () => {
    return (
        <div className="header" >
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="hedar-navigation">
                <Nav.Link as={HashLink} to="/home" className="text-white navbar">Home</Nav.Link>
                <Nav.Link as={HashLink} to="/service" className="text-white navbar">Services</Nav.Link>
                <Nav.Link as={HashLink} to="/catagory" className="text-white navbar">Anterprise</Nav.Link>
                <Nav.Link as={HashLink} to="specialist" className="text-white navbar">Specialist</Nav.Link>
                <Nav.Link as={HashLink} to="/about" className="text-white navbar">About</Nav.Link>
                {/* {user.email ?
                <button onClick={logOut} className="btn btn-danger">
                    LogOut
                </button> : */}
                <Nav.Link as={HashLink} to="/login" className="text-white navbar">Login</Nav.Link>


            </div>
            <div>
                <Navbar>
                    <Container>
                        <Navbar.Collapse className="justify-content-end">
                            <Navbar.Text className="text-white">
                                {/* {user?.email && */}
                                {/* <span> Welcome: {user?.displayName}</span>} */}
                            </Navbar.Text>
                        </Navbar.Collapse>
                        <Navbar.Brand href="#home" className="m-2">

                        </Navbar.Brand>
                        <Navbar.Toggle />

                    </Container>
                </Navbar>
            </div>

        </div>
    );
};

export default Header;