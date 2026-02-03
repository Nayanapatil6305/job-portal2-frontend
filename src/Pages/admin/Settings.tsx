import {
  Card,
  Form,
  Input,
  Button,
  Row,
  Col,
  Divider,
  Switch,
  Avatar,
  Upload,
  message,
} from "antd";
import {
  UserOutlined,
  UploadOutlined,
  LockOutlined,
} from "@ant-design/icons";

const Settings = () => {
  const onFinish = () => {
    message.success("Settings updated successfully");
  };

  return (
    <>
      {/* Page Header */}
      <div style={{ marginBottom: 24 }}>
        <h2 style={{ marginBottom: 4 }}>Admin Settings</h2>
        <span style={{ color: "#6b7280" }}>
          Manage your profile, security, and preferences
        </span>
      </div>

      <Row gutter={[24, 24]}>
        {/* Profile Settings */}
        <Col xs={24} md={14}>
          <Card
            title="Profile Information"
            bordered={false}
            style={{ borderRadius: 12 }}
          >
            <Form layout="vertical" onFinish={onFinish}>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    label="Admin Name"
                    name="name"
                    rules={[{ required: true, message: "Name is required" }]}
                  >
                    <Input prefix={<UserOutlined />} placeholder="Admin Name" />
                  </Form.Item>
                </Col>

                <Col span={12}>
                  <Form.Item
                    label="Email Address"
                    name="email"
                    rules={[
                      { required: true, message: "Email is required" },
                      { type: "email", message: "Enter valid email" },
                    ]}
                  >
                    <Input placeholder="admin@company.com" />
                  </Form.Item>
                </Col>
              </Row>

              <Form.Item label="Profile Photo">
                <Upload showUploadList={false}>
                  <Button icon={<UploadOutlined />}>Upload Photo</Button>
                </Upload>
              </Form.Item>

              <Button type="primary" htmlType="submit">
                Save Profile
              </Button>
            </Form>
          </Card>
        </Col>

        {/* Security & Preferences */}
        <Col xs={24} md={10}>
          <Card
            title="Security & Preferences"
            bordered={false}
            style={{ borderRadius: 12 }}
          >
            <Form layout="vertical">
              <Form.Item label="Change Password">
                <Input.Password
                  prefix={<LockOutlined />}
                  placeholder="New Password"
                />
              </Form.Item>

              <Form.Item label="Confirm Password">
                <Input.Password placeholder="Confirm Password" />
              </Form.Item>

              <Divider />

              <Form.Item
                label="Email Notifications"
                valuePropName="checked"
              >
                <Switch defaultChecked />
              </Form.Item>

              <Form.Item
                label="Two-Factor Authentication"
                valuePropName="checked"
              >
                <Switch />
              </Form.Item>

              <Button type="primary" danger style={{ marginTop: 16 }}>
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
