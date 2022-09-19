import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './styles.css';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom'



export function NavBar() {
  return (
    <Navbar bg="dark" expand="lg">
      <Container>
      <Link to="/"><h1 className="header-title">TOMANDO ANDO</h1></Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

            
            <Link to='/productos/vino' className="header-navlink">Vinos</Link>
            
            <Link to='/productos/vodka' className="header-navlink">Vodkas</Link>

            <Link to='/productos/Gin' className="header-navlink">Gins</Link>
            
           
          </Nav>
          <CartWidget/>
        </Navbar.Collapse>
    
      </Container>
    </Navbar>
  );
}

export default NavBar;