import { Layout, Button } from "antd";

const { Header } = Layout;

const AdminNavbar = () => {
  return (
    <Header style={{ background: "#001529", color: "#fff", display: "flex", justifyContent: "space-between" }}>
      <h3 style={{ color: "#fff" }}>Admin Dashboard</h3>
      <Button danger>Logout</Button>
    </Header>
  );
};

export default AdminNavbar;
