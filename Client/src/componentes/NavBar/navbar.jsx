import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      <div>
        <div>
          <div>
            <Link to="/login">
              Login
            </Link>
            <Link to="/about">
              Sobre nosotros
            </Link>
            <Link to="/contact" >
              Contactanos
            </Link>
            <Link to="/donaciones">
              Donaciones
            </Link>
            <Link to="/fundaciones">
              Fundaciones
            </Link>
            <Link to="/adopciones">
              Adopciones
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;