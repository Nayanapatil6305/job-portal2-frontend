import React from "react";
import { Table } from "antd";

const JobSeekers = () => {
  const dataSource = [
    {
      key: "1",
      name: "Nayana Patil",
      email: "nayana@gmail.com",
      skills: "React, TypeScript",
    },
    {
      key: "2",
      name: "Rahul Sharma",
      email: "rahul@gmail.com",
      skills: "Java, Spring",
    },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Skills",
      dataIndex: "skills",
      key: "skills",
    },
  ];

  return (
    <div>
      <h2>Job Seekers</h2>
      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
};

export default JobSeekers;