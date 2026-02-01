import React from "react";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";
import AdminSidebar from "./AdminSidebar";

const { Content } = Layout;

const AdminLayout = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <AdminSidebar />

      <Layout>
        <AdminNavbar />

        <Content style={{ margin: "16px", background: "#fff", padding: 20 }}>
          {/* 🔥 THIS IS REQUIRED */}
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;