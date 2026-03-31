import React from "react";
import {
  Card,
  Form,
  Input,
  Button,
  Row,
  Col,
  Divider,
  Switch,
  Upload,
  message,
} from "antd";
import {
  MailOutlined,
  PhoneOutlined,
  UploadOutlined,
  LockOutlined,
} from "@ant-design/icons";

const Settings: React.FC = () => {
  const onFinish = () => {
    message.success("Recruiter settings updated successfully");
  };

  return (
    <>
      {/* Page Header */}
      <div style={{ marginBottom: 24 }}>
        <h2 style={{ marginBottom: 4 }}>Recruiter Settings</h2>
        <span style={{ color: "#6b7280" }}>
          Manage your company profile and recruiter preferences
        </span>
      </div>

      <Row gutter={[24, 24]}>
        {/* Company Profile */}
        <Col xs={24} md={14}>
          <Card
            title="Company Profile"
            bordered={false}
            style={{ borderRadius: 12 }}
          >
            <Form layout="vertical" onFinish={onFinish}>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    label="Company Name"
                    name="companyName"
                    rules={[{ required: true, message: "Company name is required" }]}
                  >
                    <Input placeholder="Enter company name" />
                  </Form.Item>
                </Col>

                <Col span={12}>
                  <Form.Item
                    label="Official Email"
                    name="email"
                    rules={[
                      { required: true, message: "Email is required" },
                      { type: "email", message: "Enter valid email" },
                    ]}
                  >
                    <Input prefix={<MailOutlined />} placeholder="hr@company.com" />
                  </Form.Item>
                </Col>
              </Row>

              <Form.Item label="Company Website">
                <Input placeholder="https://www.company.com" />
              </Form.Item>

              <Form.Item label="Company Logo">
                <Upload showUploadList={false}>
                  <Button icon={<UploadOutlined />}>Upload Logo</Button>
                </Upload>
              </Form.Item>

              <Button type="primary" htmlType="submit">
                Save Company Details
              </Button>
            </Form>
          </Card>
        </Col>

        {/* Recruiter Preferences */}
        <Col xs={24} md={10}>
          <Card
            title="Recruiter Preferences"
            bordered={false}
            style={{ borderRadius: 12 }}
          >
            <Form layout="vertical">
              <Form.Item label="Recruiter Phone">
                <Input
                  prefix={<PhoneOutlined />}
                  placeholder="+91 9876543210"
                />
              </Form.Item>

              <Divider />

              <Form.Item
                label="Email Notifications"
                valuePropName="checked"
              >
                <Switch defaultChecked />
              </Form.Item>

              <Form.Item
                label="Candidate Alerts"
                valuePropName="checked"
              >
                <Switch defaultChecked />
              </Form.Item>

              <Divider />

              <Form.Item label="Change Password">
                <Input.Password
                  prefix={<LockOutlined />}
                  placeholder="New password"
                />
              </Form.Item>

              <Button type="primary" danger>
                Update Security
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Settings;
