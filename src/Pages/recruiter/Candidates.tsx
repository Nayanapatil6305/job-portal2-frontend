import { Card, Table, Tag } from "antd";

const Candidates = () => {
  const dataSource = [
    {
      key: "1",
      name: "Rahul Sharma",
      // email: "rahul@gmail.com",
      job: "Frontend Developer",
      status: "Approve",

    },
    {
      key: "2",
      name: "Anjali Patil",
      // email: "anjali@gmail.com",
      job: "React Developer",
      status: "Reject",
    },

        {
      key: "3",
      name: "Rani Shaha",
      // email: "rani@gmail.com",
      job: "Backend Developer",
      status: "Approve",
    },

        {
      key: "4",
      name: "Naina Patil",
      // email: "naina@gmail.com",
      job: "React Developer",
      status: "Reject",
    },

          {
      key: "3",
      name: "Rani Shaha",
      // email: "rani@gmail.com",
      job: "Backend Developer",
      status: "Approve",
    },
        {
      key: "3",
      name: "Rani Shaha",
      email: "rani@gmail.com",
      job: "Backend Developer",
      status: "Approve",
    },

            {
      key: "3",
      name: "Rani Shaha",
      // email: "rani@gmail.com",
      job: "Backend Developer",
      status: "Reject",
    },

            {
      key: "3",
      name: "Rani Shaha",
      // email: "rani@gmail.com",
      job: "Backend Developer",
      status: "Approve",
    },



  ];

  const columns = [
    {
      title: "Candidate Name",
      dataIndex: "name",
    },
    {
      // title: "Email",
      // dataIndex: "email",
    },
    {
      title: "Applied Job",
      dataIndex: "job",
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (status: string) => (
        <Tag color={status === "Approve" ? "green" : "blue"}>
          {status}
        </Tag>
      ),
    },
  ];

  return (
    <Card title="Candidates">
      <Table dataSource={dataSource} columns={columns} />
    </Card>
  );
};

export default Candidates;