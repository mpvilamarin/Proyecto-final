import {
  GET_ALL_MASCOTAS,
  GET_DETAIL_MASCOTAS,
  GET_ORDER_AZ,
  GET_ORDER_ZA,
  GET_ALL_FUNDACIONES,
  GET_DETAIL_FUNDACION,
  RESET_DETAIL,
  GET_FILTER_MASCOTA_BY_FUNDACION,
} from "../Actions-type/index.js";

const initialState = {
  mascotas: [],
  filtroMascotas: [],
  mascotaDetail: [],
  fundaciones: [],
  fundacionDetail: [],
  selectedFundacion: null,
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
    case GET_ORDER_AZ:
      return {
        ...state,
        mascotas: state.mascotas
          .slice()
          .sort((a, b) => a.nombre.localeCompare(b.nombre)),
      };
    case GET_ORDER_ZA:
      return {
        ...state,
        mascotas: state.mascotas
          .slice()
          .sort((a, b) => b.nombre.localeCompare(a.nombre)),
      };
    case GET_FILTER_MASCOTA_BY_FUNDACION: 
      const filterByFundacion = state.filtroMascotas.filter((mascota) => mascota.fundaciones.find((fundacion) => fundacion.nombre.includes(action.payload)))
      return{
        ...state,
        mascotas: action.payload === 'All' ? state.filtroMascotas: filterByFundacion
      }
    case RESET_DETAIL:
      return { ...state, selectedFundacion: null };

    default:
      return state;
  }
}

export default rootReducer;
