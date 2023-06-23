import{
    GET_ALL_MASCOTAS
} from '../Actions-type/index.js';

const initialState = {
    mascotas:[],
    filtroMascotas: [],
}
function rootReducer (state = initialState, action)
{
    switch (action.type) {
        case GET_ALL_MASCOTAS:
            return {
                ...state,
                mascotas: action.payload,
                filtroMascotas: action.payload
            }
        default:
            return state;
    }

}

export default rootReducer;