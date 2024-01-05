import React, { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const data = JSON.parse(localStorage.getItem("user"));
    setUser(data);
    setLoading(false);
  }, []);

  const logout = () => {
    localStorage.removeItem("user");
    setUser({});
    toast.success("logged out successfull");
  };

  const authInfo = {
    user,
    logout,
    setUser,
    loading,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
export default AuthProvider;
