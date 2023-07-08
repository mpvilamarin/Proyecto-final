import React, { useState } from "react";
import styles from './Dashboard.module.css';

function Dashboard() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  let message = null;

  if (selectedOption === "fundaciones") {
    message = "Aquí está la información para las fundaciones";
  } else if (selectedOption === "mascotas") {
    message = "soy fundacion";
  }

  return (
    <div className={styles.dashboard}>
      <div className={styles.sidebar}>
        <ul>
          <li onClick={() => handleOptionClick("fundaciones")}>Ver Fundaciones</li>
          <li onClick={() => handleOptionClick("mascotas")}>Ver Mascotas</li>
        </ul>
      </div>
      <div className={styles.content}>
       
        {message && <p>{message}</p>}
      </div>
    </div>
  );
}

export default Dashboard;