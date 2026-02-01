// import React from "react";
import { Layout, Avatar } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from "@ant-design/icons";

const { Header } = Layout;

interface Props {
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}

const RecruiterNavbar: React.FC<Props> = ({ collapsed, setCollapsed }) => {
  return (
    <Header
      style={{
        height: 64,
        background: "#ffffff",
        borderBottom: "1px solid #e5e7eb",
        position: "fixed",
        top: 0,
        left: collapsed ? 80 : 240,
        right: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 24px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        {collapsed ? (
          <MenuUnfoldOutlined onClick={() => setCollapsed(false)} />
        ) : (
          <MenuFoldOutlined onClick={() => setCollapsed(true)} />
        )}
        <strong>Recruiter Dashboard</strong>
      </div>

      <Avatar icon={<UserOutlined />} />
    </Header>
  );
};

export default RecruiterNavbar;
