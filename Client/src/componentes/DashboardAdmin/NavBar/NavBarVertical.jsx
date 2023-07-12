import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBarVertical.module.css';

const NavBarVertical = ({ mostrarComponente }) => {

  return (
    <nav className={styles.container}>
      <ul className={styles.navBar}>
        <li className={styles.li}>
          <Link to="#" className={styles.menu} onClick={() => mostrarComponente('Inicio')}>
            Inicio
          </Link>
        </li>
        <li className={styles.li}>
          <Link to="#" className={styles.menu} onClick={() => mostrarComponente('CrearAdmin')}>
            Crear Admin
          </Link>
        </li>
        <li className={styles.li}>
          <Link to="#" className={styles.menu} onClick={() => mostrarComponente('ManejoFundaciones')}>
            Editar Fundaciones
          </Link>
        </li>
        <li className={styles.li}>
          <Link to="#" className={styles.menu} onClick={() => mostrarComponente('ManejoMascotas')}>
            Editar Mascotas
          </Link>
        </li>
        <li className={styles.li}>
          <Link to="#" className={styles.menu} onClick={() => mostrarComponente('ManejoUsuarios')}>
            Editar Usuarios
          </Link>
        </li>
        <li className={styles.li}>
          <Link to="#" className={styles.menu} onClick={() => mostrarComponente('Donaciones')}>
            Ver Donaciones
          </Link>
        </li>
        <li className={styles.li}>
          <Link to="#" className={styles.menu} onClick={() => mostrarComponente('Graficos')}>
            Ver Gráficos
          </Link>
        </li>

      </ul>
    </nav>
  );
};

export default NavBarVertical;