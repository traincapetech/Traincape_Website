import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowLeft, FaCheckCircle, FaCertificate } from "react-icons/fa";

const ComptiaProfessional = () => {
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
      title: "CompTIA CySA+",
      examCodes: "CS0-003",
      description: "Cybersecurity Analyst - Master threat detection, analysis, and incident response",
      url: "/comptia/professional/cysa-plus",
      gradient: "from-cyan-500 to-blue-600",
      topics: ["Security Operations", "Vulnerability Management", "Incident Response", "Reporting"]
    },
    {
      title: "CompTIA PenTest+",
      examCodes: "PT0-002",
      description: "Penetration Testing - Learn ethical hacking and vulnerability assessment techniques",
      url: "/comptia/professional/pentest-plus",
      gradient: "from-purple-500 to-pink-600",
      topics: ["Planning & Scoping", "Information Gathering", "Attacks & Exploits", "Report Writing"]
    },
    {
      title: "CompTIA Cloud+",
      examCodes: "CV0-004",
      description: "Cloud Infrastructure - Vendor-neutral cloud computing and management skills",
      url: "/comptia/professional/cloud-plus",
      gradient: "from-sky-500 to-blue-600",
      topics: ["Cloud Architecture", "Security", "Deployment", "Operations & Support"]
    },
    {
      title: "Cloud Network Virtualization Professional",
      examCodes: "Network+ & Cloud+",
      description: "Stackable certification demonstrating networking and cloud virtualization expertise",
      url: "/comptia/professional/cnvp",
      gradient: "from-blue-500 to-indigo-600",
      topics: ["Network Infrastructure", "Cloud Platforms", "Virtualization", "Integration"]
    },
    {
      title: "Network Security Professional",
      examCodes: "Network+ & Security+",
      description: "Stackable certification for comprehensive network security skills",
      url: "/comptia/professional/network-security",
      gradient: "from-green-500 to-teal-600",
      topics: ["Network Architecture", "Security Implementation", "Threat Detection", "Access Control"]
    },
    {
      title: "Secure Cloud Professional",
      examCodes: "Cloud+ & Security+",
      description: "Stackable certification combining cloud and security expertise",
      url: "/comptia/professional/secure-cloud",
      gradient: "from-sky-500 to-cyan-600",
      topics: ["Cloud Security", "Compliance", "Data Protection", "Infrastructure Security"]
    },
    {
      title: "Security Analytics Professional",
      examCodes: "Security+ & CySA+",
      description: "Stackable certification for advanced security analysis capabilities",
      url: "/comptia/professional/security-analytics",
      gradient: "from-purple-500 to-indigo-600",
      topics: ["Threat Analysis", "Security Monitoring", "Analytics", "Incident Response"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50">
      {/* Hero Section */}
      <motion.section 
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="relative bg-gradient-to-r from-green-600 via-teal-600 to-cyan-600 text-white py-20 px-6 overflow-hidden"
      >
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <button 
            onClick={() => navigate("/comptia")}
            className="flex items-center gap-2 text-white hover:text-green-200 transition mb-6"
          >
            <FaArrowLeft /> Back to Levels
          </button>
          
          <motion.h1 
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Professional Level Certifications
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl mb-4 text-green-100"
          >
            Advance Your IT Career
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg max-w-3xl"
          >
            Specialize in high-demand areas with professional-level certifications covering cybersecurity, cloud computing, and more.
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
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Choose Your Specialization</h2>
            <p className="text-xl text-gray-600">Click on any certification to learn more</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                      <h3 className="text-xl font-bold">{cert.title}</h3>
                      <p className="text-sm opacity-90">{cert.examCodes}</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-700 mb-6 min-h-[60px]">{cert.description}</p>
                  
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
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Career Opportunities</h2>
            <p className="text-xl text-gray-600">Professional certifications lead to these advanced roles</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Security Analyst",
              "Penetration Tester",
              "Cloud Engineer",
              "SOC Analyst",
              "Cloud Architect",
              "Security Consultant",
              "DevOps Engineer",
              "Incident Response Analyst"
            ].map((role, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: idx * 0.1 }}
                className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-6 shadow hover:shadow-lg transition"
              >
                <FaCheckCircle className="text-green-600 text-2xl mb-3" />
                <h3 className="text-lg font-bold text-gray-800">{role}</h3>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mt-12 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-2xl p-8 text-center"
          >
            <h3 className="text-2xl font-bold mb-3">Average Salary Range</h3>
            <p className="text-4xl font-bold">$85,000 - $125,000</p>
            <p className="mt-2 text-green-100">Mid to senior-level positions</p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-green-600 via-teal-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold mb-4">Ready to Advance Your Career?</h2>
            <p className="text-xl mb-8">Contact us to enroll in any Professional certification</p>
            <button 
              onClick={() => navigate("/contact-us")}
              className="bg-white text-teal-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition shadow-lg text-lg"
            >
              Contact Us Now
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ComptiaProfessional;

