// consumo de la api para el metodo Create
import axios from 'axios';
import { getEnvVariables } from '../helpers';


const { VITE_API_URL } = getEnvVariables()

const createNoteApi = axios.create({
    baseURL: VITE_API_URL,
});

createNoteApi.interceptors.request.use( config => {
    
    config.headers = {
        ...config.headers
    }
    return config
})

export default createNoteApi;