import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useSelector } from "react-redux";
import CardAdop from "../../Cartas/cardAdopcion";
import styles from "./perfil.module.css";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  console.log(user, isAuthenticated, isLoading)
  const mascotasFav = useSelector((state) => state.mascotasFav)
  console.log(mascotasFav)

  console.log("aqui esta:", user.sub);

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
            <h3>Mis Adopciones:</h3>
          </div>

        </div>
      </div>
    )
  );
};

export default Profile;