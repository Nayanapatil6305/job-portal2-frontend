// import { Layout, Avatar, Dropdown } from "antd";
// import { UserOutlined, LogoutOutlined } from "@ant-design/icons";
// import type { MenuProps } from "antd";

// const { Header } = Layout;

// const items: MenuProps["items"] = [
//   {
//     key: "logout",
//     icon: <LogoutOutlined />,
//     label: "Logout",
//   },
// ];

// const RecruiterNavbar = () => {
//   return (
//     <Header
//       style={{
//         background: "#130909",
//         color:"white",
//         padding: "0 20px",
//         height: 64,
//         width:1000,
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "space-between",
//         boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
//       }}
//     >
//       <h2 style={{ margin: 0 }}>Recruiter Dashboard</h2>

//       <Dropdown menu={{ items }}>
//         <Avatar icon={<UserOutlined />} style={{ cursor: "pointer" }} />
//       </Dropdown>
//     </Header>
//   );
// };

// export default RecruiterNavbar;

import { Layout, Avatar, Dropdown } from "antd";
import { UserOutlined, LogoutOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";

const { Header } = Layout;

const items: MenuProps["items"] = [
  {
    key: "logout",
    icon: <LogoutOutlined />,
    label: "Logout",
  },
];

const RecruiterNavbar = () => {
  return (
    <Header
      style={{
        background: "#130909",
        color: "white",
        padding: "0 24px",
        height: 64,
        width: "100%",          // ✅ Full width
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
        position: "sticky",     // ✅ Scroll केल्यावर fixed
        top: 0,
        zIndex: 1000,
      }}
    >
      {/* Left Side */}
      <h2 style={{ margin: 0, color: "#fff" }}>
        Recruiter Dashboard
      </h2>

      {/* Right Side */}
      <Dropdown menu={{ items }} placement="bottomRight">
        <Avatar
          size="large"
          icon={<UserOutlined />}
          style={{
            cursor: "pointer",
            backgroundColor: "#722ed1",
          }}
        />
      </Dropdown>
    </Header>
  );
};

export default RecruiterNavbar;
