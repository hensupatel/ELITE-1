import "./Intro.css";
import intro from "../../../assets/img/intro.png";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Intro = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <section className="intro-section pt100 pb50">
      <div className="container">
        <div className="row align-items-center">
          {/* LEFT TEXT SIDE */}
          <div
            className="col-lg-7 intro-text mb-5 mb-lg-0"
            data-aos="fade-right"
          >
            <h2 className="sp-title">
              We are builders of<span> excellence </span>
            </h2>
            <p data-aos="fade-up" data-aos-delay="200">
              Elite Construction was established in 2011, with its roots tracing
              back to 1981. With nearly four decades of experience, the company
              has evolved into a fully integrated civil engineering enterprise.
              Over the years, Elite Construction has successfully executed a
              wide range of civil engineering projects, showcasing expertise,
              commitment, and innovation. Guided by a strong foundation of
              knowledge and craftsmanship, the company continues to deliver
              quality, precision, and excellence across every endeavor..
            </p>
            <a
              href="#"
              className="site-btn sb-dark"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              See Project
            </a>
          </div>

          {/* RIGHT IMAGE SIDE */}
          <div className="col-lg-5 pt-4" data-aos="fade-left">
            <img src={intro} alt="Intro Section" className="intro-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
