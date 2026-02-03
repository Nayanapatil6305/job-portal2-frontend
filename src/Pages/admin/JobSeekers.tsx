import { Card, Table, Space, Tooltip } from "antd";
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";

const JobSeekers = () => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text: string) => <strong>{text}</strong>,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Manage",
      key: "manage",
      align: "center" as const,
      render: () => (
        <Space size="middle">
          <Tooltip title="Approve">
            <CheckCircleOutlined
              style={{ color: "#16a34a", fontSize: 18, cursor: "pointer" }}
            />
          </Tooltip>

          <Tooltip title="Reject">
            <CloseCircleOutlined
              style={{ color: "#dc2626", fontSize: 18, cursor: "pointer" }}
            />
          </Tooltip>
        </Space>
      ),
    },
  ];

  const data = [
    { key: 1, name: "Amit Kumar", email: "amit@gmail.com" },
    { key: 2, name: "Sneha Patil", email: "sneha@gmail.com" },
    { key: 3, name: "Rahul Verma", email: "rahul@gmail.com" },
    { key: 4, name: "Neha Singh", email: "neha@gmail.com" },
  ];

  return (
    <Card
      title="Job Seekers Management"
      bordered={false}
      style={{ borderRadius: 12 }}
    >
      <Table
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 5 }}
      />
    </Card>
  );
};

export default JobSeekers;
