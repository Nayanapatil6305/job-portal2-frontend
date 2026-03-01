// import "./PageNotFound.css";
import "../components/Style/Notfoundpage.css";

const NotFound = () => {
  return (
    <div className="notfound-container">
      <div className="notfound-card">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>
          Sorry, the page you are looking for does not exist or has been moved.
        </p>

        <a href="/" className="home-btn">
          Go Back Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
