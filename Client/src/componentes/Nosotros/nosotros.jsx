import cachorros from "../../assets/cachorros.jpg";
import kpo1 from "../../assets/kpo1.jpg";
import kpo2 from "../../assets/kpo2.jpg";
import styles from "../Nosotros/nosotros.module.css";
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';


export default function Nosotros() {
  return (
    <div className={styles.containerPrincipal}>
      <section className={styles.headercontainer}>
        <div className={styles.sideleft}>
          <h1 className={styles.up}>Conoce a nuestro Staff</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident inventore magni doloribus distinctio expedita natus exercitationem rerum libero. Nostrum veritatis eos error asperiores a deserunt sunt architecto voluptatem fugiat et.</p>
        </div>
        <div className={styles.sideright}>
          <img src={cachorros} alt="girl" />
        </div>
        <img className={styles.imagen} src={kpo1} alt="girl" />
        <div className={styles.container}>
          <div className={styles.alinear}>
            <div className={styles.card}>
              <figure className={styles.figure}>
                <h5 className={styles.title}>"El éxito es, en gran medida, una combinación de suerte y trabajo duro"</h5>
                <div>
                  <img src={require("../../assets/Rami.png")} alt="Rami" className={styles.img} />
                  <div>Ramiro Andino</div>
                  <div className={styles.titleDev}>Full Stack Developer</div>
                  <a href="https://github.com/ramiandino" target="_blank" rel="noreferrer" className={styles.github}><FaGithub /></a>
                  <a href="https://www.linkedin.com/in/ramiro-andino-74455a1b9/" target="_blank" rel="noreferrer" className={styles.linkedin}><FaLinkedin /></a>
                </div>
              </figure>
            </div>
            <div className={styles.card}>
              <figure className={styles.figure}>
                <h5 className={styles.title}>"Lo lindo del trabajo en equipo es que siempre tienes alguien a tu lado"</h5>
                <div>
                  <img src={require("../../assets/David.png")} alt="David" className={styles.img} />
                  <div>David Orozco</div>
                  <div className={styles.titleDev}>Full Stack Developer</div>
                  <a href="https://github.com/Dalejandro31" target="_blank" rel="noreferrer" className={styles.github}><FaGithub /></a>
                  <a href="http://linkedin.com/in/david-alejandro-orozco-casas" target="_blank" rel="noreferrer" className={styles.linkedin}><FaLinkedin /></a>
                </div>
              </figure>
            </div>
          </div>
          <div className={styles.alinear}>
            <div className={styles.card}>
              <figure className={styles.figure}>
                <h5 className={styles.title}>"No importa de dónde vienes. Solo importa hacia dónde vas"</h5>
                <div>
                  <img src={require("../../assets/Santi.png")} alt="Santi" className={styles.img} />
                  <div>Santiago Marich</div>
                  <div className={styles.titleDev}>Full Stack Developer</div>
                  <a href="https://github.com/SantiMarich" target="_blank" rel="noreferrer" className={styles.github}><FaGithub /></a>
                  <a href="https://www.linkedin.com/in/santiago-marich" target="_blank" rel="noreferrer" className={styles.linkedin}><FaLinkedin /></a>
                </div>
              </figure>
            </div>
            <div className={styles.card}>
              <figure className={styles.figure}>
                <h5 className={styles.title}>"Todo comienza con una idea excelente y con trabajo en equipo"</h5>
                <div>
                  <img src={require("../../assets/Nahuel.png")} alt="Nahu" className={styles.img} />
                  <div>Nahuel Castilla</div>
                  <div className={styles.titleDev}>Full Stack Developer</div>
                  <a href="https://github.com/nahuc22" target="_blank" rel="noreferrer" className={styles.github}><FaGithub /></a>
                  <a href="https://www.linkedin.com/in/nahuel-castilla-dev/" target="_blank" rel="noreferrer" className={styles.linkedin}><FaLinkedin /></a>
                </div>
              </figure>
            </div>
          </div>
          <img className={styles.imagen2} src={kpo2} alt="girl" />
          <div className={styles.alinear2}>
            <div className={styles.card}>
              <figure className={styles.figure}>
                <h5 className={styles.title}>"El único límite para nuestros logros del mañana son las dudas que tenemos hoy"</h5>
                <div>
                  <img src={require("../../assets/Mari.png")} alt="Mari" className={styles.imgM} />
                  <div>Maria Victoria Salazar</div>
                  <div className={styles.titleDev}>Full Stack Developer</div>
                  <a href="https://github.com/mvsalazarf" target="_blank" rel="noreferrer" className={styles.github}><FaGithub /></a>
                  <a href="http://www.linkedin.com/in/maria-salazar-18b907140" target="_blank" rel="noreferrer" className={styles.linkedin}><FaLinkedin /></a>
                </div>
              </figure>
            </div>
            <div className={styles.card}>
              <figure className={styles.figure}>
                <h5 className={styles.title}>"La clave para un liderazgo exitoso hoy en día es tener influencia, no autoridad"</h5>
                <div>
                  <img src={require("../../assets/Paula.png")} alt="Pau" className={styles.img} />
                  <div>Maria Paula Villamarin</div>
                  <div className={styles.titleDev}>Full Stack Developer</div>
                  <a href="https://github.com/mpvilamarin" target="_blank" rel="noreferrer" className={styles.github}><FaGithub /></a>
                  <a href="https://www.linkedin.com/in/mar%C3%ADa-paula-villamarin/" target="_blank" rel="noreferrer" className={styles.linkedin}><FaLinkedin /></a>
                </div>
              </figure>
            </div>
          </div>
          <div className={styles.alinear3}>
            <div className={styles.card}>
              <figure className={styles.figure}>
                <h5 className={styles.title}>"El único camino es seguir adelante"</h5>
                <div>
                  <img src={require("../../assets/Juan.png")} alt="Juan" className={styles.img} />
                  <div>Juan Esteban Quintero</div>
                  <div className={styles.titleDev}>Full Stack Developer</div>
                  <a href="https://github.com/JuaneXz" target="_blank" rel="noreferrer" className={styles.github}><FaGithub /></a>
                  <a href="https://www.linkedin.com/in/juan-quintero-008568282" target="_blank" rel="noreferrer" className={styles.linkedin}><FaLinkedin /></a>
                </div>
              </figure>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
