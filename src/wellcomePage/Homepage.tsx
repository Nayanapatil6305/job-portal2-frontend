import { Layout, Menu, } from "antd";
import "./Wellcome.css";
import { Link } from 'react-router-dom';
// import { Menu } from 'antd';

// import heroImage from "../assets/image.png";
// import image from "../assets/image.png";
import heroImage from "./assets/image.png";
import logo from "./assets/logo.png";
import microsoft from "./assets/logotwo.png";
import accenture from "./assets/logothree.png";
import walmart from "./assets/logofour.png";
import google from "./assets/google.png";
import {  Button, Row, Col } from "antd";
// import Footer from "./Footer";


import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";


const { Header, Content } = Layout;







const Homepage = () => {
  return (
    <Layout>
      {/* NAVBAR */}
      
      <Header className="navbar">
        {/* Left */}

        <div className="nav-left">
         <div className="brand-logo">

          {/* LOGO IMAGE */}
      
        
      <span className="logo-icon">J</span>
      <span className="logo-text">
        <span>Stack</span>
      </span>
    </div>

        </div>

        {/* Center */}
        <Menu mode="horizontal" className="nav-menu">
  <Menu.Item key="home">
    <li><a href="#home">Home</a></li>
  </Menu.Item>
  <Menu.Item key="about">
    <li><a href="#about">About</a></li>
  </Menu.Item>
  <Menu.Item key="how-its-work ">
    <li><a href="#how-its-work">How its Work</a></li>
  </Menu.Item>
</Menu>

        {/* Right */}
        <div className="nav-actions">
          <Button className="btn-light">Register</Button>
          <Button type="primary" className="btn-primary">
            Login
          </Button>
        </div>
      </Header>



      {/* HERO SECTION */}
      <section id="home">
      <Content className="hero-bg">
        <div className="hero-wrapper">
        <div className="hero-content">
          <h1 className="hero-title">
  Discover Your <br />
  Next Career Opportunity <br />
  with Ease
</h1>

<p className="hero-text">
  Connect with top employers and explore thousands of jobs tailored for you.
</p>

          <div className="search-box">
            {/* <Input
              placeholder="What are you looking for?"
              className="search-input"
            /> */ }

            <a href="/browsejobs">
            <Button className="browse-btn">Browse Jobs</Button>
            </a>
          </div>
        </div>

{/* RIGHT SIDE IMAGE SLIDER */}
    <div className="hero-image-wrapper">
  <div className="image-slider">
    <img src={heroImage} alt="slide1" />
    <img src={heroImage} alt="slide2" />
    <img src={heroImage} alt="slide3" />
  </div>
</div>


        </div>

{/*  */}


      </Content>

</section>

      <section id="about">
<div className="trusted-by-container">
      <div className="trusted-by-content">
        <span className="trusted-by-text">Trusted by</span>
        <div className="logo-group">
          <img src={microsoft} alt="Microsoft" className="logo" />
          <img src={walmart} alt="Walmart" className="logo" />
          <img src={accenture} alt="Accenture" className="logo" />
          <img src={google} alt="Accenture" className="logo" />
        </div>
      </div>
    </div>
</section>

<section>
<div className="about-us-page">

      {/* About Section */}
      <section className="about">
        <h2>About JobPortal</h2>
        <p>
          JobPortal is a leading platform that bridges the gap between
          professionals and companies. We provide a seamless experience for
          job seekers and employers alike, ensuring the right fit for every
          opportunity.
        </p>
      </section>

      {/* Mission & Vision Section */}
      <section className="mission-vision">
        <div className="mission">
          <h3>Our Mission</h3>
          <p>
            To empower individuals to achieve their career goals by connecting
            them with top employers and opportunities.
          </p>
        </div>
        <div className="vision">
          <h3>Our Vision</h3>
          <p>
            To become the most trusted job portal where talent meets
            opportunity, fostering growth for businesses and professionals.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stat">
          <h3>50K+</h3>
          <p>Jobs Posted</p>
        </div>
        <div className="stat">
          <h3>20K+</h3>
          <p>Active Users</p>
        </div>
        <div className="stat">
          <h3>5K+</h3>
          <p>Companies Registered</p>
        </div>
      </section>

      {/* Team Section */}
      

      {/* Call to Action */}
      
    </div>

    </section>

    
      
    



    {/* ================= how its work ================= */}
<section id="how-its-work" className="how-it-works">
  <h2 className="section-title">How It Works</h2>
  <p className="section-subtitle">
    Finding your dream job is simple with JobStack
  </p>

  <div className="steps">
    <div className="step-card">
      <span className="step-number">01</span>
      <h3>Create Your Profile</h3>
      <p>
        Sign up and create your professional profile to get noticed
        by top companies.
      </p>
    </div>

    <div className="step-card">
      <span className="step-number">02</span>
      <h3>Search Jobs</h3>
      <p>
        Browse thousands of verified jobs based on your skills
        and location.
      </p>
    </div>

    <div className="step-card">
      <span className="step-number">03</span>
      <h3>Apply Easily</h3>
      <p>
        Apply to jobs with one click and track your application status.
      </p>
    </div>

    <div className="step-card">
      <span className="step-number">04</span>
      <h3>Get Hired</h3>
      <p>
        Connect with employers, attend interviews, and start your career.
      </p>
    </div>
  </div>
</section>


 {/* ================= FOOTER ====== */}
<section className="footer">
  <Row gutter={[32, 16]}>
<Col xs={24} md={8}>
        <div className="jobstack-logo">
  <span className="logo-icon">J</span>
      <span className="logo-text">
        <span>Stack</span>
      </span>
</div>
        <p>
          JobStack is a modern job portal connecting talented professionals with trusted companies.<br />
  Find the right job, grow your career, and build your future with confidence.
</p>
        
      </Col>

      <Col xs={20} md={8}>
        <h4>Quick Links</h4>
        <ul className="footer-links">
          <li>Home</li>
          <li>Browse Jobs</li>
          <li>Companies</li>
          <li>Contact</li>
        </ul>
      </Col>


<Col xs={24} md={8}>
  <h4>Contact Info</h4>

  <div className="footer-contact">
    <p>
      <MailOutlined className="contact-icon" />
      support@jobstack.com
    </p>

    <p>
      <PhoneOutlined className="contact-icon" />
      +91 98765 43210
    </p>

    <p>
      <EnvironmentOutlined className="contact-icon" />
      India
    </p>
  </div>
</Col>

    

    

  </Row>

  <div className="footer-bottom">
    © {new Date().getFullYear()} JobStack. All rights reserved.
  </div>
</section>


    </Layout>
  );
};

export default Homepage;
