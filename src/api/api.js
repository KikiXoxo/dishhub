import axios from 'axios';

const api = axios.create({
  baseURL: 'https://www.themealdb.com/api/json/v1/1',
  timeout: 10000, // Aborts the request if no response is received within this time, to prevent the app from hanging indefinitely (axios-specific)
});

export default api;
