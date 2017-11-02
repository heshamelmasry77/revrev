import React, { Component } from 'react';
import logo from '../../../../assets/logos/ReactLogo.svg'; // Tell Webpack this JS file uses this image
import { Navbar, Nav, MenuItem, NavDropdown } from 'react-bootstrap';

class NavbarInstance extends Component {
  render() {
    return (
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="">
              <img src={logo} className="App-logo" alt="logo" />
            </a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavDropdown eventKey={3} title="Get in" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Register</MenuItem>
              <MenuItem eventKey={3.2}>Sign in</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavbarInstance;
