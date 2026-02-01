




import React, { useState } from "react";
import { Table, Tag, Tooltip, message } from "antd";
import type { ColumnsType } from "antd/es/table";
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";

interface Job {
  key: string;
  title: string;
  company: string;
  location: string;
  status: "Pending" | "Approved" | "Rejected";
}

const ManageJobs: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([
    {
      key: "1",
      title: "Software Engineer",
      company: "TCS",
      location: "Pune",
      status: "Pending",
    },
    {
      key: "2",
      title: "Frontend Developer",
      company: "Infosys",
      location: "Bangalore",
      status: "Approved",
    },
    {
      key: "3",
      title: "React Developer",
      company: "Wipro",
      location: "Hyderabad",
      status: "Rejected",
    },
  ]);

  const updateStatus = (key: string, status: Job["status"]) => {
    setJobs((prev) =>
      prev.map((job) =>
        job.key === key ? { ...job, status } : job
      )
    );
    message.success(`Job ${status}`);
  };

  const columns: ColumnsType<Job> = [
    {
      title: "Title",
      dataIndex: "title",
    },
    {
      title: "Company",
      dataIndex: "company",
    },
    {
      title: "Location",
      dataIndex: "location",
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (status) => (
        <Tag
          color={
            status === "Approved"
              ? "green"
              : status === "Rejected"
              ? "red"
              : "orange"
          }
        >
          {status}
        </Tag>
      ),
    },
{
  title: "Actions",
  render: (_, record) => (
    <div style={{ display: "flex", gap: "16px" }}>
      <Tooltip title="Approve">
        <CheckCircleOutlined
          style={{
            fontSize: "20px",
            color: "green",
            cursor: "pointer",
          }}
          onClick={() => updateStatus(record.key, "Approved")}
        />
      </Tooltip>

      <Tooltip title="Reject">
        <CloseCircleOutlined
          style={{
            fontSize: "20px",
            color: "red",
            cursor: "pointer",
          }}
          onClick={() => updateStatus(record.key, "Rejected")}
        />
      </Tooltip>
    </div>
  ),
}  
];

  return (
    <div style={{ padding: "24px" }}>
      <h2>Manage Jobs</h2>
      <Table
        columns={columns}
        dataSource={jobs}
        pagination={false}
      />
    </div>
  );
};

export default ManageJobs;