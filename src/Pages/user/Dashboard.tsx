import { Card, Col, Row, Table, Tag, Button } from "antd";
import {
  // BriefcaseOutlined,
  FileDoneOutlined,
  CalendarOutlined,
  TrophyOutlined,
  TaobaoOutlined,
} from "@ant-design/icons";

const stats = [
  {
    title: "Total Jobs Available",
    value: 120,
    icon: <TaobaoOutlined/>,
    color: "#1890ff",
  },
  {
    title: "Jobs Applied",
    value: 6,
    icon: <FileDoneOutlined />,
    color: "#52c41a",
  },
  {
    title: "Interviews Scheduled",
    value: 2,
    icon: <CalendarOutlined />,
    color: "#faad14",
  },
  {
    title: "Offers Received",
    value: 1,
    icon: <TrophyOutlined />,
    color: "#eb2f96",
  },
];

const applications = [
  {
    key: 1,
    job: "Frontend Developer",
    company: "Tech Corp",
    status: "Pending",
  },
  {
    key: 2,
    job: "Backend Developer",
    company: "CloudSoft",
    status: "Approved",
  },
  {
    key: 3,
    job: "UI/UX Designer",
    company: "Design Hub",
    status: "Rejected",
  },
];

const columns = [
  {
    title: "Job Title",
    dataIndex: "job",
  },
  {
    title: "Company",
    dataIndex: "company",
  },
  {
    title: "Status",
    dataIndex: "status",
    render: (status: string) => {
      const color =
        status === "Approved"
          ? "green"
          : status === "Rejected"
          ? "red"
          : "orange";
      return <Tag color={color}>{status}</Tag>;
    },
  },
];

const UserDashboard = () => {
  return (
    <div style={{ padding: 24 }}>
      <h3>User Dashboard</h3>

      {/* STATS CARDS */}
      <Row gutter={16} style={{ marginBottom: 24 }}>
        {stats.map((item, index) => (
          <Col span={6} key={index}>
            <Card
              hoverable
              style={{
                borderLeft: `5px solid ${item.color}`,
              }}
            >
              <Row justify="space-between" align="middle">
                <div>
                  <h3>{item.value}</h3>
                  <p>{item.title}</p>
                </div>
                <div style={{ fontSize: 28, color: item.color }}>
                  {item.icon}
                </div>
              </Row>
            </Card>
          </Col>
        ))}
      </Row>

      {/* APPLICATIONS TABLE */}
      <Card title="My Job Applications" hoverable>
        <Table
          columns={columns}
          dataSource={applications}
          pagination={false}
        />
      </Card>

      {/* RECOMMENDED JOBS */}
      {/* <h3 style={{ marginTop: 30 }}>Recommended Jobs</h3>
      <Row gutter={16}>
        <Col span={8}>
          <Card hoverable>
            <h4>React Developer</h4>
            <p>ABC Solutions</p>
            <Button type="primary">Apply</Button>
          </Card>
        </Col>
        <Col span={8}>
          <Card hoverable>
            <h4>Node.js Developer</h4>
            <p>Cloud Systems</p>
            <Button type="primary">Apply</Button>
          </Card>
        </Col>
        <Col span={8}>
          <Card hoverable>
            <h4>UI Designer</h4>
            <p>Creative Studio</p>
            <Button type="primary">Apply</Button>
          </Card>
        </Col>
      </Row> */}
    </div>
  );
};

export default UserDashboard;