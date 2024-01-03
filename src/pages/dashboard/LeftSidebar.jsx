import React from "react";
import { FiHome } from "react-icons/fi";
import { Link } from "react-router-dom";

const LeftSidebar = () => {
  return (
    <div className="flex flex-col justify-between bg-red-200 h-screen p-5 ">
      <div className="flex flex-col space-y-4">
        <Link to="/" className="flex items-center gap-2">
          <FiHome /> Home
        </Link>
        <Link to="/dashboard">Records</Link>
        <Link to="/dashboard/add-user">Add user</Link>
      </div>
      <button className="text-red-800 hover:bg-red-800 hover:text-white hover:px-4 hover:py-1 transition-all">
        Logout
      </button>
    </div>
  );
};

export default LeftSidebar;
