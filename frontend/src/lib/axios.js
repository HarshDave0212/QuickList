import axios from "axios";
const api = axios.create({
  baseURL: "http://localhost:5003/api",
});

export default api;
