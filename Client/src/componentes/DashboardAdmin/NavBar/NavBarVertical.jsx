import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBarVertical.module.css';

const NavBarVertical = ({ mostrarComponente }) => {
  return (
    <nav className={styles.container}>
      <ul className={styles.navBar}>
        <li className={styles.li}>
          <Link to="#" onClick={() => mostrarComponente('CrearAdmin')}>
            Crear Admin
          </Link>
        </li>
        <li className={styles.li}>
          <Link to="#" onClick={() => mostrarComponente('Inicio')}>
            Inicio
          </Link>
        </li>
        <li className={styles.li}>
          <Link to="#" onClick={() => mostrarComponente('ManejoFundaciones')}>
            Editar Fundaciones
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBarVertical;