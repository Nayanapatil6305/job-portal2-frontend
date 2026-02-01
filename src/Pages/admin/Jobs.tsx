import React from "react";
import { Table, Tag } from "antd";

const Jobs = () => {
  const dataSource = [
    {
      key: "1",
      title: "Frontend Developer",
      company: "TCS",
      status: "Open",
    },
    {
      key: "2",
      title: "Backend Developer",
      company: "Infosys",
      status: "Closed",
    },
  ];

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
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: string) => (
        <Tag color={status === "Open" ? "green" : "red"}>
          {status}
        </Tag>
      ),
    },
  ];

  return (
    <div>
      <h2>Jobs</h2>
      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
};

export default Jobs;