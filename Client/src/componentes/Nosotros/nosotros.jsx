import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import styles from "./nosotros.module.css";

export default function Nosotros() {

  const [flip, setFlip] = useState(false);
  const [flip1, setFlip1] = useState(false);
  const [flip2, setFlip2] = useState(false);
  const [flip3, setFlip3] = useState(false);
  const [flip4, setFlip4] = useState(false);
  const [flip5, setFlip5] = useState(false);
  const [flip6, setFlip6] = useState(false);

  const handleMouseEnter = () => {
    setFlip(true);
  };

  const handleMouseLeave = () => {
    setFlip(false);
  };
  const handleMouseEnter1 = () => {
    setFlip1(true);
  };

  const handleMouseLeave1 = () => {
    setFlip1(false);
  };
  const handleMouseEnter2 = () => {
    setFlip2(true);
  };

  const handleMouseLeave2 = () => {
    setFlip2(false);
  };
  const handleMouseEnter3 = () => {
    setFlip3(true);
  };

  const handleMouseLeave3 = () => {
    setFlip3(false);
  };
  const handleMouseEnter4 = () => {
    setFlip4(true);
  };

  const handleMouseLeave4 = () => {
    setFlip4(false);
  };
  const handleMouseEnter5 = () => {
    setFlip5(true);
  };

  const handleMouseLeave5 = () => {
    setFlip5(false);
  };
  const handleMouseEnter6 = () => {
    setFlip6(true);
  };

  const handleMouseLeave6 = () => {
    setFlip6(false);
  };
  return (
    <div className={styles.container}>
      <h2 className={styles.title} >Nuestro Equipo</h2>
      <h3 className={styles.sub} >Back-End</h3>

      <div className={styles.backContainer}>

        <ReactCardFlip isFlipped={flip2} flipDirection="horizontal">
          <div className={styles.content} onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2}>
            <div>
              <img className={styles.image} src={require("../../assets/David.png")} alt="David" />
              <p className={styles.name}>David</p>
            </div>
          </div>
          <div className={styles.content} onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2}>
            <p className={styles.info}>Hola, soy estudiante de Full Stack Developer en constante aprendizaje. Habilidades en HTML, CSS, JavaScript y frameworks como React y Angular. Resolutivo y creativo, buscando soluciones innovadoras..</p>
            <div className={styles.contRedes}>
              <a href="http://linkedin.com/in/david-alejandro-orozco-casas" target="_blank" rel="noreferrer">
                <img className={styles.buttonImage} src={require("../../assets/Linkedin.png")} alt="LinkedIn" />
              </a>
              <a href="https://github.com/Dalejandro31" target="_blank" rel="noreferrer">
                <img className={styles.buttonImage} src={require("../../assets/Github.png")} alt="Github" />
              </a>
            </div>
          </div>
        </ReactCardFlip>

        <ReactCardFlip isFlipped={flip} flipDirection="horizontal">
          <div className={styles.content} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div>
              <img className={styles.image} src={require("../../assets/Santi.png")} alt="Santi" />
              <p className={styles.name}>Santi</p>
            </div>
          </div>
          <div className={styles.content} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <p className={styles.info}>Hola, soy estudiante de Full Stack Developer en constante aprendizaje. Habilidades en HTML, CSS, JavaScript y frameworks como React y Angular. Resolutivo y creativo, buscando soluciones innovadoras..</p>
            <div className={styles.contRedes}>
              <a href=" https://www.linkedin.com/in/santiago-marich/" target="_blank" rel="noreferrer">
                <img className={styles.buttonImage} src={require("../../assets/Linkedin.png")} alt="LinkedIn" />
              </a>
              <a href="https://github.com/SantiMarich" target="_blank" rel="noreferrer">
                <img className={styles.buttonImage} src={require("../../assets/Github.png")} alt="Github" />
              </a>
            </div>
          </div>
        </ReactCardFlip>

        <ReactCardFlip isFlipped={flip1} flipDirection="horizontal">
          <div className={styles.content} onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1}>
            <div>
              <img className={styles.image} src={require("../../assets/Nahuel.png")} alt="Nahuel" />
              <p className={styles.name}>Nahuel</p>
            </div>
          </div>
          <div className={styles.content} onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1}>
            <p className={styles.info}>Hola, soy estudiante de Full Stack Developer en constante aprendizaje. Habilidades en HTML, CSS, JavaScript y frameworks como React y Angular. Resolutivo y creativo, buscando soluciones innovadoras..</p>
            <div className={styles.contRedes}>
              <a href="https://www.linkedin.com/in/nahuel-castilla-dev/" target="_blank" rel="noreferrer">
                <img className={styles.buttonImage} src={require("../../assets/Linkedin.png")} alt="LinkedIn" />
              </a>
              <a href="https://github.com/nahuc22" target="_blank" rel="noreferrer">
                <img className={styles.buttonImage} src={require("../../assets/Github.png")} alt="Github" />
              </a>
            </div>
          </div>
        </ReactCardFlip>




      </div>

      <h3 className={styles.sub} >Front-End</h3>

      <div className={styles.frontContainer}>
        <ReactCardFlip isFlipped={flip3} flipDirection="horizontal">
          <div className={styles.content} onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave3}>
            <div>
              <img className={styles.image} src={require("../../assets/Mari.png")} alt="Mari" />
              <p className={styles.name}>María</p>
            </div>
          </div>
          <div className={styles.content} onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave3}>
            <p className={styles.info}>Hola, soy estudiante de Full Stack Developer en constante aprendizaje. Habilidades en HTML, CSS, JavaScript y frameworks como React y Angular. Resolutivo y creativo, buscando soluciones innovadoras..</p>
            <div className={styles.contRedes}>
              <a href="www.linkedin.com/in/maria-salazar-18b907140" target="_blank" rel="noreferrer">
                <img className={styles.buttonImage} src={require("../../assets/Linkedin.png")} alt="LinkedIn" />
              </a>
              <a href="https://github.com/mvsalazarf" target="_blank" rel="noreferrer">
                <img className={styles.buttonImage} src={require("../../assets/Github.png")} alt="Github" />
              </a>
            </div>
          </div>
        </ReactCardFlip>
        <ReactCardFlip isFlipped={flip4} flipDirection="horizontal">
          <div className={styles.content} onMouseEnter={handleMouseEnter4} onMouseLeave={handleMouseLeave4}>
            <div>
              <img className={styles.image} src={require("../../assets/Juan.png")} alt="Juan" />
              <p className={styles.name}>Juan</p>
            </div>
          </div>
          <div className={styles.content} onMouseEnter={handleMouseEnter4} onMouseLeave={handleMouseLeave4}>
            <p className={styles.info}>Hola, soy estudiante de Full Stack Developer en constante aprendizaje. Habilidades en HTML, CSS, JavaScript y frameworks como React y Angular. Resolutivo y creativo, buscando soluciones innovadoras..</p>
            <div className={styles.contRedes}>
              <a href="https://www.linkedin.com/in/nahuel-castilla-dev/" target="_blank" rel="noreferrer">
                <img className={styles.buttonImage} src={require("../../assets/Linkedin.png")} alt="LinkedIn" />
              </a>
              <a href="https://github.com/nahuc22" target="_blank" rel="noreferrer">
                <img className={styles.buttonImage} src={require("../../assets/Github.png")} alt="Github" />
              </a>
            </div>
          </div>
        </ReactCardFlip>
        <ReactCardFlip isFlipped={flip5} flipDirection="horizontal">
          <div className={styles.content} onMouseEnter={handleMouseEnter5} onMouseLeave={handleMouseLeave5}>
            <div>
              <img className={styles.image} src={require("../../assets/Rami.png")} alt="Ramiro" />
              <p className={styles.name}>Ramiro</p>
            </div>
          </div>
          <div className={styles.content} onMouseEnter={handleMouseEnter5} onMouseLeave={handleMouseLeave5}>
            <p className={styles.info}>Hola, soy estudiante de Full Stack Developer en constante aprendizaje. Habilidades en HTML, CSS, JavaScript y frameworks como React y Angular. Resolutivo y creativo, buscando soluciones innovadoras..</p>
            <div className={styles.contRedes}>
              <a href="https://www.linkedin.com/in/ramiro-andino-74455a1b9/" target="_blank" rel="noreferrer">
                <img className={styles.buttonImage} src={require("../../assets/Linkedin.png")} alt="LinkedIn" />
              </a>
              <a href="https://github.com/ramiandino" target="_blank" rel="noreferrer">
                <img className={styles.buttonImage} src={require("../../assets/Github.png")} alt="Github" />
              </a>
            </div>
          </div>
        </ReactCardFlip>
        <ReactCardFlip isFlipped={flip6} flipDirection="horizontal">
          <div className={styles.content} onMouseEnter={handleMouseEnter6} onMouseLeave={handleMouseLeave6}>
            <div>
              <img className={styles.image} src={require("../../assets/Paula.png")} alt="Paula" />
              <p className={styles.name}>Paula</p>
            </div>
          </div>
          <div className={styles.content} onMouseEnter={handleMouseEnter6} onMouseLeave={handleMouseLeave6}>
            <p className={styles.info}>Hola, soy estudiante de Full Stack Developer en constante aprendizaje. Habilidades en HTML, CSS, JavaScript y frameworks como React y Angular. Resolutivo y creativo, buscando soluciones innovadoras..</p>
            <div className={styles.contRedes}>
              <a href="https://www.linkedin.com/in/mar%C3%ADa-paula-villamarin-543599222/" target="_blank" rel="noreferrer">
                <img className={styles.buttonImage} src={require("../../assets/Linkedin.png")} alt="LinkedIn" />
              </a>
              <a href="https://github.com/mpvilamarin" target="_blank" rel="noreferrer">
                <img className={styles.buttonImage} src={require("../../assets/Github.png")} alt="Github" />
              </a>
            </div>
          </div>
        </ReactCardFlip>
      </div>
    </div>
  );
}