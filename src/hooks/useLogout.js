import useAxiosPrivate from "../api/useAxiosPrivate";
import usePrivateApi from "../api/apiMethod";
import useAuth from "./useAuth";

const useLogout = () => {
  const { auth, setAuth } = useAuth();
  const privateApi = usePrivateApi();
  // const axiosPrivate = useAxiosPrivate();

  const logout = async () => {
    localStorage.removeItem("user");
    localStorage.removeItem("access_token");
    // console.log(auth);
    setAuth({});
    try {
      const response = await privateApi.logout();
      console.log(response);
      // console.log(response);
    } catch (err) {
      console.log(err);
    }
  };
  return logout;
};

export default useLogout;
