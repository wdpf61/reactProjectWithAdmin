// src/api/axios.js
import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

// Add token to every request
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;

// axios({
//   url: "http://localhost/wdpf-batch-66_class/react/reactProject/admin/api/user",
//   method: "GET",
//   headers: {
//     Authorization: `Bearer ${token}`,
//   },
// });
