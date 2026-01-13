


import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import AdminDashboard from "./dashboards/admin/AdminDashboard";
import UserDashboard from "./dashboards/user/UserDashboard";
import RecruiterDashboard from "./dashboards/recruiter/RecruiterDashboard";
import AppLayout from "./layout/AppLayout";
import AppFooter from "./components/Style/AppFooter";
import JobDetails from "./dashboards/user/JobDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />

            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/user" element={<UserDashboard />} />
            <Route path="/recruiter" element={<RecruiterDashboard />} />
            <Route path="/layout" element={<AppLayout />} />
            <Route path="/footer" element={<AppFooter />} />
            <Route path="/home" element={<Home />} />

             <Route path="/user/job/:id" element={<JobDetails />} />


    </Routes>
  );
}

export default App;