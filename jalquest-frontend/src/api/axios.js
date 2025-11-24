import axios from "axios";

const api = axios.create({
  baseURL: "https://jalquest-backend.onrender.com/api",
});

export default api;
