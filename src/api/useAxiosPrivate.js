import { useEffect } from "react";
import useAuth from "../hooks/useAuth";
// import axiosPrivate from "./axiosPrivate";

const useAxiosPrivate = (axiosPrivate) => {
  const { auth, setAuth } = useAuth();
  let isLoggingOut = false;

  var access_token = null;

  if (auth?.accessToken) {
    access_token = auth.accessToken;
  }

  useEffect(() => {
    const requestIntercept = axiosPrivate.interceptors.request.use(
      async (config) => {
        if (!config.headers["Authorization"]) {
          config.headers["Authorization"] = `Bearer ${access_token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    const responseIntercept = axiosPrivate.interceptors.response.use(
      (response) => {
        return response;
      },
      async (error) => {
        if (error.response.status == 401 || error.response.status == 403) {
        }
        return error?.response;
      }
    );
    return () => {
      axiosPrivate.interceptors.request.eject(requestIntercept);
      axiosPrivate.interceptors.response.eject(responseIntercept);
    };
  }, [auth]);

  return axiosPrivate;
};

export default useAxiosPrivate;
