
import { Routes, Route, Navigate } from "react-router-dom";
import Protected from "./Protected";

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




/* ========== ADMIN ========== */
import AdminLayout from "../layout/admin/AdminLayout";
import AdminDashboard from "../Pages/admin/Dashboard";
import Recruiters from "../Pages/admin/Recruiters";
import JobSeekers from "../Pages/admin/JobSeekers";
import AdminJobs from "../Pages/admin/Jobs";
import AdminReports from "../Pages/admin/Reports";
import AdminSettings from "../Pages/admin/Settings";

/* ========== USER ========== */
import UserLayout from "../layout/user/UserLayout";
import UserDashboard from "../Pages/user/Dashboard";
import UserJobs from "../Pages/user/Jobs";
import Applications from "../Pages/user/Applications";
import Profile from "../Pages/user/Profile";
import UserSettings from "../Pages/user/Settings";

/* ========== RECRUITER ========== */
import RecruiterLayout from "../layout/recruiter/RecruiterLayout";
import RecruiterDashboard from "../Pages/recruiter/Dashboard";
import Candidates from "../Pages/recruiter/Candidates";
import PostedJobs from "../Pages/recruiter/Posted-Jobs";
import Interviews from "../Pages/recruiter/Interviews";
import RecruiterReports from "../Pages/recruiter/Reports";
import RecruiterSettings from "../Pages/recruiter/Settings";
import BrowseJobs from "../wellcomePage/Browsejob";
import Dashboard from "../Pages/admin/Dashboard";
import Jobs from "../Pages/admin/Jobs";
import Reports from "../Pages/admin/Reports";
// import Settings from "../Pages/admin/Settings";
import Logout from "../Pages/recruiter/Logout";
import PostJob from "../Pages/recruiter/PostJob";
import Login from "../Pages/auth/Login";
import SavedJobs from "../Pages/user/SavedJobs";
import Notifications from "../Pages/user/Notifications";
import Settings from "../Pages/admin/Settings";


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




      {/* User Layout */}
      <Route path="/user" element={<UserLayout />}>
        <Route path="dashboard" element={<UserDashboard />} />
        <Route path="profile" element={<Profile />} />
        <Route path="jobs" element={<Jobs />} />
        <Route path="applications" element={<Applications />} />
        <Route path="saved" element={<SavedJobs/>} /> 
         <Route path="notifications" element={<Notifications />} />
        <Route path="settings" element={<UserSettings />} /> 
      </Route>
            {/* Auth / Login */}
      {/* <Route path="/login" element={<Login/>} /> */}



 {/* RECRUITER SIDEBAR ROUTES */}
      <Route path="/recruiter" element={<RecruiterLayout />}>
        <Route path="jobs" element={<PostedJobs />} />
        <Route path="interviews" element={<Interviews />} />
        <Route path="reports" element={<Reports />} />
        <Route path="settings" element={<RecruiterSettings/>} />
        <Route path="logout" element={<Logout />} />
        <Route path="postjob" element={<PostJob />} />

      </Route>
    
 {/* ADMIN SIDEBAR ROUTES */}
      <Route path="/admin" element={<AdminLayout />}>
  <Route path="dashboard" element={<AdminDashboard/>} />
  <Route path="recruiters" element={<Recruiters />} />
  <Route path="jobseekers" element={<JobSeekers />} />
  <Route path="jobs" element={<Jobs/>} />
  <Route path="reports" element={<Reports />} />
  <Route path="settings" element={<Settings/>} />
</Route>


      {/* ADMIN ROUTES */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="recruiters" element={<Recruiters />} />
        <Route path="jobseekers" element={<JobSeekers />} />
        <Route path="jobs" element={<AdminJobs />} />
        <Route path="reports" element={<AdminReports />} />
        <Route path="settings" element={<AdminSettings />} />
      </Route>


      {/* RECRUITER ROUTES */}
      <Route path="/recruiter" element={<RecruiterLayout />}>
        <Route path="dashboard" element={<RecruiterDashboard />} />
        <Route path="candidates" element={<Candidates />} />
        <Route path="jobs" element={<PostedJobs />} />
        <Route path="interviews" element={<Interviews />} />
        <Route path="reports" element={<RecruiterReports />} />
        <Route path="postjob" element={<PostJob/>} />
        <Route path="settings" element={<RecruiterSettings />} />
      </Route>


      {/* USER ROUTES */}
      <Route path="/user" element={<UserLayout />}>
        <Route path="dashboard" element={<UserDashboard />} />
        <Route path="jobs" element={<UserJobs />} />
        <Route path="applications" element={<Applications />} />
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<UserSettings />} />
      </Route>
    





          {/* <Route index element={<AdminDashboard />} />
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route index element={<RecruiterDashboard />} />
          <Route path="dashboard" element={<RecruiterDashboard />} />
          <Route path="post-job" element={<PostJob />} />
          <Route path="candidates" element={<ViewCandidates />} />

        <Route path="/" element={<Navigate to="/admin/dashboard" />} />
 */}
       {/* <Route path="/user" element={<UserDashboard />} /> */}
        <Route path="/home" element={<Homepage/>} />
        <Route path="/browsejobs" element={<BrowseJobs/>} />
        

        {/* <Route path="/Contact" element={<Contact/>} />
         <Route path="/footer" element={<Footer/>}/> */}
       <Route path="*" element={<Navigate to="/home" replace />} />

  


             {/* <Route path="/user/job/:id" element={<JobDetails/>} /> */}

</Routes>

  );
}







