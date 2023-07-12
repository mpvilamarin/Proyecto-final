import axios from "axios";
import { DELETE_MASCOTA, DELETE_FUNDACION } from "../Actions-type/index.js";

//====================================>> DELETE <<=================================================================

export const deleteMascota = (nombre) => {
  return async (dispatch) => {
    try {
      await axios.delete(`/mascotas/${nombre}`);
      dispatch({
        type: DELETE_MASCOTA,
        payload: nombre,
      });
      alert(`La mascota ${nombre} fue eliminada con éxito`);
    } catch (error) {
      alert(`Error al eliminar la mascota ${error}`);
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
