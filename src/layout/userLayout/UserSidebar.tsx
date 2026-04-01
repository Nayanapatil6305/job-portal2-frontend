import React from "react";
import { Layout, Menu } from "antd";
import {
  DashboardOutlined,
  UserOutlined,
  FileTextOutlined,
  StarOutlined,
  BellOutlined,
  SettingOutlined,
  LogoutOutlined,
  FolderAddFilled,
} from "@ant-design/icons";
import { useLocation, useNavigate } from "react-router-dom";

const { Sider } = Layout;

interface UserSidebarProps {
  collapsed: boolean;
}

const UserSidebar: React.FC<UserSidebarProps> = ({ collapsed }) => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      trigger={null}
      width={240}
      style={{
        background: "#001529",
        position: "fixed",
        top: 0,
        left: 0,
        height: "100vh",
        overflow: "auto",
      }}
    >
      {/* LOGO */}
      <div
        style={{
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: collapsed ? "center" : "flex-start",
          paddingLeft: collapsed ? 0 : 20,
          color: "#fff",
          fontSize: 18,
          fontWeight: 600,
        }}
      >
        {collapsed ? "JP" : "Job Portal"}
      </div>

      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={[location.pathname]}
        onClick={({ key }) => {
          if (key === "/logout") {
            navigate("/login");
          } else {
            navigate(key);
          }
        }}
        items={[
          { key: "/user/dashboard", icon: <DashboardOutlined />, label: "Dashboard" },
          { key: "/user/profile", icon: <UserOutlined />, label: "My Profile" },
          { key: "/user/jobs", icon: <FolderAddFilled />, label: "Jobs" },
          { key: "/user/applications", icon: <FileTextOutlined />, label: "Applications" },
          { key: "/user/saved", icon: <StarOutlined />, label: "Saved Jobs" },
          { key: "/user/notifications", icon: <BellOutlined />, label: "Notifications" },
          { key: "/user/settings", icon: <SettingOutlined />, label: "Settings" },
          { type: "divider" },
          {
            key: "/logout",
            icon: <LogoutOutlined />,
            label: "Logout",
            danger: true,
          },
        ]}
      />
    </Sider>
  );
};

export default UserSidebar;
