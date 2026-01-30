// 


import { Card, Table, Tag } from "antd";

interface Application {
  key: string;
  jobTitle: string;
  company: string;
  appliedDate: string;
  status: "Applied" | "Shortlisted" | "Rejected";
}

const data: Application[] = [
  {
    key: "1",
    jobTitle: "Frontend Developer",
    company: "TCS",
    appliedDate: "10 Jan 2026",
    status: "Applied",
  },
  {
    key: "2",
    jobTitle: "React Developer",
    company: "Infosys",
    appliedDate: "08 Jan 2026",
    status: "Shortlisted",
  },
  {
    key: "3",
    jobTitle: "UI Developer",
    company: "Wipro",
    appliedDate: "05 Jan 2026",
    status: "Rejected",
  },
];

const MyApplications = () => {
  const columns = [
    {
      title: "Job Title",
      dataIndex: "jobTitle",
      key: "jobTitle",
    },
    {
      title: "Company",
      dataIndex: "company",
      key: "company",
    },
    {
      title: "Applied Date",
      dataIndex: "appliedDate",
      key: "appliedDate",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: string) => {
        let color = "blue";
        if (status === "Shortlisted") color = "green";
        if (status === "Rejected") color = "red";
        return <Tag color={color}>{status}</Tag>;
      },
    },
  ];

  return (
    <Card title="My Applications">
      <Table columns={columns} dataSource={data} pagination={false} />
    </Card>
  );
};

export default MyApplications;