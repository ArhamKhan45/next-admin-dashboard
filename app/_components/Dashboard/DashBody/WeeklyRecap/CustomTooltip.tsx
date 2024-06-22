import React from "react";
import { TooltipProps } from "recharts";
const CustomTooltip = ({
  active,
  payload,
  label,
}: TooltipProps<number, string>) => {
  if (active && payload && payload.length) {
    return (
      <div
        className="custom-tooltip"
        style={{
          backgroundColor: "#fff",
          border: "1px solid #ccc",
          padding: "10px",
        }}
      >
        <p className="text-black">{`${label}`}</p>
        <p className="text-[#8884d8]">{`Visits: ${payload[0].value}`}</p>
        <p className="text-[#82ca9d]">{`Clicks: ${payload[1].value}`}</p>
      </div>
    );
  }

  return null;
};

export default CustomTooltip;
