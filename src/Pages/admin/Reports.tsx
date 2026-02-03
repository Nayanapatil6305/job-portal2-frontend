// import { Card, Col, Row, Statistic } from "antd";

// const Reports = () => {
//   return (
//     <Card title="Platform Reports">
//       <Row gutter={16}>
//         <Col span={8}>
//           <Statistic title="Total Jobs Posted" value={320} />
//         </Col>
//         <Col span={8}>
//           <Statistic title="Interviews Conducted" value={1240} />
//         </Col>
//         <Col span={8}>
//           <Statistic title="Successful Hires" value={410} />
//         </Col>
//       </Row>
//     </Card>
//   );
// };

// export default Reports;

import React from "react";
import { Card, Statistic, Row, Col } from "antd";
import { Line } from "@ant-design/charts";

const Reports: React.FC = () => {
  // Monthly hiring trend data
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
    smooth: true,
    point: {
      size: 5,
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
  //   <Card title="Recruitment Reports">
  //     {/* Statistics */}
  //     <Row gutter={16} style={{ marginBottom: 30 }}>
  //       <Col span={8}>
  //         <Statistic title="Total Jobs" value={24} />
  //       </Col>
  //       <Col span={8}>
  //         <Statistic title="Interviews" value={56} />
  //       </Col>
  //       <Col span={8}>
  //         <Statistic title="Hires" value={12} />
  //       </Col>
  //     </Row>

      // {/* Line Chart */}
      <Card title="Monthly Hiring Trend" bordered={false}>
        <Line {...lineConfig} />
      </Card>
    // </Card>
  );
};

export default Reports;
