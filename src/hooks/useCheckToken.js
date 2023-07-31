import usePrivateApi from "../api/usePrivateApi";
import useAuth from "./useAuth";
// import useLogout from './useLogout';

const useCheckToken = () => {
  const { auth, setAuth } = useAuth();
  const privateApi = usePrivateApi();

  const checkToken = async () => {
    try {
      if (auth?.userName) {
        const params = {
          userName: auth.userName,
        };
        const response = await privateApi.checktoken(params);
        console.log(params);
      }

      // console.log(response.status);
      //   if (response.status == 401 || response.status == 403) {
      //     console.log("loix" + response.status);
      //     // logout();
      //   }
    } catch (err) {
      console.log(err.response);
      if (err.status == 401 || err.status == 403) {
        console.log("loix" + err.status);
        // logout();
      }
    }
  };
  return checkToken;
};

export default useCheckToken;
