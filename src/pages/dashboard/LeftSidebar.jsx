import React from "react";
import { FiHome } from "react-icons/fi";
import { Link } from "react-router-dom";

const LeftSidebar = () => {
  return (
    <div className="flex flex-col justify-between bg-red-200 h-screen p-5 ">
      <div className="flex flex-col space-y-4 text-lg">
        <Link
          to="/"
          className="flex items-center gap-2 hover:text-red-800 hover:font-bold"
        >
          <FiHome /> Home
        </Link>
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
      <button className="bg-red-800 text-white px-4 py-1 hover:bg-red-500">
        Logout
      </button>
    </div>
  );
};

export default LeftSidebar;
