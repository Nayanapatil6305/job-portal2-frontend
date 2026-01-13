// import { Table } from "antd";


// export default function MyApplications() {
// return (
// <Table
// columns={[
// { title: "Job", dataIndex: "job" },
// { title: "Status", dataIndex: "status" }
// ]}
// dataSource={[{ key: 1, job: "React Dev", status: "Applied" }]}
// />
// );
// }


import { Card, List } from "antd";

const MyApplications = () => {
  return (
    <Card title="My Applications">
      <List
        dataSource={["Frontend Developer", "React Developer","SQL Developer","Python Developer"]}
        renderItem={(item) => <List.Item>{item}</List.Item>}
      />
    </Card>
  );
};

export default MyApplications;