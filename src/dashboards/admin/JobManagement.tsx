// import React from 'react'

// export default function JobManagement() {
//   return (
//     <div>JobManagement</div>
//   )
// }

import React, { useEffect, useState } from "react";
import axios from "axios";
import jsPDF from "jspdf";

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
}

const JobManagement: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [salary, setSalary] = useState("");

  // Fetch Jobs
  const fetchJobs = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/jobs");
      setJobs(response.data);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  // Add Job
  const handleAddJob = async () => {
    try {
      await axios.post("http://localhost:3000/api/jobs", {
        title,
        company,
        location,
        salary,
      });

      fetchJobs();

      setTitle("");
      setCompany("");
      setLocation("");
      setSalary("");
    } catch (error) {
      console.error("Error adding job:", error);
    }
  };

  // Delete Job
  const handleDeleteJob = async (id: number) => {
    try {
      await axios.delete(`http://localhost:3000/api/jobs/${id}`);
      fetchJobs();
    } catch (error) {
      console.error("Error deleting job:", error);
    }
  };

  // Generate PDF
  const generatePDF = () => {
    const doc = new jsPDF();

    doc.text("Job List", 20, 20);

    let y = 30;

    jobs.forEach((job) => {
      doc.text(
        `Title: ${job.title} | Company: ${job.company} | Location: ${job.location} | Salary: ${job.salary}`,
        20,
        y
      );
      y += 10;
    });

    doc.save("job_list.pdf");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Job Management</h2>

      <div>
        <input
          type="text"
          placeholder="Job Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="text"
          placeholder="Company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />

        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <input
          type="text"
          placeholder="Salary"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
        />

        <button onClick={handleAddJob}>Add Job</button>
        <button onClick={generatePDF}>Download PDF</button>
      </div>

      <h3>Job List</h3>

      <table border={1} cellPadding={10}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Company</th>
            <th>Location</th>
            <th>Salary</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {jobs.map((job) => (
            <tr key={job.id}>
              <td>{job.id}</td>
              <td>{job.title}</td>
              <td>{job.company}</td>
              <td>{job.location}</td>
              <td>{job.salary}</td>
              <td>
                <button onClick={() => handleDeleteJob(job.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
};

export default JobManagement;
