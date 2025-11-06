import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight, FaCogs, FaAward, FaChartLine, FaUserTie, FaShieldAlt, FaGraduationCap, FaFlask } from "react-icons/fa";
import { MdBusiness, MdSchool } from "react-icons/md";
import { Helmet } from "react-helmet";


const QualityManagement = () => {
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
      icon: <FaCogs />,
      title: "ISO 9001:2015 Quality Management System",
      description: "Master quality management with the international standard for QMS implementation and continuous improvement",
      duration: "5 days",
      level: "Lead Auditor/Implementer",
      // price: "$1,200",
      url: "/pecb/quality/iso-9001",
      color: "from-green-500 to-emerald-500",
      keyTopics: ["QMS Framework", "Process Approach", "Risk Management", "Continuous Improvement"]
    },
    {
      icon: <FaAward />,
      title: "Six Sigma Professional",
      description: "Learn Six Sigma methodologies for process improvement and quality excellence",
      duration: "5 days",
      level: "Professional",
      // price: "$1,200",
      url: "/pecb/quality/six-sigma",
      color: "from-blue-500 to-cyan-500",
      keyTopics: ["DMAIC Methodology", "Statistical Analysis", "Process Improvement", "Quality Control"]
    },
    {
      icon: <FaShieldAlt />,
      title: "ISO 13485 Medical Devices Quality Management System",
      description: "Specialize in quality management for medical device manufacturing and regulatory compliance",
      duration: "5 days",
      level: "Lead Auditor/Implementer",
      // price: "$1,200",
      url: "/pecb/quality/iso-13485",
      color: "from-red-500 to-pink-500",
      keyTopics: ["Medical Device QMS", "Regulatory Compliance", "Risk Management", "Clinical Evaluation"]
    },
    {
      icon: <FaGraduationCap />,
      title: "ISO 21001 Educational Organizations Management System",
      description: "Implement quality management systems in educational institutions for enhanced learning outcomes",
      duration: "5 days",
      level: "Lead Auditor/Implementer",
      // price: "$1,200",
      url: "/pecb/quality/iso-21001",
      color: "from-purple-500 to-indigo-500",
      keyTopics: ["Educational QMS", "Learning Outcomes", "Stakeholder Management", "Continuous Improvement"]
    },
    {
      icon: <FaChartLine />,
      title: "ISO 21502 Project Management",
      description: "Master project management methodologies and best practices for successful project delivery",
      duration: "3 days",
      level: "Foundation",
      // price: "$800",
      url: "/pecb/quality/iso-21502",
      color: "from-orange-500 to-red-500",
      keyTopics: ["Project Lifecycle", "Risk Management", "Stakeholder Management", "Project Governance"]
    },
    {
      icon: <FaShieldAlt />,
      title: "ISO 28000 Supply Chain Security Management System",
      description: "Secure supply chains with comprehensive security management systems and risk mitigation",
      duration: "5 days",
      level: "Lead Auditor/Implementer",
      // price: "$1,200",
      url: "/pecb/quality/iso-28000",
      color: "from-teal-500 to-cyan-500",
      keyTopics: ["Supply Chain Security", "Risk Assessment", "Security Controls", "Business Continuity"]
    },
    {
      icon: <FaCogs />,
      title: "ISO 55001 Asset Management System",
      description: "Optimize asset performance and value through systematic asset management approaches",
      duration: "5 days",
      level: "Lead Auditor/Implementer",
      // price: "$1,200",
      url: "/pecb/quality/iso-55001",
      color: "from-yellow-500 to-orange-500",
      keyTopics: ["Asset Lifecycle", "Performance Optimization", "Risk Management", "Value Creation"]
    },
    {
      icon: <FaFlask />,
      title: "ISO/IEC 17025 Laboratory Management System",
      description: "Ensure laboratory competence and quality in testing and calibration activities",
      duration: "5 days",
      level: "Lead Auditor/Implementer",
      // price: "$1,200",
      url: "/pecb/quality/iso-17025",
      color: "from-indigo-500 to-purple-500",
      keyTopics: ["Laboratory Competence", "Testing Methods", "Quality Assurance", "Measurement Uncertainty"]
    },
    {
      icon: <MdBusiness />,
      title: "ISO/IEC 20000 IT Service Management System",
      description: "Implement IT service management best practices for efficient and effective service delivery",
      duration: "5 days",
      level: "Lead Auditor/Implementer",
      // price: "$1,200",
      url: "/pecb/quality/iso-20000",
      color: "from-gray-500 to-slate-500",
      keyTopics: ["IT Service Management", "Service Lifecycle", "Incident Management", "Service Improvement"]
    }
  ];

  return (


<>
       <Helmet>
              <title>
            Quality & Management Training | ISO 9001 Certification
              </title>
              <meta
                name="description"
                content="Enhance your skills with Quality & Management training and certification. Get ISO 9001 certification and QMS certificate to boost your career."
              />
              <link
                rel="canonical"
                href="https://traincapetech.in/pecb/quality"
              />
            </Helmet>
      




    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-green-50 to-emerald-50">
      {/* Hero Section */}
      <motion.section 
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="relative bg-gradient-to-r from-green-700 via-emerald-700 to-teal-700 text-white py-20 px-6 overflow-hidden"
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
               Quality & Management Training & ISO 9001 Certification
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl md:text-2xl mb-6 text-green-100"
              >
                Master Quality Management & Process Excellence
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="text-lg mb-8 max-w-2xl"
              >
                Comprehensive quality management certifications covering ISO standards, Six Sigma, project management, and specialized industry applications.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <button 
                  onClick={() => navigate("/contact-us")}
                  className="bg-white text-green-700 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Get Started
                </button>
                <button 
                  onClick={() => navigate("/PECB")}
                  className="bg-transparent border-2 border-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-green-700 transition"
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
                    <FaCogs className="text-yellow-300 text-2xl" />
                    <div>
                      <p className="text-sm text-green-100">Certifications</p>
                      <p className="font-semibold">9 Available</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaChartLine className="text-green-300 text-2xl" />
                    <div>
                      <p className="text-sm text-green-100">Levels</p>
                      <p className="font-semibold">Foundation to Lead</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaUserTie className="text-pink-300 text-2xl" />
                    <div>
                      <p className="text-sm text-green-100">Career Path</p>
                      <p className="font-semibold">Quality Leadership</p>
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
            <button onClick={() => navigate("/")} className="text-green-600 hover:text-green-800">Home</button>
            <span className="text-gray-400">/</span>
            <button onClick={() => navigate("/PECB")} className="text-green-600 hover:text-green-800">PECB</button>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600">Quality & Management</span>
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
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Quality & Management Certifications</h2>
            <p className="text-xl text-gray-600">Choose your specialization and advance your quality management career</p>
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
                    <FaArrowRight className="text-gray-400 group-hover:text-green-600 transition-colors" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Quality Management Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Quality Management?</h2>
            <p className="text-xl text-gray-600">Essential skills for organizational excellence</p>
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
                <div className="text-5xl text-green-600 mb-4">📈</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Process Excellence</h3>
                <p className="text-gray-600">Drive continuous improvement and operational excellence across organizations</p>
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
                <div className="text-5xl text-blue-600 mb-4">🏆</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Industry Recognition</h3>
                <p className="text-gray-600">ISO standards are globally recognized and valued by employers worldwide</p>
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
                <div className="text-5xl text-purple-600 mb-4">💼</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Career Growth</h3>
                <p className="text-gray-600">Quality management roles offer excellent career progression opportunities</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-green-700 via-emerald-700 to-teal-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold mb-4">Start Your Quality Management Journey</h2>
            <p className="text-xl mb-8">Choose from our comprehensive range of quality management certifications</p>
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => navigate("/contact-us")}
                className="bg-white text-green-700 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition shadow-lg text-lg"
              >
                Get Started Today
              </button>
              <button 
                onClick={() => navigate("/frequently-asked-questions")}
                className="bg-transparent border-2 border-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-green-700 transition text-lg"
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

export default QualityManagement;