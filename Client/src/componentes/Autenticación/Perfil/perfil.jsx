import React, { useEffect } from "react";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import { useSelector, useDispatch} from "react-redux";
import CardAdop from "../../Cartas/cardAdopcion";
import styles from "./perfil.module.css";
import { getUsuarioEmail } from "../../../redux/Actions/get";


const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const dispatch = useDispatch();

  const usuario = useSelector((state) => state.usuario);
  const mascotas = usuario.Mascotas
  console.log(mascotas)

  useEffect(() =>{
    dispatch(getUsuarioEmail(user.email))
  },[])


  if (isLoading) {
    return (
      <div className={styles.containerLoading}>
        <div className={styles.loading}>
          <img className={styles.img} src={require("../../../assets/LoadingCat.gif")} alt="cargando" />
        </div>
      </div>
    )
  }

  return (
    isAuthenticated && (
      <div className={styles.container}>
        <h1 className={styles.title}>Mi perfil</h1>
        <div className={styles.infoPrincipal}>
          <img className={styles.image} src={user.picture} alt={user.name} />
          <h2 className={styles.name}>{user.name}</h2>
          <p className={styles.text}>Correo: {user.email}</p>
        </div>
        <h2 className={styles.sub}>Mis peluditos favoritos</h2>
        <div>
          <div>
          {mascotas.map((mascota, indexMascota) => (
            <CardAdop
              mascota={mascota}
              indexMascota={mascota.id}
              key={indexMascota}
            />
        ))}
          </div>
        </div>
      </div>
    )
  );
};

export default Profile;