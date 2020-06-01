import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import FormControl from 'react-bootstrap/FormControl';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

//import classes from './NavBar.module.css';
//import { Link, /*animateScroll as scroll*/ } from 'react-scroll';

class NavBar extends Component {
    render() {
        return (
            <Navbar bg="light" variant="light">
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-primary">Search</Button>
                </Form>
            </Navbar>
        );
    }
}

export default NavBar;