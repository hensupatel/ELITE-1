import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

// Landing Page Sections
import Hero from "./components/Lendingpage/Hero/Hero.jsx";
import Intro from "./components/Lendingpage/Intro/Intro";
import Services from "./components/Lendingpage/Services/Services";
import CTA from "./components/Lendingpage/CTA/CTA";
import Milestones from "./components/Lendingpage/Milestones/Milestones";
import Projects from "./components/Lendingpage/Projects/Projects";

// About Page Sections
import {
  IntroSection1,
  PageHeader,
  PromoSection,
  TeamSection,
  TestimonialsSection,
} from "./components/Routepages/About us/About.jsx";

// Services Page Sections
import {
  IntroSection,
  ServiceBoxSection,
} from "./components/Routepages/Servicespage/Servicespage.jsx";

import Portfolio from "./components/Routepages/Portfolio/Portfolio.jsx";
import Contact from "./components/Routepages/Contact/Contact.jsx";
import CareerPage from "./components/Routepages/Career/Careerpage.jsx";
import Preloader from "./components/preloder/Preloader.jsx"; // ✅ Import preloader

const AppRoutes = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  // Run this every time route (pathname) changes
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1000); // 1s loader
    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (loading) {
    return <Preloader />; // ✅ Show preloader before loading page
  }

  return (
    <Routes>
      {/* Home Page */}
      <Route
        path="/"
        element={
          <>
            <Hero />
            <Intro />
            <Services />
            <CTA />
            <Milestones />
            <Projects />
            <PromoSection />
          </>
        }
      />

      {/* About Page */}
      <Route
        path="/about"
        element={
          <>
            <PageHeader />
            <IntroSection1 />
            <TestimonialsSection />
            <TeamSection />
            <PromoSection />
          </>
        }
      />

      {/* Service Page */}
      <Route
        path="/service"
        element={
          <>
            <IntroSection />
            <ServiceBoxSection />
            <Services />
            <PromoSection />
          </>
        }
      />

      {/* Portfolio Page */}
      <Route
        path="/portfolio"
        element={
          <>
            <Portfolio />
            <PromoSection />
          </>
        }
      />

      {/* Career Page */}
      <Route
        path="/career"
        element={
          <>
            <CareerPage />
            <PromoSection />
          </>
        }
      />

      {/* Contact Page */}
      <Route
        path="/contact"
        element={
          <>
            <Contact />
          </>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
