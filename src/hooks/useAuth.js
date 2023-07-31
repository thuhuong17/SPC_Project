import { useContext } from "react";
import AuthContext from "../context/AuthProviders";

const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
