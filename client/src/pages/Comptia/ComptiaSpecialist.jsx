import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowLeft, FaCheckCircle, FaCertificate } from "react-icons/fa";

const ComptiaSpecialist = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const certifications = [
    {
      title: "CompTIA A+",
      examCodes: "220-1101 & 220-1102",
      description: "Foundation for IT careers - covers hardware, networking, mobile devices, and troubleshooting",
      url: "/comptia/specialist/a-plus",
      gradient: "from-blue-500 to-indigo-600",
      topics: ["Hardware", "Networking", "Mobile Devices", "Virtualization", "Troubleshooting"]
    },
    {
      title: "CompTIA Network+",
      examCodes: "N10-009",
      description: "Master networking fundamentals, implementation, operations, security, and troubleshooting",
      url: "/comptia/specialist/network-plus",
      gradient: "from-green-500 to-teal-600",
      topics: ["Networking Fundamentals", "Network Implementations", "Network Operations", "Network Security"]
    },
    {
      title: "CompTIA Security+",
      examCodes: "SY0-701",
      description: "Industry-standard security certification - covers threats, vulnerabilities, and security operations",
      url: "/comptia/specialist/security-plus",
      gradient: "from-red-500 to-orange-600",
      topics: ["Security Concepts", "Threats & Vulnerabilities", "Security Architecture", "Security Operations"]
    },
    {
      title: "Secure Infrastructure Specialist",
      examCodes: "Stackable Certification",
      description: "Earn by completing A+, Network+, and Security+ - demonstrates comprehensive infrastructure security skills",
      url: "/comptia/specialist/secure-infrastructure",
      gradient: "from-purple-500 to-pink-600",
      topics: ["Hardware Management", "Network Infrastructure", "Security Implementation", "Infrastructure Security"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <motion.section 
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="relative bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-20 px-6 overflow-hidden"
      >
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <button 
            onClick={() => navigate("/comptia")}
            className="flex items-center gap-2 text-white hover:text-blue-200 transition mb-6"
          >
            <FaArrowLeft /> Back to Levels
          </button>
          
          <motion.h1 
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Specialist Level Certifications
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl mb-4 text-blue-100"
          >
            Start Your IT Career Journey
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg max-w-3xl"
          >
            Build your foundation with entry-level certifications covering essential IT skills from hardware to security.
          </motion.p>
        </div>
      </motion.section>

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
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Choose Your Certification</h2>
            <p className="text-xl text-gray-600">Click on any certification to learn more</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: idx * 0.1 }}
                onClick={() => navigate(cert.url)}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all cursor-pointer overflow-hidden hover:-translate-y-2"
              >
                <div className={`bg-gradient-to-r ${cert.gradient} p-6 text-white`}>
                  <div className="flex items-center gap-3 mb-2">
                    <FaCertificate className="text-3xl" />
                    <div>
                      <h3 className="text-2xl font-bold">{cert.title}</h3>
                      <p className="text-sm opacity-90">{cert.examCodes}</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-700 mb-6">{cert.description}</p>
                  
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-700 mb-3">Key Topics:</p>
                    <div className="flex flex-wrap gap-2">
                      {cert.topics.map((topic, topicIdx) => (
                        <span 
                          key={topicIdx}
                          className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button 
                    className={`w-full bg-gradient-to-r ${cert.gradient} text-white py-3 rounded-lg font-bold hover:opacity-90 transition mt-4`}
                  >
                    View Details →
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Path Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Career Paths</h2>
            <p className="text-xl text-gray-600">Specialist certifications open doors to these roles</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Desktop Support Technician",
              "Help Desk Technician",
              "IT Support Specialist",
              "Network Administrator",
              "Security Administrator",
              "Systems Administrator"
            ].map((role, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: idx * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 shadow hover:shadow-lg transition"
              >
                <FaCheckCircle className="text-blue-600 text-2xl mb-3" />
                <h3 className="text-lg font-bold text-gray-800">{role}</h3>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mt-12 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-8 text-center"
          >
            <h3 className="text-2xl font-bold mb-3">Average Salary Range</h3>
            <p className="text-4xl font-bold">$55,000 - $85,000</p>
            <p className="mt-2 text-blue-100">Entry to mid-level IT positions</p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
            <p className="text-xl mb-8">Contact us to enroll in any Specialist certification</p>
            <button 
              onClick={() => navigate("/contact-us")}
              className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition shadow-lg text-lg"
            >
              Contact Us Now
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ComptiaSpecialist;

