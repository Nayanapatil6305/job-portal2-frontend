// import { Table } from "antd";


// export default function ManageJobs() {
// return (
// <Table
// columns={[
// { title: "Job", dataIndex: "title" },
// { title: "Applicants", dataIndex: "count" }
// ]}
// dataSource={[{ key: 1, title: "React Dev", count: 10 }]}
// />
// );
// }


import { Table, Card } from "antd";
import { jobs } from "../../services/Api";

const ManageJobs = () => {
  return (
    <Card title="Manage Jobs">
      <Table
        dataSource={jobs}
        rowKey="id"
        columns={[
          { title: "Title", dataIndex: "title" },
          { title: "Company", dataIndex: "company" },
          { title: "Location", dataIndex: "location" },


        ]}
      />
    </Card>
  );
};

export default ManageJobs;