import axios from 'axios'
import{
    GET_ALL_MASCOTAS
} from '../Actions-type/index.js';

//Actions Mascotas ------->>>


export const getAllMascotas = () => {
    return async(dispatch) => {
        await axios.get('http://localhost:3001/mascotas')
        .then((res) => res.data)
        .then((data) => {
            console.log('payload:', data)
            dispatch({type: GET_ALL_MASCOTAS, payload: data});
        })
    }
}