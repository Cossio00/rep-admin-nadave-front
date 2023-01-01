import axios from "axios";

const api = axios.create({
    baseURL: 'https://localhost:3001',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }

});

export default api;