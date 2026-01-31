import "../components/Style/Home.css";
import Navbar from "../navbar/Navbar";
import microsoft from "../assets/logofour.png";
import walmart from "../assets/logothree.png";
import accenture from "../assets/logotwo.png";              
import google from "../assets/google.png";
import { useState, useRef, useEffect } from "react";

const Home = () => {
  const [jobOpen, setJobOpen] = useState(false);
  const jobRef = useRef<HTMLDivElement | null>(null);
  const [cityOpen, setCityOpen] = useState(false);
  const cityRef = useRef<HTMLDivElement | null>(null);

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
          <button>Browse Jobs</button>

          {/* SEARCH BAR */}
          <div className="hero-search-wrapper">
            <div className="hero-search">
              <div className="search-input dropdown" ref={jobRef}>
                <span className="search-icon">🔍</span>
                <input
                  type="text"
                  placeholder="Job title or keyword"
                  onClick={() => setJobOpen((prev) => !prev)}
                  readOnly
                />
                <span className={`dropdown-arrow ${jobOpen ? "open" : ""}`}>▾</span>
                {jobOpen && (
                  <ul className="search-list">
                    <li>Frontend Developer</li>
                    <li>Backend Developer</li>
                    <li>React Developer</li>
                    <li>Java Developer</li>
                    <li>UI / UX Designer</li>
                  </ul>
                )}
              </div>

              <div className="search-input dropdown" ref={cityRef}>
                <span className="search-icon">📍</span>
                <input
                  type="text"
                  placeholder="City or location"
                  onClick={() => setCityOpen((prev) => !prev)}
                  readOnly
                />
                <span className={`dropdown-arrow ${cityOpen ? "open" : ""}`}>▾</span>
                {cityOpen && (
                  <ul className="search-list">
                    <li>Pune</li>
                    <li>Mumbai</li>
                    <li>Bangalore</li>
                    <li>Hyderabad</li>
                    <li>Delhi</li>
                  </ul>
                )}
              </div>

              <button className="search-btn">Search</button>
            </div>
          </div>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
            alt="office meeting"
          />
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
    </>
  );
};

export default Home;
