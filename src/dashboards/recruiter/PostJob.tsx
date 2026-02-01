


// // import { Card, Form, Input, Button } from "antd";

// // const PostJob = () => {
// //   const onFinish = (values: any) => {
// //     console.log("Job Posted:", values);
// //   };

// //   return (
// //     <Card title="Post Job">
// //       <Form layout="vertical" onFinish={onFinish}>
// //         <Form.Item label="Job Title" name="title" required>
// //           <Input />
// //         </Form.Item>

// //         <Form.Item label="Company" name="company" required>
// //           <Input />
// //         </Form.Item>

// //         <Form.Item label="Location" name="location" required>
// //           <Input />
// //         </Form.Item>

// //         <Form.Item label="Description" name="description" required>
// //           <Input />
// //         </Form.Item>


// //         <Button type="primary" htmlType="submit">
// //           Post Job
// //         </Button>
// //       </Form>
// //     </Card>
// //   );
// // };

// // export default PostJob;








// import React from "react";
// import { Card, Form, Input, Button, Typography, Row, Col } from "antd";

// const { Title } = Typography;
// const { TextArea } = Input;

// const PostJob: React.FC = () => {
//   const onFinish = (values: any) => {
//     console.log("Job Posted:", values);
//   };

//   return (
//     <Row justify="center" style={{ marginTop: 40 }}>
//       <Col xs={24} sm={22} md={16} lg={12}>
//         <Card
//           bordered={false}
//           style={{
//             borderRadius: 12,
//             boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
//           }}
//         >
//           <Title level={3} style={{ textAlign: "center", marginBottom: 30 }}>
//             Post a Job
//           </Title>

//           <Form layout="vertical" onFinish={onFinish}>
//             <Form.Item
//               label="Job Title"
//               name="title"
//               rules={[{ required: true, message: "Please enter job title" }]}
//             >
//               <Input placeholder="Eg: Frontend Developer" />
//             </Form.Item>

//             <Form.Item
//               label="Company Name"
//               name="company"
//               rules={[{ required: true, message: "Please enter company name" }]}
//             >
//               <Input placeholder="Eg: Infosys" />
//             </Form.Item>

//             <Form.Item
//               label="Location"
//               name="location"
//               rules={[{ required: true, message: "Please enter job location" }]}
//             >
//               <Input placeholder="Eg: Bangalore" />
//             </Form.Item>

//             <Form.Item
//               label="Job Description"
//               name="description"
//               rules={[{ required: true, message: "Please enter job description" }]}
//             >
//               <TextArea rows={4} placeholder="Enter job responsibilities and requirements" />
//             </Form.Item>

//             <Form.Item style={{ textAlign: "center" }}>
//               <Button type="primary" htmlType="submit" size="large">
//                 Post Job
//               </Button>
//             </Form.Item>
//           </Form>
//         </Card>
//       </Col>
//     </Row>
//   );
// };

// export default PostJob;




import { Button, Card, Form, Input } from "antd";

const PostJob = () => {
  return (
    <Card title="Post New Job">
      <Form layout="vertical">
        <Form.Item label="Job Title">
          <Input placeholder="Enter job title" />
        </Form.Item>

        <Form.Item label="Company">
          <Input placeholder="Company name" />
        </Form.Item>

        <Form.Item label="Description">
          <Input.TextArea rows={4} />
        </Form.Item>

        <Button type="primary">Post Job</Button>
      </Form>
    </Card>
  );
};

export default PostJob;