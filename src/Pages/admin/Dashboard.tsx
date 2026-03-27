import { Card, Col, Row, Statistic, Progress, Divider } from "antd";
import {
  UserOutlined,
  TeamOutlined,
  FileTextOutlined,
  RiseOutlined,
} from "@ant-design/icons";

const Dashboard = () => {
  return (
    <>
      {/* Page Title */}
      <div style={{ marginBottom: 24 }}>
        <h2 style={{ marginBottom: 4 }}>Admin Dashboard</h2>
        <span style={{ color: "#6b7280" }}>
          Overview of platform activity
        </span>
      </div>

      {/* KPI Cards */}
      <Row gutter={[16, 16]}>
        <Col xs={24} md={8}>
          <Card  hoverable bordered={false}>
            <Statistic
              title="Total Recruiters"
              value={18}
              prefix={
                <div style={iconStyle("#2563eb")}>
                  <TeamOutlined />
                </div>
              }
            />
            <span style={trendUp}>+12% this month</span>
          </Card>
        </Col>

        <Col xs={24} md={8}>
          <Card  hoverable bordered={false}>
            <Statistic 
              title="Job Seekers"
              value={540}
              prefix={
                <div style={iconStyle("#16a34a")}>
                  <UserOutlined />
                </div>
              }
            />
            <span style={trendUp}>+8% this month</span>
          </Card>
        </Col>

        <Col xs={24} md={8}>
          <Card hoverable bordered={false}>
            <Statistic
              title="Active Jobs"
              value={96}
              prefix={
                <div style={iconStyle("#f59e0b")}>
                  <FileTextOutlined />
                </div>
              }
            />
            <span style={trendDown}>−4% this month</span>
          </Card>
        </Col>
      </Row>

      <Divider />

      {/* Platform Health Section */}
      <Row gutter={[16, 16]}>
        <Col xs={24} md={12}>
          <Card title="Hiring Success Rate" bordered={false}>
            <Progress
              percent={72}
              strokeColor="#16a34a"
              status="active"
            />
            <p style={mutedText}>
              Percentage of candidates successfully hired
            </p>
          </Card>
        </Col>

        <Col xs={24} md={12}>
          <Card title="Monthly Growth" bordered={false}>
            <Statistic
              value={14.6}
              precision={1}
              suffix="%"
              prefix={<RiseOutlined />}
            />
            <p style={mutedText}>
              Overall platform growth compared to last month
            </p>
          </Card>
        </Col>
      </Row>
    </>
  );
};

/* ---------- styles ---------- */

const iconStyle = (bg: string) => ({
  background: bg,
  color: "#fff",
  width: 36,
  height: 36,
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginRight: 8,
});

const trendUp = {
  color: "#16a34a",
  fontSize: 13,
};

const trendDown = {
  color: "#dc2626",
  fontSize: 13,
};

const mutedText = {
  marginTop: 8,
  color: "#6b7280",
};

export default Dashboard;
