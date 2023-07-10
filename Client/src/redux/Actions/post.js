import axios from "axios";
import {

  POST_ADMIN,
  POST_LOGIN_FUNDACION,
  POST_ADOPCIONES,
  POST_DONACIONES,
  POST_FUNDACIONES,
  POST_MASCOTA,
  POST_USUARIO,
  POST_REVIEWS,
  POST_LOGIN,
  LOG_OUT,
  ADDFAV,
  REMOVEFAV,

} from "../Actions-type/index.js";

//=======================================>> POST <<=======================================================================

export const postMascota = (newMascota) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`/mascotas/`, newMascota);
      dispatch({
        type: POST_MASCOTA,
        payload: response.data,
      });
      alert("Mascota creada con éxito");
    } catch (error) {
      alert(`Error al crear la mascota ${error}`);
    }
  };
}


export const postAdopciones = (nuevaAdopcion) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`/adopciones`, nuevaAdopcion);
      dispatch({
        type: POST_ADOPCIONES,
        payload: response.data,
      });
      alert("La adopcion fue exitosa");
    } catch (error) {
      alert(`Error al crear la adopcion ${error}`);
    }
  };
};

export const postDonaciones = (nuevaDonacion) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`/donaciones/`, nuevaDonacion);
      dispatch({
        type: POST_DONACIONES,
        payload: response.data,
      });
      alert("Donacion exitosa");
    } catch (error) {
      alert(`Error en la donacion ${error}`);
    }
  };
};

export const postFundaciones = (nuevaFundacion, email, nombre) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `/fundaciones`,
        nuevaFundacion,
        email,
        nombre
      );
      dispatch({
        type: POST_FUNDACIONES,
        payload: response.data,
      });
      alert("fundacion creada con exito");
    } catch (error) {
      alert(`error al crear la fundacion ${error}`);
    }
  };
}


export const postUsuario = (newUsuario) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`/usuarios/`, newUsuario);
      dispatch({
        type: POST_USUARIO,
        payload: response.data,
      });
      alert("Usuario creada con exito");
    } catch (error) {
      alert(`error al crear la Usuario ${error}`);
    }
  };
};

export const postReview = (crearReview) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`/usuarios/reviews`, crearReview);
      dispatch({
        type: POST_REVIEWS,
        payload: response.data,
      });
    } catch (error) {
      console.log("Error en el post de reviews:", error);
    }
  }
};
  
  
  export const postLoginAdmin = (newLogin) => {
    return async (dispatch) => {
      try {
        const response = await axios.post('http://localhost:3001/usuarios/login', newLogin);
        const { usuario, email, id } = response.data;
        dispatch({
          type: POST_LOGIN,
          payload: {
           usuario,email, id
          },
        });
       // alert(`inicio de sesion exitoso para ${usuario}`);
      } catch (error) {
       
        alert(`Error al iniciar sesión: ${error}`);
        
      }
    };
  };

export const logOut = () => {
  return { type: LOG_OUT };
};

export const removeFav = (indexMascota) => {
  return { type: REMOVEFAV, payload: indexMascota };
};


export const addFav = (mascota) => {
  return { type: ADDFAV, payload: mascota };
};
