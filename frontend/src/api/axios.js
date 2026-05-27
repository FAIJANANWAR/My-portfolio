import axios from 'axios';

// Create an Axios instance
const api = axios.create({
    baseURL: 'http://localhost:5000',
    // VERY IMPORTANT: This tells Axios to include HTTP-Only cookies in cross-origin requests
    withCredentials: true,
});

export default api;
