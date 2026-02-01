import React from "react";
import { Layout, Menu } from "antd";
import {
  DashboardOutlined,
  PlusCircleOutlined,
  TeamOutlined,
  FileTextOutlined,
  CalendarOutlined,
  BarChartOutlined,
  SettingOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { useLocation, useNavigate } from "react-router-dom";

const { Sider } = Layout;

const RecruiterSidebar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Sider
      width={240}
      style={{
        background: "#0f172a",
        height: "100vh",
        position: "fixed",
        left: 0,
        top: 0,
      }}
    >
      {/* LOGO / BRAND */}
      <div
        style={{
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          fontSize: 20,
          fontWeight: 600,
          letterSpacing: 1,
          borderBottom: "1px solid #1e293b",
        }}
      >
        Recruiter Panel
      </div>

      {/* MENU */}
      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={[location.pathname]}
        onClick={({ key }) => navigate(key)}
        style={{
          background: "#0f172a",
          borderRight: 0,
          marginTop: 12,
        }}
        items={[
          {
            key: "/recruiter/dashboard",
            icon: <DashboardOutlined />,
            label: "Dashboard",
          },
          {
            key: "/recruiter/post-job",
            icon: <PlusCircleOutlined />,
            label: "Post Job",
          },
          {
            key: "/recruiter/candidates",
            icon: <TeamOutlined />,
            label: "Candidates",
          },
          {
            key: "/recruiter/jobs",
            icon: <FileTextOutlined />,
            label: "Posted Jobs",
          },
          {
            key: "/recruiter/interviews",
            icon: <CalendarOutlined />,
            label: "Interviews",
          },
          {
            key: "/recruiter/reports",
            icon: <BarChartOutlined />,
            label: "Reports",
          },
          {
            key: "/recruiter/settings",
            icon: <SettingOutlined />,
            label: "Settings",
          },
          {
            type: "divider",
          },
          {
            key: "/logout",
            icon: <LogoutOutlined style={{ color: "#ff4d4f" }} />,
            label: (
              <span style={{ color: "#ff4d4f", fontWeight: 500 }}>
                Logout
              </span>
            ),
          },
        ]}
      />
    </Sider>
  );
};

export default RecruiterSidebar;
