import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight, FaShieldAlt, FaCloud, FaBug, FaNetworkWired, FaUserTie, FaCogs } from "react-icons/fa";
import { MdSecurity, MdComputer } from "react-icons/md";

const CyberSecurityManagement = () => {
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
      icon: <FaBug />,
      title: "Penetration Testing Professional",
      description: "Master ethical hacking and penetration testing methodologies for comprehensive security assessments",
      duration: "5 days",
      level: "Professional",
      // price: "$1,200",
      url: "/pecb/cybersecurity/penetration-testing",
      color: "from-red-500 to-pink-500",
      keyTopics: ["Ethical Hacking", "Vulnerability Assessment", "Network Security", "Web Application Security"]
    },
    {
      icon: <FaCloud />,
      title: "Cloud Security Professional",
      description: "Learn to secure cloud environments across major platforms with comprehensive security frameworks",
      duration: "5 days",
      level: "Professional",
      // price: "$1,200",
      url: "/pecb/cybersecurity/cloud-security",
      color: "from-sky-500 to-blue-500",
      keyTopics: ["Cloud Architecture", "Identity Management", "Data Protection", "Compliance"]
    },
    {
      icon: <FaNetworkWired />,
      title: "ISO/IEC 27033 Network Security",
      description: "Master network security implementation and management according to international standards",
      duration: "3 days",
      level: "Foundation",
      // price: "$800",
      url: "/pecb/cybersecurity/network-security",
      color: "from-green-500 to-emerald-500",
      keyTopics: ["Network Security Design", "Security Controls", "Network Monitoring", "Incident Response"]
    },
    {
      icon: <MdComputer />,
      title: "Computer Forensics Professional",
      description: "Learn digital forensics techniques for investigating cybercrimes and security incidents",
      duration: "5 days",
      level: "Professional",
      // price: "$1,200",
      url: "/pecb/cybersecurity/computer-forensics",
      color: "from-purple-500 to-indigo-500",
      keyTopics: ["Digital Evidence", "Forensic Analysis", "Legal Procedures", "Investigation Techniques"]
    },
    {
      icon: <FaShieldAlt />,
      title: "Cybersecurity Maturity Model Certification (CMMC)",
      description: "Master CMMC framework for protecting controlled unclassified information in defense contracts",
      duration: "3 days",
      level: "Foundation",
      // price: "$800",
      url: "/pecb/cybersecurity/cmmc",
      color: "from-orange-500 to-red-500",
      keyTopics: ["CMMC Framework", "Security Controls", "Compliance Assessment", "Defense Contracting"]
    },
    {
      icon: <FaCogs />,
      title: "SCADA Security Manager",
      description: "Learn to secure industrial control systems and SCADA networks from cyber threats",
      duration: "5 days",
      level: "Professional",
      // price: "$1,200",
      url: "/pecb/cybersecurity/scada-security",
      color: "from-teal-500 to-cyan-500",
      keyTopics: ["Industrial Security", "SCADA Systems", "Critical Infrastructure", "Operational Technology"]
    }
  ];

  return (
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
                <span className="text-sm font-semibold">PECB CERTIFICATION CATEGORY</span>
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-5xl font-bold mb-4"
              >
                Cybersecurity Management
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl md:text-2xl mb-6 text-red-100"
              >
                Master Advanced Cybersecurity & Threat Management
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="text-lg mb-8 max-w-2xl"
              >
                Comprehensive cybersecurity certifications covering penetration testing, cloud security, digital forensics, and industrial control systems.
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
                  Get Started
                </button>
                <button 
                  onClick={() => navigate("/PECB")}
                  className="bg-transparent border-2 border-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-red-700 transition"
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
                    <FaShieldAlt className="text-yellow-300 text-2xl" />
                    <div>
                      <p className="text-sm text-red-100">Certifications</p>
                      <p className="font-semibold">6 Available</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaUserTie className="text-green-300 text-2xl" />
                    <div>
                      <p className="text-sm text-red-100">Levels</p>
                      <p className="font-semibold">Foundation to Professional</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MdSecurity className="text-pink-300 text-2xl" />
                    <div>
                      <p className="text-sm text-red-100">Career Path</p>
                      <p className="font-semibold">Cybersecurity Specialist</p>
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
            <button onClick={() => navigate("/")} className="text-red-600 hover:text-red-800">Home</button>
            <span className="text-gray-400">/</span>
            <button onClick={() => navigate("/PECB")} className="text-red-600 hover:text-red-800">PECB</button>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600">Cybersecurity Management</span>
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
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Cybersecurity Management Certifications</h2>
            <p className="text-xl text-gray-600">Choose your specialization and advance your cybersecurity career</p>
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
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 overflow-hidden group cursor-pointer"
                onClick={() => navigate(cert.url)}
              >
                <div className={`h-2 bg-gradient-to-r ${cert.color}`}></div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`text-3xl text-transparent bg-gradient-to-r ${cert.color} bg-clip-text`}>
                      {cert.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-800 mb-1">{cert.title}</h3>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <span>{cert.duration}</span>
                        <span>•</span>
                        <span>{cert.level}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 text-sm">{cert.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2 text-sm">Key Topics:</h4>
                    <div className="flex flex-wrap gap-1">
                      {cert.keyTopics.map((topic, topicIdx) => (
                        <span key={topicIdx} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-gray-800">{cert.price}</span>
                      <span className="text-sm text-gray-500">Get Started</span>
                    </div>
                    <FaArrowRight className="text-gray-400 group-hover:text-red-600 transition-colors" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Cybersecurity Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-red-50 to-pink-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Cybersecurity?</h2>
            <p className="text-xl text-gray-600">High-demand field with excellent career prospects</p>
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
                <div className="text-5xl text-red-600 mb-4">💰</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">High Salary Potential</h3>
                <p className="text-gray-600">Cybersecurity professionals earn $90,000 - $150,000+ annually</p>
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
                <h3 className="text-xl font-bold text-gray-800 mb-3">Growing Demand</h3>
                <p className="text-gray-600">Cybersecurity jobs are projected to grow 35% by 2031</p>
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
                <div className="text-5xl text-purple-600 mb-4">🛡️</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Critical Role</h3>
                <p className="text-gray-600">Protect organizations from evolving cyber threats</p>
              </div>
            </motion.div>
          </div>
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
            <h2 className="text-4xl font-bold mb-4">Start Your Cybersecurity Journey</h2>
            <p className="text-xl mb-8">Choose from our comprehensive range of cybersecurity certifications</p>
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => navigate("/contact-us")}
                className="bg-white text-red-700 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition shadow-lg text-lg"
              >
                Get Started Today
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
  );
};

export default CyberSecurityManagement;
