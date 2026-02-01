import React from "react";
import { Layout, Menu } from "antd";
import {
  DashboardOutlined,
  FileTextOutlined,
  CalendarOutlined,
  BarChartOutlined,
  SettingOutlined,
  LogoutOutlined,
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
        background: "#ffffff",
        borderRight: "1px solid #e5e7eb",
        position: "fixed",
        height: "100vh",
        left: 0,
        top: 0,
      }}
    >
      <div
        style={{
          height: 64,
          fontSize: 18,
          fontWeight: 700,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderBottom: "1px solid #e5e7eb",
        }}
      >
        Recruiter
      </div>

      <Menu
        mode="inline"
        selectedKeys={[location.pathname]}
        onClick={({ key }) => navigate(key)}
        style={{ borderRight: 0 }}
        items={[
          { key: "/recruiter/dashboard", icon: <DashboardOutlined />, label: "Dashboard" },
          { key: "/recruiter/jobs", icon: <FileTextOutlined />, label: "Posted Jobs" },
          { key: "/recruiter/interviews", icon: <CalendarOutlined />, label: "Interviews" },
          { key: "/recruiter/reports", icon: <BarChartOutlined />, label: "Reports" },
          { key: "/recruiter/settings", icon: <SettingOutlined />, label: "Settings" },
          { type: "divider" },
          {
            key: "/recruiter/logout",
            icon: <LogoutOutlined style={{ color: "#dc2626" }} />,
            label: <span style={{ color: "#dc2626" }}>Logout</span>,
          },
        ]}
      />
    </Sider>
  );
};

export default RecruiterSidebar;
