import axios from "axios";
import {

  POST_ADMIN,
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
  LIMPIAR_ESTADOS,

} from "../Actions-type/index.js";
import { toast } from "react-toastify";
//=======================================>> POST <<=======================================================================
export const postAdmin = (newAdmin) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`/admin/`, newAdmin);
      dispatch({
        type: POST_ADMIN,
        payload: response.data,
      });
      console.log(response)
    } catch (error) {
      alert(`Error al crear un nuevo administrador ${error}`);
    }
  };
};
export const postMascota = (newMascota) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`/mascotas/`, newMascota);
      dispatch({
        type: POST_MASCOTA,
        payload: response.data,
      });
      toast.success("Se creo su mascota exitosamente!🐶🐱", {
        theme: "colored",
      });
    } catch (error) {
      toast.error("❌ Error al crear mascota ", {
        theme: "colored",
        icon: false
      });
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
      const resolveAfter3Sec = new Promise(resolve => setTimeout(resolve, 2500));
        toast.promise(
        resolveAfter3Sec,
        {
          pending: 'Estamos guardando tus datos⏳',
          success: 'Registro exitoso 👌😉',
          error: 'Promise rejected 🤯'
        }
      )
      // "❌ Error al registrar la fundacion" 
    } catch (error) {
      toast.error(error.response.data.message, {
        theme: "colored",
        icon: false
      })
    }
  };
}


export const postUsuario = (user) => {
  return async (dispatch) => {
    try {
      console.log(user)
      const response = await axios.post(`/usuarios/`, user);
      dispatch({
        type: POST_USUARIO,
        payload: user,
      });
    //  alert("Usuario creada con exito");
    } catch (error) {
     // alert(`error al crear la Usuario ${error}`);
    }
  };
};

export const postReview = (crearReview) => {
  console.log(crearReview)
  return async (dispatch) => {
    try {
      const response = await axios.post(`/usuarios/reviews`, crearReview);
      dispatch({
        type: POST_REVIEWS,
        payload: response.data,
      });
      toast.success("Se realizo el comentario correctamente!👍", {
        theme: "colored"
      })
    } catch (error) {
      toast.error("Ocurrió un error inesperado", {
        theme: "colored"
      })
    }
  }
};
  
  
  export const postLoginAdmin = (newLogin) => {
    return async (dispatch) => {
      try {
        const response = await axios.post('/usuarios/login/', newLogin);
        const { usuario, email, id, nombre} = response.data;
        dispatch({
          type: POST_LOGIN,
          payload: {
           usuario, email, id, nombre
          },
        });
        toast.success("Logueo realizado con exito!👌😉", {
          theme: "colored"
        })        
      } catch (error) {
       
        alert(`Error al iniciar sesión: ${error}`);
        
      }
    };
  };

export const logOut = () => {
  return { type: LOG_OUT };
};


export const addFav = (id, email) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('/mascotas/fav/', {id, email});
      dispatch({ 
        type: ADDFAV, 
        payload: response 
      });
    }catch(error){
      alert ('error al añadir a fav')
    }
  }
};

export const limpiarInfo = () =>{
  return{type: LIMPIAR_ESTADOS}
}