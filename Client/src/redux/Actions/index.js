import axios from "axios";
import {
  GET_ALL_MASCOTAS,
  GET_DETAIL_MASCOTAS,
  GET_FILTER_MASCOTA_BY_FUNDACION,
  SORT_MASCOTAS_AZ,
  SORT_MASCOTAS_ZA,
  GET_ALL_FUNDACIONES,
  GET_DETAIL_FUNDACION,
  FILTER_FUNDACIONES_CIUDAD,
  FILTER_FUNDACIONES_NOMBRE,
  SORT_FUNDACIONES_AZ,
  SORT_FUNDACIONES_ZA,
  RESET_DETAIL,
} from "../Actions-type/index.js";

//Actions Mascotas ------->>>

export const getAllMascotas = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:3001/mascotas");
      let mascotas = response.data?.map((e) => e);
      dispatch({ type: GET_ALL_MASCOTAS, payload: mascotas });
    } catch (error) {
      console.log(`error ${error}`);
      console.log(`no hay mascotas creadas`);
    }
  };
};

export const getDetailMascota = (id) => {
  return async (dispatch) => {
    dispatch({ type: GET_DETAIL_MASCOTAS, payload: [] });
    await axios
      .get(`http://localhost:3001/mascotas/${id}`)
      .then((res) => res.data)
      .then((data) => dispatch({ type: GET_DETAIL_MASCOTAS, payload: data }))
      .catch((err) => console.log(err));
  };
};

export const filterMascotaByFundacion = (fundacion) => {
  return {
    type: GET_FILTER_MASCOTA_BY_FUNDACION,
    payload: fundacion,
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

//Actions Fundaciones ------->>>

export const getAllFundaciones = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:3001/fundaciones");
      let fundaciones = response.data?.map((e) => e);
      dispatch({ type: GET_ALL_FUNDACIONES, payload: fundaciones });
    } catch (error) {
      console.log(`error ${error}`);
      console.log(`no fundaciones creadas `);
    }
  };
};

export const getDetailFundacion = (id) => {
  return async (dispatch) => {
    dispatch({ type: GET_DETAIL_FUNDACION, payload: [] });
    await axios
      .get(`http://localhost:3001/fundaciones/${id}`)
      .then((res) => res.data)
      .then((data) => dispatch({ type: GET_DETAIL_FUNDACION, payload: data }))
      .catch((err) => console.log(err));
  };
};

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

export const resetDetail = () => {
  return async function (dispatch) {
    try {
      dispatch({ type: RESET_DETAIL });
    } catch (error) {
      return { error: error.message };
    }
  };
};
