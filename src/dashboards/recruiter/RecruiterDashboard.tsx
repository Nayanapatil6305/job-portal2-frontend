// 

import { Card, Col, Row, Table, Tag } from "antd";

const RecruiterDashboard = () => {
  const columns = [
    { title: "Job Title", dataIndex: "title" },
    { title: "Applications", dataIndex: "applications" },
    {
      title: "Status",
      dataIndex: "status",
      render: (status: string) =>
        status === "Open" ? (
          <Tag color="green">Open</Tag>
        ) : (
          <Tag color="red">Closed</Tag>
        ),
    },
  ];

  const data = [
    {
      key: 1,
      title: "Frontend Developer",
      applications: 25,
      status: "Open",
    },
    {
      key: 2,
      title: "Backend Developer",
      applications: 18,
      status: "Closed",
    },
  ];

  return (
    <>
      <Row gutter={16}>
        <Col span={8}><Card title="Jobs Posted">6</Card></Col>
        <Col span={8}><Card title="Total Applications">120</Card></Col>
        <Col span={8}><Card title="Shortlisted">35</Card></Col>
      </Row>

      <Card title="My Jobs" style={{ marginTop: 20 }}>
        <Table columns={columns} dataSource={data} pagination={false} />
      </Card>
    </>
  );
};

export default RecruiterDashboard;