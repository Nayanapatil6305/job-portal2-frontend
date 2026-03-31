import { Table, Tag } from "antd";

const Applications = () => {
  const columns = [
    { title: "Job Title", dataIndex: "job" },
    { title: "Company", dataIndex: "company" },
    {
      title: "Status",
      dataIndex: "status",
      render: (status: string) => (
        <Tag color={status === "Pending" ? "orange" : "green"}>
          {status}
        </Tag>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      job: "Frontend Developer",
      company: "Tech Corp",
      status: "Pending",
    },
    {
      key: "2",
      job: "React Developer",
      company: "Startup Inc",
      status: "Shortlisted",
    },
  ];

  return <Table columns={columns} dataSource={data} />;
};

export default Applications;
