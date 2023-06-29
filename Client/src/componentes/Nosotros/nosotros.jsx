import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import styles from "./nosotros.module.css";

export default function Nosotros() {

  const [flip, setFlip] = useState(false);

  const handleMouseEnter = () => {
    setFlip(true);
  };

  const handleMouseLeave = () => {
    setFlip(false);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title} >Nuestro Equipo</h2>
      <h3 className={styles.sub} >Back-End</h3>

      <div className={styles.backContainer}>

        {/*---------------> DAVID <---------------*/}
        <ReactCardFlip isFlipped={flip} flipDirection="horizontal">
          <div className={styles.content} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div>
              <img className={styles.image} src={require("../../assets/David.png")} alt="David" />
              <p className={styles.name}>David</p>
            </div>
          </div>
          <div className={styles.content} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <p className={styles.info}>Hola, soy estudiante de Full Stack Developer en constante aprendizaje. Habilidades en HTML, CSS, JavaScript y frameworks como React y Angular. Resolutivo y creativo, buscando soluciones innovadoras..</p>
            <div className={styles.contRedes}>
              <a href="https://www.linkedin.com" target="_blank">
                <img className={styles.buttonImage} src={require("../../assets/Linkedin.png")} alt="LinkedIn" />
              </a>
              <a href="https://www.github.com" target="_blank">
                <img className={styles.buttonImage} src={require("../../assets/Github.png")} alt="Github" />
              </a>
            </div>
          </div>
        </ReactCardFlip>

        {/*---------------> NAHUEL <---------------*/}
        <div className={styles.content}>
          <img className={styles.image} src={require("../../assets/Nahuel.png")} alt="Nahuel" />
          <p className={styles.name} >Nahuel</p>
          <p className={styles.info} >Hola, soy Nahuel, blablabla</p>

          {/*---------------> SANTI <---------------*/}
        </div>
        <div className={styles.content}>
          <img className={styles.image} src={require("../../assets/Santi.png")} alt="Santi" />
          <p className={styles.name} >Santi</p>
          <p className={styles.info} >Hola, soy Santi, blablabla</p>
        </div>

      </div>
      <h3 className={styles.sub} >Front-End</h3>
      <div className={styles.frontContainer}>

        {/*---------------> MARÍA <---------------*/}
        <div className={styles.content}>
          <img className={styles.image} src={require("../../assets/Mari.png")} alt="Mari" />
          <p className={styles.name} >María</p>
          <p className={styles.info} >Hola, soy María, blablabla</p>
        </div>

        {/*---------------> JUAN <---------------*/}
        <div className={styles.content}>
          <img className={styles.image} src={require("../../assets/Juan.png")} alt="Juan" />
          <p className={styles.name} >Juan</p>
          <p className={styles.info} >Hola, soy Juan, blablabla</p>
        </div>


        {/*---------------> RAMI <---------------*/}
        <div className={styles.content}>
          <img className={styles.image} src={require("../../assets/Rami.png")} alt="Rami" />
          <p className={styles.name} >Rami</p>
          <p className={styles.info} >Hola, soy Rami, blablabla</p>
        </div>

        {/*---------------> PAULA <---------------*/}
        <div className={styles.content}>
          <img className={styles.image} src={require("../../assets/Paula.png")} alt="Paula" />
          <p className={styles.name} >Paula</p>
          <p className={styles.info} >Hola, soy Paula, blablabla</p>
        </div>
      </div>
    </div>
  );
}