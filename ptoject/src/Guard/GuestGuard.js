import React from "react";
import { useAuthContext } from "../context/AuthContextProvider";
import { Navigate } from "react-router-dom";
import routes from "../constants/routeBox";
const GuestGuard = ({ children }) => {
  const {
    state: { isAuthenticated },
  } = useAuthContext();
  return <>{isAuthenticated ? <Navigate to={routes.home} /> : children}</>;
};

export default GuestGuard;
