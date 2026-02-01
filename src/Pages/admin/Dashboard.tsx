import React from "react";
import { Card, Col, Row } from "antd";

const Dashboard = () => {
  return (
    <>
      {/* <h2>Admin Dashboard</h2> */}

      <Row gutter={16}>
        <Col span={6}>
          <Card title="Total Recruiters">12</Card>
        </Col>
        <Col span={6}>
          <Card title="Job Seekers">58</Card>
        </Col>
        <Col span={6}>
          <Card title="Jobs Posted">34</Card>
        </Col>
        <Col span={6}>
          <Card title="Active Jobs">21</Card>
        </Col>
      </Row>
    </>
  );
};

export default Dashboard;