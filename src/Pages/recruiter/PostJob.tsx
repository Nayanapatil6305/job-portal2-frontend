import {
  Button,
  Card,
  Form,
  Input,
  Select,
  Row,
  Col,
  message,
  Typography,
} from "antd";

const { Option } = Select;
const { TextArea } = Input;
const { Title, Text } = Typography;

const PostJob = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Job Posted:", values);
    message.success("Job posted successfully!");
    form.resetFields();
  };

  return (
    <Card
      bordered={false}
      style={{
        maxWidth: 900,
        borderRadius: 12,
      }}
    >
      {/* Page Header */}
      <div style={{ marginBottom: 24 }}>
        <Title level={3} style={{ marginBottom: 4 }}>
          Post a New Job
        </Title>
        <Text type="secondary">
          Fill in the details below to publish a job opening
        </Text>
      </div>

      <Form layout="vertical" form={form} onFinish={onFinish}>
        {/* Job Details */}
        <Title level={5}>Job Details</Title>

        <Row gutter={16}>
          <Col xs={24} md={12}>
            <Form.Item
              label="Job Title"
              name="title"
              rules={[{ required: true, message: "Enter job title" }]}
            >
              <Input placeholder="Frontend Developer" />
            </Form.Item>
          </Col>

          <Col xs={24} md={12}>
            <Form.Item
              label="Company Name"
              name="company"
              rules={[{ required: true, message: "Enter company name" }]}
            >
              <Input placeholder="Infosys Ltd." />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col xs={24} md={12}>
            <Form.Item
              label="Location"
              name="location"
              rules={[{ required: true, message: "Enter job location" }]}
            >
              <Input placeholder="Bangalore / Remote" />
            </Form.Item>
          </Col>

          <Col xs={24} md={12}>
            <Form.Item
              label="Work Mode"
              name="mode"
              rules={[{ required: true, message: "Select work mode" }]}
            >
              <Select placeholder="Select work mode">
                <Option value="Onsite">Onsite</Option>
                <Option value="Hybrid">Hybrid</Option>
                <Option value="Remote">Remote</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>

        {/* Employment Details */}
        <Title level={5} style={{ marginTop: 24 }}>
          Employment Details
        </Title>

        <Row gutter={16}>
          <Col xs={24} md={12}>
            <Form.Item
              label="Employment Type"
              name="type"
              rules={[{ required: true, message: "Select employment type" }]}
            >
              <Select placeholder="Select employment type">
                <Option value="Full Time">Full Time</Option>
                <Option value="Part Time">Part Time</Option>
                <Option value="Internship">Internship</Option>
                <Option value="Contract">Contract</Option>
              </Select>
            </Form.Item>
          </Col>

          <Col xs={24} md={12}>
            <Form.Item
              label="Experience Required"
              name="experience"
              rules={[{ required: true, message: "Select experience level" }]}
            >
              <Select placeholder="Experience">
                <Option value="0-1 Years">0–1 Years</Option>
                <Option value="1-3 Years">1–3 Years</Option>
                <Option value="3-5 Years">3–5 Years</Option>
                <Option value="5+ Years">5+ Years</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col xs={24} md={12}>
            <Form.Item label="Salary Range" name="salary">
              <Input placeholder="₹6 – ₹10 LPA" />
            </Form.Item>
          </Col>

          <Col xs={24} md={12}>
            <Form.Item label="Key Skills" name="skills">
              <Input placeholder="React, TypeScript, REST APIs" />
            </Form.Item>
          </Col>
        </Row>

        {/* Job Description */}
        <Title level={5} style={{ marginTop: 24 }}>
          Job Description
        </Title>

        <Form.Item
          name="description"
          rules={[{ required: true, message: "Enter job description" }]}
        >
          <TextArea
            rows={4}
            placeholder="Describe responsibilities, requirements, benefits, etc."
          />
        </Form.Item>

        {/* Actions */}
        <Form.Item style={{ marginTop: 24 }}>
          <Button type="primary" htmlType="submit">
            Publish Job
          </Button>

          <Button
            style={{ marginLeft: 12 }}
            onClick={() => form.resetFields()}
          >
            Reset
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default PostJob;
