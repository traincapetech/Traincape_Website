import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight, FaShieldAlt, FaLock, FaEye, FaExclamationTriangle, FaUserTie, FaChartLine } from "react-icons/fa";
import { MdSecurity, MdBusiness } from "react-icons/md";
import { Helmet } from "react-helmet";
const InformationSecurityCategory = () => {
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
      icon: <MdSecurity />,
      title: "ISO/IEC 27001 Information Security Management System",
      description: "Master information security management with the international standard for ISMS implementation and auditing",
      duration: "5 days",
      level: "Lead Auditor/Implementer",
      // price: "$1,200",
      url: "/pecb/information-security/iso-27001",
      color: "from-blue-500 to-cyan-500",
      keyTopics: ["ISMS Framework", "Risk Management", "Security Controls", "Implementation"]
    },
    {
      icon: <FaLock />,
      title: "ISO/IEC 27002 Information Security Controls",
      description: "Learn to implement and manage information security controls across 14 categories",
      duration: "3 days",
      level: "Foundation",
      // price: "$800",
      url: "/pecb/information-security/iso-27002",
      color: "from-indigo-500 to-purple-500",
      keyTopics: ["Organizational Controls", "Physical Security", "Technological Controls", "Operational Controls"]
    },
    {
      icon: <FaExclamationTriangle />,
      title: "ISO/IEC 27005 Information Security Risk Management",
      description: "Master information security risk management methodologies and frameworks",
      duration: "3 days",
      level: "Foundation",
      // price: "$800",
      url: "/pecb/information-security/iso-27005",
      color: "from-orange-500 to-red-500",
      keyTopics: ["Risk Assessment", "Risk Treatment", "Risk Monitoring", "Risk Communication"]
    },
    {
      icon: <FaShieldAlt />,
      title: "ISO/IEC 27034 Application Security",
      description: "Learn to secure applications throughout their lifecycle with comprehensive security measures",
      duration: "3 days",
      level: "Foundation",
      // price: "$800",
      url: "/pecb/information-security/iso-27034",
      color: "from-green-500 to-emerald-500",
      keyTopics: ["Application Security Lifecycle", "Security Requirements", "Secure Development", "Security Testing"]
    },
    {
      icon: <FaEye />,
      title: "ISO/IEC 27035 Information Security Incident Management",
      description: "Master incident response and management for information security events",
      duration: "3 days",
      level: "Foundation",
      // price: "$800",
      url: "/pecb/information-security/iso-27035",
      color: "from-red-500 to-pink-500",
      keyTopics: ["Incident Response", "Incident Analysis", "Recovery Procedures", "Lessons Learned"]
    },
    {
      icon: <FaUserTie />,
      title: "PECB Chief Information Security Officer",
      description: "Become a certified CISO with comprehensive leadership and strategic security management skills",
      duration: "5 days",
      level: "Executive",
      // price: "$1,500",
      url: "/pecb/information-security/ciso",
      color: "from-purple-500 to-pink-500",
      keyTopics: ["Strategic Leadership", "Risk Governance", "Security Architecture", "Executive Communication"]
    },
    {
      icon: <FaChartLine />,
      title: "EBIOS Risk Manager",
      description: "Master the EBIOS methodology for comprehensive information security risk assessment",
      duration: "3 days",
      level: "Foundation",
      // price: "$800",
      url: "/pecb/information-security/ebios",
      color: "from-teal-500 to-cyan-500",
      keyTopics: ["EBIOS Methodology", "Risk Assessment", "Threat Analysis", "Risk Treatment"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-cyan-50">
      <Helmet>
        <title> Traning and Certifications|| PECB || Information Security Category || Traincape Technology </title>
        <meta name="description" content="Explore information security certifications covering ISMS implementation, risk management, incident response, and executive leadership with the international standard for information security management and controls." />
        <meta name="keywords" content="Training and Certifications, PECB, Information Security Category, Information Security, Information Security Management, Information Security Management System, ISO 27001, ISO 27002, ISO 27005, ISO 27034, ISO 27035, PECB Information Security Category, Traincape Technology, Information Security Category, Information Security, Information Security Management, Information Security Management System, ISO 27001, ISO 27002, ISO 27005, ISO 27034, ISO 27035, PECB Information Security Category, Traincape Technology" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://traincapetech.in/pecb/information-security/information-security-category" />
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
                <span className="text-sm font-semibold">PECB CERTIFICATION CATEGORY</span>
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-5xl font-bold mb-4"
              >
                Information Security
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl md:text-2xl mb-6 text-blue-100"
              >
                Master Information Security Management & Controls
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="text-lg mb-8 max-w-2xl"
              >
                Comprehensive information security certifications covering ISMS implementation, risk management, incident response, and executive leadership.
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
                  Get Started
                </button>
                <button 
                  onClick={() => navigate("/PECB")}
                  className="bg-transparent border-2 border-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-700 transition"
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
                    <MdSecurity className="text-yellow-300 text-2xl" />
                    <div>
                      <p className="text-sm text-blue-100">Certifications</p>
                      <p className="font-semibold">7 Available</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaChartLine className="text-green-300 text-2xl" />
                    <div>
                      <p className="text-sm text-blue-100">Levels</p>
                      <p className="font-semibold">Foundation to Executive</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaUserTie className="text-pink-300 text-2xl" />
                    <div>
                      <p className="text-sm text-blue-100">Career Path</p>
                      <p className="font-semibold">Security Leadership</p>
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
            <button onClick={() => navigate("/")} className="text-blue-600 hover:text-blue-800">Home</button>
            <span className="text-gray-400">/</span>
            <button onClick={() => navigate("/PECB")} className="text-blue-600 hover:text-blue-800">PECB</button>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600">Information Security</span>
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
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Information Security Certifications</h2>
            <p className="text-xl text-gray-600">Choose your specialization and advance your information security career</p>
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
                    <FaArrowRight className="text-gray-400 group-hover:text-blue-600 transition-colors" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Information Security Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Information Security?</h2>
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
                <div className="text-5xl text-blue-600 mb-4">💰</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">High Salary Potential</h3>
                <p className="text-gray-600">Information security professionals earn $85,000 - $130,000+ annually</p>
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
                <p className="text-gray-600">Information security jobs are projected to grow 33% by 2030</p>
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
                <div className="text-5xl text-purple-600 mb-4">🌍</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Global Recognition</h3>
                <p className="text-gray-600">ISO standards are recognized and valued worldwide</p>
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
            <h2 className="text-4xl font-bold mb-4">Start Your Information Security Journey</h2>
            <p className="text-xl mb-8">Choose from our comprehensive range of information security certifications</p>
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

export default InformationSecurityCategory;
