import axios from "axios";
import apiConfig from "./apiConfig";

const axiosFormData = axios.create({
  baseURL: apiConfig.baseUrl,
  headers: {
    "Content-Type": "multipart/form-data",
  },
  paramsSerializer: (params) => JSON.stringify({ ...params }),
});

export default axiosFormData;
