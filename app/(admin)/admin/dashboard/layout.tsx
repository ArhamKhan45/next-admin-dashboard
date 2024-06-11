import { dashboardProps } from "@/types/AdminDashboard/Dashboard.types";
import React from "react";

const Dashboardlayout = ({ children }: dashboardProps) => {
  return (
    <div>
      <h1>Dash-layout</h1>
      <div>{children}</div>
    </div>
  );
};

export default Dashboardlayout;
