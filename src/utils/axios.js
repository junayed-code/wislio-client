import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://wislio.vercel.app",
  withCredentials: true,
});

export default axiosInstance;
