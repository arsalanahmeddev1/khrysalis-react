import React from "react";
import Loader from "../Loader";
import { Navigate } from "react-router-dom";
import { useGetUserQuery } from "../../redux/features/auth";

const Protected = ({ children }) => {
  const { isLoading, isSuccess } = useGetUserQuery();

  if (!isLoading) {
    if (!isSuccess) {
      return <Navigate to="/login" replace />;
    }

    return children;
  } else {
    return <Loader />;
  }
};

export default Protected;
