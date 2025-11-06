import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight, FaUserShield, FaChartLine } from "react-icons/fa";
import { MdPrivacyTip } from "react-icons/md";
import { Helmet } from "react-helmet";

const PrivacyDataProtection = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const certifications = [
    {
      icon: <MdPrivacyTip />,
      title: "General Data Protection Regulation (GDPR)",
      description:
        "Master GDPR compliance and data protection requirements for EU data privacy regulations",
      duration: "3 days",
      level: "Foundation",
      //   price: "$800",
      url: "/pecb/privacy/gdpr",
      color: "from-pink-500 to-rose-500",
      keyTopics: [
        "GDPR Requirements",
        "Data Subject Rights",
        "Privacy by Design",
        "DPO Responsibilities",
      ],
    },
    {
      icon: <FaUserShield />,
      title: "ISO/IEC 27701 Privacy Information Management System",
      description:
        "Implement privacy information management systems extending ISO 27001 for data protection",
      duration: "5 days",
      level: "Lead Auditor/Implementer",
      // price: "$1,200",
      url: "/pecb/privacy/iso-27701",
      color: "from-purple-500 to-pink-500",
      keyTopics: [
        "Privacy Controls",
        "PIMS Implementation",
        "Data Protection",
        "Privacy Risk Management",
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <title>PECB Privacy and Data Protection Trainings | IT Training & Certification</title>
        <meta
          name="description"
          content="Join the globally recognized PECB Privacy & Data Protection training and certification from Traincape Technology. Build compliance, governance, and security expertise. Flexible learning modes available."
        />
        <link
          rel="canonical"
          href="https://traincapetech.in/pecb/privacy"
        />
      </Helmet>


      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-pink-50 to-rose-50">
        {/* Hero Section */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="relative bg-gradient-to-r from-pink-700 via-rose-700 to-purple-700 text-white py-20 px-6 overflow-hidden"
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
                  <span className="text-sm font-semibold">
                    PECB CERTIFICATION CATEGORY
                  </span>
                </motion.div>
                <motion.h1
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-4xl md:text-5xl font-bold mb-4"
                >
                  Privacy & Data Protection
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-xl md:text-2xl mb-6 text-pink-100"
                >
                  Master Privacy Compliance & Data Protection
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-lg mb-8 max-w-2xl"
                >
                  Comprehensive privacy and data protection certifications
                  covering GDPR, privacy management systems, and data protection
                  best practices.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex flex-wrap gap-4"
                >
                  <button
                    onClick={() => navigate("/contact-us")}
                    className="bg-white text-pink-700 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    Get Started
                  </button>
                  <button
                    onClick={() => navigate("/PECB")}
                    className="bg-transparent border-2 border-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-pink-700 transition"
                  >
                    Back to PECB
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
                  <h3 className="text-2xl font-bold mb-6">Category Overview</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <MdPrivacyTip className="text-yellow-300 text-2xl" />
                      <div>
                        <p className="text-sm text-pink-100">Certifications</p>
                        <p className="font-semibold">2 Available</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <FaChartLine className="text-green-300 text-2xl" />
                      <div>
                        <p className="text-sm text-pink-100">Levels</p>
                        <p className="font-semibold">Foundation to Lead</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <FaUserShield className="text-purple-300 text-2xl" />
                      <div>
                        <p className="text-sm text-pink-100">Career Path</p>
                        <p className="font-semibold">Privacy & DPO Roles</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Breadcrumb */}
        <section className="py-4 px-6 bg-white border-b">
          <div className="max-w-7xl mx-auto">
            <nav className="flex items-center space-x-2 text-sm">
              <button
                onClick={() => navigate("/")}
                className="text-pink-600 hover:text-pink-800"
              >
                Home
              </button>
              <span className="text-gray-400">/</span>
              <button
                onClick={() => navigate("/PECB")}
                className="text-pink-600 hover:text-pink-800"
              >
                PECB
              </button>
              <span className="text-gray-400">/</span>
              <span className="text-gray-600">Privacy & Data Protection</span>
            </nav>
          </div>
        </section>

        {/* Certifications Grid */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Privacy & Data Protection Certifications
              </h2>
              <p className="text-xl text-gray-600">
                Choose your specialization and advance your privacy career
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {certifications.map((cert, idx) => (
                <motion.div
                  key={idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 overflow-hidden group cursor-pointer"
                  onClick={() => navigate(cert.url)}
                >
                  <div className={`h-2 bg-gradient-to-r ${cert.color}`}></div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className={`text-3xl text-transparent bg-gradient-to-r ${cert.color} bg-clip-text`}
                      >
                        {cert.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-800 mb-1">
                          {cert.title}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <span>{cert.duration}</span>
                          <span>•</span>
                          <span>{cert.level}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4 text-sm">
                      {cert.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2 text-sm">
                        Key Topics:
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {cert.keyTopics.map((topic, topicIdx) => (
                          <span
                            key={topicIdx}
                            className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-bold text-gray-800">
                          {cert.price}
                        </span>
                        <span className="text-sm text-gray-500">
                          Get Started
                        </span>
                      </div>
                      <FaArrowRight className="text-gray-400 group-hover:text-pink-600 transition-colors" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Privacy Section */}
        <section className="py-16 px-6 bg-gradient-to-br from-pink-50 to-rose-50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Why Choose Privacy & Data Protection?
              </h2>
              <p className="text-xl text-gray-600">
                Critical skills for the digital age
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="text-center"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                  <div className="text-5xl text-pink-600 mb-4">💰</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    High Demand
                  </h3>
                  <p className="text-gray-600">
                    Privacy professionals earn $80,000 - $130,000+ annually
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: 0.2 }}
                className="text-center"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                  <div className="text-5xl text-purple-600 mb-4">📈</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    Growing Field
                  </h3>
                  <p className="text-gray-600">
                    Data protection roles growing rapidly worldwide
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: 0.4 }}
                className="text-center"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                  <div className="text-5xl text-rose-600 mb-4">🌍</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    Global Regulations
                  </h3>
                  <p className="text-gray-600">
                    Critical for compliance in all industries
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 bg-gradient-to-r from-pink-700 via-rose-700 to-purple-700 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-4xl font-bold mb-4">
                Start Your Privacy & Data Protection Journey
              </h2>
              <p className="text-xl mb-8">
                Choose from our comprehensive range of privacy certifications
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button
                  onClick={() => navigate("/contact-us")}
                  className="bg-white text-pink-700 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition shadow-lg text-lg"
                >
                  Get Started Today
                </button>
                <button
                  onClick={() => navigate("/frequently-asked-questions")}
                  className="bg-transparent border-2 border-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-pink-700 transition text-lg"
                >
                  Learn More
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PrivacyDataProtection;