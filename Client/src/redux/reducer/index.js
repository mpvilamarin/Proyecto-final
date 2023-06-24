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
  POST_ADOPCIONES,
  POST_DONACIONES,
  POST_FUNDACIONES,
  POST_MASCOTA,
  POST_USUARIO,
  GET_ALL_USUARIOS,
  GET_DETALLE_USUARIO,
  GET_FILTER_FUNDACTION_BY_CIUDAD,

} from "../Actions-type/index.js";

const initialState = {
  mascotas: [],
  filtroMascotas: [],
  mascotaDetail: [],
  fundaciones: [],
  fundacionDetail: [],
  usuarios : [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_MASCOTAS:
      return {
        ...state,
        mascotas: action.payload,
        filtroMascotas: action.payload,
      };
    case GET_DETAIL_MASCOTAS:
      return {
        ...state,
        mascotaDetail: {
          ...action.payload,
          mascotas: action.payload.mascotas || [],
        },
      };
    case SORT_MASCOTAS_AZ:
      return {
        ...state,
        mascotas: state.mascotas
          .slice()
          .sort((a, b) => a.nombre.localeCompare(b.nombre)),
      };
    case SORT_MASCOTAS_ZA:
      return {
        ...state,
        mascotas: state.mascotas
          .slice()
          .sort((a, b) => b.nombre.localeCompare(a.nombre)),
      };

    case GET_FILTER_MASCOTA_BY_FUNDACION:
      const filterByFundacion = state.filtroMascotas.filter((mascota) =>
        mascota.fundaciones.find((fundacion) =>
          fundacion.nombre.includes(action.payload)
        )
      );
      return {
        ...state,
        mascotas:
          action.payload === "All" ? state.filtroMascotas : filterByFundacion,
      };

    case GET_ALL_FUNDACIONES:
      return {
        ...state,
        fundaciones: action.payload,
      };
    case GET_DETAIL_FUNDACION:
      return {
        ...state,
        fundacionDetail: {
          ...action.payload,
          fundaciones: action.payload.fundaciones || [],
        },
      };


    case GET_ALL_USUARIOS: 
      return {
        ...state,
        usuarios :action.payload, 
      } 
    case FILTER_FUNDACIONES_CIUDAD:
      const { ciudad } = action.payload;
      const fundacionesByCiudad = state.fundaciones.filter(
        (fundacion) => fundacion.ciudad === ciudad
      );
      return {
        ...state,
        fundaciones: fundacionesByCiudad,
      };

    case FILTER_FUNDACIONES_NOMBRE:
      const { nombre } = action.payload;
      const fundacionesByNombre = state.fundaciones.filter((fundacion) =>
        fundacion.nombre.toLowerCase().includes(nombre.toLowerCase())
      );
      return {
        ...state,
        fundaciones: fundacionesByNombre,
      };

    case SORT_FUNDACIONES_AZ:
      return {
        ...state,
        fundaciones: state.fundaciones
          .slice()
          .sort((a, b) => a.nombre.localeCompare(b.nombre)),
      };

    case SORT_FUNDACIONES_ZA:
      return {
        ...state,
        fundaciones: state.fundaciones
          .slice()
          .sort((a, b) => b.nombre.localeCompare(a.nombre)),
      };

    case RESET_DETAIL:
      return { ...state, fundacionDetail: null };

    default:
      return state;
  }
}

export default rootReducer;
