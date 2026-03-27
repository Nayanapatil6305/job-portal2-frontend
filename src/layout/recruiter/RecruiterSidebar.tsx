import React from "react";
import { Layout, Menu } from "antd";
import {
  DashboardOutlined,
  FileTextOutlined,
  CalendarOutlined,
  BarChartOutlined,
  SettingOutlined,
  LogoutOutlined,
  ProfileFilled,
  PlusOutlined,
} from "@ant-design/icons";
import { useLocation, useNavigate } from "react-router-dom";

const { Sider } = Layout;

interface Props {
  collapsed: boolean;
}

const RecruiterSidebar: React.FC<Props> = ({ collapsed }) => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Sider
      collapsed={collapsed}
      width={240}
      collapsedWidth={80}
      style={{
        background: "#0f172a",
        borderRight: "1px solid #1e293b",
        position: "fixed",
        height: "100vh",
        left: 0,
        top: 0,
      }}
    >
      {/* Logo */}
      <div
        style={{
          height: 64,
          color: "#ffffff",
          fontSize: 18,
          fontWeight: 700,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderBottom: "1px solid #1e293b",
        }}
      >
        {collapsed ? "HR" : "Recruiter Panel"}
      </div>

      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={[location.pathname]}
        onClick={({ key }) => navigate(key)}
        style={{ background: "#0f172a" }}
        items={[
          { key: "/recruiter/dashboard", icon: <DashboardOutlined />, label: "Dashboard" },
          { key: "/recruiter/candidates", icon: <ProfileFilled />, label: "Candidates" },
          { key: "/recruiter/jobs", icon: <FileTextOutlined />, label: "Posted Jobs" },
          { key: "/recruiter/interviews", icon: <CalendarOutlined />, label: "Interviews" },
          { key: "/recruiter/postjob", icon: <PlusOutlined />, label: "PostJob" },
          { key: "/recruiter/reports", icon: <BarChartOutlined />, label: "Reports" },
          { key: "/recruiter/settings", icon: <SettingOutlined />, label: "Settings" },
          { type: "divider" },
          {
            key: "/recruiter/logout",
            icon: <LogoutOutlined />,
            label: "Logout",
          },
        ]}
      />
    </Sider>
  );
};

export default RecruiterSidebar;
