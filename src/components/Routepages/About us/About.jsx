import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./About.css";
import cta from "../../../assets/img/cta-img.jpg";
import member1 from "../../../assets/img/team/1.png";
import member2 from "../../../assets/img/team/2.png";
import member3 from "../../../assets/img/team/3.png";
import bg from "../../../assets/img/bg.jpg";
import boss from "../../../assets/img/about.png";

const testimonials = [
  {
    text: `Pellentesque lorem dolor, malesuada eget tortor vitae, tristique lacinia lectus. 
    Pellentesque sed accumsan risus, id aliquam nulla. Integer lorem risus, feugiat at mauris malesuada, 
    accumsan pellentesque ipsum. Nunc dapibus, libero ut pulvinar accumsan, tortor nisl iaculis ligula. 
    Curabitur finibus dolor vel lectus pretium interdum a eget ante.`,
    name: "Maria Westminster",
    role: "Client",
  },
  {
    text: `Curabitur finibus dolor vel lectus pretium interdum a eget ante. 
    Morbi rhoncus feugiat imperdiet. Pellentesque sed accumsan risus, id aliquam nulla.`,
    name: "John Anderson",
    role: "Client",
  },
  {
    text: `Integer lorem risus, feugiat at mauris malesuada, accumsan pellentesque ipsum. 
    Nulla in ipsum sed magna egestas bibendum.`,
    name: "Emma Brown",
    role: "Client",
  },
];

const PageHeader = () => {
  return (
    <>
      <section className="page-header-section">
        <img src={bg} alt="" />
        <div className="container69">
          <h1 className="header-title69">
            About us<span>.</span>
          </h1>
        </div>
      </section>

      <section className="intro-section spad">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 intro-text">
              <h1>
                Building Trust,Crafting the
                <span> Future</span>
              </h1>
              <div className="row">
                <div className="co">
                  <p>
                    Elite Construction was established in 2011, with its roots
                    tracing back to 1981. With nearly four decades of
                    experience, the company has evolved into a fully integrated
                    civil engineering enterprise. Over the years, Elite
                    Construction has successfully executed a wide range of civil
                    engineering projects, showcasing expertise, commitment, and
                    innovation. Guided by a strong foundation of knowledge and
                    craftsmanship, the company continues to deliver quality,
                    precision, and excellence across every endeavor..
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 pt-4 intro-image">
              <img src={boss} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const TestimonialsSection = () => {
  return (
    <section className="cta-section ">
      <div className="cta-image-box">
        <img src={cta} alt="" />
      </div>
      <div className="container1">
        <div className="row">
          <div className="col-lg-7 pl-lg-0 offset-lg-5 cta-content ">
            <h1>
              Clients <span>testimonials</span>
            </h1>
            <div className="qut">“</div>

            {/* ✅ Auto Swiping Testimonials */}
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              pagination={{ clickable: true }}
              className="testimonials-slider"
            >
              {testimonials.map((t, index) => (
                <SwiperSlide key={index}>
                  <div className="ts-item">
                    <p>{t.text}</p>
                    <h4>{t.name}</h4>
                    <span>{t.role}</span>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};
const TeamSection = () => {
  const team = [
    { img: member2, name: "Jack Smith", role: "Senior Architect" },
    { img: member1, name: "Lili Jameson", role: "Senior Architect" },
    { img: member3, name: "Michael Dow", role: "Senior Architect" },
  ];

  return (
    <section className="team-section spad">
      <div className="container">
        <div className="section-title ">
          <h2>The Team</h2>
        </div>
        <div className="row-1">
          {team.map((m, i) => (
            <div className="col-lg-2 col-md-3" key={i}>
              <div className="team-member">
                <img src={m.img} alt={m.name} />
                <div className="member-info">
                  <h1>{m.name}</h1>
                  <p>{m.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
const PromoSection = () => {
  return (
    <section className="promo-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-9 promo-text">
            <h1>
              In need of a <span>fabulous</span> home?
            </h1>
            <p>and let’s build your dream together.</p>
          </div>
          <div className="col-lg-3 text-lg-right">
            <a href="#" className="site-btn sb-dark mt-4">
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export { PageHeader, TestimonialsSection, TeamSection, PromoSection };
