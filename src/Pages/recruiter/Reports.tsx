

import React from "react";
import { Card } from "antd";
import { Line } from "@ant-design/charts";

const Reports: React.FC = () => {
  const lineData = [
    { month: "Jan", hires: 2 },
    { month: "Feb", hires: 4 },
    { month: "Mar", hires: 6 },
    { month: "Apr", hires: 3 },
    { month: "May", hires: 8 },
    { month: "Jun", hires: 5 },
    { month: "Jul", hires: 9 },
    { month: "Aug", hires: 7 },
    { month: "Sep", hires: 6 },
    { month: "Oct", hires: 10 },
    { month: "Nov", hires: 8 },
    { month: "Dec", hires: 12 },
  ];

  const lineConfig = {
    data: lineData,
    xField: "month",
    yField: "hires",
    height: 240, // 👈 reduced chart height
    smooth: true,
    point: {
      size: 4,
      shape: "circle",
    },
    tooltip: {
      showMarkers: true,
    },
    meta: {
      hires: {
        alias: "Number of Hires",
      },
    },
  };

  return (
    <Card
      title="Monthly Hiring Trend"
      bordered={false}
      style={{ maxWidth: 700 }} // 👈 optional: limit card width
    >
      <Line {...lineConfig} />
    </Card>
  );
};

export default Reports;
