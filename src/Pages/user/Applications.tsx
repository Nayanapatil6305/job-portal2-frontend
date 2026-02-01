import { Card, Table, Tag } from "antd";

const Applications = () => {
  const dataSource = [
    {
      key: "1",
      job: "Frontend Developer",
      company: "TCS",
      status: "Applied",
    },
    {
      key: "2",
      job: "React Developer",
      company: "Infosys",
      status: "Shortlisted",
    },
  ];

  const columns = [
    {
      title: "Job Title",
      dataIndex: "job",
    },
    {
      title: "Company",
      dataIndex: "company",
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (status: string) => (
        <Tag color={status === "Shortlisted" ? "green" : "blue"}>
          {status}
        </Tag>
      ),
    },
  ];

  return (
    <Card title="My Applications">
      <Table dataSource={dataSource} columns={columns} />
    </Card>
  );
};

export default Applications;