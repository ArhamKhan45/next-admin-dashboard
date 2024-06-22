// Dashbody
import React from "react";
import LatestTransactions from "@/app/_components/Dashboard/DashBody/Transactions/LatestTransactions";
import UsersStats from "@/app/_components/Dashboard/DashBody/UserStats/UsersStats";
import WeeklyRecap from "@/app/_components/Dashboard/DashBody/WeeklyRecap/WeeklyRecap";

const DashboardPage = () => {
  return (
    <div className="flex flex-col gap-4">
      <UsersStats />
      <LatestTransactions />
      <WeeklyRecap />
    </div>
  );
};

export default DashboardPage;
