import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCheckCircle, FaClock, FaBook, FaCertificate, FaUserTie, FaChartLine, FaShieldAlt, FaAward } from "react-icons/fa";
import { BsGraphUp } from "react-icons/bs";
import { MdSecurity, MdTrendingUp } from "react-icons/md";
import { Helmet } from "react-helmet";
const ISO37301ComplianceManagementSystem = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const courseDetails = {
    examCode: "ISO 37301:2021",
    duration: "5 days (40 hours)",
    level: "Lead Auditor/Implementer",
    prerequisites: "Basic understanding of relevant concepts",
    examDuration: "3 hours",
    certificationBody: "PECB"
  };
  const structuredData = {
    "@context": "https://schema.org/",
    "@type": "Course",
    "name": "ISO 37301 Compliance Management System Training & Certification",
    "description":
      "Master organizational compliance with PECB ISO 37301 Training & certification from Traincape Technology. Ensure regulatory compliance and ethical business conduct. Get in touch with us now.",
    "provider": {
      "@type": "Organization",
      "name": "Traincape Technology",
      "url": "https://traincapetech.in",
    },
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "Online / Offline",
      "instructor": {
        "@type": "Person",
        "name": "Certified PECB Trainer",
      },
    },
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-blue-100">
      <Helmet>
        {/* Title */}
        <title>
        ISO 37301 Compliance Management System Certification | Traincape Technology
        </title>

        {/* Meta Description */}
        <meta
          name="description"
          content="PECB ISO 37301 Compliance Management System Certification – Learn to implement, manage, and audit compliance frameworks effectively with our ISO 37301 Certification"
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://traincapetech.in/pecb/governance/iso-37301-training"
        />

        {/* Keywords (Optional but useful for niche SEO) */}
        <meta
          name="keywords"
          content="ISO 37301, Compliance Management System, PECB Certification, ISO Training, Compliance, Governance Training, Traincape Tech"
        />

        {/* Open Graph (for social media previews) */}
        <meta
          property="og:title"
          content="PECB ISO 37301 Training and Certification"
        />
        <meta
          property="og:description"
          content="Master organizational compliance with PECB ISO 37301 Training & certification from Traincape Technology. Ensure regulatory compliance and ethical business conduct. Get in touch with us now."
        />
        <meta
          property="og:url"
          content="https://traincapetech.in/pecb/governance/iso-37301-training"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Traincape Technology" />
        <meta
          property="og:image"
          content="https://traincapetech.in/assets/iso37301-banner.webp"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="PECB ISO 37301 Training and Certification"
        />
        <meta
          name="twitter:description"
          content="Master organizational compliance with PECB ISO 37301 Training & certification from Traincape Technology. Ensure regulatory compliance and ethical business conduct. Get in touch with us now."
        />
        <meta
          name="twitter:image"
          content="https://traincapetech.in/assets/iso37301-banner.webp"
        />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <motion.section 
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="relative bg-gradient-to-r from-blue-700 via-cyan-700 to-teal-700 text-white py-20 px-6 overflow-hidden"
      >
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4"
              >
                <span className="text-sm font-semibold">PECB CERTIFICATION</span>
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-5xl font-bold mb-4"
              >
                ISO 37301 Compliance Management System
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl md:text-2xl mb-6 text-blue-100"
              >
                Master Organizational Compliance
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="text-lg mb-8 max-w-2xl"
              >
                ISO 37301 provides guidance for establishing, implementing, and maintaining an effective compliance management system. Ensure regulatory compliance and ethical business conduct.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <button 
                  onClick={() => navigate("/contact-us")}
                  className="bg-white text-blue-700 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Enroll Now
                </button>
                <button 
                  onClick={() => navigate("/PECB")}
                  className="bg-transparent border-2 border-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-700 transition"
                >
                  View All PECB Certs
                </button>
              </motion.div>
            </div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="flex-1 max-w-md"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/20">
                <h3 className="text-2xl font-bold mb-6">Quick Facts</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <FaCertificate className="text-yellow-300 text-2xl" />
                    <div>
                      <p className="text-sm text-blue-100">Standard</p>
                      <p className="font-semibold">{courseDetails.examCode}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaClock className="text-green-300 text-2xl" />
                    <div>
                      <p className="text-sm text-blue-100">Duration</p>
                      <p className="font-semibold">{courseDetails.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaBook className="text-pink-300 text-2xl" />
                    <div>
                      <p className="text-sm text-blue-100">Level</p>
                      <p className="font-semibold">{courseDetails.level}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Professional Certification</h2>
            <p className="text-xl text-gray-600">Advance your career with globally recognized expertise</p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all"
            >
              <MdSecurity className="text-blue-600 text-4xl mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">Industry Recognition</h3>
              <p className="text-gray-600">Globally recognized professional certification</p>
            </motion.div>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all"
            >
              <FaChartLine className="text-blue-600 text-4xl mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">Career Growth</h3>
              <p className="text-gray-600">Advance to senior management positions</p>
            </motion.div>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all"
            >
              <FaAward className="text-blue-600 text-4xl mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">Professional Expertise</h3>
              <p className="text-gray-600">Master best practices and methodologies</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-gradient-to-r from-blue-700 via-cyan-700 to-teal-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold mb-4">Start Your Professional Journey</h2>
            <p className="text-xl mb-8">Enroll now and advance your career with PECB certification</p>
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => navigate("/contact-us")}
                className="bg-white text-blue-700 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition shadow-lg text-lg"
              >
                Enroll Now
              </button>
              <button 
                onClick={() => navigate("/frequently-asked-questions")}
                className="bg-transparent border-2 border-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-blue-700 transition text-lg"
              >
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ISO37301ComplianceManagementSystem;
