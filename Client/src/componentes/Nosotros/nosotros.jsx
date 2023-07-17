import cachorros from "../../assets/cachorros.jpg";
import kpo1 from "../../assets/kpo1.jpg";
import kpo2 from "../../assets/kpo2.jpg";
import styles from "../Nosotros/nosotros.module.css";
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';


export default function Nosotros() {
  return (

    <div className={styles.containerPrincipal}>
      <div className={styles.hero}>
        <h1 className={styles.title}>Sobre nosotros</h1>
        <p className={styles.pp}>Pet Connect es una plataforma de adopción de mascotas que une a fundaciones comprometidas con el bienestar animal y a personas que desean darles un hogar amoroso. Creada por estudiantes de Henry como su proyecto final de desarrollo web full stack, nuestra misión es facilitar la adopción responsable y brindar una experiencia única para encontrar la mascota perfecta. Únete a Pet Connect y forma parte de nuestra comunidad dedicada a crear vínculos duraderos entre mascotas y adoptantes.</p>
      <img src={require("../../assets/MascotasNostros.png")} alt="Mascotas" className={styles.contHero} />
      </div>
      <div className={styles.container}>
        <div className={styles.contEquipo}>
          <h2 className={styles.equipo}>Nuestro equipo</h2>
          <div className={styles.cards}>
            <div className={styles.card}>
              <img src={require("../../assets/David.png")} alt="David" className={styles.img} />
              <h3 className={styles.name}>David Alejandro Orozco</h3>
              <h3 className={styles.sub}>Full Stack Developer</h3>
              <div className={styles.redes}>
                <a href="https://github.com/Dalejandro31" target="_blank" rel="noreferrer" className={styles.github}><FaGithub /></a>
                <a href="http://linkedin.com/in/david-alejandro-orozco-casas" target="_blank" rel="noreferrer" className={styles.linkedin}><FaLinkedin /></a>
              </div>
            </div>
            <div className={styles.card}>
              <img src={require("../../assets/Juan.png")} alt="Juan" className={styles.img} />
              <h3 className={styles.name}>Juan Esteban Quintero</h3>
              <h3 className={styles.sub}>Full Stack Developer</h3>
              <div className={styles.redes}>
                <a href="https://github.com/JuaneXz" target="_blank" rel="noreferrer" className={styles.github}><FaGithub /></a>
                <a href="https://www.linkedin.com/in/juan-quintero-008568282" target="_blank" rel="noreferrer" className={styles.linkedin}><FaLinkedin /></a>
              </div>
            </div>
            <div className={styles.card}>
              <img src={require("../../assets/Nahuel.png")} alt="Nahu" className={styles.img} />
              <h3 className={styles.name}>Nahuel Castilla</h3>
              <h3 className={styles.sub}>Full Stack Developer</h3>
              <div className={styles.redes}>
                <a href="https://github.com/nahuc22" target="_blank" rel="noreferrer" className={styles.github}><FaGithub /></a>
                <a href="https://www.linkedin.com/in/nahuel-castilla-dev/" target="_blank" rel="noreferrer" className={styles.linkedin}><FaLinkedin /></a>
              </div>
            </div>
            <div className={styles.card}>
              <img src={require("../../assets/Santi.png")} alt="Santi" className={styles.img} />
              <h3 className={styles.name}>Santiago Marich</h3>
              <h3 className={styles.sub}>Full Stack Developer</h3>
              <div className={styles.redes}>
                <a href="https://github.com/SantiMarich" target="_blank" rel="noreferrer" className={styles.github}><FaGithub /></a>
                <a href="https://www.linkedin.com/in/santiago-marich" target="_blank" rel="noreferrer" className={styles.linkedin}><FaLinkedin /></a>
              </div>
            </div>
            <div className={styles.card}>
              <img src={require("../../assets/Mari.png")} alt="Mari" className={styles.img} />
              <h3 className={styles.name}>Maria Victoria Salazar</h3>
              <h3 className={styles.sub}>Full Stack Developer</h3>
              <div className={styles.redes}>
                <a href="https://github.com/mvsalazarf" target="_blank" rel="noreferrer" className={styles.github}><FaGithub /></a>
                <a href="http://www.linkedin.com/in/maria-salazar-18b907140" target="_blank" rel="noreferrer" className={styles.linkedin}><FaLinkedin /></a>
              </div>
            </div>
            <div className={styles.card}>
              <img src={require("../../assets/Paula.png")} alt="Pau" className={styles.img} />
              <h3 className={styles.name}>Maria Paula Villamarin</h3>
              <h3 className={styles.sub}>Full Stack Developer</h3>
              <div className={styles.redes}>
                <a href="https://github.com/mpvilamarin" target="_blank" rel="noreferrer" className={styles.github}><FaGithub /></a>
                <a href="https://www.linkedin.com/in/mar%C3%ADa-paula-villamarin/" target="_blank" rel="noreferrer" className={styles.linkedin}><FaLinkedin /></a>
              </div>
            </div>
            <div className={styles.card}>
              <img src={require("../../assets/Rami.png")} alt="Rami" className={styles.img} />
              <h3 className={styles.name}>Ramiro Andino</h3>
              <h3 className={styles.sub}>Full Stack Developer</h3>
              <div className={styles.redes}>
                <a href="https://github.com/ramiandino" target="_blank" rel="noreferrer" className={styles.github}><FaGithub /></a>
                <a href="https://www.linkedin.com/in/ramiro-andino-74455a1b9/" target="_blank" rel="noreferrer" className={styles.linkedin}><FaLinkedin /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}