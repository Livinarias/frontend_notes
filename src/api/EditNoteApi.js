import axios from 'axios';
import { getEnvVariables } from '../helpers/getEnvVariables';

const { VITE_API_URL } = getEnvVariables();

const EditNoteApi = axios.create({
    baseURL: VITE_API_URL
});

EditNoteApi.interceptors.request.use( config => {

    config.headers = {
        ...config.headers
    }

    return config
})

export default EditNoteApi;