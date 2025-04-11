const axios = require('axios').default;

export const api = axios.create({
    baseURL: 'https://vercel-backend-bcra.vercel.app/api'
});