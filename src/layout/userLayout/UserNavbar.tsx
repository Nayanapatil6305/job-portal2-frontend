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

const UserNavbar: React.FC<Props> = ({ collapsed, setCollapsed }) => {
  const profileMenu = {
    items: [
      {
        key: "1",
        icon: <UserOutlined />,
        label: "My Profile",
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
        left: collapsed ? 80 : 240, // SAME behavior as recruiter
        right: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 24px",
        zIndex: 100,
      }}
    >
      {/* Left Section */}
      <Space size={16}>
        {collapsed ? (
          <MenuUnfoldOutlined
            onClick={() => setCollapsed(false)}
            style={{ color: "#ffffff", fontSize: 18, cursor: "pointer" }}
          />
        ) : (
          <MenuFoldOutlined
            onClick={() => setCollapsed(true)}
            style={{ color: "#ffffff", fontSize: 18, cursor: "pointer" }}
          />
        )}

        <span style={{ color: "#ffffff", fontWeight: 600 }}>
          User Dashboard
        </span>
      </Space>

      {/* Right Section */}
      <Space size={24}>
        {/* Notifications */}
        <Badge count={2}>
          <BellOutlined
            style={{ color: "#ffffff", fontSize: 18, cursor: "pointer" }}
          />
        </Badge>

        {/* User Profile */}
        <Dropdown menu={profileMenu} placement="bottomRight">
          <Space style={{ cursor: "pointer" }}>
            <Avatar icon={<UserOutlined />} />
            <div style={{ color: "#ffffff", lineHeight: "14px" }}>
              {/* <div style={{ fontSize: 14 }}>Nayana Patil</div> */}
              <div style={{ fontSize: 16, color: "#f7f8fa" }}>
                Job Seeker
              </div>
            </div>
          </Space>
        </Dropdown>
      </Space>
    </Header>
  );
};

export default UserNavbar;
