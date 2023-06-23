import{
    GET_ALL_MASCOTAS,
    GET_DETAIL_MASCOTAS
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
                    mascotas: action.payload.mascotas || []
                }
            };    
        default:
            return state;
    }

}



export default rootReducer;