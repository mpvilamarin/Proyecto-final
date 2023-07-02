import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSignOut } from "react-auth-kit";
import { Container, Nav, Navbar } from 'react-bootstrap';
import './NavBar.css';
import logo from './logo2.png';
import { useAuth0 } from '@auth0/auth0-react';
import LogOutButton from '../Autenticación/LogOut/logout';
import LogInButton from '../Autenticación/LogIn/login';



export default function NavBar() {

  const { isAuthenticated, user } = useAuth0();


  //   const singOut = useSignOut();
  //   const navigate = useNavigate();

  //   const logout = () => {
  //     singOut();
  //     navigate("/login");
  //   };

  return (

    <Navbar className="custom-navbar" variant="light" expand="lg">
      <Container className='container'>
        <Navbar.Brand className="logo-container d-flex align-items-center">
          <img src={logo} alt="Logo" className="logo img-fluid" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {isAuthenticated && <Link to="/donaciones" className="nav-link">Donaciones</Link>}
            {/*<Link to="/formFundaciones" className="nav-link">Crear Fundacion</Link>*/}
            {/*<Link to="/formMascota" className="nav-link">Crear Mascota</Link>*/}
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/fundaciones" className="nav-link">Fundaciones</Link>
            <Link to="/adopciones" className="nav-link">Mascotas</Link>
            {/* <Link to="/contact" className="nav-link">Contáctanos</Link> */}
            <Link to="/about" className="nav-link">Sobre nosotros</Link>
            {!isAuthenticated && <Link to="/login" className="nav-link">Log in</Link>}

            {/*!isAuthenticated && <li><LogInButton /></li>*/}
            {isAuthenticated && <li><a href="/perfil">Mi perfil</a></li>}
            {isAuthenticated && <li><LogOutButton /></li>}

            {/* <button onClick={logout}>LOGOUT</button> */}

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};


