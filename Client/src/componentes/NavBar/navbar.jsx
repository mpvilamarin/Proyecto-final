import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./NavBar.css";
import logo from "./logo2.png";
import { useAuth0 } from "@auth0/auth0-react";
import LogOutButton from "../Autenticación/LogOut/logout";
import LogInButton from "../Autenticación/LogIn/login";
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../../redux/Actions/post";


export default function NavBar() {
  const { isAuthenticated, user } = useAuth0();

  const usuarioAdmin = useSelector((state) => state.usuarioAdmin);


  const usuarioFundacion = useSelector((state) => state.usuarioFundacion);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(logOut());
    navigate("/login");
  };

  useEffect(() => {
  }, [usuarioAdmin,usuarioFundacion])


  return (
    <Navbar className="custom-navbar"  expand="lg">

      <Container className="container">

        <Navbar.Brand className="logo-container d-flex align-items-center">
          <Link to="/">
            <img src={logo} alt="Logo" className="logo img-fluid" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="mr-auto">

            {usuarioAdmin &&(<Link to="/DashboardAdmin" className="nav-link">
              Tu Dashboard
            </Link>)}


            {isAuthenticated && (
              <Link to="/donaciones" className="nav-link">
                Donaciones
              </Link>
            )}

           {!usuarioAdmin&&( <Link to="/adopciones" className="nav-link">
              Mascotas
            </Link>)}

            {isAuthenticated && !isAuthenticated && usuarioAdmin &&  (<Link to="/formMascota" className="nav-link">Crear Mascota</Link>)}
            { usuarioFundacion &&  (<Link to="/formMascota" className="nav-link">Crear Mascota</Link>)}

            {user && user.role === "Fundación" && (
              <Link to="/formFundaciones" className="nav-link">
                Crear Fundacion
              </Link>
            )}

            {!usuarioAdmin && !usuarioFundacion &&(<Link to="/fundaciones" className="nav-link">
              Fundaciones
            </Link>)}

           {!usuarioAdmin && (<Link to="/about" className="nav-link">
              Nosotros
            </Link>)}

            { isAuthenticated && usuarioAdmin && usuarioFundacion &&(
              <Link to="/login" className="nav-link">
                Iniciar Sesión
              </Link>
            )}


            { !isAuthenticated && !usuarioAdmin && !usuarioFundacion &&(
              <Link to="/login" className="nav-link">
                Iniciar Sesión
              </Link>
            )}

            {/* {/!isAuthenticated && <li><LogInButton /></li>/} */}

            {isAuthenticated && (
              <Link to="/perfil" className="nav-link">
                Mi Perfil
              </Link>
            )}

            {isAuthenticated && !isAuthenticated && usuarioAdmin&& 
            (<Link to="/perfilfund">Mi perfil</Link>)}

            { usuarioFundacion&& 
            (<Link to="/perfilfund">Mi perfil</Link>)}

            {isAuthenticated && (
              <li className="nav-link">

                <LogOutButton />

              </li>
            )}

            {isAuthenticated && !isAuthenticated && (<button onClick={logout}>LOGOUT</button>)}
            {usuarioFundacion && (<button onClick={logout}>LOGOUT</button>)}
            {usuarioAdmin && (<button onClick={logout}>LOGOUT</button>)}
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
