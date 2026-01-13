import { Card, Button, Select } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login: React.FC = () => {
  const [role, setRole] = useState<string>();
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!role) return;

    login(role as any);

    if (role === "admin") navigate("/admin");
    else if (role === "recruiter") navigate("/recruiter");
    else navigate("/user");
  };

  return (
    <Card title="Login" style={{ width: 300, margin: "100px auto" }}>
      <Select
        placeholder="Select Role"
        style={{ width: "100%", marginBottom: 20 }}
        onChange={setRole}
        options={[
          { value: "user", label: "User" },
          { value: "recruiter", label: "Recruiter" },
          { value: "admin", label: "Admin" },
        ]}
      />

      <Button type="primary" block onClick={handleLogin}>
        Login
      </Button>
    </Card>
  );
};

export default Login;