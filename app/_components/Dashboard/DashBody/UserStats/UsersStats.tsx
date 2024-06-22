import React from "react";

import { FaUsers } from "react-icons/fa"; // Example icon from react-icons
import UserStatsCard from "./UserStatsCard";

const UsersStats = () => {
  return (
    <div className="flex gap-4">
      <UserStatsCard
        title="Total Users"
        total_users={10928}
        label="12% more than last week"
      />
      <UserStatsCard
        title="Total Users"
        total_users={10928}
        label="12% more than 2 weeks ago"
      />
      <UserStatsCard
        title="Total Users"
        total_users={10928}
        label="12% more than 3 weeks ago"
      />
    </div>
  );
};

export default UsersStats;
