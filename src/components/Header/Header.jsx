import React, { useState, useEffect } from "react";
import "./Header.css";
import { FaBars } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/img/logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  // ✅ Automatically close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Function to check if the current path matches the link
  const isActive = (path) => location.pathname === path;

  return (
    <header className="header-area">
      {/* Logo */}
      <Link to="/" className="logo-area" onClick={closeMenu}>
        <img src={Logo} alt="Logo" />
      </Link>

      {/* Mobile Menu Icon */}
      <div className="nav-switch" onClick={handleMenuToggle}>
        <FaBars />
      </div>

      {/* Contact Number */}
      <div className="phone-number">+91-0265-2255145</div>

      {/* Navigation Menu */}
      <nav className={`nav-menu ${menuOpen ? "active" : ""}`}>
        <ul>
          <li>
            <Link
              to="/"
              onClick={closeMenu}
              className={isActive("/") ? "active" : ""}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              onClick={closeMenu}
              className={isActive("/about") ? "active" : ""}
            >
              About us
            </Link>
          </li>
          <li>
            <Link
              to="/service"
              onClick={closeMenu}
              className={isActive("/service") ? "active" : ""}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/portfolio"
              onClick={closeMenu}
              className={isActive("/portfolio") ? "active" : ""}
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              to="/career"
              onClick={closeMenu}
              className={isActive("/career") ? "active" : ""}
            >
              Career
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={closeMenu}
              className={isActive("/contact") ? "active" : ""}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
