import { Button, Card, Form, Input, message } from "antd";

const ResumeBuilder = () => {
  const onFinish = (values: any) => {
    console.log("Resume Data:", values);
    message.success("Resume saved successfully");
  };

  return (
    <Card title="Resume Builder">
      <Form layout="vertical" onFinish={onFinish}>
        {/* Personal Info */}
        <Form.Item
          label="Full Name"
          name="name"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, type: "email" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item label="Phone Number" name="phone">
          <Input />
        </Form.Item>

        {/* Skills */}
        <Form.List name="skills">
          {(fields, { add, remove }) => (
            <>
              <h3>Skills</h3>
              {fields.map(({ key, name }) => (
                <Form.Item key={key} name={name} rules={[{ required: true }]}>
                  <Input
                    placeholder="Enter skill"
                    addonAfter={
                      <Button danger onClick={() => remove(name)}>
                        Remove
                      </Button>
                    }
                  />
                </Form.Item>
              ))}
              <Button type="dashed" onClick={() => add()} block>
                Add Skill
              </Button>
            </>
          )}
        </Form.List>

        {/* Experience */}
        <Form.Item label="Experience" name="experience">
          <Input.TextArea rows={3} />
        </Form.Item>

        {/* Education */}
        <Form.Item label="Education" name="education">
          <Input.TextArea rows={2} />
        </Form.Item>

        <Button type="primary" htmlType="submit">
          Save Resume
        </Button>
      </Form>
    </Card>
  );
};

export default ResumeBuilder;