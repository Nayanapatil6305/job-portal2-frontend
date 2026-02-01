import { Layout, Menu } from "antd";
import {
  DashboardOutlined,
  TeamOutlined,
  UserOutlined,
  FileTextOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Sider } = Layout;

const AdminSidebar = () => {
  const navigate = useNavigate();

  return (
    <Sider theme="light">
      <Menu
        mode="inline"
        onClick={(e) => navigate(`/admin/${e.key}`)}
        items={[
          { key: "dashboard", icon: <DashboardOutlined />, label: "Dashboard" },
          { key: "recruiters", icon: <TeamOutlined />, label: "Recruiters" },
          { key: "jobseekers", icon: <UserOutlined />, label: "Job Seekers" },
          { key: "jobs", icon: <FileTextOutlined />, label: "Jobs" },
          { key: "logout", icon: <LogoutOutlined />, label: "Logout" },
        ]}
      />
    </Sider>
  );
};

export default AdminSidebar;