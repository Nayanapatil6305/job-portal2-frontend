// import { Button, Card, Form, Input, message } from "antd";
// // import { loginApi } from "../../api/auth.api";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const navigate = useNavigate();

//   const onFinish = async (values: { email: string; password: string }) => {
//     try {
//       // const res = await loginApi(values);
//       // localStorage.setItem("token", res.data.token);
//       message.success("Login successful");
//       navigate("/dashboard");
//     } catch (error: any) {
//       message.error(error.response?.data?.message || "Login failed");
//     }
//   };

//   return (
//     <Card title="Login" style={{ maxWidth: 400, margin: "100px auto" }}>
//       <Form layout="vertical" onFinish={onFinish}>
//         <Form.Item
//           label="Email"
//           name="email"
//           rules={[{ required: true, type: "email" }]}
//         >
//           <Input placeholder="Enter email" />
//         </Form.Item>

//         <Form.Item
//           label="Password"
//           name="password"
//           rules={[{ required: true }]}
//         >
//           <Input.Password placeholder="Enter password" />
//         </Form.Item>

//         <Button type="primary" htmlType="submit" block>
//           Login
//         </Button>

//         <Button type="link" block onClick={() => navigate("/forgot-password")}>
//           Forgot Password?
//         </Button>

//         <Button type="link" block onClick={() => navigate("/register")}>
//           New user? Register
//         </Button>
//       </Form>
//     </Card>
//   );
// };

// export default Login;


// import { Button, Card, Form, Input, message } from "antd";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const navigate = useNavigate();

//   const onFinish = async (values: { email: string; password: string }) => {
//     try {
//       // API call later
//       message.success("Login successful");
//       navigate("/dashboard");
//     } catch (error: any) {
//       // message.error("Login failed");
//      message.error(error.response?.data?.message || "Login failed");
//    }
//   };

//   return (
//     <Card title="Login" style={{ maxWidth: 400, margin: "100px auto" }}>
//       <Form layout="vertical" onFinish={onFinish}>
//         <Form.Item
//           label="Email"
//           name="email"
//           rules={[{ required: true, type: "email" }]}
//         >
//           <Input placeholder="Enter email" />
//         </Form.Item>

//         <Form.Item
//           label="Password"
//           name="password"
//           rules={[{ required: true }]}
//         >
//           <Input.Password placeholder="Enter password" />
//         </Form.Item>

//         <Button type="primary" htmlType="submit" block>
//           Login
//         </Button>

//         <Button type="link" block onClick={() => navigate("/forgot-password")}>
//           Forgot Password?
//         </Button>

//         <Button type="link" block onClick={() => navigate("/register")}>
//           New user? Register
//         </Button>
//       </Form>
//     </Card>
//   );
// };

// export default Login;


import { Button, Card, Form, Input, message, Typography } from "antd";
import { useNavigate } from "react-router-dom";

const { Title, Text } = Typography;

const Login = () => {
  const navigate = useNavigate();

  const onFinish = async (values: { email: string; password: string }) => {
    try {
      // API call later
      message.success("Login successful");
      navigate("/dashboard");
    } catch (error: any) {
      message.error(error?.response?.data?.message || "Login failed");
    }
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Card style={{ width: 380 }}>
        <Title level={3} style={{ textAlign: "center" }}>
          Login
        </Title>
        <Text type="secondary" style={{ display: "block", textAlign: "center", marginBottom: 20 }}>
          Welcome back! Please login
        </Text>

        <Form layout="vertical" onFinish={onFinish}>
          {/* Email */}
          <Form.Item
            label="Email Address"
            name="email"
            rules={[
              { required: true, message: "Please enter email" },
              { type: "email", message: "Enter valid email" },
            ]}
          >
            <Input placeholder="example@gmail.com" />
          </Form.Item>

          {/* Password */}
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please enter password" }]}
          >
            <Input.Password placeholder="Enter password" />
          </Form.Item>

          {/* Login Button */}
          <Button type="primary" htmlType="submit" block>
            Login
          </Button>

          {/* Links */}
          <div style={{ textAlign: "center", marginTop: 12 }}>
            <Button type="link" onClick={() => navigate("/forgot-password")}>
              Forgot Password?
            </Button>
            <br />
            <Text>
              New user?{" "}
              <Button type="link" onClick={() => navigate("/register")}>
                Register
              </Button>
            </Text>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default Login;


