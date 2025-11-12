import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "./About.css";
import cta from "../../../assets/img/ctaimg.jpg";
import member1 from "../../../assets/img/team/1.png";
import member2 from "../../../assets/img/team/2.png";
import member3 from "../../../assets/img/team/3.png";
import bg from "../../../assets/img/bg.jpg";
import boss from "../../../assets/img/about.png";
import { Link } from "react-router-dom";

const testimonials = [
  {
    text: `Pellentesque lorem dolor, malesuada eget tortor vitae...`,
    name: "Maria Westminster",
    role: "Client",
  },
  {
    text: `Curabitur finibus dolor vel lectus pretium interdum...`,
    name: "John Anderson",
    role: "Client",
  },
  {
    text: `Integer lorem risus, feugiat at mauris malesuada...`,
    name: "Emma Brown",
    role: "Client",
  },
];

const PageHeader = () => (
  <motion.section
    className="page-header-section"
    initial={{ opacity: 0, y: -50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 1 }}
  >
    <img src={bg} alt="" />
    <div className="container69">
      <h1 className="header-title69">
        About us<span>.</span>
      </h1>
    </div>
  </motion.section>
);

const IntroSection1 = () => (
  <motion.section
    className="intro-section spad"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 1 }}
  >
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-8 intro-text">
          <h1>
            Building Trust, Crafting the <span>Future</span>
          </h1>
          <p>
            Elite Construction was established in 2011, with roots tracing back
            to 1981...
          </p>
        </div>
        <motion.div
          className="col-lg-4 pt-4 intro-image"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <img src={boss} alt="" />
        </motion.div>
      </div>
    </div>
  </motion.section>
);

const TestimonialsSection = () => (
  <motion.section
    className="cta-section"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 1 }}
  >
    <div className="cta-image-box">
      <img src={cta} alt="" />
    </div>
    <div className="container1">
      <div className="row">
        <div className="col-lg-7 pl-lg-0 offset-lg-5 cta-content">
          <h1>
            Clients <span>testimonials</span>
          </h1>
          <div className="qut">“</div>
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            className="testimonials-slider"
          >
            {testimonials.map((t, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  className="ts-item"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <p>{t.text}</p>
                  <h4>{t.name}</h4>
                  <span>{t.role}</span>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  </motion.section>
);

const TeamSection = () => {
  const team = [
    { img: member2, name: "REHANA MISTRY", role: "HR/Admin" },
    { img: member1, name: "OVES MANSURI", role: "ACCOUNTANT" },
    { img: member3, name: "MITESH PATEL", role: "COORDINATOR" },
  ];

  return (
    <motion.section
      className="team-section spad"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1 }}
    >
      <div className="container">
        <div className="section-title">
          <h2>The Team</h2>
        </div>
        <div className="row-1">
          {team.map((m, i) => (
            <motion.div
              className="col-lg-2 col-md-3"
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
            >
              <div className="team-member">
                <img src={m.img} alt={m.name} />
                <div className="member-info">
                  <h1>{m.name}</h1>
                  <p>{m.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

const PromoSection = () => (
  <motion.section
    className="promo-section"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 1 }}
  >
    <div className="container">
      <div className="row">
        <div className="col-lg-9 promo-text">
          <h1>
            In need of a <span>fabulous</span> home?
          </h1>
          <p>and let’s build your dream together.</p>
        </div>
        <div className="col-lg-3 text-lg-right">
          <Link to="/contact" className="site-btn sb-dark mt-4">
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  </motion.section>
);

export {
  PageHeader,
  IntroSection1,
  TestimonialsSection,
  TeamSection,
  PromoSection,
};
