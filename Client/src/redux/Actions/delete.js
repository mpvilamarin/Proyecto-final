import axios from "axios";
import { DELETE_MASCOTA, DELETE_FUNDACION, REMOVEFAV } from "../Actions-type/index.js";

//====================================>> DELETE <<=================================================================

export const deleteMascota = (id,nombre) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete(`/mascotas/${id}`);
      dispatch({
        type: DELETE_MASCOTA,
        payload: response.data,
      });
      
    } catch (error) {
      
    }
  };
};

export const deleteFundacion = (id, nombre) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete(`/fundaciones/${id}`);
      dispatch({
        type: DELETE_FUNDACION,
        payload: response.data,
      });
      
    } catch (error) {
      
    }
  };
};

export const removeFav = (id, email) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete(`/mascotas/removeFav/${id}/${email}`);
      console.log(response)
      dispatch({ 
        type: REMOVEFAV, 
        payload: response.data
      });
    } catch (error) {
      alert(`Error al remover de favoritos ${error}`);
    }
  }
};

