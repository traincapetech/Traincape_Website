import React, { useEffect, useState, useRef } from "react";
import styles from "./Career.module.css";
import banner from "../../assets/CareerBannerIMG.svg";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import { submitCareerApplication } from "../../utils/submitCareerApplication";
import {
  FaBriefcase,
  FaUsers,
  FaChartLine,
  FaRocket,
  FaGraduationCap,
  FaHandshake,
  FaMapMarkerAlt,
  FaClock,
  FaMoneyBillWave,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";

const Career = () => {
  const formRef = useRef(null);
  const [selectedJob, setSelectedJob] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    linkedinUrl: "",
    resumeLink: "",
    coverLetter: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Job listings data
  const jobListings = [
    {
      id: "sales-executive",
      title: "International Sales Executive",
      department: "Sales",
      location: "On-Site",
      type: "Full-time",
      salary: "Competitive + Commission",
      description:
        "Drive revenue growth by identifying and closing deals with international enterprise clients. Be part of a dynamic sales team that's shaping the future of tech education globally.",
      responsibilities: [
        "Identify and pursue new business opportunities",
        "Build and maintain strong client relationships",
        "Meet and exceed monthly sales targets",
      ],
      requirements: [
        "0-1 years of B2B sales experience",
        "Fluent English speaking and writing required",
        "Excellent communication and negotiation skills",
        "Self-motivated with a results-driven approach",
        "Experience with CRM tools",
      ],
      benefits: [
        "Uncapped commission structure",
        "Professional development opportunities",
      ],
    },
    {
      id: "lead-generation-specialist",
      title: "Lead Generation Specialist",
      department: "Marketing & Sales",
      location: "On-Site",
      type: "Full-time",
      salary: "Competitive + Incentives",
      description:
        "Be the engine that fuels our sales pipeline. Use creative strategies to identify, qualify, and nurture potential customers into sales-ready leads.",
      responsibilities: [
        "Research and identify potential clients",
        "Execute multi-channel outreach campaigns",
        "Qualify leads and schedule appointments for sales team",
        "Maintain accurate data in CRM systems",
        "Track and report on lead generation metrics",
      ],
      requirements: [
        "0-1 years of lead generation or sales experience",
        "Strong research and analytical skills",
        "Proficiency with LinkedIn, email outreach tools",
        "Excellent written and verbal communication",
        "Goal-oriented mindset",
      ],
      benefits: [
        "Performance-based incentives",
        "Career growth into sales roles",
        "Training and mentorship programs",
        "Work-life balance",
      ],
    },
  ];

  const companyBenefits = [
    {
      icon: <FaUsers />,
      title: "Collaborative Culture",
      description:
        "Work with talented individuals in a supportive, team-oriented environment where your ideas matter.",
    },
    {
      icon: <FaRocket />,
      title: "Rapid Growth",
      description:
        "Join a fast-growing company with endless opportunities for career advancement and skill development.",
    },
    {
      icon: <FaGraduationCap />,
      title: "Continuous Learning",
      description:
        "Access to courses, certifications, and workshops to keep your skills sharp and relevant.",
    },
    {
      icon: <FaHandshake />,
      title: "Work-Life Balance",
      description:
        "Flexible schedules and remote options that respect your personal time and commitments.",
    },
  ];

  const handleApplyClick = (jobId) => {
    setSelectedJob(jobId);
    setFormData((prev) => ({ ...prev, position: jobId }));
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    const {
      name,
      email,
      phone,
      position,
      experience,
      coverLetter,
      resumeLink,
    } = formData;

    if (name.trim().length < 2)
      return toast.error("Please enter your full name.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()))
      return toast.error("Please enter a valid email.");
    if (!phone.trim() || phone.trim().length < 10)
      return toast.error("Please enter a valid phone number.");
    if (!position) return toast.error("Please select a position.");
    if (coverLetter.trim().length < 20)
      return toast.error("Cover letter must be at least 20 characters.");

    setIsSubmitting(true);
    try {
      // Map position ID to display name
      const positionName =
        jobListings.find((j) => j.id === position)?.title || position;

      const data = await submitCareerApplication({
        ...formData,
        position: positionName,
      });

      toast.success(data?.message || "Application submitted successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        position: "",
        experience: "",
        linkedinUrl: "",
        resumeLink: "",
        coverLetter: "",
      });
      setSelectedJob("");
    } catch (err) {
      toast.error(
        err?.message || "Failed to submit application. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === "position") setSelectedJob(value);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Careers at Traincape Technology | Join Our Growing Team</title>
        <meta
          name="description"
          content="Join Traincape Technology and accelerate your career. Explore exciting opportunities in Sales and Lead Generation. Competitive pay, growth opportunities, and a great team await!"
        />
        <link rel="canonical" href="https://www.traincapetech.in/career" />
      </Helmet>

      <div className={styles.careerPage}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.heroOverlay}></div>
          <div className={styles.heroContent}>
            <span className={styles.heroBadge}>We're Hiring!</span>
            <h1 className={styles.heroTitle}>
              Build Your Future <span>With Us</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Join a team that's revolutionizing tech education. We're looking
              for passionate individuals ready to make an impact.
            </p>
            <div className={styles.heroStats}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>15+</span>
                <span className={styles.statLabel}>Team Members</span>
              </div>
              {/* <div className={styles.statItem}>
                <span className={styles.statNumber}>3.5K+</span>
                <span className={styles.statLabel}>Students Trained</span>
              </div> */}
              <div className={styles.statItem}>
                <span className={styles.statNumber}>95%</span>
                <span className={styles.statLabel}>Satisfaction Rate</span>
              </div>
            </div>
          </div>
        </section>

        {/* Why Join Us Section */}
        <section className={styles.benefitsSection}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>Why Traincape?</span>
            <h2 className={styles.sectionTitle}>
              Why You'll Love Working Here
            </h2>
            <p className={styles.sectionDescription}>
              We believe in creating an environment where talent thrives and
              careers flourish.
            </p>
          </div>
          <div className={styles.benefitsGrid}>
            {companyBenefits.map((benefit, index) => (
              <div key={index} className={styles.benefitCard}>
                <div className={styles.benefitIcon}>{benefit.icon}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Open Positions Section */}
        <section className={styles.positionsSection}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>Open Positions</span>
            <h2 className={styles.sectionTitle}>Current Opportunities</h2>
            <p className={styles.sectionDescription}>
              Explore our open roles and find where you can contribute to our
              mission.
            </p>
          </div>
          <div className={styles.jobsGrid}>
            {jobListings.map((job) => (
              <div
                key={job.id}
                className={`${styles.jobCard} ${selectedJob === job.id ? styles.selected : ""}`}
              >
                <div className={styles.jobHeader}>
                  <div className={styles.jobTitleSection}>
                    <FaBriefcase className={styles.jobIcon} />
                    <div>
                      <h3 className={styles.jobTitle}>{job.title}</h3>
                      <span className={styles.jobDepartment}>
                        {job.department}
                      </span>
                    </div>
                  </div>
                  <span className={styles.jobTypeBadge}>{job.type}</span>
                </div>

                <p className={styles.jobDescription}>{job.description}</p>

                <div className={styles.jobMeta}>
                  <div className={styles.metaItem}>
                    <FaMapMarkerAlt />
                    <span>{job.location}</span>
                  </div>
                  <div className={styles.metaItem}>
                    <FaMoneyBillWave />
                    <span>{job.salary}</span>
                  </div>
                </div>

                <div className={styles.jobDetails}>
                  <div className={styles.detailSection}>
                    <h4>Responsibilities</h4>
                    <ul>
                      {job.responsibilities.map((item, idx) => (
                        <li key={idx}>
                          <FaCheckCircle /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={styles.detailSection}>
                    <h4>Requirements</h4>
                    <ul>
                      {job.requirements.map((item, idx) => (
                        <li key={idx}>
                          <FaCheckCircle /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className={styles.jobBenefits}>
                  {job.benefits.map((benefit, idx) => (
                    <span key={idx} className={styles.benefitTag}>
                      {benefit}
                    </span>
                  ))}
                </div>

                <button
                  className={styles.applyButton}
                  onClick={() => handleApplyClick(job.id)}
                >
                  Apply Now <FaArrowRight />
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Application Form Section */}
        <section ref={formRef} className={styles.applicationSection}>
          <div className={styles.formContainer}>
            <div className={styles.formHeader}>
              <h2>Apply Now</h2>
              <p>
                Take the first step towards an exciting career at Traincape
                Technology
              </p>
            </div>

            <form onSubmit={handleSubmit} className={styles.applicationForm}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="position">Position Applying For *</label>
                  <select
                    id="position"
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a position</option>
                    {jobListings.map((job) => (
                      <option key={job.id} value={job.id}>
                        {job.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="experience">Years of Experience</label>
                  <select
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                  >
                    <option value="">Select experience level</option>
                    <option value="Fresher">Fresher (0-1 years)</option>
                    <option value="1-2 years">1-2 years</option>
                    <option value="2-4 years">2-4 years</option>
                    <option value="4-6 years">4-6 years</option>
                    <option value="6+ years">6+ years</option>
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="linkedinUrl">
                    LinkedIn Profile (Optional)
                  </label>
                  <input
                    type="url"
                    id="linkedinUrl"
                    name="linkedinUrl"
                    value={formData.linkedinUrl}
                    onChange={handleChange}
                    placeholder="https://linkedin.com/in/yourprofile"
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="resumeLink">Resume Link (Google Drive) *</label>
                <input
                  type="url"
                  id="resumeLink"
                  name="resumeLink"
                  value={formData.resumeLink}
                  onChange={handleChange}
                  placeholder="https://drive.google.com/file/d/..."
                  required
                />
                <span className={styles.formHint}>
                  Please share a Google Drive link with view access enabled
                </span>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="coverLetter">
                  Why do you want to join Traincape? *
                </label>
                <textarea
                  id="coverLetter"
                  name="coverLetter"
                  value={formData.coverLetter}
                  onChange={handleChange}
                  placeholder="Tell us about yourself, your experience, and why you're excited about this opportunity..."
                  rows={6}
                  required
                />
              </div>

              <button
                type="submit"
                className={styles.submitButton}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className={styles.spinner}></span>
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit Application <FaArrowRight />
                  </>
                )}
              </button>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default Career;
