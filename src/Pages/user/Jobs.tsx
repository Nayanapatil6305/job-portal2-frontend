import { Card, Button, Tag, message, Row, Col } from "antd";

const Jobs = () => {
  const jobs = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "TCS",
      location: "Bangalore",
      type: "Full Time",
    },
    {
      id: 2,
      title: "React Developer",
      company: "Infosys",
      location: "Pune",
      type: "Internship",
    },

        {
      id: 3,
      title: "Backend Developer",
      company: "Wipro",
      location: "Delhi",
      type: "Full Time",
    },

        {
      id: 4,
      title: "Python Developer",
      company: "Infosys",
      location: "Pune",
      type: "Internship",
    },


  ];

  const applyJob = (title: string) => {
    message.success(`Applied for ${title}`);
  };

  return (
    <>
      {jobs.map((job) => (
        <Card
          key={job.id}
          title={job.title}
          style={{ marginBottom: 16 }}
          extra={<Tag color="blue">{job.type}</Tag>}
        >
          <p><b>Company:</b> {job.company}</p>
          <p><b>Location:</b> {job.location}</p>

          <Button type="primary" onClick={() => applyJob(job.title)}>
            Apply
          </Button>
        </Card>
      ))}
    </>

          /* RECOMMENDED JOBS */
       /* <h3 style={{ marginTop: 30 }}> </h3>
      <Row gutter={16}>
        <Col span={8}>
          <Card hoverable>
            <h4>React Developer</h4>
            <p>ABC Solutions</p>
            <Button type="primary">Apply</Button>
          </Card>
        </Col>
        <Col span={8}>
          <Card hoverable>
            <h4>Node.js Developer</h4>
            <p>Cloud Systems</p>
            <Button type="primary">Apply</Button>
          </Card>
        </Col>
        <Col span={8}>
          <Card hoverable>
            <h4>UI Designer</h4>
            <p>Creative Studio</p>
            <Button type="primary">Apply</Button>
          </Card>
        </Col>
      </Row> 
</> */
  );
};

export default Jobs;