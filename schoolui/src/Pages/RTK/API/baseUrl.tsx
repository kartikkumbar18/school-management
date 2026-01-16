import axios from "axios";



const baseApi = axios.create({
  baseURL: "https://school-dev-3g91.vercel.app/",
  headers: {
    "Content-Type": "application/json",
  },
});





// Optional: attach token
baseApi.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default baseApi;
