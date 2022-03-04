import axios from 'redaxios';

const api = axios.create();
api.defaults.timeout = 2500;

export default api;
