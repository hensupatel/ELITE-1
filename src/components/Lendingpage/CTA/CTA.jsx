import React from "react";
import "./CTA.css";
import img1 from "../../../assets/img/icon/color/1.png";
import img2 from "../../../assets/img/icon/light/2.png";
import img3 from "../../../assets/img/icon/light/3.png";
import cta from "../../../assets/img/ctaimg.jpg";

const CTA = () => {
  return (
    <section className="cta-section ">
      <div className="cta-image-box">
        <img src={cta} alt="" />
      </div>
      <div className="container1">
        <div className="row">
          <div className="col-lg-7 pl-lg-0 offset-lg-5 cta-content">
            <h2 className="sp-title">
              Dare to dream of a modern <span>home</span>
            </h2>
            <p>
              Imagine a space where design, comfort, and elegance come together
              effortlessly. We create modern homes that reflect your style and
              bring your vision to life. Sleek, functional, and timeless — your
              dream home begins here.
            </p>
            <div className="cta-icons">
              <div className="cta-img-icon">
                <img src={img1} alt="" />
              </div>
              <div className="cta-img-icon">
                <img src={img2} alt="" />
              </div>
              <div className="cta-img-icon">
                <img src={img3} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
