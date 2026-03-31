// // import React from "react";

// // const About: React.FC = () => {
// //   return (
// //     <div>
// //       <h1>About Us</h1>
// //       <p>This is a Job Portal application built using React and TypeScript.</p>
// //     </div>
// //   );
// // };

// // export default About;/


// import React from "react";
// import { capitalize, isValidEmail } from "../utils/Helpers";

// const About: React.FC = () => {
//   const name = capitalize("nayana");
//   const emailValid = isValidEmail("test@gmail.com");

//   return (
//     <div style={{ padding: 20 }}>
//       <h2>Helper Output</h2>
//       <p>Name: {name}</p>
//       <p>Email Valid: {emailValid ? "Yes" : "No"}</p>
//     </div>
//   );
// };




// export default About;



// import React from 'react'

// export default function About() {
//   return (
//     <div>About</div>
//   )
// }

import "../components/Style/About.css";

import React from "react";
import Navbar from "../navbar/Navbar";
// import "./About.css";

const About = () => {
  return (
    <>
      <Navbar />
    <section className="about-wrapper">
      <div className="about-card">
        
        {/* Heading */}
        <h1 className="about-title">About JobPortal</h1>
         <div className="divider"></div>
        <p className="about-desc">
          JobPortal is a modern hiring platform that connects skilled professionals
          with top companies. We focus on simplicity, speed, and the perfect job match.
        </p>

        {/* Divider */}
        {/* <div className="divider"></div> */}

        {/* Mission & Vision */}
        <div className="mv-grid">
          <div className="mv-card">
            <h3>🎯 Our Mission</h3>
            <p>
              Empowering job seekers to achieve career success through smart and
              reliable opportunities.
            </p>
          </div>

          <div className="mv-card">
            <h3>🚀 Our Vision</h3>
            <p>
              To become the most trusted job portal where talent meets opportunity.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="stats-box">
          <div className="stat">
            <h2>50K+</h2>
            <span>Jobs Posted</span>
          </div>

          <div className="stat-line"></div>

          <div className="stat">
            <h2>20K+</h2>
            <span>Companies</span>
          </div>

          <div className="stat-line"></div>

          <div className="stat">
            <h2>5K+</h2>
            <span>Hired Daily</span>
          </div>
        </div>

      </div>
    </section>
    </>
  );
};

export default About;
