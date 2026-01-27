// // 


// import { Tabs } from "antd";
// import JobList from "./JobList";
// import MyApplications from "./MyApplications";
// import JobDetails from "./JobDetails";

// const UserDashboard = () => {
//   return (
//     <Tabs
//       items={[
//         { key: "1", label: "Jobs", children: <JobList /> },
//         { key: "2", label: "My Applications", children: <MyApplications /> },
//         { key: "3", label: "Job Details", children: <JobDetails /> },

//       ]}
//     />
//   );
// };

// export default UserDashboard;


import { Tabs } from "antd";
import JobList from "./JobList";
import MyApplications from "./MyApplications";

const UserDashboard = () => {
  return (
    <Tabs defaultActiveKey="1">
      <Tabs.TabPane tab="Jobs" key="1">
        <JobList />
      </Tabs.TabPane>

      <Tabs.TabPane tab="My Applications" key="2">
        <MyApplications />
      </Tabs.TabPane>
    </Tabs>
  );
};

export default UserDashboard;