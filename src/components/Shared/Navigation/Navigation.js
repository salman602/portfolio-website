import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import logo from '../../../assets/salman-logo-400 x 70.png'

const Navigation = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="white" variant="white" sticky="top">
            <Container>
                <NavLink to="/">
                    <img src={logo} alt="" width="250" height="60" />
                </NavLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav>
                        <NavLink
                            to="/home"
                            style={{ textDecoration: 'none', fontWeight: 'bold', color: "#FEA770" }}
                        >Home</NavLink>
                        <NavHashLink
                            to="/home#about"
                            style={{ textDecoration: 'none', marginLeft: "1rem", fontWeight: 'bold', color: "#FEA770" }}
                        >About</NavHashLink>
                        <NavHashLink
                            to="/home#contact"
                            style={{ textDecoration: 'none', marginLeft: "1rem", fontWeight: 'bold', color: "#FEA770" }}
                        >Contact</NavHashLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;