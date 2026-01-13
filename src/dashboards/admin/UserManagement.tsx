// import { Table, Select } from "antd";


// export default function UserManagement() {
// return (
// <Table
// columns={[
// { title: "Name", dataIndex: "name" },
// { title: "Role", render: () => <Select defaultValue="USER" /> }
// ]}
// dataSource={[{ key: 1, name: "Nayana" }]}
// />
// );
// }


import { Table, Card } from "antd";

const users = [
  { id: 1, name: "Nayana", role: "User" },
  { id: 2, name: "John", role: "Employee" },
  { id: 3, name: "Patil", role: "User" },
  { id: 4, name: "Pooja", role: "User" },

];

const UserManagement = () => {
  return (
    <Card title="User Management">
      <Table
        dataSource={users}
        rowKey="id"
        columns={[
          { title: "Name", dataIndex: "name" },
          { title: "Role", dataIndex: "role" },
        ]}
      />
    </Card>
  );
};

export default UserManagement;