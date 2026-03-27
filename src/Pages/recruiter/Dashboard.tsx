import React from "react";
import { Row, Col, Card, Statistic, Table, Tag, Progress } from "antd";
import {
  FileTextOutlined,
  TeamOutlined,
  CalendarOutlined,
  BarChartOutlined,
} from "@ant-design/icons";

const Dashboard: React.FC = () => {
  /* ------------------ TABLE DATA ------------------ */

  const jobsData = [
    {
      key: "1",
      title: "Frontend Developer",
      applicants: 45,
      status: "Active",
    },
    {
      key: "2",
      title: "Backend Developer",
      applicants: 30,
      status: "Active",
    },
    {
      key: "3",
      title: "UI/UX Designer",
      applicants: 18,
      status: "Closed",
    },
  ];

  const jobColumns = [
    {
      title: "Job Title",
      dataIndex: "title",
    },
    {
      title: "Applicants",
      dataIndex: "applicants",
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (status: string) =>
        status === "Active" ? (
          <Tag color="green">Active</Tag>
        ) : (
          <Tag color="red">Closed</Tag>
        ),
    },
  ];

  return (
    <>
      {/* ================= TOP KPI CARDS ================= */}
      <Row gutter={16}>
        <Col span={6}>
          <Card hoverable>
            <Statistic
              title="Posted Jobs"
              value={12}
              prefix={<FileTextOutlined />}
            />
          </Card>
        </Col>

        <Col span={6}>
          <Card hoverable>
            <Statistic
              title="Candidates"
              value={245}
              prefix={<TeamOutlined />}
            />
          </Card>
        </Col>

        <Col span={6}>
          <Card hoverable>
            <Statistic
              title="Interviews"
              value={18}
              prefix={<CalendarOutlined />}
            />
          </Card>
        </Col>

        <Col span={6}>
          <Card hoverable>
            <Statistic
              title="Hiring Rate"
              value={68}
              suffix="%"
              prefix={<BarChartOutlined />}
            />
          </Card>
        </Col>
      </Row>

      {/* ================= CONTENT SECTION ================= */}
      <Row gutter={16} style={{ marginTop: 24 }}>
        {/* Posted Jobs */}
        <Col span={14}>
          <Card title="📋 Recent Posted Jobs">
            <Table
              columns={jobColumns}
              dataSource={jobsData}
              pagination={false}
            />
          </Card>
        </Col>

        {/* Reports & Interviews */}
        <Col span={10}>
          <Card title="📈 Recruitment Reports">
            <p>Application Completion</p>
            <Progress percent={75} />

            <p>Interview Success</p>
            <Progress percent={60} status="active" />

            <p>Offer Acceptance</p>
            <Progress percent={45} status="exception" />
          </Card>

          {/* <Card title="📅 Upcoming Interviews" style={{ marginTop: 16 }}>
            <ul style={{ paddingLeft: 16 }}>
              <li>Frontend Developer – 10:00 AM</li>
              <li>Backend Developer – 12:30 PM</li>
              <li>UI/UX Designer – 3:00 PM</li>
            </ul>
          </Card> */}
        </Col>
      </Row>
    </>
  );
};

export default Dashboard;
