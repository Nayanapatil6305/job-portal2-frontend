import { Layout, Menu, Switch } from "antd";
import {
  DashboardOutlined,
  TeamOutlined,
  UserOutlined,
  FileTextOutlined,
  BarChartOutlined,
  SettingOutlined,
  LogoutOutlined,
  BulbOutlined,
} from "@ant-design/icons";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const { Sider } = Layout;

interface Props {
  collapsed: boolean;
}

const AdminSidebar: React.FC<Props> = ({ collapsed }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [darkMode, setDarkMode] = useState(true);

  return (
    <Sider
      collapsed={collapsed}
      width={240}
      collapsedWidth={80}
      theme={darkMode ? "dark" : "light"}
      style={{
        position: "fixed",
        height: "100vh",
        left: 0,
        top: 0,
      }}
    >
      {/* Logo / Title */}
      <div
        style={{
          height: 64,
          fontSize: 18,
          fontWeight: 700,
          color: darkMode ? "#fff" : "#111827",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderBottom: darkMode
            ? "1px solid #0f172a"
            : "1px solid #e5e7eb",
        }}
      >
        {collapsed ? "AP" : "Admin Panel"}
      </div>

      {/* Menu */}
      <Menu
        mode="inline"
        theme={darkMode ? "dark" : "light"}
        selectedKeys={[location.pathname]}
        onClick={({ key }) => navigate(key)}
        style={{ borderRight: 0 }}
        items={[
          { key: "/admin/dashboard", icon: <DashboardOutlined />, label: "Dashboard" },
          { key: "/admin/recruiters", icon: <TeamOutlined />, label: "Recruiters" },
          { key: "/admin/jobseekers", icon: <UserOutlined />, label: "Job Seekers" },
          { key: "/admin/jobs", icon: <FileTextOutlined />, label: "Jobs" },
          { key: "/admin/reports", icon: <BarChartOutlined />, label: "Reports" },
          { key: "/admin/settings", icon: <SettingOutlined />, label: "Settings" },
          { type: "divider" },
          {
            key: "/logout",
            icon: <LogoutOutlined />,
            label: "Logout",
            danger: true,
          },
        ]}
      />

      {/* Theme Toggle */}
      {!collapsed && (
        <div
          style={{
            position: "absolute",
            bottom: 16,
            width: "100%",
            padding: "0 16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            color: darkMode ? "#fff" : "#000",
          }}
        >
          <span>
            <BulbOutlined /> Theme
          </span>
          <Switch checked={darkMode} onChange={setDarkMode} />
        </div>
      )}
    </Sider>
  );
};

export default AdminSidebar;
