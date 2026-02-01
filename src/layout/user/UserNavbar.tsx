import { Avatar, Dropdown, Layout } from "antd";
const { Header } = Layout;

const UserNavbar = () => (
  <Header style={{ background: "#020500", color: "#fff"  , height:80 , fontWeight:"bold"}}>
    User Dashboard
  
        {/* <Dropdown menu={{ items }}>
        <Avatar icon={<UserOutlined/>} style={{ cursor: "pointer" }} />
      </Dropdown> */}
    </Header>

);

export default UserNavbar;
