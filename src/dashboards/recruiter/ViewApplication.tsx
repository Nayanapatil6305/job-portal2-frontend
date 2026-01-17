import React, { useState } from "react";
import { Table, Input, Select, Button, Modal, Tag, Row, Col } from "antd";
// import "./EmployeeApplications.css";
// import { data} from '../Data/MocData';
import { data } from "../../Data/Mocdata";
import "../../App.css";
// import { data } from "react-router-dom";
const { Option } = Select;

const ViewApplication: React.FC = () => {
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [searchText, setSearchText] = useState("");
  const [selectedApp, setSelectedApp] = useState<any>(null);

//   const data = [
//     {
//       key: "1",
//       name: "Rahul Patil",
//       job: "Frontend Developer",
//       date: "12 Jan 2026",
//       status: "Pending",
//       email: "rahul@gmail.com",
//       phone: "9876543210",
//       linkedin: "https://linkedin.com/in/rahul",
//       skills: "React, TypeScript, CSS",
//     },
//     {
//       key: "2",
//       name: "Sneha Deshmukh",
//       job: "Backend Developer",
//       date: "10 Jan 2026",
//       status: "Shortlisted",
//       email: "sneha@gmail.com",
//       phone: "9123456780",
//       linkedin: "https://linkedin.com/in/sneha",
//       skills: "Node.js, MongoDB",
//     },
//   ];

  const columns = [
    {
      title: "Candidate Name",
      dataIndex: "name",
    },
    {
      title: "Job Applied",
      dataIndex: "job",
    },
    {
      title: "Applied Date",
      dataIndex: "date",
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (status: string) => (
        <Tag color={status === "Shortlisted" ? "green" : status === "Rejected" ? "red" : "orange"}>
          {status}
        </Tag>
      ),
    },
    {
      title: "Action",
      render: (_: any, record: any) => (
        <Button type="link" onClick={() => setSelectedApp(record)}>
          View Details
        </Button>
      ),
    },
  ];

  const filteredData = data.filter((item) => {
    const matchStatus = statusFilter === "all" || item.status === statusFilter;
    const matchSearch =
      item.name.toLowerCase().includes(searchText.toLowerCase()) ||
      item.job.toLowerCase().includes(searchText.toLowerCase());
    return matchStatus && matchSearch;
  });

  return (
    <div className="employee-container">
      <h2 className="page-title">Employee – View Applications</h2>

      {/* Search & Filter Section */}
      <Row gutter={16} className="filter-section">
        <Col xs={24} md={12}>
          <Input
            placeholder="Search by candidate name or job title"
            onChange={(e) => setSearchText(e.target.value)}
          />
        </Col>
        <Col xs={24} md={6}>
          <Select defaultValue="all" className="full-width" onChange={setStatusFilter}>
            <Option value="all">All Status</Option>
            <Option value="Pending">Pending</Option>
            <Option value="Reviewed">Reviewed</Option>
            <Option value="Shortlisted">Shortlisted</Option>
            <Option value="Rejected">Rejected</Option>
          </Select>
        </Col>
      </Row>

      {/* Application Table */}
      <Table
        columns={columns}
        dataSource={filteredData}
        pagination={{ pageSize: 5 }}
        className="application-table"
      />

      {/* Application Details Modal */}
      <Modal
        open={!!selectedApp}
        title="Application Details"
        onCancel={() => setSelectedApp(null)}
        footer={null}
      >
        {selectedApp && (
          <div className="modal-content">
            <p><b>Name:</b> {selectedApp.name}</p>
            <p><b>Email:</b> {selectedApp.email}</p>
            <p><b>Phone:</b> {selectedApp.phone}</p>
            <p><b>LinkedIn:</b> <a href={selectedApp.linkedin} target="_blank">View Profile</a></p>
            <p><b>Skills:</b> {selectedApp.skills}</p>

            <div className="modal-actions">
              <Button type="primary">Shortlist</Button>
              <Button danger>Reject</Button>
              <Button>Download Resume</Button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default ViewApplication;