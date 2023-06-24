import axios from "axios";
import {
  GET_ALL_MASCOTAS,
  GET_DETAIL_MASCOTAS,
  GET_ALL_FUNDACIONES,
  GET_DETAIL_FUNDACION,
  RESET_DETAIL,
  GET_FILTER_MASCOTA_BY_FUNDACION,
} from "../Actions-type/index.js";

//Actions Mascotas ------->>>

export const getAllMascotas = () => {
  return async (dispatch) => {
    try {
        const response = await axios.get("http://localhost:3001/mascotas")
        let mascotas = response.data?.map((e) =>e)
        dispatch(({type: GET_ALL_MASCOTAS, payload: mascotas}))
    } catch (error) {
            console.log(`error ${error}`)
            console.log(`no hay mascotas creadas`);
        }
    }
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

export const getAllFundacioness = () => {
  return async (dispatch) => {
    try {
        const response = await axios.get("http://localhost:3001/fundaciones")
        let fundaciones = response.data?.map((e) => e)
        dispatch(({type: GET_ALL_FUNDACIONES, payload: fundaciones}))
    } catch (error) {
        console.log(`error ${error}`)
        console.log(`no fundaciones creadas `)
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

export const filterMascotaByFundacion = (fundacion) => {
    return{
        type: GET_FILTER_MASCOTA_BY_FUNDACION,
        payload: fundacion
    }
}

export const resetDetail = () => {
  return async function (dispatch) {
    try {
      dispatch({ type: RESET_DETAIL });
    } catch (error) {
      return { error: error.message };
    }
  }
}
