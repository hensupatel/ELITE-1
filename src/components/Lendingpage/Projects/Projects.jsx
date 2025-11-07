import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "./Projects.css";

// Import images
import BG1 from "../../../assets/EILAT IMG/residential projects/img-2.jpg";
import BG2 from "../../../assets/EILAT IMG/Commercial projects/1.jpg";
import BG3 from "../../../assets/EILAT IMG/Industrial projects/5.jpg";
import BG4 from "../../../assets/EILAT IMG/Industrial projects/12.jpg";
import BG5 from "../../../assets/EILAT IMG/Commercial projects/2.jpg";
import BG6 from "../../../assets/EILAT IMG/residential projects/img-22.jpg";
import BG7 from "../../../assets/EILAT IMG/Industrial projects/img-20.jpg";
import BG8 from "../../../assets/EILAT IMG/Commercial projects/2.jpg";
import BG9 from "../../../assets/EILAT IMG/Commercial projects/img-2.jpg";
import BG10 from "../../../assets/EILAT IMG/residential projects/img-5.jpg";
import BG11 from "../../../assets/EILAT IMG/Commercial projects/header-section-1.jpg";

const projectItems = [
  { className: "rest", bg: BG1 },
  { className: "build", bg: BG2 },
  { className: "indus", bg: BG4 },
  { className: "apart", bg: BG5 },
  { className: "rest", bg: BG6 },
  { className: "indus", bg: BG7 },
  { className: "build", bg: BG8 },
  { className: "apart", bg: BG9 },
  { className: "rest", bg: BG10 },
  { className: "build", bg: BG11 },
  { className: "indus", bg: BG3 },
];

const Projects = () => {
  const [filter, setFilter] = useState("*");
  const [zoomImage, setZoomImage] = useState(null);

  const filteredProjects =
    filter === "*"
      ? projectItems
      : projectItems.filter((p) => p.className === filter);

  return (
    <section className="projects-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-3">
            <div className="section-title">
              <h2>Projects</h2>
            </div>
          </div>
          <div className="col-lg-9">
            <ul className="projects-filter-nav">
              {["*", "rest", "build", "apart", "indus"].map((cat, i) => (
                <li
                  key={i}
                  className={`btn-filter ${filter === cat ? "btn-active" : ""}`}
                  onClick={() => setFilter(cat)}
                >
                  {cat === "*"
                    ? "All"
                    : cat === "rest"
                    ? "Restaurations"
                    : cat === "build"
                    ? "Buildings"
                    : cat === "apart"
                    ? "Apartments"
                    : "Industrial"}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="projects-slider-container">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3500 }}
          loop={true}
          spaceBetween={25}
          slidesPerView={4}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1200: { slidesPerView: 4 },
          }}
        >
          {filteredProjects.map((p, i) => (
            <SwiperSlide key={i}>
              <div
                className={`single-project ${p.className}`}
                style={{ backgroundImage: `url(${p.bg})` }}
                onClick={() => setZoomImage(p.bg)}
              ></div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Zoom Modal */}
      {zoomImage && (
        <div className="zoom-overlay" onClick={() => setZoomImage(null)}>
          <div className="zoom-image-container">
            <img src={zoomImage} alt="Zoomed Project" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
