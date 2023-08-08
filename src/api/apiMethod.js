import axiosClient from "./axiosClient";

const apiMethod = {
  login: (params) => {
    const url = "login";
    return axiosClient.post(url, params);
  },
  postDonation: (params) => {
    const url = "donations";
    return axiosClient.post(url, params);
  },
  postDonationResult: (params) => {
    const url = "donations/return";
    return axiosClient.post(url, params);
  },
  getCategories: (params) => {
    const url = "categories";
    return axiosClient.get(url, params);
  },
  getCategoryById: (id, params) => {
    const url = "categories/" + id;
    return axiosClient.get(url, params);
  },
  getArticlesByCateId: (id, params) => {
    const url = "category/" + id + "/articles";
    return axiosClient.get(url, params);
  },
  getArticle: (id, params) => {
    const url = "articles/" + id;
    return axiosClient.get(url, params);
  },
};

export default apiMethod;
