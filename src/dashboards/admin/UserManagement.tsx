import { Table, Select } from "antd";


export default function UserManagement() {
return (
<Table
columns={[
{ title: "Name", dataIndex: "name" },
{ title: "Role", render: () => <Select defaultValue="USER" /> }
]}
dataSource={[{ key: 1, name: "Nayana" }]}
/>
);
}