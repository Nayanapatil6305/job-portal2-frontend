import React, { useState } from "react";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import RecruiterSidebar from "./RecruiterSidebar";
import RecruiterNavbar from "./RecruiterNavbar";

const { Content } = Layout;

const RecruiterLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <RecruiterSidebar collapsed={collapsed} />

      <Layout>
        <RecruiterNavbar
          collapsed={collapsed}
          setCollapsed={setCollapsed}
        />

        <Content
          style={{
            marginLeft: collapsed ? 80 : 240,
            marginTop: 64,
            padding: 24,
            background: "#f3f2ef", // LinkedIn style bg
            transition: "all 0.2s",
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default RecruiterLayout;
