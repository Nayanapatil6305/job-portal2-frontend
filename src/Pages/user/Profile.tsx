import { Card, Descriptions, Button } from "antd";

const Profile = () => {
  return (
    <Card
      title="My Profile"
      extra={<Button type="primary">Edit Profile</Button>}
    >
      <Descriptions bordered column={1}>
        <Descriptions.Item label="Name">
          Nayana Patil
        </Descriptions.Item>
        <Descriptions.Item label="Email">
          nayana@email.com
        </Descriptions.Item>
        <Descriptions.Item label="Role">
          Software Developer
        </Descriptions.Item>
        <Descriptions.Item label="Experience">
          2 Years
        </Descriptions.Item>
        <Descriptions.Item label="Skills">
          React, TypeScript, Node.js
        </Descriptions.Item>
      </Descriptions>
    </Card>
  );
};

export default Profile;
