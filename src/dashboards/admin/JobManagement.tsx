import { Table } from "antd";


export default function JobManagement() {
return (
<Table
columns={[{ title: "Job", dataIndex: "title" }]}
dataSource={[{ key: 1, title: "React Dev" }]}
/>
);
}