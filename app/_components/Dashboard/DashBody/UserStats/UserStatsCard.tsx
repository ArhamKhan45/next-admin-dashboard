import { UserStatsCardProps } from "@/types/AdminDashboard/Dashboard.types";
import React from "react";
import { FaUsers } from "react-icons/fa";
const UserStatsCard: React.FC<UserStatsCardProps> = ({
  title,
  total_users,
  label,
}) => {
  return (
    <div className="w-full  h-[150px]  p-4 bg-site-main rounded-lg text-white hover:bg-site-light-grey cursor-pointer transition-colors">
      <div className="flex items-center space-x-2 mb-2">
        <span className="me-2">
          <FaUsers />
        </span>

        <span>{title}</span>
      </div>
      <div className="text-4xl font-bold mb-2 ms-7">
        {total_users.toLocaleString()}
      </div>
      <div className="text-sm text-green-400 ms-8">{label}</div>
    </div>
  );
};

export default UserStatsCard;
