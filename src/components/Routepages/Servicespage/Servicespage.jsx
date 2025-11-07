import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "./Servicepage.css";
import bg from "../../../assets/img/bg.jpg";
import img1 from "../../../assets/img/service/1.jpg";
import img2 from "../../../assets/img/service/2.jpg";
import img3 from "../../../assets/img/service/3.jpg";
import bgImage from "../../../assets/img/service-bg.jpg";
const services = [
  {
    id: 1,
    title: "01. Precision in Every Structure.",
    desc: "We combine advanced techniques with expert craftsmanship to ensure every project is built with accuracy, strength, and lasting quality.",
  },
  {
    id: 2,
    title: "02. Building Trust, Delivering Quality.",
    desc: "Nunc dapibus, libero ut pulvinar accumsan, tortor nisl iaculis ligula. Integer lorem risus, feugiat at mauris malesuadaFrom concept to completion, we focus on transparency, reliability, and superior results that exceed client expectations every time.",
  },
  {
    id: 3,
    title: "03. Innovative Designs, Solid Foundations",
    desc: "Blending creativity with engineering excellence, we deliver modern spaces that are both functional and built to stand the test of time.",
  },
];
const serviceData = [
  {
    number: "01.",
    title: "The idea",
    desc: "Every great structure begins with a powerful vision. At Eilat Construction, our ideas are driven by innovation, functionality, and a commitment to creating spaces that inspire.",
  },
  {
    number: "02.",
    title: "Behind the work",
    desc: "Our strength lies in precision, planning, and teamwork. From design to execution, every detail is handled with care to ensure flawless results and long-lasting value.",
  },
  {
    number: "03.",
    title: "The Success",
    desc: "Success for us is measured in trust, satisfaction, and excellence. Each completed project stands as a testament to our dedication and our clients’ confidence in what we build.",
  },
];

const IntroSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <>
      <section className="page-header-section">
        <img src={bg} alt="" />
        <div className="container69">
          <h1 className="header-title69">
            Services<span>.</span>
          </h1>
        </div>
      </section>
      <section className="intro-section spad">
        <div className="container">
          <div className="row">
            {/* Left side Swiper */}
            <div className="col-lg-5">
              <div className="service-slider">
                <Swiper
                  modules={[Autoplay, EffectFade]}
                  effect="fade"
                  autoplay={{ delay: 2500, disableOnInteraction: false }}
                  loop={true}
                  className="mySwiper"
                >
                  {[img1, img2, img3].map((img, index) => (
                    <SwiperSlide key={index}>
                      <div className="ss-single">
                        <img src={img} alt={`service-${index + 1}`} />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>

            {/* Right side content */}
            <div className="col-lg-7 service-text">
              <h1>
                We offer top quality project <span>services</span>
              </h1>

              {services.map((service, index) => (
                <div
                  key={service.id}
                  className="service-item"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <h2>{service.title}</h2>
                  <p className={hoveredIndex === index ? "show" : ""}>
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const ServiceBoxSection = () => {
  return (
    <section className="steps-section">
      <img src={bgImage} alt="" />
      <div className="steps-container">
        {serviceData.map((step, index) => (
          <div className="step-card" key={index}>
            <h2 className="step-number">{step.number}</h2>
            <h3 className="step-title">{step.title}</h3>
            <p className="step-text">{step.desc}</p>
            <a href="#" className="read-more"></a>
          </div>
        ))}
      </div>
    </section>
  );
};

export { IntroSection, ServiceBoxSection };
