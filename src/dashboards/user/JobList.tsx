import { Card, Button } from "antd";


const jobs = [
{ id: 1, title: "React Developer", company: "TCS" },
{ id: 2, title: "Node Developer", company: "Infosys" }
];


export default function JobList() {
return (
<>
{jobs.map(job => (
<Card key={job.id} title={job.title} extra={job.company} style={{ marginBottom: 16 }}>
<Button type="primary">Apply</Button>
</Card>
))}
</>
);
}