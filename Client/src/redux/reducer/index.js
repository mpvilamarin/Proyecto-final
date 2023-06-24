import {
  GET_ALL_MASCOTAS,
  GET_NAME_FUNDACIONES,
} from "../Actions-type/index.js";

const initialState = {
  mascotas: [],
  filtroMascotas: [],
  fundaciones: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_MASCOTAS:
      return {
        ...state,
        mascotas: action.payload,
        filtroMascotas: action.payload,
      };
    case GET_NAME_FUNDACIONES:
      return {
        ...state,
        fundaciones: action.payload,
      };
    default:
      return state;
  }
}

export default rootReducer;
