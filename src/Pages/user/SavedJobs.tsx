import { Card, List, Button, Tag, Space } from "antd";
import {
  StarFilled,
  EnvironmentOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";

const SavedJobs = () => {
  const savedJobs = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "TechCorp Solutions",
      location: "Pune, India",
      type: "Full Time",
      posted: "2 days ago",
    },
    {
      id: 2,
      title: "React Developer",
      company: "Innovate Labs",
      location: "Remote",
      type: "Remote",
      posted: "5 days ago",
    },
    {
      id: 3,
      title: "UI Engineer",
      company: "DesignHub Pvt Ltd",
      location: "Bangalore, India",
      type: "Hybrid",
      posted: "1 week ago",
    },
  ];

  return (
    <Card title="Saved Jobs">
      <List
        itemLayout="vertical"
        dataSource={savedJobs}
        renderItem={(job) => (
          <List.Item
            key={job.id}
            actions={[
              <Button type="link">View</Button>,
              <Button type="primary">Apply</Button>,
              <Button danger>Remove</Button>,
            ]}
          >
            <List.Item.Meta
              title={
                <Space>
                  {job.title}
                  <StarFilled style={{ color: "#facc15" }} />
                </Space>
              }
              description={job.company}
            />

            <Space size={16}>
              <span>
                <EnvironmentOutlined /> {job.location}
              </span>
              <span>
                <ClockCircleOutlined /> {job.posted}
              </span>
              <Tag color="blue">{job.type}</Tag>
            </Space>
          </List.Item>
        )}
      />
    </Card>
  );
};

export default SavedJobs;
