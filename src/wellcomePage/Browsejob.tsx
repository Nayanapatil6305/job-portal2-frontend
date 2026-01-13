import React, { useState } from "react";
// import "./BrowseJobs.css";
import "./Wellcome.css";
const jobsData = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Tech Solutions",
    location: "Mumbai, India",
    category: "IT",
    date: "2026-01-10",
  },
  {
    id: 2,
    title: "Marketing Manager",
    company: "BrandWorks",
    location: "Pune, India",
    category: "Marketing",
    date: "2026-01-12",
  },
  {
    id: 3,
    title: "Data Analyst",
    company: "AnalyticsPro",
    location: "Bangalore, India",
    category: "IT",
    date: "2026-01-11",
  },
  {
    id: 4,
    title: "HR Executive",
    company: "Global Corp",
    location: "Delhi, India",
    category: "HR",
    date: "2026-01-09",
  },
];

const categories = ["All", "IT", "Marketing", "HR", "Finance", "Design"];

const BrowseJobs= () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter jobs based on search and category
  const filteredJobs = jobsData.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || job.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="browse-jobs-page">
      {/* Search Bar */}
      <section className="search-bar">
        <input
          type="text"
          placeholder="Search jobs, skills, or companies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </section>

      {/* Job Cards */}
      <section className="job-cards">
        {filteredJobs.length === 0 ? (
          <p>No jobs found matching your criteria.</p>
        ) : (
          filteredJobs.map((job) => (
            <div className="job-card" key={job.id}>
              <h3>{job.title}</h3>
              <p className="company">{job.company}</p>
              <p className="location">{job.location}</p>
              <p className="date">Posted on: {job.date}</p>
              <button className="apply-btn">Apply Now</button>
            </div>
          ))
        )}
      </section>
    </div>
  );
};

export default BrowseJobs;
