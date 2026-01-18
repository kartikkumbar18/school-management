import axios from "axios";

const baseApi = axios.create({
  baseURL: "https://school-dev-3g91.vercel.app",
  headers: {
    "Content-Type": "application/json",
  },
});

// ✅ Attach token correctly
baseApi.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default baseApi;
