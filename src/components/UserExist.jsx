import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const UserExist = ({ children }) => {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  if (!user?.email) {
    return children;
  } else {
    return (
      <Navigate to="/dashboard" state={{ from: location }} replace></Navigate>
    );
  }
};

export default UserExist;
