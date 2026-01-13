// 


import { Tabs } from "antd";
import UserManagement from "./UserManagement";
import JobManagement from "./JobManagement";

const AdminDashboard = () => {
  return (
    <Tabs
      items={[
        { key: "1", label: "Users", children: <UserManagement /> },
        { key: "2", label: "Jobs", children: <JobManagement /> },
      ]}
    />
  );
};

export default AdminDashboard;