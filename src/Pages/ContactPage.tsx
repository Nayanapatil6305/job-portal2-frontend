import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import "../components/Style/ContactPage.css";

const ContactPage = () => {
  return (
    <>
      <Navbar />

      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>We are here to help you. Get in touch with us anytime.</p>
      </section>

      <section className="contact-container">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>
            Have questions about jobs, companies, or your account?
            Fill out the form and our team will contact you soon.
          </p>

          <div className="info-box">
            <p><strong>Email:</strong> support@jobportal.com</p>
            <p><strong>Phone:</strong> +91 98765 43210</p>
            <p><strong>Location:</strong> Pune, Maharashtra, India</p>
          </div>
        </div>

        <div className="contact-form">
          <h2>Send Message</h2>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Your Message" rows={5}></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ContactPage;
