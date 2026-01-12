import { Table } from "antd";


export default function ManageJobs() {
return (
<Table
columns={[
{ title: "Job", dataIndex: "title" },
{ title: "Applicants", dataIndex: "count" }
]}
dataSource={[{ key: 1, title: "React Dev", count: 10 }]}
/>
);
}