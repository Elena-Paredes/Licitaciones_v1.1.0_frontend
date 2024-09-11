// /frontend/src/axiosConfig.js
import axios from "axios";

const api = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://licitacionesv110background-production-be53.up.railway.app"
      : "http://localhost:3001", // Backend local para desarrollo
});
export default api;
