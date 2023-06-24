import axios from "axios";
import {
  GET_ALL_MASCOTAS,
  GET_DETAIL_MASCOTAS,
  GET_ALL_FUNDACIONES,
  GET_DETAIL_FUNDACION,
  FILTER_FUNDACIONES_CIUDAD,
  FILTER_FUNDACIONES_NOMBRE,
  RESET_DETAIL,
  GET_FILTER_MASCOTA_BY_FUNDACION,
  POST_ADOPCIONES,
  POST_DONACIONES,
  POST_FUNDACIONES,
  POST_MASCOTA,
  POST_USUARIO,
  GET_ALL_USUARIOS,
  GET_DETALLE_USUARIO,
  GET_FILTER_FUNDACTION_BY_CIUDAD,
  GET_ORDER_AZ,
  GET_ORDER_ZA,
} from "../Actions-type/index.js";

//====================================>> GET'S <<=================================================================

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


export const getAllUsuarios = () => {
  return async (dispatch) => {
    try {
        const response = await axios.get("http://localhost:3001/Usuarios")
        let usuarios = response.data?.map((e) => e)
        dispatch(({type: GET_ALL_USUARIOS, payload: usuarios}))
    } catch (error) {
        console.log(`error ${error}`)
        console.log(`no fundaciones creadas `)
    }
  };
};

export const getDetalleUsuario = (id) => {
  return async (dispatch) => {
    
      dispatch({ type: GET_DETALLE_USUARIO, payload: []});
      await axios
      .get(`http://localhost:3001/usuarios/${id}`)
      .then((res) => res.data)
      .then((data) => dispatch({type: GET_DETALLE_USUARIO, payload: data}))
      .catch((err) => console.log(err));
  }
}


//=======================================>> POST <<=======================================================================

export const postMascota = (newMascota) =>{
  return async(dispatch) => {
    try {
      const response = await axios.post('http://localhost:3001/mascotas', newMascota);
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
      const response = await axios.post('http://localhost:3001/adopciones', nuevaAdopcion);
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
      const response = await axios.post('http://localhost:3001/donaciones', nuevaDonacion)
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
      const response = await axios.post('http://localhost:3001/fundaciones', nuevaFundacion)
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
      const response = await axios.post('http://localhost:3001/Usuarios', newUsuario)
      dispatch({
        type: POST_USUARIO,
        payload: response.data,
      });
      alert('fundacion creada con exito')
    } catch (error) {
      alert(`error al crear la fundacion ${error}`)
    }
  }
}

//===============================================>> FILTROS Y ORDENAMIENTOS <<=========================================================

export const filterMascotaByFundacion = (fundacion) => {
    return{
        type: GET_FILTER_MASCOTA_BY_FUNDACION,
        payload: fundacion
    }
}
=======
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

export const orderAsc = () => {
  return{
      type: GET_ORDER_AZ,
  }
}

export const orderDesc = () => {
  return{
      type: GET_ORDER_ZA,
  }
}
export const resetDetail = () => {
  return async function (dispatch) {
    try {
      dispatch({ type: RESET_DETAIL });
    } catch (error) {
      return { error: error.message };
    }
  };
};
