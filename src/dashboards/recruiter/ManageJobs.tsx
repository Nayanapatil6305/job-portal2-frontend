// // import { Table } from "antd";




// import { Table, Card } from "antd";
// import { jobs } from "../../services/Api";

// const ManageJobs = () => {
//   return (
//     <Card title="Manage Jobs">
//       <Table
//         dataSource={jobs}
//         rowKey="id"
//         columns={[
//           { title: "Title", dataIndex: "title" },
//           { title: "Company", dataIndex: "company" },
//           { title: "Location", dataIndex: "location" },
//           { title: "Manage", dataIndex: "manage" },


//         ]}
//       />
//     </Card>
//   );
// };

// export default ManageJobs;



import React, { useState } from "react";
import { Table, Button, Space, Tag, message } from "antd";
import type { ColumnsType } from "antd/es/table";

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  status: "Pending" | "Approved" | "Rejected";
}

const ManageJobs: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([
    { id: 1, title: "Frontend Developer", company: "TCS", location: "Pune", status: "Pending" },
    { id: 2, title: "React Developer", company: "Infosys", location: "Bangalore", status: "Pending" },
    { id: 3, title: "Software Engineer", company: "Wipro", location: "Hyderabad", status: "Pending" },
  ]);

  const updateStatus = (id: number, status: "Approved" | "Rejected") => {
    setJobs((prev) =>
      prev.map((job) => (job.id === id ? { ...job, status } : job))
    );
    message.success(`Job ${status}`);
  };

  const columns: ColumnsType<Job> = [
    { title: "Title", dataIndex: "title" },
    { title: "Company", dataIndex: "company" },
    { title: "Location", dataIndex: "location" },
    {
      title: "Status",
      dataIndex: "status",
      render: (status) => (
        <Tag color={status === "Approved" ? "green" : status === "Rejected" ? "red" : "orange"}>
          {status}
        </Tag>
      ),
    },
    {
      title: "Manage",
      render: (_, record) => (
        <Space>
          <Button
            type="primary"
            disabled={record.status !== "Pending"}
            onClick={() => updateStatus(record.id, "Approved")}
          >
            Approve
          </Button>
          <Button
            danger
            disabled={record.status !== "Pending"}
            onClick={() => updateStatus(record.id, "Rejected")}
          >
            Reject
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div style={{ padding: 24 }}>
      <h2>Manage Jobs</h2>
      <Table columns={columns} dataSource={jobs} rowKey="id" />
    </div>
  );
};

export default ManageJobs;