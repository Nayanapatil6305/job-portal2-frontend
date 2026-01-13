// 


import { Card, Form, Input, Button } from "antd";

const PostJob = () => {
  const onFinish = (values: any) => {
    console.log("Job Posted:", values);
  };

  return (
    <Card title="Post Job">
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item label="Job Title" name="title" required>
          <Input />
        </Form.Item>

        <Form.Item label="Company" name="company" required>
          <Input />
        </Form.Item>

        <Form.Item label="Location" name="location" required>
          <Input />
        </Form.Item>

        <Form.Item label="Description" name="description" required>
          <Input />
        </Form.Item>


        <Button type="primary" htmlType="submit">
          Post Job
        </Button>
      </Form>
    </Card>
  );
};

export default PostJob;