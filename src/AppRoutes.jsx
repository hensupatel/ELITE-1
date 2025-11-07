import React from "react";
import { Routes, Route } from "react-router-dom";

// Landing Page Sections
import Hero from "./components/Lendingpage/Hero/Hero.jsx";
import Intro from "./components/Lendingpage/Intro/Intro";
import Services from "./components/Lendingpage/Services/Services";
import CTA from "./components/Lendingpage/CTA/CTA";
import Milestones from "./components/Lendingpage/Milestones/Milestones";
import Projects from "./components/Lendingpage/Projects/Projects";

// About Page Sections
import {
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

const AppRoutes = () => {
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
            <Projects /> <PromoSection />
          </>
        }
      />

      {/* About Page */}
      <Route
        path="/about"
        element={
          <>
            <PageHeader />
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
      <Route
        path="/Career"
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
