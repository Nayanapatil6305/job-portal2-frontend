// import React from "react";
// import { Form, Input, Button, Typography, Card } from "antd";

// const { Title } = Typography;

// const Settings: React.FC = () => {
//   return (
//     <>
//       <Title level={3}>Settings</Title>

//       <Card style={{ maxWidth: 500 }}>
//         <Form layout="vertical">
//           <Form.Item label="Company Name">
//             <Input placeholder="Enter company name" />
//           </Form.Item>

//           <Form.Item label="Email">
//             <Input placeholder="Enter email" />
//           </Form.Item>

//           <Form.Item>
//             <Button type="primary">Save Changes</Button>
//           </Form.Item>
//         </Form>
//       </Card>
//     </>
//   );
// };

// export default Settings;


import React from "react";
import { Card, Form, Input, Button } from "antd";

const Settings: React.FC = () => {
  return (
    <Card title="Account Settings" style={{ maxWidth: 500 }}>
      <Form layout="vertical">
        <Form.Item label="Company Name">
          <Input placeholder="Enter company name" />
        </Form.Item>

        <Form.Item label="Email">
          <Input placeholder="Enter email" />
        </Form.Item>

        <Button type="primary">Save Changes</Button>
      </Form>
    </Card>
  );
};

export default Settings;
