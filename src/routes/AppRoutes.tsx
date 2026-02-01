
import { Routes, Route, Navigate } from "react-router-dom";
import Protected from "./Protected";

// import UserDashboard from "../dashboards/user/UserDashboard";
// import RecruiterDashboard from "../dashboards/recruiter/RecruiterDashboard";
// import AdminDashboard from "../dashboards/admin/AdminDashboard";
import Homepage from "../wellcomePage/Homepage";
import Brousejob from "../wellcomePage/Browsejob";
// import About from "../wellcomePage/About";
// import Contact from "../wellcomePage/Contact";
// import Footer from "../wellcomePage/Footer";
import Browsejob from "../wellcomePage/Browsejob";
import AppLayout from "../layout/AppLayout";
import JobDetails from "../dashboards/user/JobDetails";
import ApplyJobScreen1 from "../dashboards/user/ApplyJobScreen";
import ApplyJobscreen1 from "../dashboards/user/ApplyJobScreen1";
import ViewCandidates from "../dashboards/recruiter/ViewCandidates";


// ADMIN
import AdminLayout from "../layout/admin/AdminLayout";
import AdminDashboard from "../Pages/admin/Dashboard";
import Recruiters from "../Pages/admin/Recruiters";
import JobSeekers from "../Pages/admin/JobSeekers";
import Jobs from "../Pages/admin/Jobs";

/* Recruiter */
import RecruiterLayout from "../layout/recruiter/RecruiterLayout";
import RecruiterDashboard from "../Pages/recruiter/Dashboard";
import PostJob from "../Pages/recruiter/PostJob";
import Candidates from "../Pages/recruiter/Candidates";

/* User */
import UserLayout from "../layout/user/UserLayout";
import UserDashboard from "../Pages/user/Dashboard";
import UserJobs from "../Pages/user/Jobs";
import Applications from "../Pages/user/Applications";


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


       <Route path="/" element={<Homepage />}/>
       <Route path="/" element={<Navigate to="/home" replace />} />
        <Route index element={<Navigate to="/home" replace />} />


      {/* ADMIN */}
      <Route path="/admin" element={<AdminLayout />}/>
        <Route index element={<Navigate to="dashboard" />} />
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="recruiter" element={<Recruiters/>} />
        <Route path="jobseeker" element={<JobSeekers />} />
        <Route path="jobs" element={<Jobs />} />

      {/* RECRUITER */}
      <Route path="/recruiter" element={<RecruiterLayout />}>
        <Route index element={<Navigate to="dashboard" />} />
        <Route path="dashboard" element={<RecruiterDashboard />} />
        <Route path="post-job" element={<PostJob />} />
        <Route path="candidates" element={<Candidates />} />
      </Route>

      {/* USER */}
      <Route path="/user" element={<UserLayout />}>
        <Route index element={<Navigate to="dashboard" />} />
        <Route path="dashboard" element={<UserDashboard />} />
        <Route path="jobs" element={<UserJobs />} />
        <Route path="applications" element={<Applications />} />
      </Route>










          {/* <Route index element={<AdminDashboard />} />
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route index element={<RecruiterDashboard />} />
          <Route path="dashboard" element={<RecruiterDashboard />} />
          <Route path="post-job" element={<PostJob />} />
          <Route path="candidates" element={<ViewCandidates />} />

        <Route path="/" element={<Navigate to="/admin/dashboard" />} />
 */}
       <Route path="/user" element={<UserDashboard />} />
        <Route path="/home" element={<Homepage/>} />
        <Route path="/browsejobs" element={<Browsejob/>} />
        

      {/* USER ROUTES */}
      <Route path="/user" element={<UserDashboard />} />
      <Route path="/user/job/:id" element={<JobDetails />} />
      <Route path="/user/apply" element={<ApplyJobscreen1 />} />
        {/* <Route path="/Contact" element={<Contact/>} />
         <Route path="/footer" element={<Footer/>}/> */}
       <Route path="*" element={<Navigate to="/home" replace />} />

  


             {/* <Route path="/user/job/:id" element={<JobDetails/>} /> */}

</Routes>

  );
}







