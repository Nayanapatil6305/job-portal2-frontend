import {Button,Card,Form,Input,message,Progress,Steps,Row,Col,DatePicker,Select} from "antd";
import { useState } from "react";

const ResumeBuilder = () => {
  const [form] = Form.useForm();
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    { title: "Profile" },
    { title: "Education" },
    { title: "Experience" },
    { title: "Professional Qualification" },
    { title: "Skills" },
    // { title: "LinkedIn & Resume" },
  ];

  const next = async () => {
    try {
      await form.validateFields();
      setCurrentStep((prev) => prev + 1);
    } catch {
      message.error("Please fill required fields");
    }
  };

  const prev = () => setCurrentStep((prev) => prev - 1);

  const onFinish = (values: any) => {
    console.log(values);
    message.success("Job Applied Successfully");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f5f5f5",
      }}
    >
      <Card style={{ width: "90%", maxWidth: 1100 }}>
        {/* Title */}
        <h2 style={{ textAlign: "center", marginBottom: 30 }}>
          Resume Builder
        </h2>

        {/* Empty Progress Bar */}
        <Progress
          percent={Math.round((currentStep / steps.length) * 100)}
          showInfo={false}
          style={{ marginBottom: 25 }}
        />

        {/* Steps */}
        <Steps current={currentStep} items={steps} />

        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          style={{ marginTop: 40 }}
        >
          {/* STEP 1 – PROFILE */}
          {currentStep === 0 && (
            <>
              <Row gutter={20}>
                <Col span={12}>
                  <Form.Item
                    label="First Name"
                    name="firstName"
                    rules={[{ required: true }]}
                  >
                    <Input placeholder="Enter first name" />
                  </Form.Item>
                </Col>

                <Col span={12}>
                  <Form.Item
                    label="Last Name"
                    name="lastName"
                    rules={[{ required: true }]}
                  >
                    <Input placeholder="Enter last name" />
                  </Form.Item>
                </Col>

                <Col span={12}>
                  <Form.Item label="Date of Birth" name="dob">
                    <DatePicker style={{ width: "100%" }} />
                  </Form.Item>
                </Col>

                <Col span={12}>
                  <Form.Item label="Gender" name="gender">
                    <Select placeholder="Select gender">
                      <Select.Option value="male">Male</Select.Option>
                      <Select.Option value="female">Female</Select.Option>
                    </Select>
                  </Form.Item>
                </Col>

                <Col span={12}>
                  <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ type: "email", required: true }]}
                  >
                    <Input placeholder="Enter email" />
                  </Form.Item>
                </Col>

                <Col span={12}>
                  <Form.Item label="Mobile" name="mobile">
                    <Input placeholder="10 digit number" />
                  </Form.Item>
                </Col>

                <Col span={24}>
                  <Form.Item label="Address" name="address">
                    <Input.TextArea rows={2} />
                  </Form.Item>
                </Col>
              </Row>
            </>
          )}

          {/* STEP 5 – SKILLS */}
          {currentStep === 4 && (
            <Form.List name="skills">
              {(fields, { add, remove }) => (
                <>
                  {fields.map((field) => (
                    <Form.Item key={field.key} name={field.name}>
                      <Input
                        placeholder="Enter skill"
                        addonAfter={
                          <Button
                            danger
                            type="text"
                            onClick={() => remove(field.name)}
                          >
                            Remove
                          </Button>
                        }
                      />
                    </Form.Item>
                  ))}

                  <Button onClick={() => add()} block type="dashed">
                    Add Skill
                  </Button>
                </>
              )}
            </Form.List>
          )}

          {/* Navigation */}
          <div style={{ textAlign: "right", marginTop: 30 }}>
            {currentStep > 0 && (
              <Button onClick={prev} style={{ marginRight: 10 }}>
                Previous
              </Button>
            )}

            {currentStep < steps.length - 1 && (
              <Button type="primary" onClick={next}>
                Next
              </Button>
            )}

            {currentStep === steps.length - 1 && (
              <Button type="primary" htmlType="submit">
                Submit Application
              </Button>
            )}
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default ResumeBuilder;