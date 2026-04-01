import React, { useState } from "react";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import UserSidebar from "./UserSidebar";
import UserNavbar from "./UserNavbar";

const { Content } = Layout;

const UserLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* Sidebar */}
      <UserSidebar collapsed={collapsed} />

      {/* Main Layout */}
      <Layout
        style={{
          marginLeft: collapsed ? 80 : 240,
          transition: "all 0.2s ease",
          background: "#f1f5f9",
        }}
      >
        {/* Navbar */}
        <UserNavbar
          collapsed={collapsed}
          setCollapsed={setCollapsed}
        />

        {/* Page Content Wrapper */}
        <Content
          style={{
            marginTop: 64,
            padding: "24px 32px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {/* Actual Page Container */}
          <div
            style={{
              width: "100%",
              maxWidth: 1200,   // 🔥 MAIN FIX
              minHeight: "calc(100vh - 64px)",
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default UserLayout;
