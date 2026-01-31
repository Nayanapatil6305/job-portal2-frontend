import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import "../components/Style/Navbar.css";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const menuRef = useRef<HTMLUListElement | null>(null);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile) setIsMenuOpen(false); // desktop ला menu बंद
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close on outside click (mobile only)
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        isMobile &&
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(e.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [isMenuOpen, isMobile]);

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* LOGO */}
        <div className="logo">
          <div className="logo-box">J</div>
          <span>Stack</span>
        </div>

        {/* DESKTOP NAV */}
        {!isMobile && (
          <>
            <ul className="nav-links">
              <li>
                <NavLink to="/homenew" end>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/working">How It Works</NavLink>
              </li>
            </ul>

            <div className="nav-actions">
              <button className="register-btn">Register</button>
              <button className="login-btn">Login</button>
            </div>
          </>
        )}

        {/* MOBILE ICON */}
        {isMobile && (
          <div className="menu-icon" onClick={() => setIsMenuOpen(true)}>
            ☰
          </div>
        )}

        {/* OVERLAY */}
        {isMobile && isMenuOpen && (
          <div
            className="menu-overlay"
            onClick={() => setIsMenuOpen(false)}
          />
        )}

        {/* MOBILE SLIDER */}
        {isMobile && (
          <ul
            ref={menuRef}
            className={`nav-links mobile-nav ${isMenuOpen ? "active" : ""}`}
          >
            <span
              className="close-btn"
              onClick={() => setIsMenuOpen(false)}
            >
              ✕
            </span>

            <li>
              <NavLink to="/homenew" end onClick={() => setIsMenuOpen(false)}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={() => setIsMenuOpen(false)}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/working" onClick={() => setIsMenuOpen(false)}>
                How It Works
              </NavLink>
            </li>

            <li className="mobile-actions">
              <button className="register-btn">Register</button>
              <button className="login-btn">Login</button>
            </li>
          </ul>
        )}
      </div>
    </header>
  );
};

export default Navbar;
