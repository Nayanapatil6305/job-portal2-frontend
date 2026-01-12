import { Tabs } from "antd";
import JobList from "./JobList";
import MyApplications from "./MyApplications";


export default function UserDashboard() {
return (
<Tabs items={[
{ key: "1", label: "Jobs", children: <JobList /> },
{ key: "2", label: "My Applications", children: <MyApplications /> }
]} />
);
}