import axios from "axios";
import {

  GET_FILTER_MASCOTA_BY_FUNDACION,
  SORT_MASCOTAS_AZ,
  SORT_MASCOTAS_ZA,
  FILTER_FUNDACIONES_CIUDAD,
  FILTER_FUNDACIONES_NOMBRE,
  SORT_FUNDACIONES_AZ,
  SORT_FUNDACIONES_ZA,
  GET_FILTER_FUNDACTION_BY_CIUDAD,
  FILTER_MASCOTA_BY_ESPECIE

} from "../Actions-type/index.js";



//===============================================>> FILTROS Y ORDENAMIENTOS <<=========================================================

export const filterMascotaByFundacion = (fundacion) => {
    return{
        type: GET_FILTER_MASCOTA_BY_FUNDACION,
        payload: fundacion
    }
}

export const filterMascotaByEspecie = (especie) => {
  return {
    type: FILTER_MASCOTA_BY_ESPECIE,
    payload: especie
  }
}


export const filterFundacionesByCiudad = (ciudad) => {
  return {
    type: FILTER_FUNDACIONES_CIUDAD,
    payload: {
      ciudad,
    },
  };
};

export const filterFundacionesByNombre = (nombre) => {
  return {
    type: FILTER_FUNDACIONES_NOMBRE,
    payload: {
      nombre,
    },
  };
};



export const filterFundacionByCiudad = (ciudad) =>{
  return{
    type:GET_FILTER_FUNDACTION_BY_CIUDAD,
    payload : ciudad
  }
}


export const sortFundacionesAZ = () => {
  return {
    type: SORT_FUNDACIONES_AZ,
  };
};

export const sortFundacionesZA = () => {
  return {
    type: SORT_FUNDACIONES_ZA,
  };
};





export const sortMascotasAZ = () => {
    return {
      type: SORT_MASCOTAS_AZ,
    };
  };
  
  export const sortMascotasZA = () => {
    return {
      type: SORT_MASCOTAS_ZA,
    };
  };