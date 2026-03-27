import React from "react";
// import "./HowItWorks.css";
import "../components/Style/HowItsWorking.css";
import Navbar from "../navbar/Navbar";


const HowItWorkspage = () => {
  return (
    
    <>
      <Navbar />
    <section className="how-wrapper">

      {/* Header */}
      <div className="how-header">
        <h1>How It Works</h1>
        <p>
          Our streamlined process helps job seekers and employers connect
          efficiently with clarity and confidence.
        </p>
      </div>

      {/* Steps */}
      <div className="steps-grid">

        <div className="step-card">
          <div className="step-badge">01</div>
          <h3>Create Your Profile</h3>
          <p>
            Sign up and build a professional profile highlighting your skills,
            experience, and career goals.
          </p>
        </div>

        <div className="step-card">
          <div className="step-badge">02</div>
          <h3>Explore Opportunities</h3>
          <p>
            Browse verified job listings and receive smart recommendations
            based on your profile.
          </p>
        </div>

        <div className="step-card">
          <div className="step-badge">03</div>
          <h3>Apply with Confidence</h3>
          <p>
            Apply easily with a simplified process and track your application
            status in real time.
          </p>
        </div>

        <div className="step-card">
          <div className="step-badge">04</div>
          <h3>Get Hired</h3>
          <p>
            Connect with employers, attend interviews, and take the next
            step in your professional journey.
          </p>
        </div>

      </div>

      {/* Why Section */}
      <div className="why-box">
        <h2>Why Our Process Works</h2>

        <div className="why-grid">
          <div className="why-card">✔ Verified & Trusted Companies</div>
          <div className="why-card">✔ Smart Job Matching System</div>
          <div className="why-card">✔ Faster & Transparent Hiring</div>
          <div className="why-card">✔ Secure Platform for Careers</div>
        </div>
      </div>

      {/* Soft CTA (No Buttons) */}
      <p className="soft-cta">
        Designed to reduce hiring friction and help professionals move forward
        with confidence.
      </p>

    </section>
    </>
  );
};

export default HowItWorkspage;
