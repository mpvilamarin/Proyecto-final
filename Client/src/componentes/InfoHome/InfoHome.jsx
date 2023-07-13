import React from "react";
import st from './InfoHome.module.css';
import fundacion from '../../assets/WomanDgos.png'
// import catAndDogHome from '../../assets/catAndDogHome.png'
import catAndDogHome from '../../assets/woman.png'
import { Link } from "react-router-dom";

export default function InfoHome() {
  return (
    <div className={st.wrapper}>
      <div className={st.container}>
        <div className={st.title}>
          <h1 className={st.h1}>ENCUENTRA</h1>
          <h2 className={st.h2}>a tu nuevo</h2>
          <h1 className={st.h1_2}>AMIGO PELUDO</h1>
        </div>

        <div className={st.textContainer}>
          <p className={st.p}>
            ¡Bienvenidos a Pet Connect, la app
          </p>
          <p className={st.p}>
            que te ayuda a conectar con tu futuro
          </p>
          <p className={st.p}>
            mejor amigo!
          </p>
        </div>
      </div>



      <div className={st.imageContainer}>

        <div className={st.imageFundacion}>
          <img src={fundacion} alt="Imagen 1" className={st.image} />
          <div className={st.FundRow}>
            <Link to='/fundaciones' className={st.Link}>
              <span className={st.span}>
                Fundaciones
              </span>
            </Link>
          </div>
        </div>
        <div className={st.imageDog}>
          <img src={catAndDogHome} alt="Imagen 2" className={st.image} />
          <div className={st.MascotaRow}>
            <Link to='/adopciones' className={st.Link}>
              <span className={st.span}>
                Mascotas
              </span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
