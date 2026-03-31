import { Card, Table, Tag, Space, Tooltip } from "antd";
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";

const Candidates = () => {
  const dataSource = [
    {
      key: "1",
      name: "Rahul Sharma",
      job: "Frontend Developer",
    },
    {
      key: "2",
      name: "Anjali Patil",
      job: "React Developer",
    },
    {
      key: "3",
      name: "Rani Shaha",
      job: "Backend Developer",
    },
    {
      key: "4",
      name: "Naina Patil",
      job: "React Developer",
    },
  ];

  const handleApprove = (record: any) => {
    console.log("Approved:", record.name);
  };

  const handleReject = (record: any) => {
    console.log("Rejected:", record.name);
  };

  const columns = [
    {
      title: "Candidate Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Applied Job",
      dataIndex: "job",
      key: "job",
    },
    {
      title: "Action",
      key: "action",
      render: (_: any, record: any) => (
        <Space size="middle">
          <Tooltip title="Approve">
            <CheckCircleOutlined
              style={{ color: "green", fontSize: "18px", cursor: "pointer" }}
              onClick={() => handleApprove(record)}
            />
          </Tooltip>

          <Tooltip title="Reject">
            <CloseCircleOutlined
              style={{ color: "red", fontSize: "18px", cursor: "pointer" }}
              onClick={() => handleReject(record)}
            />
          </Tooltip>
        </Space>
      ),
    },
  ];

  return (
    <Card title="Candidates">
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={{ pageSize: 5 }}
      />
    </Card>
  );
};

export default Candidates;
