import useAxiosPrivate from "./useAxiosPrivate";
import axiosFormData from "./axiosFormData";

const PrivateFormDataApi = () => {
  const axiosPrivate = useAxiosPrivate(axiosFormData);
  const privateFDataApi = {
    addChild: (params) => {
      const url = "children";
      return axiosPrivate.post(url, params);
    },
    addEmployee: (params) => {
      const url = "employees";
      return axiosPrivate.post(url, params);
    },
    addArticle: (params) => {
      const url = "articles";
      return axiosPrivate.post(url, params);
    },
  };

  return privateFDataApi;
};

export default PrivateFormDataApi;
