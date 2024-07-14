import axios from 'axios';

const api = axios.create({
    baseURL: 'https://your-api-server.com/api', // Base URL of your server
    timeout: 10000, // Request timeout
    headers: {
        'Content-Type': 'application/json',
    },
});

// Optional: Add interceptors for request and response
api.interceptors.request.use(
    (config) => {
        // Modify request config before sending
        // e.g., add authentication tokens
        return config;
    },
    (error) => {
        // Handle request error
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    (response) => {
        // Handle response data
        return response;
    },
    (error) => {
        // Handle response error
        return Promise.reject(error);
    }
);

export default api;
