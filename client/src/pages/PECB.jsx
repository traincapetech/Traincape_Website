import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight, FaShieldAlt, FaCloud, FaCogs, FaExclamationTriangle, FaRobot, FaLock, FaChartLine, FaUserTie } from "react-icons/fa";
import { MdSecurity, MdBusiness, MdPrivacyTip } from "react-icons/md";

const PECB = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const categories = [
    {
      icon: <MdSecurity />,
      title: "Information Security",
      description: "ISO 27001, ISO 27002, and information security management",
      color: "from-blue-500 to-cyan-500",
      url: "/pecb/information-security",
      certifications: ["ISO 27001", "ISO 27002", "ISO 27005", "ISO 27034", "ISO 27035"]
    },
    {
      icon: <FaShieldAlt />,
      title: "Cybersecurity Management",
      description: "Penetration testing, cloud security, and cybersecurity frameworks",
      color: "from-red-500 to-pink-500",
      url: "/pecb/cybersecurity",
      certifications: ["Penetration Testing", "Cloud Security", "Computer Forensics", "CMMC", "SCADA Security"]
    },
    {
      icon: <FaCogs />,
      title: "Quality & Management",
      description: "ISO 9001, Six Sigma, and quality management systems",
      color: "from-green-500 to-emerald-500",
      url: "/pecb/quality",
      certifications: ["ISO 9001", "Six Sigma", "ISO 13485", "ISO 20000", "ISO 17025"]
    },
    {
      icon: <FaExclamationTriangle />,
      title: "Governance, Risk & Compliance",
      description: "ISO 31000, ISO 37001, and enterprise risk management",
      color: "from-orange-500 to-red-500",
      url: "/pecb/governance",
      certifications: ["ISO 31000", "ISO 37001", "ISO 37301", "ISO 38500", "Operational Risk"]
    },
    {
      icon: <FaChartLine />,
      title: "Continuity, Resilience & Recovery",
      description: "ISO 22301, business continuity, and operational resilience",
      color: "from-yellow-500 to-orange-500",
      url: "/pecb/continuity",
      certifications: ["ISO 22301", "Crisis Management", "Disaster Recovery", "DORA", "Operational Resilience"]
    },
    {
      icon: <MdPrivacyTip />,
      title: "Privacy & Data Protection",
      description: "GDPR, ISO 27701, and privacy information management",
      color: "from-indigo-500 to-purple-500",
      url: "/pecb/privacy",
      certifications: ["GDPR", "ISO 27701", "Privacy Management"]
    },
    {
      icon: <FaRobot />,
      title: "Artificial Intelligence",
      description: "AI management systems, AI risk management, and AI professional",
      color: "from-purple-500 to-pink-500",
      url: "/pecb/artificial-intelligence",
      certifications: ["AI Professional", "AI Risk Management", "ISO 42001"]
    },
    {
      icon: <FaUserTie />,
      title: "Technical Cybersecurity",
      description: "Ethical hacking, incident response, and digital forensics",
      color: "from-red-600 to-purple-600",
      url: "/pecb/technical-cybersecurity",
      certifications: ["Ethical Hacking", "Incident Response", "Digital Forensics", "Cyber Threat Analysis"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-cyan-50">
      {/* Hero Section */}
      <motion.section 
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="relative bg-gradient-to-r from-blue-700 via-cyan-700 to-indigo-700 text-white py-20 px-6 overflow-hidden"
      >
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-6"
            >
              <span className="text-lg font-semibold">PECB CERTIFICATIONS</span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              PECB Certifications
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-blue-100"
            >
              Excel in compliance and IT security with internationally recognized certifications across multiple domains
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <button 
                onClick={() => navigate("/contact-us")}
                className="bg-white text-blue-700 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg"
              >
                Get Started
              </button>
              <button 
                onClick={() => navigate("/frequently-asked-questions")}
                className="bg-transparent border-2 border-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-blue-700 transition text-lg"
              >
                Learn More
              </button>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Categories Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">PECB Certification Categories</h2>
            <p className="text-xl text-gray-600">Choose your specialization and advance your career</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categories.map((category, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 overflow-hidden group cursor-pointer"
                onClick={() => navigate(category.url)}
              >
                <div className={`h-2 bg-gradient-to-r ${category.color}`}></div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`text-3xl text-transparent bg-gradient-to-r ${category.color} bg-clip-text`}>
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">{category.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Popular Certifications:</h4>
                    <div className="flex flex-wrap gap-1">
                      {category.certifications.slice(0, 3).map((cert, certIdx) => (
                        <span key={certIdx} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                          {cert}
                        </span>
                      ))}
                      {category.certifications.length > 3 && (
                        <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                          +{category.certifications.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-gray-600">Explore Category</span>
                    <FaArrowRight className="text-gray-400 group-hover:text-blue-600 transition-colors" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why PECB Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose PECB?</h2>
            <p className="text-xl text-gray-600">Internationally recognized certifications for professionals</p>
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
                <div className="text-5xl text-blue-600 mb-4">🌍</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Global Recognition</h3>
                <p className="text-gray-600">Internationally recognized certifications accepted worldwide by employers and organizations</p>
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
                <div className="text-5xl text-green-600 mb-4">📈</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Career Advancement</h3>
                <p className="text-gray-600">Boost your career prospects with specialized certifications in high-demand fields</p>
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
                <div className="text-5xl text-purple-600 mb-4">🎯</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Practical Skills</h3>
                <p className="text-gray-600">Gain hands-on experience and practical skills applicable to real-world scenarios</p>
              </div>
            </motion.div>
          </div>
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
            <h2 className="text-4xl font-bold mb-4">Start Your PECB Certification Journey</h2>
            <p className="text-xl mb-8">Choose from our comprehensive range of internationally recognized certifications</p>
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => navigate("/contact-us")}
                className="bg-white text-blue-700 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition shadow-lg text-lg"
              >
                Get Started Today
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

export default PECB;