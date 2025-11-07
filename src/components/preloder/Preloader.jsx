import React, { useEffect, useState } from "react";
import "./Preloader.css";

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // ⏳ Preloader shows for 1.5 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && (
        <div className="preloader">
          <div className="spinner"></div>
        </div>
      )}
    </>
  );
};

export default Preloader;
