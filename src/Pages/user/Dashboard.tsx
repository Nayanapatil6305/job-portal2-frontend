import { Card, Col, Row, Statistic, Typography, List, Tag } from "antd";
import {
  UserOutlined,
  FileTextOutlined,
  StarOutlined,
  BellOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;

const Dashboard = () => {
  return (
    <>
      {/* Page Header */}
      <Title level={3}>Dashboard</Title>
      <Text type="secondary">
        Overview of your job search activity
      </Text>

      {/* KPI Cards */}
      <Row gutter={[16, 16]} style={{ marginTop: 20 }}>
        <Col xs={24} sm={12} md={6}>
          <Card hoverable>
            <Statistic
              title="Applied Jobs"
              value={12}
              prefix={<FileTextOutlined />}
            />
          </Card>
        </Col>

        <Col xs={24} sm={12} md={6}>
          <Card hoverable>
            <Statistic
              title="Saved Jobs"
              value={5}
              prefix={<StarOutlined />}
            />
          </Card>
        </Col>

        <Col xs={24} sm={12} md={6}>
          <Card hoverable>
            <Statistic
              title="Profile Views"
              value={28}
              prefix={<UserOutlined />}
            />
          </Card>
        </Col>

        <Col xs={24} sm={12} md={6}>
          <Card hoverable>
            <Statistic
              title="New Notifications"
              value={3}
              prefix={<BellOutlined />}
            />
          </Card>
        </Col>
      </Row>

      {/* Recent Activity */}
      <Row gutter={[16, 16]} style={{ marginTop: 24 }}>
        <Col xs={24} md={14}>
          <Card title="Recent Applications">
            <List
              itemLayout="horizontal"
              dataSource={[
                {
                  job: "Frontend Developer",
                  company: "Tech Corp",
                  status: "Pending",
                },
                {
                  job: "React Developer",
                  company: "Startup Inc",
                  status: "Shortlisted",
                },
              ]}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    title={item.job}
                    description={item.company}
                  />
                  <Tag
                    color={
                      item.status === "Pending" ? "orange" : "green"
                    }
                  >
                    {item.status}
                  </Tag>
                </List.Item>
              )}
            />
          </Card>
        </Col>

        <Col xs={24} md={10}>
          <Card title="Profile Completion">
            <Statistic
              value={85}
              suffix="%"
              title="Completed"
            />
            <Text type="secondary">
              Complete your profile to get better job matches.
            </Text>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Dashboard;
