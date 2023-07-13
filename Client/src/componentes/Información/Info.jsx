import React from "react";
import { Link } from "react-router-dom";
import iconoDogHeart from '../../assets/dogHeartt.png'
import iconoSad from '../../assets/sadrbb.png'
import iconoPaw from '../../assets/pawrb.png'
import styles from './Info.module.css'

export default function Info() {
  return (
    <div className={styles.wrapper}>
      <section className={styles.section}>
        <article className={styles.article}>
          <ul className={styles.ul}>
            <li className={styles.li}>
              <div className={styles.div} tabindex="0">
                <img src={iconoDogHeart} alt="Icono" className={styles.image} />
                <h3 className={styles.h3}>¿SERÁS UN DUEÑO RESPONSABLE?</h3>
                <p className={styles.p}>
                  Descubre si estás preparado para brindar un hogar amoroso a una mascota desamparada. Evalúa tu idoneidad como dueño responsable a través de preguntas clave en nuestro cuestionario. Reflexiona sobre tu disponibilidad de tiempo, recursos y disposición para ofrecer amor, cuidado y atención a lo largo de su vida. ¡Ayúdanos a marcar la diferencia en las vidas de estos adorables seres!"
                </p>
                <Link to="/dueñoResponsable">
                  <button className={styles.button}>Conocer más</button>
                </Link>
              </div>
              <br />
            </li>

            <li className={styles.li}>
              <div className={styles.div} tabindex="0">
                <img src={iconoPaw} alt="Icono" className={styles.image} />
                <h3 className={styles.h3}>ADOPTAR</h3>
                <p className={styles.p}>
                  Evita la compra, ¡ADOPTA! Al optar por la adopción, estás brindando una oportunidad de vida a dos animales: a tu nuevo compañero y al que ocupará su lugar en el refugio. Elige la mascota que desees recibir con todo su amor y compañía, y completa el formulario para iniciar este maravilloso vínculo.
                </p>
                <Link to="/adopciones">
                  <button className={styles.button}>Conocer más</button>
                </Link>
              </div>
            </li>

            <li className={styles.li}>
              <div className={styles.div} tabindex="0">
                <img src={iconoSad} alt="Icono" className={styles.image} />
                <h3 className={styles.h3}>CÓMO AYUDAR</h3>
                <p className={styles.p}>
                  A diario se presencia la lamentable situación de miles de animales desamparados en nuestras calles, careciendo de una figura que se haga cargo de su bienestar. Existen diversas formas de brindarles apoyo, como la posibilidad de colaborar como voluntario, ofrecer un hogar temporal o apadrinar a uno de estos adorables seres en refugios y albergues. Puedes donarle a las fundaciones a través de la página o ponerte en contacto con alguna para ofrecer tu ayuda.
                </p>
                <Link to="/fundaciones">
                  <button className={styles.button}>Conocer más</button>
                </Link>
              </div>
              <br />
            </li>
          </ul>

        </article>
      </section>
    </div>
  )
}