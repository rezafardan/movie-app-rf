import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const axiosIstance = axios.create({
  baseURL: API_URL,
});

axiosIstance.interceptors.request.use(
  (config) => {
    console.log("Request:", config);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosIstance.interceptors.response.use(
  (response) => {
    console.log("Response:", response);
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosIstance;
