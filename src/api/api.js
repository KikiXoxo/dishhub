import axios from 'axios';

const api = axios.create({
  baseURL: 'https://www.themealdb.com/api/json/v1/1',
  timeout: 10000, // Aborts the request if no response is received within 10s, to prevent the app from hanging indefinitely (axios-specific)
});

api.interceptors.response.use(
  response => response,
  error => {
    // Timeout error
    if (error.code === 'ECONNABORTED') {
      console.error('Request timed out');
      alert('Request timed out. Please reload page.'); // simple global fallback
    }
    return Promise.reject(error);
  }
);

export default api;
