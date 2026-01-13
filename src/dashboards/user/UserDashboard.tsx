// 


import { Tabs } from "antd";
import JobList from "./JobList";
import MyApplications from "./MyApplications";
import JobDetails from "./JobDetails";

const UserDashboard = () => {
  return (
    <Tabs
      items={[
        { key: "1", label: "Jobs", children: <JobList /> },
        { key: "2", label: "My Applications", children: <MyApplications /> },
        { key: "3", label: "Job Details", children: <JobDetails /> },

      ]}
    />
  );
};

export default UserDashboard;