import axios from "axios";
import {
  GET_ALL_MASCOTAS,
  GET_DETAIL_MASCOTAS,
  GET_ALL_FUNDACIONES,
  GET_DETAIL_FUNDACION,
  RESET_DETAIL,
  GET_ALL_USUARIOS,
  GET_DETALLE_USUARIO,
  GET_NAME_FUNDACIONES,
} from "../Actions-type/index.js";

//====================================>> GET'S <<=================================================================

export const getAllMascotas = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("/mascotas/");
      let mascotas = response.data?.map((e) => e);
      dispatch({ type: GET_ALL_MASCOTAS, payload: mascotas });
    } catch (error) {
      console.log(`error ${error}`);
      console.log(`no hay mascotas creadas`);
    }
  };
};

export const getNameFundaciones = (nombre) => {
  return async (dispatch) => {
    await axios
      .get('/fundaciones?nombre='+nombre)
      .then((res) => res.data)
      .then((data) => {
        dispatch({ type: GET_NAME_FUNDACIONES, payload: data });
      });
  };
};

export const getDetailMascota = (id) => {
  return async (dispatch) => {
    dispatch({ type: GET_DETAIL_MASCOTAS, payload: [] });
    await axios
      .get(`/mascotas/${id}`)
      .then((res) => res.data)
      .then((data) => dispatch({ type: GET_DETAIL_MASCOTAS, payload: data }))
      .catch((err) => console.log(err));
  };
};

//Actions Fundaciones ------->>>

export const getAllFundaciones = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("/fundaciones/");
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
      .get(`/fundaciones/${id}`)
      .then((res) => res.data)
      .then((data) => dispatch({ type: GET_DETAIL_FUNDACION, payload: data }))
      .catch((err) => console.log(err));
  };
};

export const getAllUsuarios = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("/usuarios");
      let usuarios = response.data?.map((e) => e);
      dispatch({ type: GET_ALL_USUARIOS, payload: usuarios });
    } catch (error) {
      console.log(`error ${error}`);
      console.log(`no fundaciones creadas `);
    }
  };
};

export const getDetalleUsuario = (id) => {
  return async (dispatch) => {
    dispatch({ type: GET_DETALLE_USUARIO, payload: [] });
    await axios
      .get(`/usuarios/${id}`)
      .then((res) => res.data)
      .then((data) => dispatch({ type: GET_DETALLE_USUARIO, payload: data }))
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
