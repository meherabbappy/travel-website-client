import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { HashLink } from 'react-router-hash-link';
import useAuth from '../../hooks/useAuth';

import "./Header.css"

const Header = () => {
    const { user, logOut } = useAuth()
    return (

        <div className="header-main">
            <Navbar collapseOnSelect expand="lg" bg="dark" sticky="top" variant="dark">
                <Container>
                    <Navbar.Brand className="fw-bold" href="/home"><img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Trip.com_logo.svg/2560px-Trip.com_logo.svg.png" alt="" /></Navbar.Brand>

                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav className="me-auto">
                            <Link className="head-items" to="/home">Home</Link>
                            {/* <Link to="/home" id="services">Service</Link> */}
                            <Link className="head-items" to="/about">About</Link>
                            <Link className="head-items" to="/contact">Contact</Link>
                            <Link className="head-items" to="/addservice">Add Service</Link>
                            <Link className="head-items" to="/myOrder">My Order</Link>
                            <Link className="head-items" to="/allOrder">All Order</Link>

                        </Nav>

                        <Nav>

                            {user?.email ?
                                <>
                                    <Link className="nav-link" to="home"><i class="fas fa-user"></i><span> </span>{user?.displayName}<span className="text-lite ms-2" onClick={logOut}> <i class="fas fa-sign-out-alt"></i> Log Out</span></Link>
                                </> :
                                <Nav.Link as={HashLink} to="/login">Login</Nav.Link>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>

    );
};

export default Header;