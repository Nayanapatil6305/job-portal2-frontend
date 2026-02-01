// import React from "react";
// import { Card, Row, Col, Typography } from "antd";

// const { Title } = Typography;

// const Reports: React.FC = () => {
//   return (
//     <>
//       <Title level={3}>Reports</Title>

//       <Row gutter={16}>
//         <Col span={8}>
//           <Card title="Total Jobs" bordered={false}>
//             24
//           </Card>
//         </Col>
//         <Col span={8}>
//           <Card title="Candidates Applied" bordered={false}>
//             312
//           </Card>
//         </Col>
//         <Col span={8}>
//           <Card title="Interviews Scheduled" bordered={false}>
//             18
//           </Card>
//         </Col>
//       </Row>
//     </>
//   );
// };

// export default Reports;



import React from "react";
import { Card, Statistic, Row, Col } from "antd";

const Reports: React.FC = () => {
  return (
    <Card title="Recruitment Reports">
      <Row gutter={16}>
        <Col span={8}>
          <Statistic title="Total Jobs" value={24} />
        </Col>
        <Col span={8}>
          <Statistic title="Interviews" value={56} />
        </Col>
        <Col span={8}>
          <Statistic title="Hires" value={12} />
        </Col>
      </Row>
    </Card>
  );
};

export default Reports;
