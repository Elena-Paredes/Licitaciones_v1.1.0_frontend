/* /frontend/src/axiosConfig.js */
import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL || 'http://localhost:3001', 
  withCredentials: true
});

export default instance;
