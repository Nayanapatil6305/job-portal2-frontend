import { Card, Form, Input, Button } from "antd";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const onFinish = () => {
    navigate("/user/dashboard");
  };

  return (
    <Card title="Login" style={{ maxWidth: 400, margin: "100px auto" }}>
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item label="Email" name="email" required>
          <Input />
        </Form.Item>

        <Form.Item label="Password" name="password" required>
          <Input.Password />
        </Form.Item>

        <Button type="primary" htmlType="submit" block>
          Login
        </Button>
      </Form>
    </Card>
  );
};

export default Login;
