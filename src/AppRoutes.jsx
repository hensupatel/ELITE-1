import React from "react";
import { Routes, Route } from "react-router-dom";

// SEO Component
import SEO from "./components/SEO.jsx";

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
} from "./components/Routepages/Aboutus/About.jsx";

// Service Page Sections
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
            <SEO
              title="Elite Construction – Your Trusted Construction Partner"
              description="Gujarat's trusted construction company since 2011. Residential, commercial, corporate & industrial projects delivered with quality and precision."
              path="/"
            />
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
            <SEO
              title="About Us – Elite Construction"
              description="Discover Elite Construction's legacy since 2011, our expert team, and our dedication to delivering quality projects across Gujarat."
              path="/about"
            />
            <PageHeader />
            <IntroSection1 />
            <TestimonialsSection />
            <TeamSection />
            <PromoSection />
          </>
        }
      />

      {/* Services Page */}
      <Route
        path="/service"
        element={
          <>
            <SEO
              title="Our Services – Elite Construction"
              description="From residential homes to industrial facilities, explore Elite Construction's comprehensive range of construction services."
              path="/service"
            />
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
            <SEO
              title="Portfolio – Elite Construction"
              description="View our completed residential, commercial, corporate, and industrial construction projects across Gujarat."
              path="/portfolio"
            />
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
            <SEO
              title="Careers – Elite Construction"
              description="Join Elite Construction. Explore current openings and build your career with a trusted construction company."
              path="/career"
            />
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
            <SEO
              title="Contact Us – Elite Construction"
              description="Reach out to Elite Construction in Vadodara for project inquiries, quotes, and consultations."
              path="/contact"
            />
            <Contact />
          </>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
