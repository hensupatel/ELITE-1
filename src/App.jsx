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
    // When full website finishes loading (images, fonts, everything)
    window.addEventListener("load", () => {
      setTimeout(() => {
        setLoading(false);
      }, 600); // smooth fade delay
    });
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
