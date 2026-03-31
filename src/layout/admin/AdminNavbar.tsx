import React from "react";
import { Layout, Avatar, Badge, Space, Dropdown } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  BellOutlined,
  UserOutlined,
  LogoutOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const { Header } = Layout;

interface Props {
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}

const AdminNavbar: React.FC<Props> = ({ collapsed, setCollapsed }) => {
  const profileMenu = {
    items: [
      {
        key: "1",
        icon: <UserOutlined />,
        label: "Admin Profile",
      },
      {
        key: "2",
        icon: <SettingOutlined />,
        label: "Settings",
      },
      {
        key: "3",
        icon: <LogoutOutlined style={{ color: "#dc2626" }} />,
        label: <span style={{ color: "#dc2626" }}>Logout</span>,
      },
    ],
  };

  return (
    <Header
      style={{
        height: 64,
        background: "#0f172a",
        borderBottom: "1px solid #1e293b",
        position: "fixed",
        top: 0,
        left: collapsed ? 80 : 240,
        right: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 24px",
      }}
    >
      {/* LEFT */}
      <Space size={16}>
        {collapsed ? (
          <MenuUnfoldOutlined
            onClick={() => setCollapsed(false)}
            style={{ color: "#fff", fontSize: 18, cursor: "pointer" }}
          />
        ) : (
          <MenuFoldOutlined
            onClick={() => setCollapsed(true)}
            style={{ color: "#fff", fontSize: 18, cursor: "pointer" }}
          />
        )}
        <span style={{ color: "#fff", fontWeight: 600 }}>
          Admin Dashboard
        </span>
      </Space>

      {/* RIGHT */}
      <Space size={24}>
        <Badge count={4}>
          <BellOutlined
            style={{ color: "#fff", fontSize: 18, cursor: "pointer" }}
          />
        </Badge>

        <Dropdown menu={profileMenu} placement="bottomRight">
          <Space style={{ cursor: "pointer" }}>
            <Avatar icon={<UserOutlined />} />
            <span style={{ color: "#fff" }}>Admin</span>
          </Space>
        </Dropdown>
      </Space>
    </Header>
  );
};

export default AdminNavbar;
