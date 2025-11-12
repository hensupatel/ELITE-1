import React from "react";
import "./Contact.css";
import bg from "../../../assets/img/header-bg-2.jpg";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <>
      {/* Page Header Section */}
      <motion.section
        className="page-header-section"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <img src={bg} alt="Header background" className="header-bg" />
        <div className="container">
          <h1 className="header-title69">
            Contact<span>.</span>
          </h1>
        </div>
      </motion.section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <div className="section-title18">
            <h1>Get in touch</h1>
          </div>

          <div className="contact-content">
            {/* --- Contact Info --- */}
            <div className="contact-info">
              <p>
                <strong>Address:</strong> 708, Aurum, Nr. Vasna Petrol Pump,
                Iskon Temple Road, Vadodara.
              </p>
              <p>
                <strong>Phone:</strong> +91-0265-2255145
              </p>
              <p>
                <strong>Email:</strong> mail@eliteconstruction.co.in
              </p>

              <div className="cf-social">
                <a href="#">
                  <i className="fa fa-google-plus"></i>
                </a>
                <a href="#">
                  <i className="fa fa-linkedin"></i>
                </a>
                <a href="#">
                  <i className="fa fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i className="fa fa-twitter"></i>
                </a>
              </div>
            </div>

            {/* --- Contact Form --- */}
            <div className="contact-form">
              <form>
                <input type="text" placeholder="Enter your name" required />
                <input
                  type="email"
                  placeholder="Enter your email address"
                  required
                />
                <textarea placeholder="Message ..." required></textarea>
                <button type="submit" className="site-btn">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* --- Map Area --- */}
        <div className="map-area" id="map-canvas">
          <iframe
            title="Elite Construction Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.8701084978814!2d73.15002547601841!3d22.296762779694497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc93f720e81cd%3A0x6cc022232f061f60!2sElite%20Construction!5e0!3m2!1sen!2sin!4v1730380800000!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: "none" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default Contact;
