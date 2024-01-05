import React from "react";
import { Outlet } from "react-router-dom";
import LeftSidebar from "../LeftSidebar";

const DashboardLayout = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-12 md:col-span-3 lg:col-span-2">
        <LeftSidebar />
      </div>
      <div className="col-span-12 md:col-span-9 lg:col-span-10 border bg-white shadow-md w-full p-5">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
