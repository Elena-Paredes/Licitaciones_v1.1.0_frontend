/* /frontend/src/axiosConfig.js */
import axios from 'axios'; // Si estás usando la librería directamente

const api = axios.create({
  baseURL: "http://licitacionesv110background-production-be53.up.railway.app",
});
export default api;