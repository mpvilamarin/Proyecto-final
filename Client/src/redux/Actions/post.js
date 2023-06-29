import axios from "axios";

import {
    POST_ADOPCIONES, 
    POST_DONACIONES,
    POST_FUNDACIONES,
    POST_MASCOTA,
    POST_USUARIO,
} from "../Actions-type/index.js";



//=======================================>> POST <<=======================================================================

export const postMascota = (newMascota) =>{
    return async(dispatch) => {
      try {
        const response = await axios.post('/mascotas', newMascota);
        dispatch({
          type: POST_MASCOTA,
          payload : response.data,
        });
        alert('Mascota creada con exito')
      } catch (error) {
        alert(`error al crear la mascota ${error}`);
      }
    }
  }
  
  export const postAdopciones = (nuevaAdopcion) =>{
    return async(dispatch) => {
      try {
        const response = await axios.post('/adopciones/', nuevaAdopcion);
        dispatch({
          type: POST_ADOPCIONES,
          payload : response.data,
        });
        alert('La adopcion fue exitosa')
      } catch (error) {
        alert(`error al crear la adopcion ${error}`)
      }
    }
  }
  
  export const postDonaciones = (nuevaDonacion) =>{
    return async(dispatch) => {
      try {
        const response = await axios.post('/donaciones/', nuevaDonacion)
        dispatch({
          type:POST_DONACIONES,
          payload:response.data,
        });
        alert('Donacion exitosa')
      } catch (error) {
        alert(`error en la donacion ${error}`);
      }
    }
  }
  
  export const postFundaciones = (nuevaFundacion) =>{
    return async(dispatch) =>{
      try {
        const response = await axios.post('/fundaciones/', nuevaFundacion)
        dispatch({
          type: POST_FUNDACIONES,
          payload: response.data,
        });
        alert('fundacion creada con exito')
      } catch (error) {
        alert(`error al crear la fundacion ${error}`)
      }
    }
  }
  
  export const postUsuario = (newUsuario) =>{
    return async(dispatch) =>{
      try {
        const response = await axios.post('/usuarios/', newUsuario)
        dispatch({
          type: POST_USUARIO,
          payload: response.data,
        });
        alert('Usuario creada con exito')
      } catch (error) {
        alert(`error al crear la Usuario ${error}`)
      }
    }
  }
