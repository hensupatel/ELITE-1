import React, { useState } from "react";
import "./Header.css";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header-area">
      {/* Logo */}
      <Link to="/" className="logo-area">
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
            <Link to="/" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={closeMenu}>
              About us
            </Link>
          </li>
          <li>
            <Link to="/service" onClick={closeMenu}>
              Services
            </Link>
          </li>
          <li>
            <Link to="/portfolio" onClick={closeMenu}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="/Career" onClick={closeMenu}>
              Career
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={closeMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
