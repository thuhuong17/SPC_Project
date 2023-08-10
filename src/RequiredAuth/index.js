import {
  useLocation,
  Navigate,
  Outlet,
  useOutletContext,
  useNavigate,
} from "react-router-dom";
import useAuth from "../hooks/useAuth";
import React, { useEffect } from "react";
// import BouncingLoader from "../BoucingLoader";

const RequireAuth = ({ allowedRoles }) => {
  const { auth } = useAuth();
  const location = useLocation();
  // const { isChecked } = useOutletContext();
  const navigate = useNavigate();

  // check user is has role to access route
  if (allowedRoles) {
    if (allowedRoles?.includes(auth?.roles)) {
      return <Outlet />;
    } else {
      return <Navigate to="/auth/login" />;
    }
  } else {
    if (auth?.userName) {
      return <Outlet />;
    } else {
      return <Navigate to="/auth/login" />;
    }
  }
};

export default RequireAuth;
