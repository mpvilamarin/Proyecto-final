import{
    GET_ALL_MASCOTAS,
  GET_DETAIL_MASCOTAS,
    GET_ORDER_AZ,
    GET_ORDER_ZA
} from '../Actions-type/index.js';

const initialState = {
    mascotas:[],
    filtroMascotas: [],
    mascotaDetail: [],
}
function rootReducer (state = initialState, action)
{
    switch (action.type) {
        case GET_ALL_MASCOTAS:
            return {
                ...state,
                mascotas: action.payload,
                filtroMascotas: action.payload
            };
        case GET_DETAIL_MASCOTAS:
            return{
                ...state,
                mascotaDetail: {
                    ...action.payload,
                    mascotaDetail: action.payload.mascotas || []
                }
            };
        case GET_ORDER_AZ:
            return{
                ...state,
                mascotas: state.mascotas.slice().sort((a,b) => a.nombre.localeCompare(b.nombre))
            }
        case GET_ORDER_ZA:
            return{
                ...state,
                mascotas: state.mascotas.slice().sort((a,b) => b.nombre.localeCompare(a.nombre))
            }            
        default:
            return state;

    }

}



export default rootReducer;