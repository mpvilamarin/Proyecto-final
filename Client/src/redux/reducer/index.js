import review from "../../componentes/Reviews/reviews.jsx";
import {
  GET_ALL_MASCOTAS,
  GET_DETAIL_MASCOTAS,
  GET_FILTER_MASCOTA_BY_FUNDACION,
  GET_ALL_FUNDACIONES,
  GET_DETAIL_FUNDACION,
  GET_ALL_USUARIOS,
  GET_DETALLE_USUARIO,
  GET_USUARIO,
  GET_FILTER_FUNDACTION_BY_CIUDAD,
  GET_ALL_ADOPCIONES,
  GET_DETAIL_ADOPCION,
  GET_NAME_FUNDACIONES,
  GET_DONACIONES,
  POST_ADOPCIONES,
  POST_DONACIONES,
  POST_FUNDACIONES,
  POST_MASCOTA,
  POST_USUARIO,
  POST_LOGIN,
  SORT_MASCOTAS_AZ,
  SORT_MASCOTAS_ZA,
  SORT_FUNDACIONES_AZ,
  SORT_FUNDACIONES_ZA,
  SORT_FUNDACIONES_REVIEWS,
  RESET_DETAIL,
  FILTER_MASCOTA_BY_GENERO,
  FILTER_FUNDACIONES_CIUDAD,
  FILTER_MASCOTA_BY_ESPECIE,
  UPDATE_MASCOTA,
  UPDATE_FUNDACION,
  UPDATE_USUARIOS,
  DELETE_MASCOTA,
  DELETE_FUNDACION,
  POST_REVIEWS,
  LOG_OUT,
  ADDFAV,
  REMOVEFAV,
  GET_REVIEWS,
  GET_ADMIN,
  POST_ADMIN,
  FILTER_FUNDACIONES_BY_RATING

} from "../Actions-type/index.js";

const initialState = {
  mascotas: [],
  filtroMascotas: [],
  mascotaDetail: [],
  favoritos: [],

  fundaciones: [],
  fundacionesFiltradas: [],
  fundacionDetail: [],

  usuarioAdmin: [],
  usuarioFundacion: [],
  usuarios: [],
  usuario:[],
  sesion: [],

  usuarioDetalle: [],

  mascotasFav: [],


  adopciones: [],
  detalleAdopcion: [],

  donaciones: [],
  detallesDonacion: [],
  donacionHecha: [],

  reviews: [],

  admin: [],
};

function rootReducer(state = initialState, action, payload) {
  switch (action.type) {

    case GET_ADMIN:
      return {
        ...state,
        admin: action.payload
      };

    case GET_ALL_MASCOTAS:
      return {
        ...state,
        mascotas: action.payload,
        mascotaDetail: action.payload,
        filtroMascotas: action.payload,
      };

    case GET_DETAIL_MASCOTAS:
      return {
        ...state,
        mascotaDetail: {
          ...action.payload,
          fundaciones: action.payload.fundaciones || [],
        },
   //     usuarios:[]
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
      const filterFundacion = state.filtroMascotas.filter((mascota) =>
        mascota.Fundaciones.find(
          (fundacion) => fundacion.nombre === action.payload
        )
      );
      console.log("filterFundacion:", filterFundacion);
      return {
        ...state,
        mascotas:
          action.payload === "All" ? state.filtroMascotas : filterFundacion,
      };

    case FILTER_MASCOTA_BY_GENERO:
      const genero = action.payload;
      let mascotasFiltradas = [];

      if (genero === "") {
        mascotasFiltradas = state.filtroMascotas;
      } else {
        mascotasFiltradas = state.filtroMascotas.filter(
          (mascota) => mascota.genero === genero
        );
      }

      return {
        ...state,
        mascotas: mascotasFiltradas,
      };

    case GET_ALL_FUNDACIONES:
      return {
        ...state,
        fundaciones: action.payload,
        fundacionesFiltradas: action.payload
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
    case GET_ALL_ADOPCIONES:
      return {
        ...state,
        adopciones: action.payload,
      };
    case GET_DETAIL_ADOPCION:
      return {
        ...state,
        detalleAdopcion: action.payload,
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

    case GET_NAME_FUNDACIONES:
      return {
        ...state,
        fundaciones:
          action.payload.length === 0 ? state.fundaciones : action.payload,
      };

    case GET_REVIEWS:
      return {
        ...state,
        reviews: action.payload,
      };

    case FILTER_FUNDACIONES_BY_RATING:
      const rating = action.payload;
      let filteredFundaciones = [];
      if (rating === "") {
        filteredFundaciones = state.fundacionesFiltradas;
      } else {
        filteredFundaciones = state.fundacionesFiltradas.filter((fundacion) => {
          // Calcula el promedio de las puntuaciones de la fundación
          const totalReviews = fundacion.Reviews.length;
          const sumPuntuaciones = fundacion.Reviews.reduce(
            (total, review) => total + review.calificacion,
            0
          );
          const promedioPuntuaciones = sumPuntuaciones / totalReviews;

          // Filtra las fundaciones cuyo promedio de puntuaciones coincida con la puntuación seleccionada
          return Math.round(promedioPuntuaciones) === parseInt(rating);
        });
      }
      return {
        ...state,
        fundaciones: filteredFundaciones,
      };

    case GET_USUARIO:
      return{
        ...state,
        usuario: action.payload
      }

    case FILTER_MASCOTA_BY_ESPECIE:
      const especie = action.payload;
      let mascotasFiltradas2 = [];

      if (especie === "") {
        mascotasFiltradas2 = state.filtroMascotas;
      } else {
        mascotasFiltradas2 = state.filtroMascotas.filter(
          (mascota) => mascota.especie === especie
        );
      }

      return {
        ...state,
        mascotas: mascotasFiltradas2,
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
    case SORT_FUNDACIONES_REVIEWS:
      return {
        ...state,
        fundaciones: state.fundaciones.slice().sort((a, b) => {
          const ratingA = (a.Reviews && a.Reviews[0]?.calificacion) || 0;
          const ratingB = (b.Reviews && b.Reviews[0]?.calificacion) || 0;
          return action.payload === "asc"
            ? ratingA - ratingB
            : ratingB - ratingA;
        }),
      };
    case POST_ADOPCIONES:
      return {
        ...state,
        adopciones: [...state.adopciones, action.payload],
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
        usuario: state.usuario.concat(action.payload),
      };

    case POST_LOGIN:
      if (action.payload.usuario === 'fundacion') {
        return {
          ...state,
          usuarioFundacion: {
            email: action.payload.email,
            tipo: action.payload.usuario,
          },
          sesion: action.payload,
          usuarioAdmin: null,
        };
      } else if (action.payload.usuario === 'admin') {
        return {
          ...state,
          usuarioAdmin: {
            email: action.payload.email,
            tipo: action.payload.usuario,
          },
          usuarioFundacion: null,
        };
      }

    case POST_ADMIN:
      return {
        ...state,
        admin: state.admin.concat(action.payload)
      }

    case POST_REVIEWS:
      return {
        ...state,
        reviews: state.reviews.concat(action.payload),
      };


    case DELETE_MASCOTA:
      return {
        ...state,
        mascotas: state.mascotas.filter(
          (mascota) => mascota.nombre !== action.payload
        ),
      };
    case DELETE_FUNDACION:
    return {
      ...state,
      fundaciones: state.fundaciones.filter(
        (fundacion) => fundacion.id !== action.payload
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
            activo: action.payload.adop
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

    case LOG_OUT:
      return {
        ...state,
        usuarioAdmin: null,
        usuarioFundacion: null,
      };


    case ADDFAV:
      return { ...state }

    case REMOVEFAV:
      return { ...state}


    case GET_DONACIONES:
      return {
        ...state,
        donacionHecha: action.payload,
      };

    default:
      return { ...state }

  };
}


export default rootReducer;
