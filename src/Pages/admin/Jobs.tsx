import { Card, Table, Tag } from "antd";

const Jobs = () => {
  const columns = [
    { title: "Job Title", dataIndex: "title" },
    { title: "Company", dataIndex: "company" },
    {
      title: "Status",
      dataIndex: "status",
      render: (status: string) =>
        status === "Open" ? (
          <Tag color="green">Open</Tag>
        ) : (
          <Tag color="orange">Closed</Tag>
        ),
    },
  ];

  const data = [
    { key: 1, title: "Frontend Developer", company: "Google", status: "Open" },
    { key: 2, title: "Backend Developer", company: "Amazon", status: "Closed" },
        { key: 3, title: "Frontend Developer", company: "Google", status: "Open" },
    { key: 4, title: "Backend Developer", company: "Amazon", status: "Closed" },
        { key: 5, title: "Frontend Developer", company: "Google", status: "Open" },
    { key: 6, title: "Backend Developer", company: "Amazon", status: "Closed" },

  ];

  return (
    <Card title="Jobs">
      <Table columns={columns} dataSource={data} />
    </Card>
  );
};

export default Jobs;
