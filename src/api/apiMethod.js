import axiosClient from "./axiosClient";

const apiMethod = {
  getAllUsers: (params) => {
    const url = "users";
    return axiosClient.get(url, params);
  },
  getAllRoles: (params) => {
    const url = "roles";
    return axiosClient.get(url, params);
  },
  saveUser: (params) => {
    const url = "users";
    return axiosClient.post(url, params);
  },
  login: (params) => {
    const url = "login";
    return axiosClient.post(url, params);
  },
  postAdoption: (params) => {
    const url = "adoption";
    return axiosClient.post(url, params);
  },
  putAdoption: (id, params) => {
    const url = `adoption/${id}`;
    return axiosClient.put(url, params);
  },
};

export default apiMethod;
