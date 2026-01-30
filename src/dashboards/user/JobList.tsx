



import { Card, Button, Typography } from "antd";
import { jobs } from "../../services/Api";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;

const JobList = () => {
  const navigate = useNavigate();

  return (
    <>
      <Title level={3}>Available Jobs</Title>

      {jobs.map((job) => (
        <Card
          key={job.id}
          style={{ marginBottom: 16 }}
          title={job.title}
          extra={
            <Button
              type="primary"
              onClick={() => navigate(`/user/job/${job.id}`)}
            >
              Apply
            </Button>
          }
        >
          <p><b>{job.company}</b> - {job.location}</p>
        </Card>
      ))}
    </>
  );
};

export default JobList;