import React from "react";
import styles from './Dueño.module.css'
import dogAndcat from '../../../assets/catAndDog.png'
import time from '../../../assets/time.png'
import care from '../../../assets/care.png'
import home from '../../../assets/home.png'
import cafe from '../../../assets/cafe.png'
import family from '../../../assets/family.png'
import search from '../../../assets/search.png'
import flecha from '../../../assets/flechabajo.png'
import { Link } from "react-router-dom";

export default function DueñoResponsable() {
  return (
    <div className={styles.container}>
      <div className={styles.div1}>
        <h1 className={styles.h1}>¿CÓMO ADOPTAR UNA MASCOTA?</h1>
        <p className={styles.p1}>Si tienes en mente adoptar un animal, es importante que consideres lo siguiente:</p>
        <img src={dogAndcat} alt="dog and cat" className={styles.imgPrincipal} />
      </div>

      <div className={styles.div1}>
        <h1 className={styles.h11}>¿CUÁL ES TU MOTIVACIÓN PARA TENER UNA MASCOTA?</h1>
        <p className={styles.p}> Reflexionar sobre la verdadera razón detrás de querer compartir tu hogar con un animal es crucial. Adoptar una mascota únicamente para proteger la casa o debido a un capricho de los niños suele ser un error considerable. Es fundamental tener en cuenta que algunas mascotas pueden ser compañeras durante 10, 15 o incluso 20 años de tu vida</p>
      </div>

      <div className={styles.divTiempo}>
        <h2 className={styles.h2}>¿TIENES TIEMPO PARA UNA MASCOTA?</h2>
        <p className={styles.p}>Aparte de satisfacer sus necesidades alimentarias, los perros y gatos requieren tu compañía, afecto y dedicación. No debes subestimar la importancia de considerar el tiempo disponible para brindarles atención adecuada. Desafortunadamente, muchos animales son abandonados debido a la falta de planificación por parte de sus propietarios en cuanto a la gestión del tiempo</p>
        <div className={styles.content}>
          <img src={time} alt="time" />
        </div>
      </div>


      <div className={styles.divEconomia}>
        <h2 className={styles.h22}>¿TIENES LA CAPACIDAD ECONÓMICA PARA CUIDAR DE UNA MASCOTA?</h2>
        <p className={styles.pEconomia}>Además de la comida, existen otros gastos asociados al cuidado de un animal, como atención veterinaria, medicamentos, juguetes y vacunas. También debes considerar la posibilidad de daños que podrían ocurrir en los muebles y objetos de tu hogar debido a la presencia de una mascota</p>
        <div className={styles.content}>
          <img src={care} alt="care" />
        </div>
      </div>

      <div className={styles.divHogar}>
        <h2>¿ES TU HOGAR ADECUADO PARA TENER UNA MASCOTA?</h2>
        <p className={styles.p}>
          Es crucial contar con el consenso de todos los miembros de la familia antes de introducir una mascota en el hogar. Además, es importante considerar posibles alergias u otras condiciones que puedan dificultar la convivencia con perros o gatos. Asimismo, es necesario identificar un área apropiada en tu hogar donde tu nueva mascota pueda satisfacer sus necesidades.
        </p>
        <div className={styles.content}>
          <img src={home} alt="home" />
          <img src={cafe} alt="cafe" />
        </div>
      </div>

      <div className={styles.divResponsable}>
        <h2 className={styles.h222}>¿ESTÁS PREPARADO PARA SER UN DUEÑO RESPONSABLE?</h2>
        <p className={styles.pResponsable}>
          Debes estar dispuesto a recibir al animal como un miembro más de la familia, merecedor de amor y respeto. Además, es importante cumplir con las normas comunitarias para garantizar una convivencia armoniosa entre tu mascota y las personas que te rodean
        </p>
        <div className={styles.content}>
          <img src={family} alt="family" />
        </div>
      </div>

      <div className={styles.divEncuntra}>
        <h2 className={styles.h2Mascota}>ENCUENTRA A TU MASCOTA</h2>
        <p className={styles.pResponsable}>Ahora puedes empezar a buscar a tu nuevo amigo</p>
        <div className={styles.content2}>

          <img src={search} alt="search" />
        </div>
        <Link to="/adopciones">
          <button className={styles.button}>Ver mascotas en adopción</button>
        </Link>
      </div>
    </div>
  )
}