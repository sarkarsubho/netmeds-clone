import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export const RequiredAuth = ({ children }) => {
  const { isAuth } = useSelector((state) => state.auth.login);

  const location = useLocation();
  console.log(location);

  if (isAuth) {
    return children;
  } else {
    return <Navigate to="/register" state={{from:location.pathname}} ></Navigate>;
  }
};
