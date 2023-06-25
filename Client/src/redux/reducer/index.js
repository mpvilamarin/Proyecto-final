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
  DELETE_MASCOTA,
  DELETE_USUARIO,
  UPDATE_MASCOTA,
  UPDATE_FUNDACION,
  UPDATE_USUARIOS,
  GET_NAME_FUNDACIONES,
} from "../Actions-type/index.js";

const initialState = {
  mascotas: [],
  filtroMascotas: [],
  mascotaDetail: [],

  fundaciones: [],
  fundacionDetail: [],

  usuarios: [],
  usuarioDetalle: [],

  adopciones: [],
  detalleAdopcion: [],

  donaciones: [],
  detallesDonacion: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_MASCOTAS:
      return {
        ...state,
        mascotas: action.payload,
        mascotaDetail: action.payload,    
        filtroMascotas: action.payload,
      };
    case GET_NAME_FUNDACIONES:
      return {
        ...state,
        fundaciones: action.payload,
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
        fundacionDetail: action.payload
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
        usuarios: action.payload,
      };
    case GET_DETALLE_USUARIO:
      return {
        ...state,
        usuarioDetalle: {
          ...action.payload,
          fundaciones: action.payload.usuarios || [],
        },
      };
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
    case POST_ADOPCIONES:
      return {
        ...state,
        adopciones: state.adopciones.concat(action.payload),
      };
    case POST_DONACIONES:
      return {
        ...state,
        donaciones: state.donaciones.concat(action.payload),
      };
    case POST_FUNDACIONES:
      return {
        ...state,
        fundaciones: state.fundaciones.concat(action.payload),
      };
    case POST_MASCOTA:
      return {
        ...state,
        mascotas: state.mascotas.concat(action.payload),
      };
    case POST_USUARIO:
      return {
        ...state,
        usuarios: state.usuarios.concat(action.payload),
      };
    case DELETE_MASCOTA:
      return {
        ...state,
        mascotas: state.mascotas.filter(
          (mascota) => mascota.nombre !== action.payload
        ),
      };
    case DELETE_USUARIO:
      return {
        ...state,
        usuarios: state.usuarios.filter(
          (usuario) => usuario.email !== action.payload
        ),
      };
    case UPDATE_FUNDACION:
      const updateFundaciones = state.fundaciones.map((fundacion) => {
        if (fundacion.id === action.payload.id) {
          return {
            ...fundacion,
            nombre: action.payload.nombre,
            ciudad: action.payload.ciudad,
            dirrecion: action.payload.dirrecion,
            telefono: action.payload.telefono,
            email: action.payload.email,
            fundadaEn: action.payload.fundadaEn,
            mision: action.payload.mision,
          };
        }
        return fundacion;
      });
      return {
        ...state,
        fundaciones: updateFundaciones,
      };
    case UPDATE_MASCOTA:
      const updateMascotas = state.mascotas.map((mascota) => {
        if (mascota.nombre === action.payload.nombre) {
          return {
            ...mascota,
            especie: action.payload.especie,
            edad: action.payload.edad,
            genero: action.payload.genero,
            temperamento: action.payload.temperamento,
            descripcion: action.payload.descripcion,
          };
        }
        return mascota;
      });

      return {
        ...state,
        mascotas: updateMascotas,
      };

    case UPDATE_USUARIOS:
      const updatedUsuarios = state.usuarios.map((usuario) => {
        if (usuario.email === action.payload.email) {
          return {
            ...usuario,
            nombre: action.payload.nombre,
            fechaNacimiento: action.payload.fechaNacimiento,
            contraseña: action.payload.contraseña,
          };
        }
        return usuario;
      });

      return {
        ...state,
        usuarios: updatedUsuarios,
      };
    case RESET_DETAIL:
      return { ...state, fundacionDetail: null };

    default:
      return state;
  }
}

export default rootReducer;
