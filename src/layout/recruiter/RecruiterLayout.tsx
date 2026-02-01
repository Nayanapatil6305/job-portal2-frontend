// import { Layout } from "antd";
// import { Outlet } from "react-router-dom";
// import RecruiterNavbar from "./RecruiterNavbar";
// import RecruiterSidebar from "./RecruiterSidebar";

// const { Content } = Layout;

// const RecruiterLayout = () => (
//   <Layout style={{ minHeight: "100vh" }}>
//     <RecruiterSidebar />
//     <Layout>
//       <RecruiterNavbar />
//       <Content style={{ margin: 16, background: "#fff", padding: 20 }}>
//         <Outlet />
//       </Content>
//     </Layout>
//   </Layout>
// );

// export default RecruiterLayout;




import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import RecruiterSidebar from "./RecruiterSidebar";
import RecruiterNavbar from "./RecruiterNavbar";

const { Content } = Layout;

const RecruiterLayout = () => {
  return (
    <Layout>
      <RecruiterSidebar />

      <Layout style={{ marginLeft: 240 }}>
        <RecruiterNavbar />
        <Content style={{ padding: 24, background: "#f5f7fa" }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default RecruiterLayout;
