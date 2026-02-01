// import { Layout } from "antd";
// import { Outlet } from "react-router-dom";
// import UserNavbar from "./UserNavbar";
// import UserSidebar from "./UserSidebar";

// const { Content } = Layout;

// const UserLayout = () => (
//   <Layout style={{ minHeight: "100vh" }}>
//     <UserSidebar />
//     <Layout>
//       <UserNavbar />
//       <Content style={{ margin: 16, background: "#fff", padding: 20 }}>
//         <Outlet />
//       </Content>
//     </Layout>
//   </Layout>
// );

// export default UserLayout;


import { Outlet } from "react-router-dom";
import UserSidebar from "./UserSidebar";
import UserNavbar from "./UserNavbar";

const UserLayout = () => {
  return (
    <div style={{ display: "flex" }}>
      <UserSidebar />
      <div style={{ flex: 1 }}>
        <UserNavbar />
        <Outlet />
      </div>
    </div>
  );
};

export default UserLayout;