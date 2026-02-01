import { Card, Table, Tag } from "antd";

const ViewCandidates = () => {
  const columns = [
    { title: "Name", dataIndex: "name" },
    { title: "Skill", dataIndex: "skill" },
    {
      title: "Status",
      dataIndex: "status",
      render: (status: string) => (
        <Tag color={status === "Shortlisted" ? "green" : "orange"}>
          {status}
        </Tag>
      ),
    },
  ];

  const data = [
    { key: 1, name: "Nayana", skill: "React", status: "Shortlisted" },
    { key: 2, name: "Rahul", skill: "Node.js", status: "Applied" },
  ];

  return (
    <Card title="Candidates List">
      <Table columns={columns} dataSource={data} />
    </Card>
  );
};

export default ViewCandidates;