import React, { useState } from "react";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";
import AdminSidebar from "./AdminSidebar";

const { Content } = Layout;

const AdminLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <AdminSidebar collapsed={collapsed} />

      <Layout>
        <AdminNavbar
          collapsed={collapsed}
          setCollapsed={setCollapsed}
        />

        <Content
          style={{
            marginLeft: collapsed ? 80 : 240,
            marginTop: 64,
            padding: 24,
            background: "#f8fafc",
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
