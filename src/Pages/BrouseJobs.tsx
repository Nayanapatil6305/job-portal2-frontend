// import "./Style/BrowseJobs.css";
import Navbar from "../navbar/Navbar";
import "../components/Style/BrouseJobs.css";

const jobs = [
  {
    title: "Frontend Developer",
    company: "Accenture",
    location: "Pune",
    type: "Full Time",
    experience: "1-3 Years",
  },
  {
    title: "Backend Developer",
    company: "TCS",
    location: "Mumbai",
    type: "Full Time",
    experience: "2-4 Years",
  },
  {
    title: "React Developer",
    company: "Infosys",
    location: "Bangalore",
    type: "Hybrid",
    experience: "1-2 Years",
  },
  {
    title: "UI / UX Designer",
    company: "Wipro",
    location: "Hyderabad",
    type: "Remote",
    experience: "Fresher",
  },
];

const BrowseJobs = () => {
  return (
    <>
      <Navbar />

      <section className="browse-hero">
        <h1>Browse Jobs</h1>
        <p>Find jobs that match your skills and experience</p>
      </section>

      <section className="jobs-container">
        <div className="jobs-grid">
          {jobs.map((job, index) => (
            <div className="job-card" key={index}>
              <h3>{job.title}</h3>
              <p className="company">{job.company}</p>

              <div className="job-info">
                <span>📍 {job.location}</span>
                <span>💼 {job.type}</span>
                <span>⏳ {job.experience}</span>
              </div>

              <button className="apply-btn">Apply Now</button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default BrowseJobs;
