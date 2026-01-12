import { Tabs } from "antd";
import PostJob from "./PostJob";
import ManageJobs from "./ManageJobs";


export default function RecruiterDashboard() {
return (
<Tabs items={[
{ key: "1", label: "Post Job", children: <PostJob /> },
{ key: "2", label: "Manage Jobs", children: <ManageJobs /> }
]} />
);
}