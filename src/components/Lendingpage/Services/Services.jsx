import React, { useEffect } from "react";
import "./Services.css";
import img1 from "../../../assets/img/icon/dark/1.png";
import img2 from "../../../assets/img/icon/dark/2.png";
import img3 from "../../../assets/img/icon/dark/3.png";
import img4 from "../../../assets/img/icon/dark/4.png";
import img5 from "../../../assets/img/icon/dark/5.png";
import img6 from "../../../assets/img/icon/dark/6.png";
import AOS from "aos";
const services = [
  {
    img: img1,
    title: "Plans and Projects",
    text: "We provide complete planning and project management solutions, ensuring every detail aligns with your vision. From concept to completion, we turn ideas into precise architectural realities.",
  },
  {
    img: img2,
    title: "Conceptual Architecture",
    text: "Transforming bold ideas into architectural concepts that inspire and innovate,Our creative process bridges imagination and functionality for visionary designs",
  },
  {
    img: img3,
    title: "Apartment Buildings",
    text: "Designing modern and functional residential spaces that blend comfort, aesthetics, and sustainability,Each apartment project is crafted to enhance community living and urban lifestyles.",
  },
  {
    img: img4,
    title: "Skyscrapers Buildings",
    text: "We specialize in creating iconic high-rise structures that redefine skylines with innovation and strength,Our designs combine architectural brilliance with cutting-edge engineering for unmatched performance.",
  },
  {
    img: img5,
    title: "Industrial construction",
    text: "Delivering robust, efficient, and future-ready industrial infrastructure for diverse sectors,We focus on durability, safety, and scalability to support modern industrial growth.",
  },
  {
    img: img6,
    title: "Restauration Projects",
    text: "Reviving heritage and modern structures with care, precision, and respect for original design.We restore buildings to their former glory while upgrading them for today’s standards.",
  },
];

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 100 });
  }, []);
  return (
    <section className="service-section spad">
      <div className="container">
        <div className="section-title">
          <h2>Services</h2>
        </div>
        <div className="row">
          {services.map((s, i) => (
            <div className="col-lg-4" key={i}>
              <div className="service-box">
                <div className="sb-icon">
                  <div className="sb-img-icon">
                    <img src={s.img} alt={s.title} />
                  </div>
                </div>
                <h3 className="sh3">{s.title}</h3>
                <p className="shp">{s.text}</p>
                <a href="#" className="readmore"></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
