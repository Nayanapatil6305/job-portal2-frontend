// import React from "react";
// import { Table, Tag, Space, Button, Typography } from "antd";

// const { Title } = Typography;

// const PostedJobs: React.FC = () => {
//   const columns = [
//     {
//       title: "Job Title",
//       dataIndex: "title",
//       key: "title",
//     },
//     {
//       title: "Location",
//       dataIndex: "location",
//       key: "location",
//     },
//     {
//       title: "Status",
//       dataIndex: "status",
//       key: "status",
//       render: (status: string) =>
//         status === "Open" ? (
//           <Tag color="green">Open</Tag>
//         ) : (
//           <Tag color="red">Closed</Tag>
//         ),
//     },
//     {
//       title: "Action",
//       key: "action",
//       render: () => (
//         <Space>
//           <Button type="link">View</Button>
//           <Button type="link" danger>
//             Close
//           </Button>
//         </Space>
//       ),
//     },
//   ];

//   const data = [
//     {
//       key: "1",
//       title: "Frontend Developer",
//       location: "Bangalore",
//       status: "Open",
//     },
//     {
//       key: "2",
//       title: "Backend Developer",
//       location: "Pune",
//       status: "Closed",
//     },
//   ];

//   return (
//     <>
//       <Title level={3}>Posted Jobs</Title>
//       <Table columns={columns} dataSource={data} />
//     </>
//   );
// };

// export default PostedJobs;

import React from "react";
import { Card, Table, Tag } from "antd";

const PostedJobs: React.FC = () => {
  const columns = [
    { title: "Job Title", dataIndex: "title" },
    { title: "Location", dataIndex: "location" },
    {
      title: "Status",
      dataIndex: "status",
      render: (status: string) => (
        <Tag color={status === "Active" ? "green" : "red"}>
          {status}
        </Tag>
      ),
    },
  ];

  const data = [
    { key: 1, title: "Frontend Developer", location: "Bangalore", status: "Active" },
    { key: 2, title: "Backend Developer", location: "Pune", status: "Closed" },
  ];

  return (
    <Card title="Posted Jobs">
      <Table columns={columns} dataSource={data} pagination={false} />
    </Card>
  );
};

export default PostedJobs;
