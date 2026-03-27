import { Button, Card, Form, Input, message } from "antd";
// import { forgotPasswordApi } from "../../api/auth.api";

const ForgotPassword = () => {
  const onFinish = async (values: { email: string }) => {
    try {
      // await forgotPasswordApi(values.email);
      message.success("Reset link sent to your email");
    } catch (error: any) {
      message.error("Something went wrong");
    }
  };

  return (
    <Card title="Forgot Password" style={{ maxWidth: 400, margin: "100px auto" }}>
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="Registered Email"
          name="email"
          rules={[{ required: true, type: "email" }]}
        >
          <Input placeholder="Enter email" />
        </Form.Item>

        <Button type="primary" htmlType="submit" block>
          Send Reset Link
        </Button>
      </Form>
    </Card>
  );
};

export default ForgotPassword;