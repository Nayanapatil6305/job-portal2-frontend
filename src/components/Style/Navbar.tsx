import { Menu } from "antd";
import { useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Menu mode="horizontal">
      <Menu.Item key="home" onClick={() => navigate("/")}>
        Home
      </Menu.Item>
      <Menu.Item key="login" onClick={() => navigate("/login")}>
        Login
      </Menu.Item>
    </Menu>
  );
};

export default Navbar;