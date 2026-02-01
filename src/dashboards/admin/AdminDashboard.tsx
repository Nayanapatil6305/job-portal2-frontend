import { Card, Col, Row, Table, Tag } from "antd";

const AdminDashboard = () => {
  const columns = [
    { title: "Job Title", dataIndex: "title" },
    { title: "Company", dataIndex: "company" },
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
    { key: 1, title: "Frontend Developer", company: "TCS", status: 'Open' },
    { key: 2, title: "React Developer", company: "Infosys", status: 'Closed' },
  ];

  return (
    <>
      <Row gutter={16}>
        <Col span={6}><Card title="Total Users">1200</Card></Col>
        <Col span={6}><Card title="Recruiters">250</Card></Col>
        <Col span={6}><Card title="Job Seekers">950</Card></Col>
        <Col span={6}><Card title="Jobs Posted">340</Card></Col>
      </Row>

      <Card title="All Posted Jobs" style={{ marginTop: 20 }}>
        <Table columns={columns} dataSource={data} pagination={false} />
      </Card>
    </>
  );
};

export default AdminDashboard;