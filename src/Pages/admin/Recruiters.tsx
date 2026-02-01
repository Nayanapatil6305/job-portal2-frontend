import React from "react";
import { Table, Tag } from "antd";

const Recruiters = () => {
  const dataSource = [
    {
      key: "1",
      name: "TCS HR",
      email: "hr@tcs.com",
      status: "Active",
    },
    {
      key: "2",
      name: "Infosys HR",
      email: "hr@infosys.com",
      status: "Inactive",
    },
  ];

  const columns = [
    {
      title: "Recruiter Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: string) => (
        <Tag color={status === "Active" ? "green" : "red"}>
          {status}
        </Tag>
      ),
    },
  ];

  return (
    <div>
      <h2>Recruiters</h2>
      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
};

export default Recruiters;