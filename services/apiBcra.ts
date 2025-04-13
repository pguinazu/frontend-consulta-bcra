const axios = require('axios').default;

export const api = axios.create({
    baseURL: 'https://backend-consulta-bcra-production.up.railway.app'
});