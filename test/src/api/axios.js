// src/api/axios.js
import axios from "axios";

const Api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

// Add token to every request
Api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default Api;

// axios({
//   url: "http://localhost/wdpf-batch-66_class/react/reactProject/admin/api/user",
//   method: "GET",
//   headers: {
//     Authorization: `Bearer ${token}`,
//   },
// });
