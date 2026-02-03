import { Card, Table, Tag, Tooltip, Space } from "antd";
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";

const Recruiters = () => {
  const columns = [
    {
      title: "Recruiter Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Position",
      dataIndex: "position",
      key: "position",
      render: (position: string) => (
        <Tag color="blue">{position}</Tag>
      ),
    },
    {
      title: "Manage",
      key: "action",
      align: "center" as const,
      render: () => (
        <Space size="middle">
          <Tooltip title="Approve Recruiter">
            <CheckCircleOutlined
              style={{ color: "#16a34a", fontSize: 18, cursor: "pointer" }}
            />
          </Tooltip>

          <Tooltip title="Reject Recruiter">
            <CloseCircleOutlined
              style={{ color: "#dc2626", fontSize: 18, cursor: "pointer" }}
            />
          </Tooltip>
        </Space>
      ),
    },
  ];

  const data = [
    {
      key: 1,
      name: "Rahul Sharma",
      position: "HR Manager",
    },
    {
      key: 2,
      name: "Anita Verma",
      position: "Talent Acquisition",
    },
    {
      key: 3,
      name: "Rani Sharma",
      position: "Recruitment Lead",
    },
    {
      key: 4,
      name: "Amit Patil",
      position: "Senior HR",
    },
  ];

  return (
    <Card
      title="Recruiter Management"
      bordered={false}
    >
      <Table
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 5 }}
      />
    </Card>
  );
};

export default Recruiters;
