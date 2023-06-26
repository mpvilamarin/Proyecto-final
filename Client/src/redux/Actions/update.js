import axios from "axios";
import {
    UPDATE_FUNDACION,
    UPDATE_MASCOTA,
    UPDATE_USUARIOS
} from "../Actions-type/index.js";

//====================================>> DELETE <<=================================================================

export const updateUsuario = (email,nombre, fechaNacimiento, contraseña) => {
    return async (dispatch) => {
        try{
            const response = await axios.put(`http://localhost:3001/Usuarios/${email}`, {
                nombre,
                fechaNacimiento,
                contraseña,
            });
            dispatch({
                type: UPDATE_USUARIOS,
                payload: response.data
            });
        }catch(error){
            alert(` error al actualizar datos del  usuario ${error} `)
        }
    }
};

export const updateMascota = (nombre, especie, edad, genero, temperamento, descripcion) => {
    return async (dispatch) => {
        try{
            const response = await axios.put(`http://localhost:3001/mascotas/${nombre}`, {
                especie,
                edad,
                genero,
                temperamento,
                descripcion,
            });
            dispatch({
                type: UPDATE_MASCOTA,
                payload: response.data
            });
        }catch(error){
            alert(` error al actualizar datos de la Mascota ${error} `)
        }
    }
};


export const updateFundacion = (id, nombre, ciudad, direccion, telefono, email, fundadaEn, mision) => {
    return async (dispatch) => {
        try{
            const response = await axios.put(`http://localhost:3001/fundaciones/${id}`, {
                nombre,
                ciudad,
                direccion,
                telefono,
                email,
                fundadaEn,
                mision,
            });
            dispatch({
                type: UPDATE_FUNDACION,
                payload: response.data
            });
        }catch(error){
            alert(` error al actualizar datos de la fundacion ${error} `)
        }
    }
}