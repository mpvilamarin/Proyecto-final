import axios from "axios";
import {
  UPDATE_FUNDACION,
  UPDATE_MASCOTA,
  UPDATE_USUARIOS,
} from "../Actions-type/index.js";

//====================================>> DELETE <<=================================================================

export const updateUsuario = (email, nombre, fechaNacimiento, contrasenia) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(`/usuarios/${email}`, {
        nombre,
        fechaNacimiento,
        contrasenia,
      });
      dispatch({
        type: UPDATE_USUARIOS,
        payload: response.data,
      });
    } catch (error) {
      alert(` error al actualizar datos del  usuario ${error} `);
    }
  };
};

export const updateMascota = (
  id,
  nombre,
  especie,
  tamaño,
  edad,
  genero,
  temperamento,
  descripcion,
  castrado,
  image,
  
) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(`/mascotas/${id}`, {
        nombre,
        especie,
        tamaño,
        edad,
        genero,
        temperamento,
        descripcion,
        castrado,
        image,
        
      });
      dispatch({
        type: UPDATE_MASCOTA,
        payload: response.data,
      });
     
    } catch (error) {
      alert(` error al actualizar datos de la Mascota ${error} `);
    }
  };
};

export const updateFundacion = (
  id,
  nombre,
  ciudad,
  direccion,
  telefono,
  email,
  fundadaEn,
  mision,
  adop
) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(`/fundaciones/${id}`, {
        nombre,
        ciudad,
        direccion,
        telefono,
        email,
        fundadaEn,
        mision,
        adop
      });
      dispatch({
        type: UPDATE_FUNDACION,
        payload: response.data,
      });
      
    } catch (error) {
      alert(` error al actualizar datos de la fundacion ${error} `);
    }
  };
};

export const adopcionMascota = (id, nombre, adop) =>{
  return async (dispatch) => {
    try {
      const response = await axios.put(`/mascotas/${id}`, {
        nombre,
        adop,
      });
      dispatch({
        type: UPDATE_MASCOTA,
        payload: response.data,
      });
    } catch (error) {
      alert(` error al actualizar datos de la Mascota ${error} `);
    }
  };
}
