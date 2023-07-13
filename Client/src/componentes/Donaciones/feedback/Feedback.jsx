import React from "react";
import styles from './Feedback.module.css';

export default function Feedback() {
  return (
    <div className={styles.container}>
      <div className={styles.gifContainer}>
      </div>
      <div className={styles.content}>
        <h1 className={styles.h1}>
          ¡Gracias por tu generosa donación! Con tu apoyo, estamos más cerca de brindar un hogar y cuidado amoroso a las mascotas necesitadas!
        </h1>
      </div>
    </div>
  );
}
