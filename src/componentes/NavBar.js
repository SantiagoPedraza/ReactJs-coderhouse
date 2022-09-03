import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './styles.css';
import CartWidget from './CartWidget';



export function NavBar() {
  return (
    <Navbar bg="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">TOMANDO ANDO</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#inicio">inicio</Nav.Link>
            <Nav.Link href="#shop">shop</Nav.Link>
            <Nav.Link href="#sobre nosotros">sobre nosotros</Nav.Link>
            <CartWidget/>
          </Nav>
        </Navbar.Collapse>
    
      </Container>
    </Navbar>
  );
}

export default NavBar;