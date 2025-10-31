import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCheckCircle, FaClock, FaBook, FaCertificate, FaUserTie, FaChartLine, FaHeartbeat, FaAward } from "react-icons/fa";
import { BsShieldCheck, BsGraphUp } from "react-icons/bs";
import { MdBusiness, MdTrendingUp } from "react-icons/md";
import { Helmet } from "react-helmet";

const ISO13485MedicalDevicesQualityManagementSystem = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const courseDetails = {
    examCode: "ISO 13485:2016",
    duration: "5 days (40 hours)",
    level: "Lead Auditor/Implementer",
    prerequisites: "Understanding of medical device regulations and quality concepts",
    examDuration: "3 hours",
    certificationBody: "PECB"
  };

  const keyDomains = [
    {
      icon: <FaHeartbeat />,
      title: "Medical Device QMS",
      topics: [
        "Medical device-specific requirements",
        "Design and development controls",
        "Product safety and efficacy",
        "Regulatory compliance framework"
      ]
    },
    {
      icon: <FaChartLine />,
      title: "Regulatory Compliance",
      topics: [
        "FDA and EU MDR requirements",
        "Global regulatory landscape",
        "Post-market surveillance",
        "Technical documentation"
      ]
    },
    {
      icon: <FaAward />,
      title: "Risk Management",
      topics: [
        "ISO 14971 integration",
        "Risk assessment and analysis",
        "Risk control measures",
        "Residual risk evaluation"
      ]
    },
    {
      icon: <MdBusiness />,
      title: "Clinical Evaluation",
      topics: [
        "Clinical data requirements",
        "Clinical investigation protocols",
        "Safety and performance evaluation",
        "Post-market clinical follow-up"
      ]
    }
  ];

  const skills = [
    {
      icon: <FaHeartbeat />,
      title: "Medical Device QMS",
      desc: "Lead QMS implementation in medical device industry"
    },
    {
      icon: <FaChartLine />,
      title: "Regulatory Expertise",
      desc: "Navigate complex medical device regulations"
    },
    {
      icon: <FaAward />,
      title: "Audit Proficiency",
      desc: "Conduct medical device quality audits"
    },
    {
      icon: <BsGraphUp />,
      title: "Career Advancement",
      desc: "Qualify for senior regulatory affairs roles"
    }
  ];

  const careerPaths = [
    "Medical Device Quality Manager",
    "Regulatory Affairs Manager",
    "QMS Lead Auditor (Medical)",
    "Compliance Manager",
    "Quality Assurance Director",
    "Medical Device Consultant"
  ];

  const trainingOutline = [
    "Day 1: Introduction to ISO 13485 and medical device regulatory landscape",
    "Day 2: QMS requirements, design controls, and risk management",
    "Day 3: Production, post-market surveillance, and corrective actions",
    "Day 4: Auditing medical device organizations and regulatory compliance",
    "Day 5: Certification exam and practical case studies"
  ];

  const benefits = [
    "Regulatory compliance assurance",
    "Enhanced product safety",
    "Improved market access",
    "Reduced regulatory risks",
    "Customer confidence",
    "Global market recognition"
  ];

  return (


<>
          <Helmet>
              <title>
             ISO 13485 Medical Devices QMS Certification | PECB Training
              </title>
              <meta
                name="description"
                content="Join our PECB ISO 13485 training to master Medical Devices QMS, improve compliance, and enhance quality management. Enroll now for expert-led training from Traincape Technology."
              />
              <link
                rel="canonical"
                href="https://traincapetech.in/pecb/quality/iso-13485"
              />
            </Helmet>


    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-red-50 to-pink-50">
      {/* Hero Section */}
      <motion.section 
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="relative bg-gradient-to-r from-red-700 via-pink-700 to-purple-700 text-white py-20 px-6 overflow-hidden"
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
                ISO 13485 Medical Devices QMS
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl md:text-2xl mb-6 text-red-100"
              >
                Master Medical Device Quality Management
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="text-lg mb-8 max-w-2xl"
              >
                ISO 13485 is the international standard for Quality Management Systems in the medical device industry. Master regulatory compliance, design controls, and risk management for medical devices.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <button 
                  onClick={() => navigate("/contact-us")}
                  className="bg-white text-red-700 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Enroll Now
                </button>
                <button 
                  onClick={() => navigate("/PECB")}
                  className="bg-transparent border-2 border-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-red-700 transition"
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
                      <p className="text-sm text-red-100">Standard</p>
                      <p className="font-semibold">{courseDetails.examCode}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaClock className="text-green-300 text-2xl" />
                    <div>
                      <p className="text-sm text-red-100">Duration</p>
                      <p className="font-semibold">{courseDetails.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaBook className="text-pink-300 text-2xl" />
                    <div>
                      <p className="text-sm text-red-100">Level</p>
                      <p className="font-semibold">{courseDetails.level}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Key Domains Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">What You'll Learn</h2>
            <p className="text-xl text-gray-600">Comprehensive medical device QMS training</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {keyDomains.map((domain, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all hover:-translate-y-1 border border-gray-100"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-4xl text-red-600">{domain.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800">{domain.title}</h3>
                </div>
                <ul className="space-y-3">
                  {domain.topics.map((topic, topicIdx) => (
                    <li key={topicIdx} className="flex items-start gap-2">
                      <FaCheckCircle className="text-red-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{topic}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-red-50 to-pink-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">ISO 13485 Implementation Benefits</h2>
            <p className="text-xl text-gray-600">Transform your medical device organization</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <MdTrendingUp className="text-red-600 text-3xl mb-4" />
                <h3 className="text-lg font-bold text-gray-800">{benefit}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Outline Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">5-Day Training Outline</h2>
            <p className="text-xl text-gray-600">Structured learning path to medical device QMS certification</p>
          </motion.div>

          <div className="grid gap-4 max-w-4xl mx-auto">
            {trainingOutline.map((day, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border-l-4 border-red-600"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-gradient-to-r from-red-600 to-pink-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                    {idx + 1}
                  </div>
                  <p className="text-gray-800 font-medium text-lg">{day}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-pink-50 to-red-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Skills You'll Gain</h2>
            <p className="text-xl text-gray-600">Professional medical device quality competencies</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2"
              >
                <div className="text-4xl text-red-600 mb-4">{skill.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{skill.title}</h3>
                <p className="text-gray-600">{skill.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Paths Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Career Opportunities</h2>
            <p className="text-xl text-gray-600">Medical device quality and regulatory roles</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {careerPaths.map((career, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border-l-4 border-red-600"
              >
                <FaUserTie className="text-red-600 text-2xl mb-3" />
                <h3 className="text-lg font-bold text-gray-800">{career}</h3>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mt-12 bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-2xl p-8 text-center"
          >
            <h3 className="text-2xl font-bold mb-3">Average Salary Range</h3>
            <p className="text-4xl font-bold">$85,000 - $140,000</p>
            <p className="mt-2 text-red-100">Senior medical device quality positions</p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-red-700 via-pink-700 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold mb-4">Master Medical Device Quality Management</h2>
            <p className="text-xl mb-8">Start your journey to becoming an ISO 13485 expert</p>
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => navigate("/contact-us")}
                className="bg-white text-red-700 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition shadow-lg text-lg"
              >
                Enroll Now
              </button>
              <button 
                onClick={() => navigate("/frequently-asked-questions")}
                className="bg-transparent border-2 border-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-red-700 transition text-lg"
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

export default ISO13485MedicalDevicesQualityManagementSystem;

