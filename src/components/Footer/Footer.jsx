import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-section">
      {/* Social Links */}
      <div className="footer-social">
        <div className="social-links">
          <a href="#">
            <i className="fa fa-pinterest"></i>
          </a>
          <a href="#">
            <i className="fa fa-linkedin"></i>
          </a>
          <a href="#">
            <i className="fa fa-instagram"></i>
          </a>
          <a href="#">
            <i className="fa fa-facebook"></i>
          </a>
          <a href="#">
            <i className="fa fa-twitter"></i>
          </a>
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="container">
        <div className="row">
          <div className="col-lg-9 offset-lg-3">
            <div className="row">
              {/* Column 1 */}
              <div className="col-md-4">
                <div className="footer-item">
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/about">About us</Link>
                    </li>
                    <li>
                      <Link to="/service">Services</Link>
                    </li>
                    <li>
                      <Link to="/portfolio">Portfolio</Link>
                    </li>
                    <li>
                      <Link to="/career">Career</Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Column 2 */}
              <div className="col-md-4">
                <div className="footer-item">
                  <ul>
                    <li>
                      <Link to="/contact">Contact us</Link>
                    </li>
                    <li>
                      <a href="#">FAQ</a>
                    </li>
                    <li>
                      <a href="#">Help Desk</a>
                    </li>
                    <li>
                      <a href="#">Job Applications</a>
                    </li>
                    <li>
                      <a href="#">Site Map</a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Column 3 */}
              <div className="col-md-4">
                <div className="footer-item">
                  <ul>
                    <li>
                      <a href="#">Privacy</a>
                    </li>
                    <li>
                      <a href="#">Terms & Conditions</a>
                    </li>
                    <li>
                      <a href="#">Newsletter</a>
                    </li>
                    <li>
                      <a href="#">Clients Testimonials</a>
                    </li>
                    <li>
                      <a href="#">FAQ</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
