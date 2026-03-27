import { Button, Card, Form, Input, message } from "antd";
// import { loginApi } from "../../api/auth.api";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const onFinish = async (values: { email: string; password: string }) => {
    try {
      // const res = await loginApi(values);
      // localStorage.setItem("token", res.data.token);
      message.success("Login successful");
      navigate("/dashboard");
    } catch (error: any) {
      message.error(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <Card title="Login" style={{ maxWidth: 400, margin: "100px auto" }}>
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, type: "email" }]}
        >
          <Input placeholder="Enter email" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true }]}
        >
          <Input.Password placeholder="Enter password" />
        </Form.Item>

        <Button type="primary" htmlType="submit" block>
          Login
        </Button>

        <Button type="link" block onClick={() => navigate("/forgot-password")}>
          Forgot Password?
        </Button>

        <Button type="link" block onClick={() => navigate("/register")}>
          New user? Register
        </Button>
      </Form>
    </Card>
  );
};

export default Login;
