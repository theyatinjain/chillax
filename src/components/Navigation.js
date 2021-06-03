import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../assets/logo.png';

function Navigation() {
    return (
        <div className="Navigation container-fluid">
            <Navbar collapseOnSelect fixed="top" bg="dark" expand="sm" variant="dark" className="px-3 py-0">
                <Navbar.Brand href="/">
                    <img src={logo} height="50" width="50" alt="Chillax" className="d-inline-block align-center" />{' '}CHILLAX
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="container justify-content-end">
                        <Nav.Link className="h5" href="#movies">Movies</Nav.Link>
                        <Nav.Link className="h5" href="#series">Series</Nav.Link>
                        <Nav.Link className="h5" href="#cocktails">Cocktails</Nav.Link>
                        <Nav.Link className="h5" href="#meals">Meals</Nav.Link>
                        <Nav.Link className="h5" href="https://clicktoeat77.web.app/">Order Food</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Navigation;