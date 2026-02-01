import { Button, Card, Form, Input, Select, message } from "antd";

const { Option } = Select;

const PostJob = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Job Posted:", values);
    message.success("Job posted successfully!");
    form.resetFields();
  };

  return (
    <Card title="Post New Job" style={{ maxWidth: 600 }}>
      <Form layout="vertical" form={form} onFinish={onFinish}>
        <Form.Item
          label="Job Title"
          name="title"
          rules={[{ required: true, message: "Please enter job title" }]}
        >
          <Input placeholder="Frontend Developer" />
        </Form.Item>

        <Form.Item
          label="Company Name"
          name="company"
          rules={[{ required: true, message: "Please enter company name" }]}
        >
          <Input placeholder="Infosys" />
        </Form.Item>

        <Form.Item
          label="Location"
          name="location"
          rules={[{ required: true, message: "Please enter location" }]}
        >
          <Input placeholder="Bangalore" />
        </Form.Item>

        <Form.Item
          label="Job Type"
          name="type"
          rules={[{ required: true, message: "Select job type" }]}
        >
          <Select placeholder="Select job type">
            <Option value="Full Time">Full Time</Option>
            <Option value="Part Time">Part Time</Option>
            <Option value="Internship">Internship</Option>
          </Select>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Post Job
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default PostJob;