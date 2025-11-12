import React, { useState } from "react";
import "./CareerPage.css";
import bg from "../../../assets/img/header-bg-2.jpg";
import { motion } from "framer-motion";

const jobOpenings = [
  {
    id: 1,
    title: "Project Manager (Commercial)",
    location: "New York, NY",
    type: "Full-Time",
    description:
      "Seeking an experienced Project Manager to oversee large-scale commercial construction projects. Must have 5+ years of experience and a PMP certification.",
  },
  {
    id: 2,
    title: "Structural Engineer",
    location: "Chicago, IL",
    type: "Full-Time",
    description:
      "Join our engineering team to design and analyze structural components for residential and industrial projects. PE license required.",
  },

  {
    id: 4,
    title: "Field Superintendent",
    location: "New York, NY",
    type: "Full-Time",
    description:
      "Responsible for managing day-to-day operations on-site, ensuring safety, quality, and project schedule adherence. 7+ years of field experience needed.",
  },
];

// --- CSS STYLES ---
// All styles are included in this component

// --- APPLICATION FORM COMPONENT ---
const ApplicationForm = ({
  job,
  onClose,
  onSubmit,
  isSubmitting,
  submitMessage,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    resume: null,
    coverLetter: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      resume: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you'd use FormData to send the file
    console.log("Submitting:", formData);
    onSubmit(formData);
  };

  // Prevent closing modal by clicking on content
  const stopPropagation = (e) => e.stopPropagation();

  return (
    <div className="form-modal-backdrop" onClick={onClose}>
      <div className="form-modal-content" onClick={stopPropagation}>
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        <h2>Apply for {job.title}</h2>

        {!submitMessage ? (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="resume">Upload Resume</label>
              <input
                type="file"
                id="resume"
                name="resume"
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="coverLetter">Cover Letter (Optional)</label>
              <textarea
                id="coverLetter"
                name="coverLetter"
                value={formData.coverLetter}
                onChange={handleChange}
                placeholder="Tell us why you're a good fit..."
              />
            </div>
            <button type="submit" className="apply-btn" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </button>
          </form>
        ) : (
          <div className="submit-message success">
            <p>{submitMessage}</p>
          </div>
        )}
      </div>
    </div>
  );
};

// --- MAIN CAREER PAGE COMPONENT ---
const CareerPage = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleApplyClick = (job) => {
    setSelectedJob(job);
    setSubmitMessage(""); // Clear previous messages
  };

  const handleCloseForm = () => {
    setSelectedJob(null);
    setIsSubmitting(false);
  };

  const handleFormSubmit = (formData) => {
    setIsSubmitting(true);
    setSubmitMessage("");

    // --- FAKE API SUBMISSION ---
    // In a real app, this is where you'd POST the formData
    // (likely as a FormData object) to your backend.
    console.log("Simulating API call...", formData);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage(
        "Application submitted successfully! We'll be in touch."
      );

      // Close the modal after a short delay
      setTimeout(() => {
        handleCloseForm();
      }, 2500);
    }, 2000);
  };

  return (
    <>
      {/* --- Page Header --- */}
      <motion.section
        className="page-header-section"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <img src={bg} alt="Header background" className="header-bg" />
        <div className="container69">
          <h1 className="header-title69">
            Careers<span>.</span>
          </h1>
        </div>
      </motion.section>

      {/* --- Job List --- */}
      <section className="job-list-section">
        <div className="job-list-container">
          <h2>Current Openings</h2>
          <div className="job-openings">
            {jobOpenings.map((job) => (
              <div className="job-card" key={job.id}>
                <h3>{job.title}</h3>
                <div className="job-meta">
                  <span>
                    {/* Simple location icon (SVG) */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                    </svg>
                    {job.location}
                  </span>
                  <span>
                    {/* Simple clock icon (SVG) */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                      <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                    </svg>
                    {job.type}
                  </span>
                </div>
                <p>{job.description}</p>
                <button
                  className="apply-btn"
                  onClick={() => handleApplyClick(job)}
                >
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Application Modal --- */}
      {selectedJob && (
        <ApplicationForm
          job={selectedJob}
          onClose={handleCloseForm}
          onSubmit={handleFormSubmit}
          isSubmitting={isSubmitting}
          submitMessage={submitMessage}
        />
      )}
    </>
  );
};

export default CareerPage;
