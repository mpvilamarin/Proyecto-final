import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './NavBar.css';
import logo from './logo2.png';

const NavBar = () => {
  return (
    <Navbar className="custom-navbar" variant="light" expand="lg">
      <Container className='container'>
        <Navbar.Brand className="logo-container d-flex align-items-center">
          <img src={logo} alt="Logo" className="logo img-fluid" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/home" className="nav-link">Home</Link>
            <Link to="/donaciones" className="nav-link">Donaciones</Link>
            <Link to="/fundaciones" className="nav-link">Fundaciones</Link>
            <Link to="/adopciones" className="nav-link">Adopciones</Link>
            <Link to="/contact" className="nav-link">Contáctanos</Link>
            <Link to="/about" className="nav-link">Sobre nosotros</Link>
            <Link to="/login" className="nav-link">Login</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
