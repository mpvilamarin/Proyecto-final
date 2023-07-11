import React, { useState, useEffect } from 'react';
import NavBarVertical from '../NavBar/NavBarVertical';
import styles from './Dashboard.module.css';
import Inicio from '../Inicio/BienvenidaAdmin';
import CrearAdmin from '../CrearAdmin/CrearAdmin';
import ManejoFundaciones from '../ManejoFundaciones/ManejoFundaciones';
import ManejoMascotas from '../ManejoMascotas/ManejoMascotas';
import ManejoUsuarios from '../ManejoUsuarios/ManejoUsuarios';
import Donaciones from '../Donaciones/Donaciones';
import Graficos from '../Graficos/Graficos';

const Dashboard = () => {
  const [componenteActual, setComponenteActual] = useState(null);

  const mostrarComponente = (nombreComponente) => {
    setComponenteActual(nombreComponente);
  };

  useEffect(() => {
    setComponenteActual('Inicio');
  }, []);

  return (
    <div className={styles.container}>
        <NavBarVertical mostrarComponente={mostrarComponente} />
      <div className={styles.contentContainer}>
        {componenteActual === 'Inicio' && <Inicio />}
        {componenteActual === 'CrearAdmin' && <CrearAdmin />}
        {componenteActual === 'ManejoFundaciones' && <ManejoFundaciones />}
        {componenteActual === 'ManejoMascotas' && <ManejoMascotas />}
        {componenteActual === 'ManejoUsuarios' && <ManejoUsuarios />}
        {componenteActual === 'Donaciones' && <Donaciones />}
        {componenteActual === 'Graficos' && <Graficos />}
      </div>
    </div>
  );
};

export default Dashboard;