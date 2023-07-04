import React from "react";
import styles from './Feedback.module.css';

export default function Feedback() {
  return (
    <div className={styles.container}>
      <div className={styles.gifContainer}>
        <iframe
          src="https://giphy.com/embed/irQVspuvIC8PixdV7o"
          title="GIF de agradecimiento"
          width="100%"
          height="100%"
          style={{ position: "absolute" }}
          frameBorder="0"
          className="giphy-embed"
          allowFullScreen
        ></iframe>
      </div>
      <div className={styles.content}>
        <h1 className={styles.h1}>
          ¡Gracias por tu generosa donación! Con tu apoyo, estamos más cerca de brindar un hogar y cuidado amoroso a las mascotas necesitadas. Tu contribución marca la diferencia y ayuda a cambiar vidas. ¡Gracias por ser parte de este importante esfuerzo!
        </h1>
      </div>
    </div>
  );
}
