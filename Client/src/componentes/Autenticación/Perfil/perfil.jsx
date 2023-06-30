import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useSelector } from "react-redux";
import CardAdop from "../../Cartas/cardAdopcion";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  console.log(user, isAuthenticated, isLoading)
  const mascotasFav = useSelector((state) => state.mascotasFav)
  console.log(mascotasFav)

  if (isLoading) {
    return (
    <div>Cargando ...</div>
    )
  }

  return (
    isAuthenticated && (
      <div>
        <div>
          <img src={user.picture} alt={user.name} />
          <h2>{user.name}</h2>
          <p>Correo: {user.email}</p>
        </div>
        <div>
          {mascotasFav.map((mascota)=>{
            return(
              <CardAdop mascota={mascota} indexMascota={mascota.id}/>
            )
          })} 
        </div>
      </div>
      
    )
  );
};

export default Profile;