import useAxiosPrivate from "./useAxiosPrivate";

const usePrivateApi = () => {
  const axiosPrivate = useAxiosPrivate();
  const privateApi = {
    checktoken: (params) => {
      const url = "auth/checktoken";
      return axiosPrivate.post(url, params);
    },
    logout: (params) => {
      const url = "logout";
      return axiosPrivate.post(url, params);
    },
  };

  return privateApi;
};

export default usePrivateApi;