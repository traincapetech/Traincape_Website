import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight, FaBalanceScale, FaShieldAlt, FaChartLine, FaUserTie, FaGavel, FaCheckCircle } from "react-icons/fa";
import { MdSecurity, MdBusiness } from "react-icons/md";
import { Helmet } from "react-helmet";



const GovernanceRiskCompliance = () => {
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
      icon: <FaBalanceScale />,
      title: "ISO 31000 Risk Management",
      description: "Master risk management principles and frameworks with the international standard",
      duration: "5 days",
      level: "Lead Auditor/Implementer",
      // price: "$1,200",
      url: "/pecb/governance/iso-31000",
      color: "from-indigo-500 to-blue-500",
      keyTopics: ["Risk Assessment", "Risk Treatment", "Risk Framework", "Risk Monitoring"]
    },
    {
      icon: <FaGavel />,
      title: "ISO 37001 Anti-Bribery Management System",
      description: "Combat corruption and ensure ethics with anti-bribery management systems",
      duration: "5 days",
      level: "Lead Auditor/Implementer",
      // price: "$1,200",
      url: "/pecb/governance/iso-37001",
      color: "from-purple-500 to-indigo-500",
      keyTopics: ["Anti-Bribery Controls", "Due Diligence", "Compliance", "Ethics Management"]
    },
    {
      icon: <MdBusiness />,
      title: "ISO 37000 Corporate Governance",
      description: "Master corporate governance principles and practices for organizational success",
      duration: "5 days",
      level: "Lead Auditor/Implementer",
      // price: "$1,200",
      url: "/pecb/governance/iso-37000",
      color: "from-blue-500 to-cyan-500",
      keyTopics: ["Governance Principles", "Board Effectiveness", "Stakeholder Engagement", "Organizational Leadership"]
    },
    {
      icon: <FaCheckCircle />,
      title: "ISO 37301 Compliance Management System",
      description: "Ensure regulatory compliance and ethical business conduct organization-wide",
      duration: "5 days",
      level: "Lead Auditor/Implementer",
      // price: "$1,200",
      url: "/pecb/governance/iso-37301",
      color: "from-teal-500 to-cyan-500",
      keyTopics: ["Compliance Framework", "Regulatory Requirements", "Ethics Programs", "Compliance Culture"]
    },
    {
      icon: <MdSecurity />,
      title: "ISO/IEC 38500 IT Governance",
      description: "Master IT governance for effective and acceptable use of IT within organizations",
      duration: "5 days",
      level: "Lead Auditor/Implementer",
      // price: "$1,200",
      url: "/pecb/governance/iso-38500",
      color: "from-cyan-500 to-sky-500",
      keyTopics: ["IT Governance Principles", "IT Strategy", "Performance Management", "IT Risk"]
    },
    {
      icon: <FaShieldAlt />,
      title: "Management Systems Internal Auditor",
      description: "Conduct effective internal audits of management systems across various standards",
      duration: "5 days",
      level: "Professional",
      // price: "$1,200",
      url: "/pecb/governance/internal-auditor",
      color: "from-slate-500 to-gray-500",
      keyTopics: ["Audit Planning", "Audit Execution", "Reporting", "Follow-up"]
    },
    {
      icon: <FaChartLine />,
      title: "Operational Risk Management in Financial Institutions",
      description: "Master operational risk management for banking and financial sector compliance",
      duration: "5 days",
      level: "Professional",
      // price: "$1,200",
      url: "/pecb/governance/operational-risk",
      color: "from-emerald-500 to-green-500",
      keyTopics: ["Basel III", "Risk Assessment", "Financial Risk", "Regulatory Compliance"]
    }
  ];

  return (

<>

    <Helmet>
            <title>PECB Governance, Risk & Compliance Training & Certifications</title>
            <meta
              name="description"
              content="Enhance your expertise with PECB’s globally recognized Governance, Risk, and Compliance (GRC) training and certifications. Learn ISO standards, master risk management, and boost your IT career with our training & certifications."
            />
            <link rel="canonical" href="https://traincapetech.in/pecb/governance" />
          </Helmet>



    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-indigo-50 to-blue-50">
      <motion.section 
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="relative bg-gradient-to-r from-indigo-700 via-blue-700 to-cyan-700 text-white py-20 px-6 overflow-hidden"
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
            Governance, Risk & Compliance Certifications
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl md:text-2xl mb-6 text-indigo-100"
              >
                Master GRC Excellence & Leadership
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="text-lg mb-8 max-w-2xl"
              >
                Comprehensive governance, risk, and compliance certifications covering corporate governance, risk management, ethics, and regulatory compliance.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <button 
                  onClick={() => navigate("/contact-us")}
                  className="bg-white text-indigo-700 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Get Started
                </button>
                <button 
                  onClick={() => navigate("/PECB")}
                  className="bg-transparent border-2 border-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-indigo-700 transition"
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
                    <FaBalanceScale className="text-yellow-300 text-2xl" />
                    <div>
                      <p className="text-sm text-indigo-100">Certifications</p>
                      <p className="font-semibold">7 Available</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaChartLine className="text-green-300 text-2xl" />
                    <div>
                      <p className="text-sm text-indigo-100">Levels</p>
                      <p className="font-semibold">Professional to Lead</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaUserTie className="text-pink-300 text-2xl" />
                    <div>
                      <p className="text-sm text-indigo-100">Career Path</p>
                      <p className="font-semibold">GRC Leadership</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <section className="py-4 px-6 bg-white border-b">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center space-x-2 text-sm">
            <button onClick={() => navigate("/")} className="text-indigo-600 hover:text-indigo-800">Home</button>
            <span className="text-gray-400">/</span>
            <button onClick={() => navigate("/PECB")} className="text-indigo-600 hover:text-indigo-800">PECB</button>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600">Governance, Risk & Compliance</span>
          </nav>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Governance, Risk & Compliance Certifications</h2>
            <p className="text-xl text-gray-600">Choose your specialization and advance your GRC career</p>
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
                    <FaArrowRight className="text-gray-400 group-hover:text-indigo-600 transition-colors" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-gradient-to-r from-indigo-700 via-blue-700 to-cyan-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold mb-4">Start Your GRC Journey</h2>
            <p className="text-xl mb-8">Choose from our comprehensive range of governance, risk & compliance certifications</p>
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => navigate("/contact-us")}
                className="bg-white text-indigo-700 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition shadow-lg text-lg"
              >
                Get Started Today
              </button>
              <button 
                onClick={() => navigate("/frequently-asked-questions")}
                className="bg-transparent border-2 border-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-indigo-700 transition text-lg"
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

export default GovernanceRiskCompliance;
