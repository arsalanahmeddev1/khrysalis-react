import React from "react";
import { Navigate } from "react-router-dom";
import { useGetUserQuery } from "../../redux/features/auth";
// import Loader from "../Loader";

const Public = ({ children }) => {
  const { isSuccess } = useGetUserQuery();

  //if (isLoading) {
  //  return <Loader />;
  //}

  if (isSuccess) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default Public;
