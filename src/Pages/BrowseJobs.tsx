import "../components/Style/BrouseJobs.css";

import React from "react";
import { useLocation } from "react-router-dom";
import microsoft from "../assets/logofour.png";
import walmart from "../assets/logothree.png";
import accenture from "../assets/logotwo.png";
import google from "../assets/google.png";
// import "../components/Style/BrowseJobs.css";

interface Job {
  title: string;
  company: string;
  location: string;
  logo: string;
}

const allJobs: Job[] = [
  { title: "Frontend Developer", company: "Microsoft", location: "Pune", logo: microsoft },
  { title: "Backend Developer", company: "Walmart", location: "Mumbai", logo: walmart },
  { title: "React Developer", company: "Accenture", location: "Bangalore", logo: accenture },
  { title: "Java Developer", company: "Google", location: "Hyderabad", logo: google },
  { title: "UI/UX Designer", company: "Microsoft", location: "Delhi", logo: microsoft },
  { title: "Data Analyst", company: "Google", location: "Mumbai", logo: google },
  { title: "Node.js Developer", company: "Accenture", location: "Pune", logo: accenture },
  { title: "DevOps Engineer", company: "Walmart", location: "Bangalore", logo: walmart },
  { title: "QA Engineer", company: "Microsoft", location: "Hyderabad", logo: microsoft },
  { title: "Product Manager", company: "Google", location: "Delhi", logo: google },
  { title: "Full Stack Developer", company: "Accenture", location: "Mumbai", logo: accenture },
  { title: "Mobile App Developer", company: "Walmart", location: "Pune", logo: walmart },
  { title: "Cloud Engineer", company: "Google", location: "Bangalore", logo: google },
  { title: "Graphic Designer", company: "Microsoft", location: "Hyderabad", logo: microsoft },
  { title: "Python Developer", company: "Accenture", location: "Delhi", logo: accenture },
  { title: "Machine Learning Engineer", company: "Google", location: "Pune", logo: google },
  { title: "Frontend Developer", company: "Walmart", location: "Bangalore", logo: walmart },
  { title: "Backend Developer", company: "Microsoft", location: "Mumbai", logo: microsoft },
  { title: "React Developer", company: "Accenture", location: "Hyderabad", logo: accenture },
  { title: "UI/UX Designer", company: "Google", location: "Delhi", logo: google },
];

const BrowseJobs = () => {
  const location = useLocation();
  const { job, city } = location.state || { job: "", city: "" };

  const filteredJobs = allJobs.filter(
    (j) =>
      (job ? j.title.toLowerCase().includes(job.toLowerCase()) : true) &&
      (city ? j.location.toLowerCase() === city.toLowerCase() : true)
  );

  return (
    <div className="browse-page">
      <header className="browse-header">
        <h1>Browse Jobs</h1>
        <p>
          Showing results for{" "}
          {job && <strong>{job}</strong>} in {city && <strong>{city}</strong>}
        </p>
      </header>

      <div className="jobs-grid">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((jobItem, idx) => (
            <div key={idx} className="job-card">
              <div className="job-logo">
                <img src={jobItem.logo} alt={jobItem.company} />
              </div>
              <div className="job-info">
                <h3>{jobItem.title}</h3>
                <p>{jobItem.company}</p>
                <span>{jobItem.location}</span>
              </div>
              <button className="apply-btn">Apply Now</button>
            </div>
          ))
        ) : (
          <p className="no-jobs">No jobs found matching your criteria.</p>
        )}
      </div>
    </div>
  );
};

export default BrowseJobs;

