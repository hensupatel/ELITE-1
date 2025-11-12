import "./Hero.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import vnbg from "../../../assets/VNbg.mp4";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <section className="hero-section">
      <video autoPlay loop muted playsInline className="background-video">
        <source src={vnbg} type="video/mp4" />
      </video>
      <div className="overlay"></div>
      {/* Left Social Bar */}
      <motion.div
        className="left-bar"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="left-bar-content">
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
      </motion.div>

      {/* Hero Text with animation */}
      <motion.div
        className="hero-slider"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 1.2, ease: "easeOut" }}
      >
        <div className="hero-slide-item set-bg">
          <div className="slide-inner">
            <div className="slide-content" data-aos="fade-up">
              <motion.h2
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
              >
                Building Trust, <br />
                Crafting <br />
                the Future
              </motion.h2>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
              >
                <Link to="/portfolio" className="site-btn sb-light">
                  See Project
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="slide-num-holder">
        {/* <img src={logo_1} alt="" /> */}
      </div>
      <div className="hero-right-text">CONSTRUCTION</div>
    </section>
  );
};

export default Hero;
