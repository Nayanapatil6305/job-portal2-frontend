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

import { Routes, Route, Navigate } from "react-router-dom";
import Protected from "./Protected";

import UserDashboard from "../dashboards/user/UserDashboard";
import RecruiterDashboard from "../dashboards/recruiter/RecruiterDashboard";
import AdminDashboard from "../dashboards/admin/AdminDashboard";
import Homepage from "../wellcomePage/Homepage";
// import Brousejob from "../wellcomePage/Browsejob";
// import About from "../wellcomePage/About";
// import Contact from "../wellcomePage/Contact";
// import Footer from "../wellcomePage/Footer";
import Browsejob from "../wellcomePage/Browsejob";
import AppLayout from "../layout/AppLayout";
import AppFooter from "../components/Style/AppFooter";
import JobDetails from "../dashboards/user/JobDetails";
import Login from "../authentication/Login";
import Register from "../authentication/Register";
import ForgetPassword from "../components/common/auth/ForgetPassword";
import MyApplications from "../dashboards/user/MyApplications";
import ResumeBuilder from "../dashboards/user/ResumeBuilder";
import JobManagement from "../dashboards/admin/JobManagement";



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
    
     {/* </Routes>  */}


       <Route path="/" element={<Homepage />}/>
       <Route path="/" element={<Navigate to="/home" replace />} />
        <Route index element={<Navigate to="/home" replace />} />

        <Route path="/home" element={<Homepage/>} />
        <Route path="/browsejobs" element={<Browsejob/>} />
        
        {/* <Route path="/Contact" element={<Contact/>} />
         <Route path="/footer" element={<Footer/>}/> */}
       <Route path="*" element={<Navigate to="/home" replace />} />

  
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/user" element={<UserDashboard />} />
            <Route path="/recruiter" element={<RecruiterDashboard />} />
            <Route path="/layout" element={<AppLayout />} />
            <Route path="/footer" element={<AppFooter/>} />
           <Route path="/user/job/:id" element={<JobDetails/>} />


           <Route path="/src/components/common/auth" element={<Login />}  />
           <Route path="/src/components/common/auth" element={<Register />} />
           <Route path="/src/components/common/auth" element={<ForgetPassword />} />
           <Route path="/user" element={<MyApplications />} />
           <Route path="/user" element={<ResumeBuilder />} />
           <Route path="/admin" element={<JobManagement />} />

</Routes>

  );
}