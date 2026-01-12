import { Table } from "antd";


export default function MyApplications() {
return (
<Table
columns={[
{ title: "Job", dataIndex: "job" },
{ title: "Status", dataIndex: "status" }
]}
dataSource={[{ key: 1, job: "React Dev", status: "Applied" }]}
/>
);
}