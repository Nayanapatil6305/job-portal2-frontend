// import { Button, Card, Form, Input, message } from "antd";
// // import { registerApi } from "../../api/auth.api";
// import { useNavigate } from "react-router-dom";

// const Register = () => {
//   const navigate = useNavigate();

//   const onFinish = async (values: any) => {
//     try {
//       // await registerApi(values);
//       message.success("Registration successful");
//       navigate("/");
//     } catch (error: any) {
//       message.error(error.response?.data?.message || "Registration failed");
//     }
//   };

//   return (
//     <Card title="Register" style={{ maxWidth: 400, margin: "100px auto" }}>
//       <Form layout="vertical" onFinish={onFinish}>
//         <Form.Item name="name" label="Full Name" rules={[{ required: true }]}>
//           <Input />
//         </Form.Item>

//         <Form.Item
//           name="email"
//           label="Email"
//           rules={[{ required: true, type: "email" }]}
//         >
//           <Input />
//         </Form.Item>

//         <Form.Item
//           name="password"
//           label="Password"
//           rules={[{ required: true, min: 6 }]}
//         >
//           <Input.Password />
//         </Form.Item>

//         <Form.Item
//           name="confirmPassword"
//           label="Confirm Password"
//           dependencies={["password"]}
//           rules={[
//             ({ getFieldValue }) => ({
//               validator(_, value) {
//                 if (!value || getFieldValue("password") === value) {
//                   return Promise.resolve();
//                 }
//                 return Promise.reject("Passwords do not match");
//               },
//             }),
//           ]}
//         >
//           <Input.Password />
//         </Form.Item>

//         <Button type="primary" htmlType="submit" block>
//           Register
//         </Button>
//       </Form>
//     </Card>
//   );
// };

// export default Register;


import { Button, Card, Form, Input, message } from "antd";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const onFinish = async (values: any) => {
    try {
      // API call later
      message.success("Registration successful");
      navigate("/");
    } catch (error: any) {
      message.error("Registration failed");
    }
  };

  return (
    <Card title="Register" style={{ maxWidth: 400, margin: "100px auto" }}>
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item name="name" label="Full Name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        <Form.Item
          name="email"
          label="Email"
          rules={[{ required: true, type: "email" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[{ required: true, min: 6 }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="confirmPassword"
          label="Confirm Password"
          dependencies={["password"]}
          rules={[
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error("Passwords do not match"));
              },
            }),
          ]}
        >
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
