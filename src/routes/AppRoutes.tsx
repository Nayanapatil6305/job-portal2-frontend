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
// import Homepage from "../wellcomePage/Homepage";
// import Brousejob from "../wellcomePage/Browsejob";
// import About from "../wellcomePage/About";
// import Contact from "../wellcomePage/Contact";
// import Footer from "../wellcomePage/Footer";
// import Browsejob from "../wellcomePage/Browsejob";
// import AppLayout from "../layout/AppLayout";
import JobDetails from "../dashboards/user/JobDetails";
import ApplyJobScreen from "../dashboards/user/ApplyJobScreen";
import ViewApplication from "../dashboards/recruiter/ViewApplication";
import AppLayout from "../Layout/AppLayout";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import Home from "../Pages/Home";
import About from "../Pages/About";
import HowItsWorkpage from "../Pages/HowItsWorkpage";
// import Footer from "../footer/Footer";


export default function AppRoutes() {
  return (
    <Routes>
      {/* <Route
        path="/user"
        element={
          <Protected role="USER">
            <UserDashboard />
          </Protected>
        }
      /> */}

      {/* <Route
        path="/recruiter"
        element={
          <Protected role="RECRUITER">
            <RecruiterDashboard />
          </Protected>
        }
      /> */}

      {/* <Route
        path="/admin"
        element={
          <Protected role="ADMIN">
            <AdminDashboard />
          </Protected>
        }
      /> */}
    
     {/* </Routes>  */}


       {/* <Route path="/" element={<Homepage />}/> */}
       <Route path="/" element={<Navigate to="/home" replace />} />
        <Route index element={<Navigate to="/home" replace />} />


       <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/recuiter" element={<RecruiterDashboard />} />
       <Route path="/user" element={<UserDashboard />} />


        {/* <Route path="/home" element={<Homepage/>} /> */}
        
        <Route path="/applyjobs" element={<ApplyJobScreen/>} />
        <Route path="/viewapplication" element={<ViewApplication/>} />
        <Route path="/footer" element={<Footer/>} />
        {/* <Route path="/mockdata" element={<MockData/>} /> */}
        <Route path="/navbar" element={<Navbar/>} />
<Route path="/homenew" element={<Home/>} />
 <Route path="/"element={<><Navbar /><Home /></>}/>
 <Route path="/about"element={<><About /></>}/>
 <Route path="/working"element={<><HowItsWorkpage /></>}/>


        
        {/* <Route path="/Contact" element={<Contact/>} />
         <Route path="/footer" element={<Footer/>}/> */}
       <Route path="*" element={<Navigate to="/home" replace />} />

  
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/user" element={<UserDashboard />} />
            <Route path="/recruiter" element={<RecruiterDashboard />} />
            <Route path="/layout" element={<AppLayout />} />


             <Route path="/user/job/:id" element={<JobDetails/>} />

</Routes>

  );
}