import { Outlet } from "react-router-dom";
import React, { useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import usePrivateApi from "../../api/usePrivateApi";
import BouncingLoader from "components/BoucingLoader";

const PersistLogin = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isUserSaved, setIsUserSaved] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const { auth, setAuth, setIsUnexpired } = useAuth();
  const privateApi = usePrivateApi();
  const [isChecked, setIsChecked] = useState(false);

  // Load login information from local storage
  const userName = localStorage.getItem("userName");
  const accessToken = localStorage.getItem("accessToken");
  const roles = localStorage.getItem("roles");

  // set auth state
  useEffect(() => {
    let isMounted = true;
    const getLocalStorage = () => {
      try {
        if (userName && accessToken) {
          setAuth({ userName, accessToken, roles });
          isMounted && setIsUserSaved(true);
        } else {
          setIsDone(true);
        }
      } catch (err) {
        console.error(err);
      } finally {
        isMounted && setIsLoading(false);
      }
    };
    !auth?.accessToken ? getLocalStorage() : setIsLoading(false);

    return () => (isMounted = false);
  }, []);

  useEffect(() => {
    if (!isLoading && isUserSaved) {
      checkToken();
    } else if (!isLoading && !isUserSaved) {
      setIsChecked(true);
    }
  }, [isLoading]);

  // logout in case token is expired
  const logout = async () => {
    localStorage.removeItem("userName");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("roles");
    setAuth({});
  };

  // check token is expired
  const checkToken = async () => {
    try {
      if (auth?.userName) {
        const params = {
          userName: auth.userName,
        };
        // console.log(params);
        const response = await privateApi.checktoken(params);
        if (response.status === 204) {
          setIsUnexpired(true);
          setIsChecked(true);
        } else if (response.status == 401 || response.status == 403) {
          logout();
        }
      }
    } catch (err) {
      console.log(err);
      if (err.status === 401 || err.status === 403) {
        // logout();
      }
    }
  };

  if (isUserSaved) {
    return <Outlet />;
  } else {
    if (isDone) {
      return <Outlet />;
    }
    return <BouncingLoader />;
  }
};

export default PersistLogin;
