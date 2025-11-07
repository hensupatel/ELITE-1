import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer";
import Preloader from "./components/preloder/Preloader.jsx";
import AppRoutes from "./AppRoutes.jsx";

function App() {
  return (
    <Router>
      <Header />
      <Preloader />
      <AppRoutes />
      <Footer />
    </Router>
  );
}

export default App;
