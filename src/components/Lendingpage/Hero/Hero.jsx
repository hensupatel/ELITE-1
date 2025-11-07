import "./Hero.css";
import vnbg from "../../../assets/VNbg.mp4";

const Hero = () => {
  return (
    <section className="hero-section">
      <video autoPlay loop muted playsInline className="background-video">
        <source src={vnbg} type="video/mp4" />
      </video>
      <div className="left-bar">
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
      </div>

      <div className="hero-slider">
        <div className="hero-slide-item set-bg">
          <div className="slide-inner">
            <div className="slide-content">
              <h2>
                Building Trust, <br />
                Crafting <br />
                the Future
              </h2>
              <a href="#" className="site-btn sb-light">
                See Project
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="slide-num-holder">
        {/* <img src={logo_1} alt="" /> */}
      </div>
      <div className="hero-right-text">CONSTRUCTION</div>
    </section>
  );
};

export default Hero;
