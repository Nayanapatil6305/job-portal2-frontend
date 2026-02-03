import { Card, List, Button, Tag } from "antd";

const Jobs = () => {
  return (
    <Card title="Available Jobs">
      <List
        itemLayout="horizontal"
        dataSource={[
          {
            title: "Frontend Developer",
            company: "Tech Corp",
            type: "Full Time",
          },
          {
            title: "Backend Developer",
            company: "Startup Inc",
            type: "Remote",
          },
        ]}
        renderItem={(item) => (
          <List.Item
            actions={[
              <Button type="link">View</Button>,
              <Button type="primary">Apply</Button>,
            ]}
          >
            <List.Item.Meta
              title={item.title}
              description={item.company}
            />
            <Tag color="blue">{item.type}</Tag>
          </List.Item>
        )}
      />
    </Card>
  );
};

export default Jobs;
