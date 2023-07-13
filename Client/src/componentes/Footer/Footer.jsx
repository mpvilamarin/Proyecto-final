import { Link } from 'react-router-dom';
import style from './footer.module.css';

const Footer = () => {

  return (
      <div className={style.container}>
        <div className={style.footer}>
          <div className={style.links}>
            <p className={style.title}>Enlaces rápidos</p>
            <Link style={{ color: 'black' }} to="/about">Nosotros</Link>
            <Link style={{ color: 'black' }} to="/fundaciones">Fundaciones</Link>
            <Link style={{ color: 'black' }} to="/adopciones">Mascotas</Link>
          </div>
          <div>
            <a href="/" rel="noreferrer">
              <img className={style.logo} src={require("../NavBar/logo2.png")} alt="Logo" height={150} width={150}/>
            </a>
          </div>
          <div className={style.contacto}>
            <p className={style.title}>Contáctate con nosotros</p>
            <p>petconnect@gmail.com</p>
            <p>11 4587 5621</p>
          </div>
        </div>
        <p className={style.developers}>
          Desarrollada por David, Juan Esteban, María, Nahuel, Paula, Ramiro y Santiago
        </p>
      </div>
    );
  };
  
  export default Footer;