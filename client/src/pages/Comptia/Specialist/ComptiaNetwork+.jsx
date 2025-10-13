import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCheckCircle, FaClock, FaBook, FaCertificate, FaNetworkWired, FaServer } from "react-icons/fa";
import { BsShieldCheck, BsGraphUp, BsCloudFill } from "react-icons/bs";
import { MdSecurity, MdRouter } from "react-icons/md";

const ComptiaNetworkPlus = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const courseDetails = {
    examCode: "N10-009",
    duration: "40-50 hours",
    level: "Specialist",
    prerequisites: "CompTIA A+ or equivalent knowledge",
    validity: "3 years",
    passingScore: "720/900"
  };

  const keyTopics = [
    {
      icon: <FaNetworkWired />,
      title: "Networking Fundamentals",
      percentage: "20%",
      topics: [
        "OSI and TCP/IP models",
        "IPv4 and IPv6 addressing",
        "Common ports and protocols",
        "Network topologies and architecture"
      ]
    },
    {
      icon: <MdRouter />,
      title: "Network Implementations",
      percentage: "19%",
      topics: [
        "Routing and switching",
        "Wireless standards and technologies",
        "Network services (DHCP, DNS, NTP)",
        "WAN technologies"
      ]
    },
    {
      icon: <FaServer />,
      title: "Network Operations",
      percentage: "16%",
      topics: [
        "Documentation and diagrams",
        "Business continuity",
        "Monitoring and performance",
        "Network hardening"
      ]
    },
    {
      icon: <MdSecurity />,
      title: "Network Security",
      percentage: "19%",
      topics: [
        "Security concepts and threats",
        "Network attacks and vulnerabilities",
        "Authentication and access control",
        "Security devices and protocols"
      ]
    },
    {
      icon: <BsShieldCheck />,
      title: "Network Troubleshooting",
      percentage: "26%",
      topics: [
        "Troubleshooting methodology",
        "Network issues diagnosis",
        "Cable and connectivity problems",
        "Wireless troubleshooting"
      ]
    }
  ];

  const benefits = [
    { icon: <FaNetworkWired />, title: "Network Mastery", desc: "Design, configure, and manage networks" },
    { icon: <BsCloudFill />, title: "Cloud Integration", desc: "Understand cloud networking concepts" },
    { icon: <MdSecurity />, title: "Security Skills", desc: "Implement network security measures" },
    { icon: <BsGraphUp />, title: "Career Advancement", desc: "Average salary: $70,000 - $85,000" }
  ];

  const careerPaths = [
    "Network Administrator",
    "Network Technician",
    "Systems Administrator",
    "Network Engineer",
    "IT Support Specialist",
    "Junior Network Analyst"
  ];

  const skillsGained = [
    "Configure and troubleshoot network devices",
    "Implement physical and virtual networks",
    "Manage network security and access",
    "Understand cloud and virtualization concepts",
    "Perform network monitoring and optimization",
    "Document network infrastructure"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-green-50 to-teal-50">
      {/* Hero Section */}
      <motion.section 
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="relative bg-gradient-to-r from-teal-600 via-green-600 to-emerald-600 text-white py-20 px-6 overflow-hidden"
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
                <span className="text-sm font-semibold">SPECIALIST LEVEL</span>
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-6xl font-bold mb-4"
              >
                CompTIA Network+
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl md:text-2xl mb-6 text-green-100"
              >
                Master Network Infrastructure & Technologies
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="text-lg mb-8 max-w-2xl"
              >
                CompTIA Network+ validates the essential knowledge and skills needed to confidently design, configure, manage, and troubleshoot wired and wireless networks.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <button 
                  onClick={() => navigate("/contact-us")}
                  className="bg-white text-teal-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Enroll Now
                </button>
                <button 
                  onClick={() => window.open("https://drive.google.com/file/d/1STSS_glddrQljf4Ia6HeA_3WqgIf54Hp/view", "_blank")}
                  className="bg-transparent border-2 border-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-teal-600 transition"
                >
                  Download Brochure
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
                      <p className="text-sm text-green-100">Exam Code</p>
                      <p className="font-semibold">{courseDetails.examCode}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaClock className="text-green-300 text-2xl" />
                    <div>
                      <p className="text-sm text-green-100">Duration</p>
                      <p className="font-semibold">{courseDetails.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaBook className="text-pink-300 text-2xl" />
                    <div>
                      <p className="text-sm text-green-100">Prerequisites</p>
                      <p className="font-semibold">{courseDetails.prerequisites}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Key Topics Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Exam Objectives</h2>
            <p className="text-xl text-gray-600">Comprehensive networking knowledge across 5 domains</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyTopics.map((section, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all hover:-translate-y-1 border border-gray-100"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-3xl text-teal-600">{section.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{section.title}</h3>
                    <span className="text-sm font-semibold text-teal-600">{section.percentage}</span>
                  </div>
                </div>
                <ul className="space-y-2">
                  {section.topics.map((topic, topicIdx) => (
                    <li key={topicIdx} className="flex items-start gap-2">
                      <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0 text-sm" />
                      <span className="text-gray-700 text-sm">{topic}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Gained Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-teal-50 to-green-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Skills You'll Master</h2>
            <p className="text-xl text-gray-600">Practical networking competencies</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillsGained.map((skill, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all"
              >
                <FaCheckCircle className="text-teal-600 text-2xl mb-3" />
                <p className="text-gray-700 font-medium">{skill}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Get Certified?</h2>
            <p className="text-xl text-gray-600">Advance your networking career</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: idx * 0.1 }}
                className="bg-gradient-to-br from-teal-500 to-green-600 text-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-green-100">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Paths Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-green-50 to-teal-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Career Opportunities</h2>
            <p className="text-xl text-gray-600">Unlock diverse networking roles</p>
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
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border-l-4 border-teal-600"
              >
                <FaNetworkWired className="text-teal-600 text-2xl mb-3" />
                <h3 className="text-lg font-bold text-gray-800">{career}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-teal-600 via-green-600 to-emerald-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold mb-4">Ready to Master Networking?</h2>
            <p className="text-xl mb-8">Build a strong foundation for your networking career</p>
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => navigate("/contact-us")}
                className="bg-white text-teal-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition shadow-lg text-lg"
              >
                Enroll Now
              </button>
              <button 
                onClick={() => navigate("/frequently-asked-questions")}
                className="bg-transparent border-2 border-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-teal-600 transition text-lg"
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

export default ComptiaNetworkPlus;

