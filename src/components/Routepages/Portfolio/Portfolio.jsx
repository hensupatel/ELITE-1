import React, { useState, useEffect } from "react";
import "./Portfolio.css";
import bg from "../../../assets/img/bg.jpg";
// --- Commercial Projects ---
import com1 from "../../../assets/EILAT IMG/Commercial projects/1.jpg";
import com2 from "../../../assets/EILAT IMG/Commercial projects/img-3.jpg";
import com3 from "../../../assets/EILAT IMG/Commercial projects/2.jpg";
import com4 from "../../../assets/EILAT IMG/Commercial projects/header-section-1.jpg";
import com5 from "../../../assets/EILAT IMG/Commercial projects/img-2.jpg";

// --- Residential Projects ---
import res1 from "../../../assets/EILAT IMG/residential projects/5.jpg";
import res2 from "../../../assets/EILAT IMG/residential projects/img-2.jpg";
import res3 from "../../../assets/EILAT IMG/residential projects/img-3.jpg";
import res4 from "../../../assets/EILAT IMG/residential projects/img-4.jpg";
import res5 from "../../../assets/EILAT IMG/residential projects/img-5.jpg";
import res6 from "../../../assets/EILAT IMG/residential projects/img-6.jpg";
import res7 from "../../../assets/EILAT IMG/residential projects/img-7.jpg";
import res8 from "../../../assets/EILAT IMG/residential projects/img-9.jpg";
import res9 from "../../../assets/EILAT IMG/residential projects/img-10.jpg";
import res10 from "../../../assets/EILAT IMG/residential projects/img-13.jpg";
import res11 from "../../../assets/EILAT IMG/residential projects/img-22.jpg";
import res12 from "../../../assets/EILAT IMG/residential projects/img-27.jpg";

// --- Industrial Projects ---
import ind1 from "../../../assets/EILAT IMG/Industrial projects/1.jpg";
import ind2 from "../../../assets/EILAT IMG/Industrial projects/3.jpg";
import ind3 from "../../../assets/EILAT IMG/Industrial projects/5.jpg";
import ind4 from "../../../assets/EILAT IMG/Industrial projects/12.jpg";
import ind5 from "../../../assets/EILAT IMG/Industrial projects/img-1.jpg";
import ind6 from "../../../assets/EILAT IMG/Industrial projects/img-6.jpg";
import ind7 from "../../../assets/EILAT IMG/Industrial projects/img-11.jpg";
import ind8 from "../../../assets/EILAT IMG/Industrial projects/img-19.jpg";
import ind9 from "../../../assets/EILAT IMG/Industrial projects/img-20.jpg";

// --- Corporate Projects ---
import bun1 from "../../../assets/EILAT IMG/Corporate projects/img-1.jpg";
import bun2 from "../../../assets/EILAT IMG/Corporate projects/img-2.jpg";
import bun3 from "../../../assets/EILAT IMG/Corporate projects/img-3.jpg";
import bun4 from "../../../assets/EILAT IMG/Corporate projects/img-4.jpg";
import bun5 from "../../../assets/EILAT IMG/Corporate projects/img-5.jpg";
import bun6 from "../../../assets/EILAT IMG/Corporate projects/img-6.jpg";
import bun7 from "../../../assets/EILAT IMG/Corporate projects/img-7.jpg";

// --- Ongoing Projects ---
import work1 from "../../../assets/EILAT IMG/on goin/1.jpg";
import work2 from "../../../assets/EILAT IMG/on goin/2.jpg";
import work3 from "../../../assets/EILAT IMG/on goin/3.jpg";
import work4 from "../../../assets/EILAT IMG/on goin/4.jpg";
import work5 from "../../../assets/EILAT IMG/on goin/img-11.jpg";
import work6 from "../../../assets/EILAT IMG/on goin/img-13.jpg";

const projects = {
  commercial: [
    { src: com1 },
    { src: com2 },
    { src: com3 },
    { src: com4 },
    { src: com5 },
  ],
  residential: [
    { src: res1 },
    { src: res2 },
    { src: res3 },
    { src: res4 },
    { src: res5 },
    { src: res6 },
    { src: res7 },
    { src: res8 },
    { src: res9 },
    { src: res10 },
    { src: res11 },
    { src: res12 },
  ],
  industrial: [
    { src: ind1 },
    { src: ind2 },
    { src: ind3 },
    { src: ind4 },
    { src: ind5 },
    { src: ind6 },
    { src: ind7 },
    { src: ind8 },
    { src: ind9 },
  ],
  corporate: [
    { src: bun1 },
    { src: bun2 },
    { src: bun3 },
    { src: bun4 },
    { src: bun5 },
    { src: bun6 },
    { src: bun7 },
  ],
  ongoing: [
    { src: work1 },
    { src: work2 },
    { src: work3 },
    { src: work4 },
    { src: work5 },
    { src: work6 },
  ],
};

const filterCategories = [
  { id: "all", name: "All" },
  { id: "commercial", name: "Commercial" },
  { id: "residential", name: "Residential" },
  { id: "industrial", name: "Industrial" },
  { id: "corporate", name: "Corporate" },
  { id: "ongoing", name: "On-Going" },
];

function shuffleArray(array) {
  let newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [galleryItems, setGalleryItems] = useState([]);
  const [lightboxSrc, setLightboxSrc] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const displayImages = (filter) => {
    setIsAnimating(false);
    let imagesToShow = [];

    if (filter === "all") {
      imagesToShow = Object.values(projects).flat();
    } else if (projects[filter]) {
      imagesToShow = projects[filter];
    }

    const shuffled = shuffleArray(imagesToShow);

    const sizedItems = shuffled.map((item, index) => {
      const size = Math.random() < 0.25 ? "large" : "small";
      return { id: `${filter}-${index}-${item.src}`, src: item.src, size };
    });

    setGalleryItems(sizedItems);
    setTimeout(() => setIsAnimating(true), 10);
  };

  useEffect(() => {
    displayImages("all");
  }, []);

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    displayImages(filter);
  };

  const openLightbox = (src) => setLightboxSrc(src);
  const closeLightbox = () => setLightboxSrc(null);

  return (
    <>
      <section className="page-header-section">
        <img src={bg} alt="" />
        <div className="container69">
          <h1 className="header-title69">
            Portfolio<span>.</span>
          </h1>
        </div>
      </section>
      <div className="portfolio-container">
        <div className="container">
          <header className="portfolio-header">
            <div className="section-title ">
              <h2>Projects</h2>
            </div>
            <p></p>
          </header>

          <nav className="filter-nav">
            {filterCategories.map((category) => (
              <button
                key={category.id}
                className={`filter-btn ${
                  activeFilter === category.id ? "active" : ""
                }`}
                onClick={() => handleFilterClick(category.id)}
              >
                {category.name}
              </button>
            ))}
          </nav>

          <main>
            <div className="gallery-grid">
              {galleryItems.map((item, index) => (
                <div
                  key={item.id}
                  className={`gallery-item ${item.size} ${
                    isAnimating ? "show" : ""
                  }`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                  onClick={() => openLightbox(item.src)}
                >
                  <img
                    src={item.src}
                    alt="Project"
                    onError={(e) => {
                      e.target.src =
                        "https://placehold.co/800x6004/white?text=Image+Not+Found";
                    }}
                  />{" "}
                  800x600
                </div>
              ))}
            </div>
          </main>
        </div>

        {lightboxSrc && (
          <div className="lightbox" onClick={closeLightbox}>
            <button className="close-btn" onClick={closeLightbox}>
              &times;
            </button>
            <img
              src={lightboxSrc}
              alt="Enlarged project"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </div>
    </>
  );
}
