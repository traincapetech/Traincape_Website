import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCheckCircle, FaClock, FaBook, FaCertificate, FaUserTie, FaChartLine } from "react-icons/fa";
import { BsShieldCheck, BsGraphUp } from "react-icons/bs";
import { MdSecurity } from "react-icons/md";
import { Helmet } from "react-helmet";
const IEC27001InformationSecurityManagementSystem = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const courseDetails = {
    examCode: "ISO/IEC 27001",
    duration: "5 days (40 hours)",
    level: "Lead Auditor/Implementer",
    prerequisites: "Understanding of information security concepts",
    examDuration: "3 hours",
    certificationBody: "PECB"
  };

  const keyDomains = [
    {
      icon: <MdSecurity />,
      title: "ISMS Framework",
      topics: [
        "Information security management principles",
        "ISMS scope and boundaries",
        "Leadership and commitment",
        "Policy development and communication"
      ]
    },
    {
      icon: <FaChartLine />,
      title: "Risk Management",
      topics: [
        "Risk assessment methodology",
        "Risk treatment planning",
        "Statement of Applicability (SoA)",
        "Risk monitoring and review"
      ]
    },
    {
      icon: <BsShieldCheck />,
      title: "Security Controls",
      topics: [
        "Annex A control categories",
        "Control implementation guidance",
        "Control effectiveness measurement",
        "Control monitoring and review"
      ]
    },
    {
      icon: <FaUserTie />,
      title: "Implementation & Operation",
      topics: [
        "Resource management",
        "Competence and awareness",
        "Communication and documentation",
        "Operational planning and control"
      ]
    }
  ];

  const skills = [
    {
      icon: <FaUserTie />,
      title: "ISMS Leadership",
      desc: "Lead information security management initiatives"
    },
    {
      icon: <MdSecurity />,
      title: "Risk Management",
      desc: "Implement comprehensive risk management frameworks"
    },
    {
      icon: <FaChartLine />,
      title: "Compliance Management",
      desc: "Ensure regulatory and standard compliance"
    },
    {
      icon: <BsGraphUp />,
      title: "Career Growth",
      desc: "Qualify for senior security and audit roles"
    }
  ];

  const careerPaths = [
    "Information Security Manager",
    "ISMS Lead Auditor",
    "ISMS Lead Implementer",
    "Security Consultant",
    "Compliance Manager",
    "Risk Manager"
  ];

  const trainingOutline = [
    "Day 1: Introduction to ISO 27001 and ISMS concepts",
    "Day 2: Risk management and assessment methodologies",
    "Day 3: Security controls and implementation",
    "Day 4: ISMS operation and performance evaluation",
    "Day 5: Certification exam and practical exercises"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-cyan-50">
      <Helmet>
        <title> Traning and Certifications|| PECB || ISO/IEC 27001 Information Security Management System || Traincape Technology </title>
        <meta name="description" content="Learn to implement and manage information security management system with the international standard for ISMS implementation and auditing." />
        <meta name="keywords" content="Training and Certifications, PECB, ISO/IEC 27001 Information Security Management System, Information Security Management System, Information Security Management, Information Security Management System, ISO 27001, ISO 27002, ISO 27005, ISO 27034, ISO 27035, PECB Information Security Management System, Traincape Technology" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://traincapetech.in/pecb/information-security/iso/iec_27001_information_security_management_system" />
      </Helmet>
      {/* Hero Section */}
      <motion.section 
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="relative bg-gradient-to-r from-blue-700 via-cyan-700 to-indigo-700 text-white py-20 px-6 overflow-hidden"
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
                ISO/IEC 27001 Information Security Management System
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl md:text-2xl mb-6 text-blue-100"
              >
                Master Information Security Management
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="text-lg mb-8 max-w-2xl"
              >
                ISO/IEC 27001 is the international standard for Information Security Management Systems (ISMS). This comprehensive certification covers implementation, auditing, and management of information security frameworks.
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
            <p className="text-xl text-gray-600">Comprehensive ISMS training across 4 key areas</p>
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
                  <div className="text-4xl text-blue-600">{domain.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800">{domain.title}</h3>
                </div>
                <ul className="space-y-3">
                  {domain.topics.map((topic, topicIdx) => (
                    <li key={topicIdx} className="flex items-start gap-2">
                      <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{topic}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Outline Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">5-Day Training Outline</h2>
            <p className="text-xl text-gray-600">Structured learning path to certification</p>
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
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border-l-4 border-blue-600"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
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
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Skills You'll Gain</h2>
            <p className="text-xl text-gray-600">Professional ISMS competencies</p>
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
                <div className="text-4xl text-blue-600 mb-4">{skill.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{skill.title}</h3>
                <p className="text-gray-600">{skill.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Paths Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Career Opportunities</h2>
            <p className="text-xl text-gray-600">Information security leadership roles</p>
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
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border-l-4 border-blue-600"
              >
                <FaUserTie className="text-blue-600 text-2xl mb-3" />
                <h3 className="text-lg font-bold text-gray-800">{career}</h3>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mt-12 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-2xl p-8 text-center"
          >
            <h3 className="text-2xl font-bold mb-3">Average Salary Range</h3>
            <p className="text-4xl font-bold">$85,000 - $130,000</p>
            <p className="mt-2 text-blue-100">Senior information security positions</p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-700 via-cyan-700 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold mb-4">Master Information Security Management</h2>
            <p className="text-xl mb-8">Start your journey to becoming an ISO 27001 expert</p>
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

export default IEC27001InformationSecurityManagementSystem;
