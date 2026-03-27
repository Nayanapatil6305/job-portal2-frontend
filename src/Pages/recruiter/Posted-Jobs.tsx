import React, { useState } from "react";
import {
  Card,
  Table,
  Tag,
  Space,
  Button,
  Typography,
  Tooltip,
  Drawer,
  List,
  Avatar,
  Modal,
  Input,
  Select,
  Progress,
  Row,
  Col,
} from "antd";
import {
  EyeOutlined,
  EditOutlined,
  StopOutlined,
  UserOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;
const { Search } = Input;

const PostedJobs: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [closeModal, setCloseModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState<string | null>(null);

  /* ---------------- TABLE DATA ---------------- */

  const data = [
    {
      key: 1,
      title: "Frontend Developer",
      location: "Bangalore",
      type: "Full-time",
      applicants: 48,
      hired: 12,
      status: "Active",
    },
    {
      key: 2,
      title: "Backend Developer",
      location: "Pune",
      type: "Full-time",
      applicants: 21,
      hired: 6,
      status: "Closed",
    },
    {
      key: 3,
      title: "UI/UX Designer",
      location: "Remote",
      type: "Contract",
      applicants: 34,
      hired: 10,
      status: "Active",
    },
  ];

  /* ---------------- COLUMNS ---------------- */

  const columns = [
    {
      title: "Job Title",
      dataIndex: "title",
      render: (text: string) => <Text strong>{text}</Text>,
    },
    { title: "Location", dataIndex: "location" },
    {
      title: "Type",
      dataIndex: "type",
      render: (type: string) => <Tag color="blue">{type}</Tag>,
    },
    { title: "Applicants", dataIndex: "applicants" },
    {
      title: "Status",
      dataIndex: "status",
      render: (status: string) => (
        <Tag color={status === "Active" ? "green" : "red"}>
          {status}
        </Tag>
      ),
    },
    {
      title: "Manage",
      align: "center" as const,
      render: (_: any, record: any) => (
        <Space>
          <Tooltip title="View Applicants">
            <Button
              type="text"
              icon={<EyeOutlined />}
              onClick={() => {
                setSelectedJob(record.title);
                setDrawerOpen(true);
              }}
            />
          </Tooltip>

          <Tooltip title="Edit Job">
            <Button type="text" icon={<EditOutlined />} />
          </Tooltip>

          <Tooltip title="Close Job">
            <Button
              type="text"
              danger
              icon={<StopOutlined />}
              onClick={() => {
                setSelectedJob(record.title);
                setCloseModal(true);
              }}
            />
          </Tooltip>
        </Space>
      ),
    },
  ];

  return (
    <>
      {/* PAGE HEADER */}
      <div style={{ marginBottom: 24 }}>
        <Title level={3}>Posted Jobs</Title>
        <Text type="secondary">
          Track job performance and manage applicants
        </Text>
      </div>

      {/* SEARCH & FILTERS */}
      <Card style={{ marginBottom: 16 }} bordered={false}>
        <Row gutter={16}>
          <Col xs={24} md={8}>
            <Search placeholder="Search job title" allowClear />
          </Col>

          <Col xs={24} md={8}>
            <Select
              placeholder="Filter by status"
              style={{ width: "100%" }}
              allowClear
              options={[
                { value: "Active", label: "Active" },
                { value: "Closed", label: "Closed" },
              ]}
            />
          </Col>

          <Col xs={24} md={8}>
            <Select
              placeholder="Filter by job type"
              style={{ width: "100%" }}
              allowClear
              options={[
                { value: "Full-time", label: "Full-time" },
                { value: "Contract", label: "Contract" },
              ]}
            />
          </Col>
        </Row>
      </Card>

      {/* JOB TABLE */}
      <Card bordered={false} style={{ borderRadius: 12 }}>
        <Table columns={columns} dataSource={data} />
      </Card>

      {/* 📊 JOB ANALYTICS */}
      <Card
        title="Job Performance Analytics"
        style={{ marginTop: 24 }}
        bordered={false}
      >
        <Row gutter={16}>
          {data.map((job) => (
            <Col xs={24} md={8} key={job.key}>
              <Card size="small">
                <Text strong>{job.title}</Text>
                <Progress
                  percent={Math.round(
                    (job.hired / job.applicants) * 100
                  )}
                  status="active"
                />
                <Text type="secondary">
                  {job.hired} hired out of {job.applicants}
                </Text>
              </Card>
            </Col>
          ))}
        </Row>
      </Card>

      {/* 👥 APPLICANTS DRAWER */}
      <Drawer
        title={`Applicants - ${selectedJob}`}
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        width={400}
      >
        <List
          itemLayout="horizontal"
          dataSource={[
            { name: "Amit Kumar", email: "amit@gmail.com" },
            { name: "Sneha Patil", email: "sneha@gmail.com" },
            { name: "Rahul Sharma", email: "rahul@gmail.com" },
          ]}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar icon={<UserOutlined />} />}
                title={item.name}
                description={item.email}
              />
            </List.Item>
          )}
        />
      </Drawer>

      {/* 🧾 CLOSE JOB MODAL */}
      <Modal
        title="Close Job Posting"
        open={closeModal}
        onOk={() => setCloseModal(false)}
        onCancel={() => setCloseModal(false)}
        okText="Yes, Close Job"
        okButtonProps={{ danger: true }}
      >
        <p>
          Are you sure you want to close{" "}
          <strong>{selectedJob}</strong>?
        </p>
        <Text type="secondary">
          This job will no longer accept new applications.
        </Text>
      </Modal>
    </>
  );
};

export default PostedJobs;
