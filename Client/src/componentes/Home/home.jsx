import React, { useEffect } from "react";
import style from "./home.module.css";
import Info from "../Información/Info";
import InfoHome from "../InfoHome/InfoHome";
import { useAuth0 } from "@auth0/auth0-react";
import { useSelector, useDispatch } from "react-redux";
import { postUsuario } from "../../redux/Actions/post";
import styles from './home.module.css';
import { Link } from "react-router-dom";

const Home = () => {

  const { user, isAuthenticated } = useAuth0();
  const dispatch = useDispatch();

  const usuarios = useSelector((state) => state.usuarios)

  console.log(usuarios)


  useEffect(() => {
    if (isAuthenticated) {
      const usuarioExistente = usuarios.find((usuario) => usuario.email === user.email);

      if (!usuarioExistente) {
        dispatch(postUsuario(user));
      }
    }
  }, [user, dispatch]);


  return (
    <div className={styles.container}>
      <div className={styles.infoHome}>
        <InfoHome />
      </div>
      <div className={styles.container1}>
        <div>
          <div className={styles.containerPadre}>
            <div className={styles.hijo1}>
              <h2 className={styles.title}>¿Serás un dueño responsable?</h2>
              <p className={styles.text}> Descubre si estás preparado para brindar un hogar amoroso a una mascota desamparada.</p>
              <Link to="/dueñoResponsable">
                <button className={styles.button}>¡Conoce Más!</button>
              </Link>
            </div>
            <div className={styles.hijo2}>
              <div>
                <p className={styles.text}>Reflexiona sobre tu disponibilidad de tiempo, recursos y disposición para ofrecer amor, cuidado y atención a lo largo de su vida.</p>
              </div>
              <div className={styles.contMedio}>
                <Link to='/formAdopcion'>
                  <button className={styles.button2} >¡Adopta Ahora!</button>
                </Link>
              </div>
              <div>
                <p className={styles.text1}>Evalúa tu idoneidad como dueño responsable a través de preguntas clave en nuestro cuestionario</p>
              </div>
            </div>
            <div className={styles.hijo3}>
              <p className={styles.text2}>¡Ayúdanos a marcar la diferencia en las vidas de estos adorables seres!</p>
              <div className={styles.hijoSub3}>
                <div className={styles.contImg}>
                  <img src={require("../../assets/HomePerro.webp")} alt="Ambos" className={styles.img} />
                </div>
              </div>
            </div>
            <div>
            </div>
          </div>
          <div className={styles.containerPadre}>
            <div className={styles.hijo1}>
              <p className={styles.text2}>¡Completa el formulario para iniciar este maravilloso vínculo!</p>
              <div className={styles.hijoSub3}>
                <div className={styles.contImg2}>
                  <img src={require("../../assets/HomeGato.png")} alt="Ambos" className={styles.img2} />
                </div>
              </div>
            </div>
            <div className={styles.hijo2}>
              <h2 className={styles.title}>¡La Magia de Adoptar!</h2>
              <p className={styles.text}> Evita la compra, ¡ADOPTA! Al optar por la adopción, estás brindando una oportunidad de vida a los animales que más lo necesitan</p>
              <Link to="/adopciones">
                <button className={styles.button}>¡Conoce Más!</button>
              </Link>
            </div>
            <div className={styles.hijo3}>
              <div>
                <p className={styles.text}>Conoce hoy a tu nuevo compañero y ayuda al que ocupará su lugar en el refugio.</p>
              </div>
              <div>
                <p className={styles.text4}>Elige la mascota que deseas recibir. Ella llegará a tu hogar con todo su amor y compañía</p>
              </div>
              <div className={styles.contImg4}>
                <img src={require("../../assets/HomePatas.png")} alt="Patas" className={styles.img4} />
              </div>
            </div>
          </div>
          <div className={styles.containerPadre}>
            <div className={styles.hijo1}>
              <div>
                <p className={styles.text2}>Puedes donarle a las fundaciones a través de la página o ponerte en contacto con alguna para ofrecer tu ayuda.</p>
              </div>
              <div>
                <p className={styles.text2}>A diario se presencia la lamentable situación de miles de animales desamparados en nuestras calles, careciendo de una figura que se haga cargo de su bienestar.</p>
              </div>
              <div className={styles.contImgPata}>
                <img src={require("../../assets/HomePata.png")} alt="Pata" />
              </div>
            </div>
            <div className={styles.hijo2}>
              <p className={styles.text2}>¡Completa el formulario para iniciar este maravilloso vínculo!</p>
              <div className={styles.hijoSub3}>
                <div className={styles.contImg3}>
                  <img src={require("../../assets/HomePerroyGato.webp")} alt="Ambos" className={styles.img3} />
                </div>
              </div>
            </div>
            <div className={styles.hijo3}>
              <h2 className={styles.title}>¡Tu ayuda suma!</h2>
              <p className={styles.text}>Existen diversas formas de brindarles apoyo, como la posibilidad de colaborar como voluntario, ofrecer un hogar temporal o apadrinar a uno de estos adorables seres en refugios y albergues.</p>
              <Link to="/fundaciones">
                <button className={styles.button}>¡Conoce Más!</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
