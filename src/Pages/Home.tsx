import "../components/Style/Home.css";
import Navbar from "../navbar/Navbar";
import microsoft from "../assets/logofour.png";
import walmart from "../assets/logothree.png";
import accenture from "../assets/logotwo.png";              
import google from "../assets/google.png";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../footer/Footer";
// const [selectedJob, setSelectedJob] = useState("");
import teamwork from "../assets/teamwork.png";
const Home = () => {

  const [jobOpen, setJobOpen] = useState(false);
  const jobRef = useRef<HTMLDivElement | null>(null);
  const [cityOpen, setCityOpen] = useState(false);
  const cityRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();
const [selectedJob, setSelectedJob] = useState("");
const [selectedCity, setSelectedCity] = useState("");


  // Outside click for both dropdowns
  useEffect(() => {
    const handleOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      if (jobRef.current && !jobRef.current.contains(target)) setJobOpen(false);
      if (cityRef.current && !cityRef.current.contains(target)) setCityOpen(false);
    };
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, []);

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <h1>
            Discover Your Next <br />
            Career Opportunity <br />
            with Ease
          </h1>
          <p>
            Connect with top employers and explore thousands of jobs tailored for you.
          </p>
          <button
          onClick={() =>
          navigate("/jobs", {
            state: { job: "", city: "" } // no filter, show all jobs
          })
        }
      >
        Browse Jobs</button>

          {/* SEARCH BAR */}
          <div className="hero-search-wrapper">
            <div className="hero-search">
              <div className="search-input dropdown" ref={jobRef}>
                <span className="search-icon">🔍</span>
                <input
                  type="text"
                  placeholder="Job title or keyword"  value={selectedJob}
                  onClick={() => setJobOpen((prev) => !prev)}
                  readOnly
                />
                <span className={`dropdown-arrow ${jobOpen ? "open" : ""}`}>▾</span>
                {jobOpen && (
                  <ul className="search-list">
    <li onClick={() => { setSelectedJob("Frontend Developer"); setJobOpen(false); }}>
      Frontend Developer
    </li>
    <li onClick={() => { setSelectedJob("Backend Developer"); setJobOpen(false); }}>
      Backend Developer
    </li>
    <li onClick={() => { setSelectedJob("React Developer"); setJobOpen(false); }}>
      React Developer
    </li>
    <li onClick={() => { setSelectedJob("Java Developer"); setJobOpen(false); }}>
      Java Developer
    </li>
    <li onClick={() => { setSelectedJob("UI / UX Designer"); setJobOpen(false); }}>
      UI / UX Designer
    </li>
  </ul>
                )}
              </div>

              <div className="search-input dropdown" ref={cityRef}>
                <span className="search-icon">📍</span>
                <input
                  type="text"
                  placeholder="City or location"  value={selectedCity}
                  onClick={() => setCityOpen((prev) => !prev)}
                  readOnly
                />
                <span className={`dropdown-arrow ${cityOpen ? "open" : ""}`}>▾</span>
                {cityOpen && (
                  <ul className="search-list">
                    <li onClick={() => { setSelectedCity("Pune"); setCityOpen(false); }}>
      Pune
    </li>
    <li onClick={() => { setSelectedCity("Mumbai"); setCityOpen(false); }}>
      Mumbai
    </li>
    <li onClick={() => { setSelectedCity("Bangalore"); setCityOpen(false); }}>
      Bangalore
    </li>
    <li onClick={() => { setSelectedCity("Hyderabad"); setCityOpen(false); }}>
      Hyderabad
    </li>
    <li onClick={() => { setSelectedCity("Delhi"); setCityOpen(false); }}>
      Delhi
    </li>
                  </ul>
                )}
              </div>

              <button className="search-btn"
               onClick={() =>
    navigate("/jobs", {
      state: { job: selectedJob, city: selectedCity },
    })
  }
>
  Search</button>
            </div>
          </div>
        </div>

        <div className="hero-image">
          {/* <img */}
            {/* // src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80" */}
            {/* <img src={teamwork} alt="teamwork" /> */}
            {/* alt="office meeting" */}
            <img src={teamwork} alt="teamwork" />
          
          <div className="floating-cards">
            <div className="floating-card">1200+ Jobs</div>
            <div className="floating-card">300+ Companies</div>
            <div className="floating-card">95% Placement</div>
          </div>
        </div>
      </section>

      {/* TRUSTED BY SECTION */}
      <section className="trusted-section">
        <div className="trusted-line">
          <span>Trusted by</span>
        </div>
        <div className="trusted-logos">
          <div className="logo-item">
            <img src={microsoft} alt="Microsoft" />
          </div>
          <div className="logo-item">
            <img src={walmart} alt="Walmart" />
          </div>
          <div className="logo-item">
            <img src={accenture} alt="Accenture" />
          </div>
          <div className="logo-item no-border">
            <img src={google} alt="Google" />
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default Home;
