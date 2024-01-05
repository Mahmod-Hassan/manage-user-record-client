import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const LeftSidebar = () => {
  const { logout } = useContext(AuthContext);
  return (
    <div className="flex flex-col justify-between bg-red-200 h-screen p-5 ">
      <div className="flex flex-col space-y-4 text-lg">
        <Link className="hover:text-red-800 hover:font-bold" to="/dashboard">
          All users
        </Link>
        <Link
          className="hover:text-red-800 hover:font-bold"
          to="/dashboard/add-user"
        >
          Add user
        </Link>
      </div>
      <button
        onClick={logout}
        className="bg-red-800 text-white px-4 py-1 hover:bg-red-500"
      >
        Logout
      </button>
    </div>
  );
};

export default LeftSidebar;
