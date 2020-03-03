// import React from 'react';
import { Navbar, Nav, Button, Form, FormControl, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class NavBar extends Component {
  render(){
  return (

    <Navbar className="nav-colour"  bg="light" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" className='aria-control'/>

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">

          <Nav.Link as={Link} to="/"className="fontcolor">Home</Nav.Link>

          <Nav.Link as={Link} to="/projects" className="fontcolor">Things I've Done</Nav.Link>
        </Nav>

      </Navbar.Collapse>
    </Navbar>

  );
  }
}

export default NavBar;
