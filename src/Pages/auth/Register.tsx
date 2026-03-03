import { Card, Form, Input, Button } from "antd";

const Register: React.FC = () => {
  const onFinish = (values: any) => {
    console.log("Register Data:", values);
  };

  return (
    <Card title="Register" style={{ width: 400, margin: "100px auto" }}>
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item label="Name" name="name" required>
          <Input />
        </Form.Item>

        <Form.Item label="Email" name="email" required>
          <Input />
        </Form.Item>

        <Form.Item label="Password" name="password" required>
          <Input.Password />
        </Form.Item>

        <Button type="primary" htmlType="submit" block>
          Register
        </Button>
      </Form>
    </Card>
  );
};

export default Register;