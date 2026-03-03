import { useParams, useNavigate } from "react-router-dom";
import { Card, Button, Tag, Divider, Descriptions } from "antd";
import { jobs } from "../../services/Api";

const JobDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const job = jobs.find(j => j.id === Number(id));

  if (!job) {
    return <h3>Job not found</h3>;
  }

  return (
    <Card
      title={job.title}
      extra={<Tag color="blue">{job.experience}</Tag>}
      style={{ maxWidth: 800, margin: "auto" }}
    >
      {/* BASIC INFO */}
      <Descriptions bordered column={1}>
        <Descriptions.Item label="Company">
          {job.company}
        </Descriptions.Item>

        <Descriptions.Item label="Location">
          {job.location}
        </Descriptions.Item>

        <Descriptions.Item label="Experience">
          {job.experience}
        </Descriptions.Item>

        <Descriptions.Item label="Salary">
          {job.salary}
        </Descriptions.Item>
      </Descriptions>

      <Divider />

      {/* SKILLS */}
      <h3>Skills Required</h3>
      {job.skills.map(skill => (
        <Tag key={skill} color="green" style={{ marginBottom: 8 }}>
          {skill}
        </Tag>
      ))}

      <Divider />

      {/* DESCRIPTION */}
      <h3>Job Description</h3>
      <p>{job.description}</p>


<p>
  <b>Status:</b>{" "}
  <Tag
    color={
      job.status === "Approved"
        ? "green"
        : job.status === "Rejected"
        ? "red"
        : "orange"
    }
  >
    {job.status}
  </Tag>
</p>
      <Divider />

      {/* APPLY BUTTON */}
      <Button
        type="primary"
        size="large"
        onClick={() => navigate("/user/apply")}
      >
        Apply Now
      </Button>
    </Card>
  );
};

export default JobDetails;