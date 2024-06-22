import React from "react";
import LeftMenuPanel from "../dashboard/@LeftMenuPanel/page";
import TitleNav from "../dashboard/@TitleNav/page";
import UsersTable from "@/app/_components/Dashboard/Users/UsersTable";
import CopyRight from "@/app/_components/Dashboard/common/CopyRight";
import { UserDataTableProps } from "@/types/AdminDashboard/Dashboard.types";

const UsersData: UserDataTableProps = [
  {
    id: "1",
    name: "Arham Khan",
    email: "arham45@gmail.com",
    createdAt: "Oct 30 2023",
    role: "client",
    action: "passive",
  },
  {
    id: "2",
    name: "John Doe",
    email: "john@example.com",
    createdAt: "Nov 10 2023",
    role: "admin",
    action: "active",
  },
  {
    id: "3",
    name: "Jane Smith",
    email: "jane@example.com",
    createdAt: "Nov 20 2023",
    role: "user",
    action: "passive",
  },
  {
    id: "4",
    name: "Alice Johnson",
    email: "alice@example.com",
    createdAt: "Dec 01 2023",
    role: "client",
    action: "active",
  },
  {
    id: "5",
    name: "Bob Brown",
    email: "bob@example.com",
    createdAt: "Dec 15 2023",
    role: "user",
    action: "passive",
  },
];
const ShowUsers = () => {
  return (
    <div className="text-white flex ">
      <div className="bg-site-main  w-[300px] min-h-screen fixed ">
        <LeftMenuPanel />
      </div>

      <div className="  w-[calc(100%-350px)] ms-auto  pr-5 ">
        <TitleNav />
        <div className="bg-site-main">
          <UsersTable usersData={UsersData} />
        </div>
        <CopyRight />
      </div>
    </div>
  );
};

export default ShowUsers;
