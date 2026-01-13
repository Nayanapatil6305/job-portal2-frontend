// import { Card, Button } from "antd";


// const jobs = [
// { id: 1, title: "React Developer", company: "TCS" },
// { id: 2, title: "Node Developer", company: "Infosys" }
// ];


// export default function JobList() {
// return (
// <>
// {jobs.map(job => (
// <Card key={job.id} title={job.title} extra={job.company} style={{ marginBottom: 16 }}>
// <Button type="primary">Apply</Button>
// </Card>
// ))}
// </>
// );
// }


import { List, Card, Button } from "antd";
import { jobs } from "../../services/Api";

const JobList = () => {
  return (
    <Card title="Available Jobs">
      <List
        dataSource={jobs}
        renderItem={(job) => (
          <List.Item actions={[<Button type="primary">Apply</Button>]}>


    
            <List.Item.Meta
              title={job.title}
              description={`${job.company} - ${job.location}`}
            />
          </List.Item>



        )}
      />
    </Card>
  );
};

export default JobList;