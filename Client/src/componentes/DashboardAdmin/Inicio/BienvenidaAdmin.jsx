import React, { useState } from "react";
import styles from './Bienvenida.module.css';

function BienvenidaAdmin() {

  return (
        <div className={styles.bienvenida}>
            <h1 className={styles.title}>¡HOLA ADMINPET! TE DAMOS LA BIENVENIDA 🛸</h1>
            <h2 className={styles.sub}>Acá podrás administrar la app</h2>
        </div>
  );
}

export default BienvenidaAdmin;