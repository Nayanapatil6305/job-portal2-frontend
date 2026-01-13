// import { Table } from "antd";


// export default function JobManagement() {
// return (
// <Table
// columns={[{ title: "Job", dataIndex: "title" }]}
// dataSource={[{ key: 1, title: "React Dev" }]}
// />
// );
// }


import { Table, Card } from "antd";
import { jobs } from "../../services/Api";

const JobManagement = () => {
  return (
    <Card title="Job Management">
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

export default JobManagement;