import axios from "axios";
import apiConfig from "./apiConfig";

const axiosPrivate = axios.create({
  baseURL: apiConfig.baseUrl,
  headers: {
    "Content-Type": "application/json",
    // 'Content-Type': 'multipart/form-data',
    // Accept: '*/*',
  },
  paramsSerializer: (params) => JSON.stringify({ ...params }),
});

export default axiosPrivate;
