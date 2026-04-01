import { Routes, Route, Navigate } from "react-router-dom";

// PUBLIC
import Home from "../../src/pages/Home";
import About from "../../src/pages/About";
import ContactPage from "../../src/pages/ContactPage";
import HowItsWorkpage from "../../src/pages/HowItsWorkpage";
import BrowseJobs from "../../src/pages/BrowseJobs";
import Login from "../pages/user/Login";
import Register from "../components/common/auth/Register";
import UserLayout from "../layout/userLayout/UserLayout";
import Dashboard from "../pages/admin/Dashboard";
import Jobs from "../pages/admin/Jobs";
import Applications from "../pages/user/Applications";
import Profile from "../pages/user/Profile";
import SavedJobs from "../pages/user/SavedJobs";
import Notifications from "../pages/user/Notifications";
import Settings from "../pages/admin/Settings";
import RecruiterLayout from "../layout/recruiterLayout/RecruiterLayout";
import Candidates from "../pages/recruiter/Candidates";
import PostedJobs from "../pages/recruiter/Posted-Jobs";
import Interviews from "../pages/recruiter/Interviews";
import Reports from "../pages/admin/Reports";
import PostJob from "../pages/recruiter/PostJob";
import AdminLayout from "../layout/adminLayout/AdminLayout";
import Recruiters from "../pages/admin/Recruiters";
import JobSeekers from "../pages/admin/JobSeekers";
import NotFound from "../pages/NotFound";

// AUTH
// import Login from "../../src/pages";
// import Register from "../../src/components/";
// import ForgetPassword from "./pages/auth/ForgetPassword";

// USER
// import UserLayout from "../../src/layout/userLayout";
// import UserDashboard from "../../src/dashboards/use"; // ✅ FIXED
// import UserJobs from "./pages/user/UserJobs";
// import Applications from "./pages/user/Applications";
// import Profile from "./pages/user/Profile";
// import SavedJobs from "./pages/user/SavedJobs";
// import Notifications from "./pages/user/Notifications";
// import UserSettings from "./pages/user/UserSettings";

// RECRUITER
// import RecruiterLayout from "./layouts/RecruiterLayout";
// import RecruiterDashboard from "./pages/recruiter/RecruiterDashboard";
// import Candidates from "./pages/recruiter/Candidates";
// import PostedJobs from "./pages/recruiter/PostedJobs";
// import Interviews from "./pages/recruiter/Interviews";
// import RecruiterReports from "./pages/recruiter/RecruiterReports";
// import PostJob from "./pages/recruiter/PostJob";
// import RecruiterSettings from "./pages/recruiter/RecruiterSettings";

// ADMIN
// import AdminLayout from "./layouts/AdminLayout";
// import AdminDashboard from "./pages/admin/AdminDashboard";
// import Recruiters from "./pages/admin/Recruiters";
// import JobSeekers from "./pages/admin/JobSeekers";
// import Jobs from "./pages/admin/Jobs";
// import Reports from "./pages/admin/Reports";
// import Settings from "./pages/admin/Settings";

// COMMON
// import NotFound from "./pages/NotFound";

export default function AppRoutes() {
  return (
    <Routes>

      {/* ================= PUBLIC ROUTES ================= */}
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/working" element={<HowItsWorkpage />} />
      <Route path="/jobs" element={<BrowseJobs />} />

      {/* ================= AUTH ROUTES ================= */}
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      {/* <Route path="/forgetpassword" element={<ForgetPassword />} /> */}

      {/* ================= USER ROUTES ================= */}
      <Route path="/user" element={<UserLayout/>}>
        <Route path="dashboard" element={<Dashboard/>} /> {/* ✅ FIX */}
        <Route path="jobs" element={<Jobs />} />
        <Route path="applications" element={<Applications/>} />
        <Route path="profile" element={<Profile />} />
        <Route path="saved" element={<SavedJobs />} />
        <Route path="notifications" element={<Notifications />} />
        <Route path="settings" element={<Settings/>} />
      </Route>

      {/* ================= RECRUITER ROUTES ================= */}
      <Route path="/recruiter" element={<RecruiterLayout/>}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="candidates" element={<Candidates/>} />
        <Route path="jobs" element={<PostedJobs />} />
        <Route path="interviews" element={<Interviews />} />
        <Route path="reports" element={<Reports />} />
        <Route path="postjob" element={<PostJob/>} />
        <Route path="settings" element={<Settings />} />
      </Route>

      {/* ================= ADMIN ROUTES ================= */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="recruiters" element={<Recruiters/>} />
        <Route path="jobseekers" element={<JobSeekers />} />
        <Route path="jobs" element={<Jobs />} />
        <Route path="reports" element={<Reports />} />
        <Route path="settings" element={<Settings />} />
      </Route>

      {/* ================= 404 ================= */}
      <Route path="*" element={<NotFound />} />

    </Routes>
  );
}