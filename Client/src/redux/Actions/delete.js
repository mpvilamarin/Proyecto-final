import axios from "axios";
import {
    DELETE_MASCOTA,
    DELETE_USUARIO,
} from "../Actions-type/index.js";

//====================================>> DELETE <<=================================================================

export const deleteMascota = (nombre) => {
    return async (dispatch) => {
        try {

            const response = await axios.delete(`/mascotas/${nombre}`)
            dispatch({
                type: DELETE_MASCOTA,
                payload: response.data
            })
            alert(`la mascota ${nombre} fue eliminada con exito`)
        } catch (error) {
            alert(`Error al elminar la mascota ${error}`)
        }
    }
};

export const deleteUsuario = (email) => {
    return async (dispatch) => {
        try {

            const response = await axios.delete(`/usuarios/${email}`)

            dispatch({
                type: DELETE_USUARIO,
                payload: response.data
            })
            alert(`el usuario con email: ${email} fue eliminada con exito`)
        } catch (error) {
            alert(`Error al elminar Usuario ${error}`)
        }
    }
};