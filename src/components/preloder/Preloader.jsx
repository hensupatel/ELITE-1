import React, { useEffect, useState } from "react";
import "./Preloader.css";

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Wait until FULL page load (images, fonts, etc.)
    window.addEventListener("load", () => {
      setTimeout(() => {
        setLoading(false); // Delay for smooth fade-out
      }, 500);
    });
  }, []);

  return (
    <>
      {loading && (
        <div className="preloader fade-out">
          <div className="spinner"></div>
        </div>
      )}
    </>
  );
};

export default Preloader;
