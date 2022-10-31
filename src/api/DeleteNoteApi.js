// consumo de la api para el metodo Delete
import axios from 'axios';
import { getEnvVariables } from '../helpers/getEnvVariables';

const { VITE_API_URL } = getEnvVariables();

const DeleteNoteApi = axios.create({
    baseURL: VITE_API_URL
});

DeleteNoteApi.interceptors.request.use( config => {

    config.headers = {
        ...config.headers
    }

    return config
})

export default DeleteNoteApi;