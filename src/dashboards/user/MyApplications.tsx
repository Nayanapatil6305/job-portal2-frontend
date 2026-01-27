// 


import { Card, Typography } from "antd";
import { jobs } from "../../services/Api";

const { Title } = Typography;

const MyApplications = () => {
  const appliedJobs = jobs.slice(0, 2); // dummy applied jobs

  return (
    <>
      <Title level={3}>My Applications</Title>

      {appliedJobs.map(job => (
        <Card key={job.id} style={{ marginBottom: 16 }} title={job.title}>
          <p><b>{job.company}</b> - {job.location}</p>
        </Card>
      ))}
    </>
  );
};

export default MyApplications;