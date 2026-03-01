// import "./Footer.css";
import "../components/Style/Appfooter.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">
          <h2><span className="logo-box">J</span> Stack</h2>
          <p>Connecting talent with opportunity.</p>
        </div>

        {/* Open Hours */}
        <div className="footer-section">
          <h4>Open Hours</h4>
          <p>Mon – Fri: 9:00 AM – 6:00 PM</p>
          <p>Sat: 10:00 AM – 2:00 PM</p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/jobs">Browse Jobs</a></li>
            <li><a href="/companies">Companies</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h4>Contact Info</h4>
          <p>📧 support@jobstack.com</p>
          <p>📞 +91 99765 43210</p>
          <p>📍 India</p>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} JobStack. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
