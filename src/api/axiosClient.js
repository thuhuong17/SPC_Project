import axios from "axios";
import apiConfig from "./apiConfig";

const axiosClient = axios.create({
  baseURL: apiConfig.baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
  paramsSerializer: (params) => JSON.stringify({ ...params }),
});

axiosClient.interceptors.request.use(async (config) => {
  // console.log('Starting Request', JSON.stringify(config, null, 2));
  // var jsConfig = JSON.stringify(config, null, 2);
  // console.log('getAPI ' + config.url);
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }

    return response;
  },
  (error) => {
    throw error;
  }
);

export default axiosClient;
