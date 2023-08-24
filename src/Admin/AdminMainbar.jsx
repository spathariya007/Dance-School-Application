import React from "react";
import { Outlet } from "react-router";

const AdminMainbar = () => {
  return (
    <div style={{marginLeft:'40px'}}>
      <Outlet />
    </div>
  );
};

export default AdminMainbar;
