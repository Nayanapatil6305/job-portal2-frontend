import React from "react";
import { Card, Button, Descriptions, Typography, message } from "antd";
import { useParams, useNavigate } from "react-router-dom";

const { Title, Text } = Typography;

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  experience: string;
  salary: string;
  description: string;
}

const mockJobs: Job[] = [
  {
    id: "1",
    title: "React Developer",
    company: "TCS",
    location: "Pune",
    experience: "1 - 3 Years",
    salary: "₹5 - 8 LPA",
    description:
      "We are looking for a React Developer with knowledge of TypeScript and Ant Design."
  },
  {
    id: "2",
    title: "Backend Developer",
    company: "Infosys",
    location: "Bangalore",
    experience: "2 - 4 Years",
    salary: "₹6 - 10 LPA",
    description:
      "Strong experience in Node.js, Express, and MongoDB required."
  }
];

const JobDetails: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const job = mockJobs.find((job) => job.id === id);

  const handleApply = () => {
    message.success("Job applied successfully!");
    navigate("/user/jobs");
  };

  if (!job) {
    return <Title level={3}>Job not found</Title>;
  }

  return (
    <Card style={{ maxWidth: 900, margin: "20px auto" }}>
      <Title level={2}>{job.title}</Title>
      <Text type="secondary">{job.company}</Text>

      <Descriptions bordered column={1} style={{ marginTop: 20 }}>
        <Descriptions.Item label="Location">
          {job.location}
        </Descriptions.Item>
        <Descriptions.Item label="Experience">
          {job.experience}
        </Descriptions.Item>
        <Descriptions.Item label="Salary">
          {job.salary}
        </Descriptions.Item>
        <Descriptions.Item label="Job Description">
          {job.description}
        </Descriptions.Item>
      </Descriptions>

      <Button
        type="primary"
        size="large"
        style={{ marginTop: 20 }}
        onClick={handleApply}
      >
        Apply Job
      </Button>
    </Card>
  );
};

export default JobDetails;