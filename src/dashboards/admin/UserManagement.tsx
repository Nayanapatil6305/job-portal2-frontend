import React from "react";
import { Table, Space, Tooltip, message } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  UserSwitchOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";

interface User {
  key: string;
  name: string;
  role: string;
}

const UserManagement: React.FC = () => {
  const dataSource: User[] = [
    { key: "1", name: "Nayana", role: "User" },
    { key: "2", name: "John", role: "Employee" },
    { key: "3", name: "Patil", role: "User" },
    { key: "4", name: "Pooja", role: "User" },
  ];

  const handleReject = (record: User) => {
    message.info(`Reject ${record.name}`);
  };

  const handleDelete = (record: User) => {
    message.warning(`Delete ${record.name}`);
  };

  const handleApprove = (record: User) => {
    message.success(`Approve ${record.name}`);
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Action",
      key: "action",
      align: "center" as const,
      render: (_: any, record: User) => (
        <Space size="middle">

          <Tooltip title="Approve Job">
            <CheckCircleOutlined
              style={{ fontSize: 18, color: "#52c41a" }}
              onClick={() => handleApprove(record)}
            />
          </Tooltip>

          <Tooltip title="Reject Job">
            <CloseCircleOutlined
              style={{ fontSize: 18, color: "#fa1414" }}
              onClick={() => handleReject(record)}
            />
          </Tooltip>


          <Tooltip title="Delete User">
            <DeleteOutlined
              style={{ color: "#ff4d4f", fontSize: 18 }}
              onClick={() => handleDelete(record)}
            />
          </Tooltip>
        </Space>
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={dataSource}
      pagination={false}
      bordered
    />
  );
};

export default UserManagement;