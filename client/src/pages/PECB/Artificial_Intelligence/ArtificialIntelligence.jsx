import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight, FaBrain, FaRobot, FaShieldAlt, FaChartLine, FaUserTie } from "react-icons/fa";
import { Helmet } from "react-helmet";
const ArtificialIntelligence = () => {
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
      icon: <FaBrain />,
      title: "Artificial Intelligence Professional",
      description: "Master AI technologies, machine learning, and AI implementation strategies for business applications",
      duration: "5 days",
      level: "Professional",
      // price: "$1,200",
      url: "/pecb/artificial-intelligence/ai-professional",
      color: "from-purple-500 to-fuchsia-500",
      keyTopics: ["Machine Learning", "AI Ethics", "Neural Networks", "AI Implementation"]
    },
    {
      icon: <FaShieldAlt />,
      title: "AI Risk Management Professional",
      description: "Learn to identify, assess, and manage risks associated with artificial intelligence systems",
      duration: "5 days",
      level: "Professional",
      // price: "$1,200",
      url: "/pecb/artificial-intelligence/ai-risk-management",
      color: "from-fuchsia-500 to-pink-500",
      keyTopics: ["AI Risk Assessment", "Ethics & Bias", "AI Governance", "Responsible AI"]
    },
    {
      icon: <FaRobot />,
      title: "ISO/IEC 42001 AI Management System",
      description: "Implement AI management systems with the international standard for responsible AI governance",
      duration: "5 days",
      level: "Lead Auditor/Implementer",
      // price: "$1,200",
      url: "/pecb/artificial-intelligence/iso-42001",
      color: "from-violet-500 to-purple-500",
      keyTopics: ["AI Governance", "Risk Management", "AI Lifecycle", "Compliance"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-purple-50 to-fuchsia-50">
      <Helmet>
        <title>Artificial Intelligence ||  Traning and Certifications|| PECB || AI Certification || Traincape Technology || AI Certifications</title>
        <meta name="description" content="With training in machine learning, risk management, and security compliance for modern professionals, you can chnage your AI abilities.." />
        <meta name="keywords" content="Training and Certifications, PECB, Artificial Intelligence, Artificial Intelligence, Artificial Intelligence, Traincape Technology, AI Certifications, AI Technologies, AI Risk Management, AI Ethics, AI Governance, AI Implementation" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://traincapetech.in/pecb/artificial-intelligence" />
      </Helmet>
      {/* Hero Section */}
      <motion.section 
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="relative bg-gradient-to-r from-purple-700 via-fuchsia-700 to-pink-700 text-white py-20 px-6 overflow-hidden"
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
                Learn Artificial Intelligence and AI Risk Management
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl md:text-2xl mb-6 text-purple-100"
              >
                Master AI Technology & Risk Management
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="text-lg mb-8 max-w-2xl"
              >
                Comprehensive AI certifications covering AI technologies, risk management, ethics, and governance frameworks for responsible AI implementation.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <button 
                  onClick={() => navigate("/contact-us")}
                  className="bg-white text-purple-700 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Get Started
                </button>
                <button 
                  onClick={() => navigate("/PECB")}
                  className="bg-transparent border-2 border-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-purple-700 transition"
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
                    <FaBrain className="text-yellow-300 text-2xl" />
                    <div>
                      <p className="text-sm text-purple-100">Certifications</p>
                      <p className="font-semibold">3 Available</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaChartLine className="text-green-300 text-2xl" />
                    <div>
                      <p className="text-sm text-purple-100">Levels</p>
                      <p className="font-semibold">Professional to Lead</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaUserTie className="text-pink-300 text-2xl" />
                    <div>
                      <p className="text-sm text-purple-100">Career Path</p>
                      <p className="font-semibold">AI Leadership</p>
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
            <button onClick={() => navigate("/")} className="text-purple-600 hover:text-purple-800">Home</button>
            <span className="text-gray-400">/</span>
            <button onClick={() => navigate("/PECB")} className="text-purple-600 hover:text-purple-800">PECB</button>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600">Artificial Intelligence</span>
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
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Artificial Intelligence Certifications</h2>
            <p className="text-xl text-gray-600">Choose your specialization and advance your AI career</p>
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
                    <FaArrowRight className="text-gray-400 group-hover:text-purple-600 transition-colors" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose AI Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-purple-50 to-fuchsia-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose AI Certifications?</h2>
            <p className="text-xl text-gray-600">Lead the AI revolution</p>
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
                <div className="text-5xl text-purple-600 mb-4">🚀</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Cutting-Edge Technology</h3>
                <p className="text-gray-600">Master the most transformative technology of our time</p>
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
                <div className="text-5xl text-fuchsia-600 mb-4">💰</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">High Earning Potential</h3>
                <p className="text-gray-600">AI professionals earn $100,000 - $180,000+ annually</p>
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
                <div className="text-5xl text-pink-600 mb-4">📈</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Explosive Growth</h3>
                <p className="text-gray-600">AI jobs growing faster than any other tech field</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-purple-700 via-fuchsia-700 to-pink-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold mb-4">Start Your AI Journey</h2>
            <p className="text-xl mb-8">Choose from our comprehensive range of AI certifications</p>
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => navigate("/contact-us")}
                className="bg-white text-purple-700 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition shadow-lg text-lg"
              >
                Get Started Today
              </button>
              <button 
                onClick={() => navigate("/frequently-asked-questions")}
                className="bg-transparent border-2 border-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-purple-700 transition text-lg"
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

export default ArtificialIntelligence;

