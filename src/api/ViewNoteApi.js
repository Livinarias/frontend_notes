import axios from 'axios';
import { getEnvVariables } from '../helpers/getEnvVariables';

const { VITE_API_URL } = getEnvVariables();

const ViewNoteApi = axios.create({
    baseURL: VITE_API_URL
});

ViewNoteApi.interceptors.request.use( config => {

    config.headers = {
        ...config.headers
    }

    return config
})

export default ViewNoteApi;