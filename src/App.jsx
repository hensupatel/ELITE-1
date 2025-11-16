import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer";
import Preloader from "./components/preloder/Preloader.jsx";
import AppRoutes from "./AppRoutes.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const onLoad = () => setTimeout(() => setLoading(false), 400);
    if (document.readyState === "complete") {
      onLoad();
    } else {
      window.addEventListener("load", onLoad);
    }
    const fallback = setTimeout(() => setLoading(false), 3000);
    return () => {
      window.removeEventListener("load", onLoad);
      clearTimeout(fallback);
    };
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Header />

      {loading ? <Preloader /> : <AppRoutes />}

      <Footer />
    </Router>
  );
}

export default App;
