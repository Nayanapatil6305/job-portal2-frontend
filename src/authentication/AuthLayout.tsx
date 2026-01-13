import { Layout } from "antd";
import { Outlet } from "react-router-dom";

const { Content } = Layout;

const AuthLayout: React.FC = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Content
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Outlet />
      </Content>
    </Layout>
  );
};

export default AuthLayout;