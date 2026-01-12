import { Form, Input, Button } from "antd";


export default function PostJob() {
return (
<Form layout="vertical">
<Form.Item label="Job Title"><Input /></Form.Item>
<Button type="primary">Post Job</Button>
</Form>
);
}