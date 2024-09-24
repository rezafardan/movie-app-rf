import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const axiosIstance = axios.create({
  baseURL: API_URL,
});

axiosIstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosIstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosIstance;
