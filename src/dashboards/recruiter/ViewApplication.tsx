import React, { useState } from "react";
import { Button, Input, Select, Modal, Badge, message, Progress, Tag } from "antd";
import { CheckOutlined, CloseOutlined, LinkedinOutlined, FileTextOutlined } from "@ant-design/icons";
import "../../components/Style/VeiwAppliction.css";
// import data from "../mockdata/MockData/data.json";
import initialData from "../../mockdata/MockData";
import {Application } from "../../mockdata/MockData";


const { Option } = Select;

// interface Application {
//   id: number;
//   name: string;
//   title: string;
//   experience: string;
//   skills: string[];
//   email: string;
//   resume: string;
//   status: "Pending" | "Accepted" | "Rejected";
//   linkedinUrl: string;
//   profileStrength: number;
//   appliedDate: string;
//   tags: string[];
// }

// const initialData: Application[] = [
//   {
//     id: 1,
//     name: "Vaishnavi Patil",
//     title: "Frontend Developer",
//     experience: "2 Years",
//     skills: ["React", "TypeScript", "CSS"],
//     email: "vaishnavi@gmail.com",
//     resume: "Resume_Vaishnavi.pdf",
//     status: "Pending",
//     linkedinUrl: "https://www.linkedin.com/in/vaishnavi-patil",
//     profileStrength: 82,
//     appliedDate: "Applied 2 days ago",
//     tags: ["Shortlisted", "Frontend"],
//   },
//   {
//     id: 2,
//     name: "Rahul Sharma",
//     title: "Backend Developer",
//     experience: "3 Years",
//     skills: ["Node.js", "MongoDB", "Express"],
//     email: "rahul@gmail.com",
//     resume: "Resume_Rahul.pdf",
//     status: "Pending",
//     linkedinUrl: "https://www.linkedin.com/in/rahul-sharma",
//     profileStrength: 65,
//     appliedDate: "Applied 4 days ago",
//     tags: ["Backend"],
//   },
//   {
//     id: 2,
//     name: "Rahul Sharma",
//     title: "Backend Developer",
//     experience: "3 Years",
//     skills: ["Node.js", "MongoDB", "Express"],
//     email: "rahul@gmail.com",
//     resume: "Resume_Rahul.pdf",
//     status: "Pending",
//     linkedinUrl: "https://www.linkedin.com/in/rahul-sharma",
//     profileStrength: 65,
//     appliedDate: "Applied 4 days ago",
//     tags: ["Backend"],
//   },
// ];

const ViewAppication = () => {
  const [applications, setApplications] = useState<Application[]>(initialData);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [experienceFilter, setExperienceFilter] = useState("All");
  const [sortByStrength, setSortByStrength] = useState("None");
  const [selectedResume, setSelectedResume] = useState<string | null>(null);
  const [roleFilter, setRoleFilter] = useState("All");


  const handleStatusChange = (id: number, status: "Accepted" | "Rejected") => {
    setApplications((prev) =>
      prev.map((app) => (app.id === id ? { ...app, status } : app))
    );
    message.success(`Application ${status}`);
  };

  const filteredData = applications
    .filter((app) => {
      const matchSearch =
        app.name.toLowerCase().includes(search.toLowerCase()) ||
        app.skills.join(" ").toLowerCase().includes(search.toLowerCase());

      const matchStatus =
        statusFilter === "All" || app.status === statusFilter;

      const experienceYears = parseInt(app.experience);
      const matchExperience =
        experienceFilter === "All" ||
        (experienceFilter === "0-1" && experienceYears <= 1) ||
        (experienceFilter === "1-3" && experienceYears > 1 && experienceYears <= 3) ||
        (experienceFilter === "3+" && experienceYears > 3);

        
  const matchRole =
    roleFilter === "All" || app.title === roleFilter;
     

      return matchSearch && matchStatus && matchExperience &&matchRole ;

    })
    .sort((a, b) => {
      if (sortByStrength === "HighToLow") return b.profileStrength - a.profileStrength;
      if (sortByStrength === "LowToHigh") return a.profileStrength - b.profileStrength;
      return 0;
    });

  return (
    <div className="linkedin-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h3>Job Details</h3>
        
        <p><strong>Total Applicants:</strong> {applications.length}</p>

        <h4>Role</h4>
<Select
  value={roleFilter}
  onChange={(value) => setRoleFilter(value)}
  className="filter-select"
>
  <Option value="All">All Roles</Option>
  <Option value="Frontend Developer">Frontend Developer</Option>
  <Option value="Backend Developer">Backend Developer</Option>
  <Option value="Software Developer">Software Developer</Option>
</Select>


        <h4>Status</h4>
        <Select
          value={statusFilter}
          onChange={(value) => setStatusFilter(value)}
          className="filter-select"
        >
          <Option value="All">All</Option>
          <Option value="Pending">Pending</Option>
          <Option value="Accepted">Accepted</Option>
          <Option value="Rejected">Rejected</Option>
        </Select>

        <h4>Experience</h4>
        <Select
          value={experienceFilter}
          onChange={(value) => setExperienceFilter(value)}
          className="filter-select"
        >
          <Option value="All">All</Option>
          <Option value="0-1">0–1 Years</Option>
          <Option value="1-3">1–3 Years</Option>
          <Option value="3+">3+ Years</Option>
        </Select>

        <h4>Sort By</h4>
        <Select
          value={sortByStrength}
          onChange={(value) => setSortByStrength(value)}
          className="filter-select"
        >
          <Option value="None">None</Option>
          <Option value="HighToLow">Match Strength ↑</Option>
          <Option value="LowToHigh">Match Strength ↓</Option>
        </Select>
      </aside>

      {/* Main Content */}
      <main className="content">
        <div className="search-bar">
          <Input
            placeholder="Search by name or skill"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="application-list">
          {filteredData.map((app) => (
            <div className="application-card" key={app.id}>
              <div className="card-header">
                <h4 className="applicant-name">{app.name}</h4>
                <Badge
                  status={
                    app.status === "Accepted"
                      ? "success"
                      : app.status === "Rejected"
                      ? "error"
                      : "processing"
                  }
                  text={app.status}
                />
              </div>

              <p className="title">{app.title}</p>
              <div className="meta">
                <Tag color="cyan">{app.experience}</Tag>
                {app.skills.map((skill) => (
                  <Tag key={skill} color="geekblue">{skill}</Tag>
                ))}
              </div>

              <p className="email">{app.email}</p>

              <div className="profile-strength">
                <span>Match Strength:</span>
                <Progress
                  percent={app.profileStrength}
                  size="small"
                  strokeColor={{
                    '0%': 'red',
                    '50%': 'yellow',
                    '100%': 'green'
                  }}
                  style={{ width: '100%', marginTop: 5 }}
                />
              </div>

              <div className="card-actions">
                <Button
                  type="primary"
                  icon={<CheckOutlined />}
                  size="small"
                  onClick={() => handleStatusChange(app.id, "Accepted")}
                >
                  Accept
                </Button>
                <Button
                  danger
                  icon={<CloseOutlined />}
                  size="small"
                  onClick={() => handleStatusChange(app.id, "Rejected")}
                >
                  Reject
                </Button>
                <Button
                  icon={<FileTextOutlined />}
                  size="small"
                  onClick={() => setSelectedResume(app.resume)}
                >
                  Resume
                </Button>
                <Button
                  icon={<LinkedinOutlined />}
                  size="small"
                  onClick={() => window.open(app.linkedinUrl, "_blank")}
                >
                  LinkedIn
                </Button>
              </div>

              <p className="applied-date">{app.appliedDate}</p>
            </div>
          ))}
        </div>
      </main>

      <Modal
        title="Candidate Resume"
        open={!!selectedResume}
        onCancel={() => setSelectedResume(null)}
        footer={null}
      >
        <p>{selectedResume}</p>
        <a href={`/${selectedResume}`} target="_blank" rel="noreferrer">
          Download Resume
        </a>
      </Modal>
    </div>
  );
};

export default ViewAppication;
