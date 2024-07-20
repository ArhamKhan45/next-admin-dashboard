// dont use relative and absolute ,if u use it then it will clash with profile icon when u click that icons: one more big drawback of parallel routes
import { dashboardProps } from "@/types/AdminDashboard/Dashboard.types";
import React from "react";

const DashboardLayout = ({
  LeftMenuPanel,
  children,
  RightMenuPanel,
  TitleNav,
}: dashboardProps) => {
  return (
    <div className="flex w-full">
      <div className="fixed bg-site-main  w-[300px] min-h-screen ">
        {LeftMenuPanel}
      </div>
      <div className=" w-[calc(100%-350px)]  flex min-h-screen flex-wrap ms-auto  ">
        {TitleNav}
        <div className=" w-[calc(100%-420px)] h-[calc(100%-120px)] me-auto">
          {children}
        </div>
        <div className=" w-[400px] h-[calc(100%-120px)]">{RightMenuPanel}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
