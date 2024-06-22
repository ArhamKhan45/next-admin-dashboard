import React from "react";
import WeeklyChart from "./WeeklyChart";
const currentWeekData = [
  { day: "Mon", clicks: 10000, visits: 5000 },
  { day: "Tue", clicks: 1500, visits: 2208 },
  { day: "Wed", clicks: 2000, visits: 9800 },
  { day: "Thu", clicks: 2780, visits: 3908 },
  { day: "Fri", clicks: 8190, visits: 800 },
  { day: "Sat", clicks: 2390, visits: 3800 },
  { day: "Sun", clicks: 8490, visits: 7300 },
];

const WeeklyRecap = () => {
  return (
    <div className="bg-site-main px-4 py-5 rounded-lg">
      <h3 className="text-lg font-light mb-4">Weekly Recap</h3>
      <WeeklyChart currentWeekData={currentWeekData} />
    </div>
  );
};

export default WeeklyRecap;
