// import { Card, Button, message } from "antd";

// const ApplyJobscreen1 = () => {
//   const applyJob = () => {
//     message.success("Job Applied Successfully!");
//   };

//   return (
//     <Card title="Apply Job">
//       <p>Are you sure you want to apply?</p>
//       <Button type="primary" onClick={applyJob}>
//         Confirm Apply
//       </Button>
//     </Card>
//   );
// };

// export default ApplyJobscreen1;

import { Card, Tag } from "antd";
import { jobs } from "../../services/Api";

const ApplyJobScreen = () => {
  // for demo: first job application
  const appliedJob = jobs[0];

  return (
    <Card title="My Job Application" style={{ width: 500 }}>
      <p><b>Job Title:</b> {appliedJob.title}</p>
      <p><b>Company:</b> {appliedJob.company}</p>

      <p>
        <b>Application Status:</b>{" "}
        <Tag
          color={
            appliedJob.status === "Approved"
              ? "green"
              : appliedJob.status === "Rejected"
              ? "red"
              : "orange"
          }
        >
          {appliedJob.status}
        </Tag>
      </p>
    </Card>
  );
};

export default ApplyJobScreen;