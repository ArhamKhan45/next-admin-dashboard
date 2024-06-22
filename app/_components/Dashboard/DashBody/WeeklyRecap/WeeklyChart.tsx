// weekly chart based on the  visit-click
// x-axis has week days.
// y-axis has the data of clicks and visit basically has two lines.
"use client";
import { WeeklyChartProps } from "@/types/AdminDashboard/Dashboard.types";
import React, { useEffect } from "react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import CustomTooltip from "@/app/_components/Dashboard/DashBody/WeeklyRecap/CustomTooltip";
const WeeklyChart: React.FC<{ currentWeekData: WeeklyChartProps }> = ({
  currentWeekData,
}) => {
  // console.log(currentWeekData);

  useEffect(() => {
    const originalConsoleError = console.error;

    console.error = (...args: any[]) => {
      if (typeof args[0] === "string" && /defaultProps/.test(args[0])) {
        return;
      }

      originalConsoleError(...args);
    };

    return () => {
      console.error = originalConsoleError;
    };
  }, []);

  return (
    <ResponsiveContainer width="100%" height={400} className={""}>
      <LineChart
        width={500}
        height={400}
        data={currentWeekData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
        <XAxis
          dataKey="day"
          allowDuplicatedCategory={false}
          type="category"
          padding={{ left: 100 }}
        />
        <YAxis
          allowDuplicatedCategory={false}
          type="number"
          domain={[0, 20000]}
          padding={{ bottom: 20 }}
        />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Line
          type="monotone"
          dataKey="visits"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="clicks" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default WeeklyChart;
