// import { Routes, Route } from "react-router-dom";
// // import Login from "../pages/Login";
// import UserDashboard from "../dashboards/user/UserDashboard";
// import RecruiterDashboard from "../dashboards/recruiter/RecruiterDashboard";
// import AdminDashboard from "../dashboards/admin/AdminDashboard";
// // import { useAuth } from "../context/AuthContext";


// // const Protected = ({ role, children }: any) => {
// // // const { user } = useAuth();
// // if (!user) return <Navigate to="/" />;
// // if (user.role !== role) return <Navigate to="/" />;
// // return children;
// // };


// export default function AppRoutes() {
// return (
// <Routes>
// {/* <Route path="/" element={<Login />} /> */}
// <Route path="/user" element={<Protected role="USER"><UserDashboard /></Protected>} />
// <Route path="/recruiter" element={<Protected role="RECRUITER"><RecruiterDashboard /></Protected>} />
// <Route path="/admin" element={<Protected role="ADMIN"><AdminDashboard /></Protected>} />
// </Routes>
// );
// }

import { Routes, Route } from "react-router-dom";
import Protected from "./Protected";

import UserDashboard from "../dashboards/user/UserDashboard";
import RecruiterDashboard from "../dashboards/recruiter/RecruiterDashboard";
import AdminDashboard from "../dashboards/admin/AdminDashboard";

export default function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/user"
        element={
          <Protected role="USER">
            <UserDashboard />
          </Protected>
        }
      />

      <Route
        path="/recruiter"
        element={
          <Protected role="RECRUITER">
            <RecruiterDashboard />
          </Protected>
        }
      />

      <Route
        path="/admin"
        element={
          <Protected role="ADMIN">
            <AdminDashboard />
          </Protected>
        }
      />
    </Routes>
  );
}