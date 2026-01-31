import React, { useState } from "react";
import { Steps, Button, Form, Input, Select, Row, Col } from "antd";
import "../../components/Style/Applyjobs.css";

// import Mokdata from "../mockdata/mockData.json";

import { Upload, message } from "antd";
import { UploadOutlined, VideoCameraOutlined } from "@ant-design/icons";


const { Option } = Select;
// const [current, setCurrent] = useState(0);

const ApplyJobScreen: React.FC = () => {
  // const [current, setCurrent] = useState(0);
  const [current, setCurrent] = useState(0);
  // const [current, setCurrent] = useState< 0 | 1 | 2 | 3 | 4 | 5>(0);

  const beforeVideoUpload = (file: File) => {
  const isVideo =
    file.type === "video/mp4" || file.type === "video/webm";

  if (!isVideo) {
    message.error("You can upload only MP4 or WebM video files!");
    return Upload.LIST_IGNORE;
  }

  const isLessThan50MB = file.size / 1024 / 1024 < 50;
  if (!isLessThan50MB) {
    message.error("Video must be smaller than 50MB!");
    return Upload.LIST_IGNORE;
  }

  return false; // prevent auto upload
};



  const [formProfile] = Form.useForm();
  const [formEducation] = Form.useForm();
  const [formExperience] = Form.useForm();
  const [formProfessional] = Form.useForm();
  const [formSkills] = Form.useForm();
   const [formResumee] = Form.useForm();

  const steps = [
    { title: "Profile" },
    { title: "Education" },
    { title: "Experience" },
    { title: "Professional Qualification" },
    { title: "Skills" },
    // 
    { title: "LinkedIn & Resume" },
  ];

  const forms = [
    formProfile,
    formEducation,
    formExperience,
    formProfessional,
    formSkills,
    formResumee
  ];

  const next = () => {
  forms[current]
    .validateFields()
    .then(() => {
      setCurrent((prev) => prev + 1);
    })
    .catch(() => {});

};

  const prev = () => setCurrent(current - 1);

  const submit = () => {
  forms[current]
    .validateFields()
    .then((values) => {
      console.log("Final Submit", values);
      alert("Application Submitted Successfully!");
    })
    .catch(() => {});
};


  return (
    <div className="apply-job-container">
      <h2 className="apply-job-title">Apply for Job</h2>

      <Steps
         current={current}
  labelPlacement="vertical"
  items={steps}
  className="apply-steps"
  onChange={(step) => {
    setCurrent(step);
  }}
  
      />

      <div className="steps-content">

        {/* STEP 1 */}
        {current === 0 && (
          <Form form={formProfile} layout="vertical" size="large">
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item label="First Name" name="firstName" rules={[{ required: true }]}>
                  <Input placeholder="Enter first name" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="Last Name" name="lastName" rules={[{ required: true }]}>
                  <Input placeholder="Enter last name" />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col span={12}>
                <Form.Item label="Date of Birth" name="dob" rules={[{ required: true }]}>
                  <Input type="date" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="Gender" name="gender" rules={[{ required: true }]}>
                  <Select placeholder="Select gender">
                    <Option value="male">Male</Option>
                    <Option value="female">Female</Option>
                    <Option value="other">Other</Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col span={12}>
                <Form.Item label="Email" name="email" rules={[{ required: true, type: "email" }]}>
                  <Input placeholder="Enter email" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="Mobile" name="mobile" rules={[{ required: true }]}>
                  <Input placeholder="10 digit number" />
                </Form.Item>
              </Col>
            </Row>

            <Form.Item label="Address" name="address" rules={[{ required: true }]}>
              <Input.TextArea rows={3} placeholder="Enter address" />
            </Form.Item>
          </Form>
        )}

        {/* STEP 2 */}
        {current === 1 && (
          <Form form={formEducation} layout="vertical" size="large">
            <Form.Item label="Highest Qualification" name="qualification" rules={[{ required: true }]}>
              <Select placeholder="Select qualification">
                <Option value="bca">BCA</Option>
                <Option value="btech">B.Tech</Option>
                <Option value="mba">MBA</Option>
              </Select>
            </Form.Item>

            <Form.Item label="College / University" name="college" rules={[{ required: true }]}>
              <Input placeholder="Enter college name" />
            </Form.Item>

            <Row gutter={16}>
              <Col span={12}>
                <Form.Item label="Year of Passing" name="year" rules={[{ required: true }]}>
                  <Input placeholder="2025" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="CGPA / Percentage" name="cgpa" rules={[{ required: true }]}>
                  <Input placeholder="8.5 / 85%" />
                </Form.Item>
              </Col>
            </Row>
          </Form>
        )}

        {/* STEP 3 */}
        {current === 2 && (
          <Form form={formExperience} layout="vertical" size="large">
            <Form.Item label="Total Experience (Years)" name="experience" rules={[{ required: true }]}>
              <Input placeholder="2" />
            </Form.Item>
            <Form.Item label="Current Company" name="company">
              <Input placeholder="Optional" />
            </Form.Item>
            <Form.Item
  label="Job Role / Designation"
  name="jobRole"
  rules={[{ required: true, message: "Please enter your role" }]}
>
  <Input placeholder="e.g. Software Developer, Intern" />
</Form.Item>
<Form.Item
  label="Employment Type"
  name="employmentType"
  rules={[{ required: true, message: "Please select employment type" }]}
>
  <Select placeholder="Select employment type">
    <Option value="fulltime">Full Time</Option>
    <Option value="parttime">Part Time</Option>
    <Option value="internship">Internship</Option>
    <Option value="contract">Contract</Option>
    <Option value="freelance">Freelance</Option>
  </Select>

</Form.Item>
          </Form>
        )}

        {/* STEP 4 */}
        {current === 3 && (
          <Form form={formProfessional} layout="vertical" size="large">
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item label="Certifications" name="certifications" rules={[{ required: true }]}>
                  <Input placeholder="AWS, PMP" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="Professional Courses" name="courses" rules={[{ required: true }]}>
                  <Input placeholder="Full Stack Development" />
                </Form.Item>
              </Col>
              </Row>
              <Row gutter={16}>
              <Col span={12}>
              <Form.Item
  label="Issuing Organization"
  name="issuingOrganization"
  rules={[{ required: true, message: "Please enter issuing organization" }]}
>
  <Input placeholder="e.g. AWS, Google, Microsoft" />
</Form.Item>
</Col>
</Row>
<Col span={12}>
<Form.Item
  label="Year of Certification"
  name="certificationYear"
  rules={[{ required: true, message: "Please enter certification year" }]}
>
  <Input placeholder="e.g. 2024" />
</Form.Item>
</Col>

</Form>

        )}
{current === 4 && (
  <Form form={formSkills} layout="vertical" size="large">
<Row gutter={16}>
  <Col span={12}>
    <Form.Item
      label="Languages Known"
      name="languages"
      rules={[{ required: true, message: "Please select languages" }]}
    >
      <Select
        mode="multiple"
        placeholder="Select languages"
        allowClear
      >
        <Option value="marathi">Marathi</Option>
        <Option value="english">English</Option>
        <Option value="hindi">Hindi</Option>
        <Option value="urdu">Urdu</Option>
        <Option value="tamil">Tamil</Option>
        <Option value="telugu">Telugu</Option>
        <Option value="kannada">Kannada</Option>
        <Option value="gujarati">Gujarati</Option>
      </Select>
    </Form.Item>
  </Col>
</Row>
  <Row gutter={16}>
      <Col span={12}>
        <Form.Item
          label="Technical Skills"
          name="technicalSkills"
          rules={[{ required: true, message: "Please enter technical skills" }]}
        >
          <Input placeholder="e.g. React, Node, Python" />
        </Form.Item>
      </Col>
      <Col span={12}>
        <Form.Item
          label="Tools / Languages"
          name="tools"
          rules={[{ required: true, message: "Please enter tools/languages" }]}
        >
          <Input placeholder="e.g. Git, Docker, SQL" />
        </Form.Item>
      </Col>

</Row>




    
  </Form>
)}





           {/* ======= */}
{/* STEP 6 */}
{current === 5 && (
  <Form form={formResumee} layout="vertical" size="large">
     <Row gutter={16}>
      <Col span={12}>
        <Form.Item
          label="LinkedIn Profile URL"
          name="linkedin"
          rules={[
            { required: true, message: "Please enter LinkedIn profile URL" },
            { type: "url", message: "Enter valid URL" },
          ]}
        >
          <Input placeholder="https://www.linkedin.com/in/username" />
        </Form.Item>
      </Col>
    </Row>

    <Row gutter={16}>
      <Col span={12}>
        <Form.Item
          label="Resume Option"
          name="resumeOption"
          rules={[{ required: true, message: "Please select resume option" }]}
        >
          <Select placeholder="Select resume option">
            <Option value="upload">Upload Resume</Option>
            <Option value="build">Build Resume</Option>
          </Select>
        </Form.Item>
      </Col>
    </Row>

    {/* Upload Resume */}
    <Form.Item shouldUpdate>
      {({ getFieldValue }) =>
        getFieldValue("resumeOption") === "upload" ? (
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="Upload Resume (PDF only)"
                name="resumeFile"
                rules={[{ required: true, message: "Please upload resume" }]}
              >
                <Input type="file" accept=".pdf,.doc,.docx" />
              </Form.Item>
            </Col>
          </Row>
        ) : null
      }
    </Form.Item>

    {/* Build Resume */}
    <Form.Item shouldUpdate>
      {({ getFieldValue }) =>
        getFieldValue("resumeOption") === "build" ? (
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="Resume Summary"
                name="resumeSummary"
                rules={[{ required: true, message: "Please enter summary" }]}
              >
                <Input.TextArea
                  rows={4}
                  placeholder="Brief professional summary"
                />
              </Form.Item>
            </Col>
          </Row>
        ) : null
      }
    </Form.Item>


{/* ================= VIDEO INTRODUCTION ================= */}
<Row gutter={16}>
  <Col xs={24} md={12}>
    <Form.Item
      label="Video Introduction / Portfolio (Optional)"
      name="introVideo"
      valuePropName="fileList"
      getValueFromEvent={(e) => e?.fileList}
      extra="Upload a short self-introduction or portfolio video (max 50MB)"
    >
      <Upload
        beforeUpload={beforeVideoUpload}
        maxCount={1}
        accept="video/mp4,video/webm"
      >
        <Button icon={<VideoCameraOutlined />}>
          Upload Video
        </Button>
      </Upload>
    </Form.Item>
  </Col>
</Row>

<Row gutter={16}>
  <Col xs={24} md={12}>
    <Form.Item
      label="Video Type"
      name="videoType"
    >
      <Select placeholder="Select video type (optional)">
        <Option value="intro">Self Introduction</Option>
        <Option value="portfolio">Portfolio / Project Demo</Option>
      </Select>
    </Form.Item>
  </Col>
</Row>



    
  </Form>
)}



        


{/* ---- */}
            {/* </Row>
          </Form> */}
        {/* )} */}
      </div>

      <div className="step-actions">
        {current > 0 && <Button onClick={prev}>Previous</Button>}
        {current < steps.length - 1 && (
          <Button type="primary" onClick={next}>Save & Continue</Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" className="btn-submit" onClick={submit}>
            Submit Application
          </Button>
        )}
      </div>
    </div>
  );
};

export default ApplyJobScreen;
