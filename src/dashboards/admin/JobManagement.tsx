import React from "react";
import { Table, Space, Tooltip, message, Tag } from "antd";
import {
  EyeOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
  DeleteOutlined,
} from "@ant-design/icons";

interface Job {
  key: string;
  title: string;
  company: string;
  location: string;
  status: "Pending" | "Approved" | "Rejected";
}

const JobManagement: React.FC = () => {
  const dataSource: Job[] = [
    {
      key: "1",
      title: "Frontend Developer",
      company: "Infosys",
      location: "Bangalore",
      status: "Pending",
    },
    {
      key: "2",
      title: "Backend Developer",
      company: "TCS",
      location: "Mumbai",
      status: "Approved",
    },
    {
      key: "3",
      title: "UI Designer",
      company: "Wipro",
      location: "Pune",
      status: "Rejected",
    },
  ];

  const handleView = (job: Job) => {
    message.info(`Viewing ${job.title}`);
  };

  const handleApprove = (job: Job) => {
    message.success(`${job.title} approved`);
  };

  const handleReject = (job: Job) => {
    message.error(`${job.title} rejected`);
  };

  const handleDelete = (job: Job) => {
    message.warning(`${job.title} deleted`);
  };

  const columns = [
    {
      title: "Job Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Company",
      dataIndex: "company",
      key: "company",
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: Job["status"]) => {
        const color =
          status === "Approved"
            ? "green"
            : status === "Rejected"
            ? "red"
            : "orange";
        return <Tag color={color}>{status}</Tag>;
      },
    },
    {
      title: "Action",
      key: "action",
      align: "center" as const,
      render: (_: any, record: Job) => (
        <Space size="middle">
          <Tooltip title="View Job">
            <EyeOutlined
              style={{ fontSize: 18, color: "#1890ff" }}
              onClick={() => handleView(record)}
            />
          </Tooltip>

          <Tooltip title="Approve Job">
            <CheckCircleOutlined
              style={{ fontSize: 18, color: "#52c41a" }}
              onClick={() => handleApprove(record)}
            />
          </Tooltip>

          <Tooltip title="Reject Job">
            <CloseCircleOutlined
              style={{ fontSize: 18, color: "#faad14" }}
              onClick={() => handleReject(record)}
            />
          </Tooltip>

          <Tooltip title="Delete Job">
            <DeleteOutlined
              style={{ fontSize: 18, color: "#ff4d4f" }}
              onClick={() => handleDelete(record)}
            />
          </Tooltip>
        </Space>
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={dataSource}
      bordered
      pagination={false}
    />
  );
};

export default JobManagement;