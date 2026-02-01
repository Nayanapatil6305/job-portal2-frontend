// import { Layout, Menu } from "antd";
// import {
//   DashboardOutlined,
//   FileSearchOutlined,
//   ProfileOutlined,
//   LogoutOutlined,
//   ProfileFilled,
// } from "@ant-design/icons";
// import { useNavigate } from "react-router-dom";

// const { Sider } = Layout;

// const UserSidebar = () => {
//   const navigate = useNavigate();

//   return (
//     <Sider width={220} style={{ background: "#001529" }}>
//       <div
//         style={{
//           color: "#fff",
//           padding: "16px",
//           fontSize: "18px",
//           textAlign: "center",
//           fontWeight: "bold",
//         }}
//       >
//         Job Portal
//       </div>

//       <Menu
//         theme="dark"
//         mode="inline"
//         defaultSelectedKeys={["dashboard"]}
//         onClick={(e) => navigate(`/user/${e.key}`)}
//         items={[
//           {
//             key: "dashboard",
//             icon: <DashboardOutlined />,
//             label: "Dashboard",
//           },
//             {
//             key: "profile",
//             icon: <ProfileFilled/>,
//             label: "Profile",
//           },

//           {
//             key: "jobs",
//             icon: <FileSearchOutlined />,
//             label: "Jobs",
//           },
//           {
//             key: "applications",
//             icon: <ProfileOutlined />,
//             label: "My Applications",
//           },
//           {
//             key: "logout",
//             icon: <LogoutOutlined />,
//             label: "Logout",
//           },
//         ]}
//       />
//     </Sider>
//   );
// };

// export default UserSidebar;



import { Menu } from "antd";
import {
  BehanceCircleFilled,
  DashboardOutlined,
  // BriefcaseOutlined,
  FileTextOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";

const UserSidebar = () => {
  const location = useLocation();

  return (
    <div style={sidebarStyle}>
      <div style={logoStyle}>User Panel</div>


      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={[location.pathname]}
      >
        <Menu.Item key="/user/dashboard" icon={<DashboardOutlined />}>
          <Link to="/user/dashboard">Dashboard</Link>
        </Menu.Item>

        <Menu.Item key="/user/jobs" icon={<BehanceCircleFilled />}>
          <Link to="/user/jobs">Jobs</Link>
        </Menu.Item>

        <Menu.Item key="/user/applications" icon={<FileTextOutlined />}>
          <Link to="/user/applications">Applications</Link>
        </Menu.Item>

        <Menu.Item key="/logout" icon={<LogoutOutlined />}>
          Logout
        </Menu.Item>
      </Menu>
    </div>
  );
};

const sidebarStyle = {
  width: 220,
  height: "100vh",
  background: "#001529",
};

const logoStyle = {
  color: "#fff",
  fontSize: 18,
  fontWeight: "bold",
  padding: 16,
  textAlign: "center" as const,
};

export default UserSidebar;