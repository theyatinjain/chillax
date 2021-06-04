import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

function Navigation() {
    return (
        <div className="Navigation container-fluid">
            <Navbar collapseOnSelect fixed="top" bg="dark" expand="sm" variant="dark" className="px-3 py-0">
                <Navbar.Brand>
                    <img src={logo} height="50" width="50" alt="Chillax" className="d-inline-block align-center" />{' '}CHILLAX
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="container justify-content-end">
                        <NavLink activeClassName="active" to="/home" style={{ textDecoration: 'none' }}>
                            <h5 className="nav-link h5">Home</h5>
                        </NavLink>
                        <NavLink activeClassName="active" to="/series" style={{ textDecoration: 'none' }}>
                            <h5 className="nav-link h5">Series</h5>
                        </NavLink>
                        <NavLink activeClassName="active" to="/movies" style={{ textDecoration: 'none' }}>
                            <h5 className="nav-link h5">Movies</h5>
                        </NavLink>
                        <NavLink activeClassName="active" to="/cocktails" style={{ textDecoration: 'none' }}>
                            <h5 className="nav-link h5">Cocktails</h5>
                        </NavLink>
                        <NavLink activeClassName="active" to="/meals" style={{ textDecoration: 'none' }}>
                            <h5 className="nav-link h5">Meals</h5>
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Navigation;