import axios from "axios";
import {
  GET_ALL_MASCOTAS,
  GET_DETAIL_MASCOTAS,
  GET_ALL_FUNDACIONES,
  GET_DETAIL_FUNDACION,
  RESET_DETAIL,
} from "../Actions-type/index.js";

//Actions Mascotas ------->>>

export const getAllMascotas = () => {
  return async (dispatch) => {
    await axios
      .get("http://localhost:3001/mascotas")
      .then((res) => res.data)
      .then((data) => {
        console.log("payload:", data);
        dispatch({ type: GET_ALL_MASCOTAS, payload: data });
      });
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

export const getAllFundacioness = () => {
  return async (dispatch) => {
    await axios
      .get("http://localhost:3001/fundaciones")
      .then((res) => res.data)
      .then((data) => {
        console.log("payload:", data);
        dispatch({ type: GET_ALL_FUNDACIONES, payload: data });
      });
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

export const resetDetail = () => {
  return async function (dispatch) {
    try {
      dispatch({ type: RESET_DETAIL });
    } catch (error) {
      return { error: error.message };
    }
  };
};
