import axios from "axios";
import { DELETE_MASCOTA, DELETE_USUARIO } from "../Actions-type/index.js";

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

export const deleteUsuario = (email) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete(`/Usuarios/${email}`);
      dispatch({
        type: DELETE_USUARIO,
        payload: response.data,
      });
      alert(`el usuario con email: ${email} fue eliminada con exito`);
    } catch (error) {
      alert(`Error al elminar Usuario ${error}`);
    }
  };
};
