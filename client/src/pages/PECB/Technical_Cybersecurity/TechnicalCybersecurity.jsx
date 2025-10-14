import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight, FaBug, FaSearch, FaShieldAlt, FaUserSecret, FaChartLine, FaUserTie } from "react-icons/fa";
import { MdSecurity } from "react-icons/md";

const TechnicalCybersecurity = () => {
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
      icon: <FaUserSecret />,
      title: "Ethical Hacking",
      description: "Master ethical hacking techniques and penetration testing methodologies for comprehensive security assessments",
      duration: "5 days",
      level: "Professional",
      // price: "$1,200",
      url: "/pecb/technical-cybersecurity/ethical-hacking",
      color: "from-red-500 to-orange-500",
      keyTopics: ["Penetration Testing", "Vulnerability Assessment", "Exploit Development", "Security Tools"]
    },
    {
      icon: <FaSearch />,
      title: "Certified Cyber Threat Analyst (CCTA)",
      description: "Learn cyber threat analysis, threat intelligence, and proactive defense strategies",
      duration: "5 days",
      level: "Professional",
      // price: "$1,200",
      url: "/pecb/technical-cybersecurity/ccta",
      color: "from-orange-500 to-red-500",
      keyTopics: ["Threat Intelligence", "Threat Hunting", "APT Detection", "Analysis Techniques"]
    },
    {
      icon: <FaShieldAlt />,
      title: "Certified Digital Forensics Examiner",
      description: "Master digital forensics investigation techniques for cybercrime analysis and evidence collection",
      duration: "5 days",
      level: "Professional",
      // price: "$1,200",
      url: "/pecb/technical-cybersecurity/digital-forensics",
      color: "from-slate-500 to-gray-500",
      keyTopics: ["Digital Evidence", "Forensic Analysis", "Investigation", "Legal Procedures"]
    },
    {
      icon: <FaBug />,
      title: "Incident Response Professional",
      description: "Learn to respond to and manage cybersecurity incidents effectively with industry best practices",
      duration: "5 days",
      level: "Professional",
      // price: "$1,200",
      url: "/pecb/technical-cybersecurity/incident-response",
      color: "from-amber-500 to-yellow-500",
      keyTopics: ["Incident Detection", "Containment", "Eradication", "Recovery & Analysis"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-red-50 to-orange-50">
      <motion.section 
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="relative bg-gradient-to-r from-red-700 via-orange-700 to-amber-700 text-white py-20 px-6 overflow-hidden"
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
                Technical Cybersecurity
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl md:text-2xl mb-6 text-orange-100"
              >
                Master Advanced Cybersecurity Skills
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="text-lg mb-8 max-w-2xl"
              >
                Comprehensive technical cybersecurity certifications covering ethical hacking, threat analysis, digital forensics, and incident response.
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
                    <MdSecurity className="text-yellow-300 text-2xl" />
                    <div>
                      <p className="text-sm text-orange-100">Certifications</p>
                      <p className="font-semibold">4 Available</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaChartLine className="text-green-300 text-2xl" />
                    <div>
                      <p className="text-sm text-orange-100">Levels</p>
                      <p className="font-semibold">Professional</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaUserTie className="text-pink-300 text-2xl" />
                    <div>
                      <p className="text-sm text-orange-100">Career Path</p>
                      <p className="font-semibold">Technical Security Specialist</p>
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
            <button onClick={() => navigate("/")} className="text-red-600 hover:text-red-800">Home</button>
            <span className="text-gray-400">/</span>
            <button onClick={() => navigate("/PECB")} className="text-red-600 hover:text-red-800">PECB</button>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600">Technical Cybersecurity</span>
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
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Technical Cybersecurity Certifications</h2>
            <p className="text-xl text-gray-600">Choose your specialization and advance your technical security career</p>
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

      <section className="py-16 px-6 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Technical Cybersecurity?</h2>
            <p className="text-xl text-gray-600">High-demand technical skills</p>
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
                <h3 className="text-xl font-bold text-gray-800 mb-3">Top Salaries</h3>
                <p className="text-gray-600">Technical security experts earn $95,000 - $160,000+ annually</p>
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
                <div className="text-5xl text-orange-600 mb-4">🔥</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">High Demand</h3>
                <p className="text-gray-600">Critical shortage of skilled technical security professionals</p>
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
                <div className="text-5xl text-amber-600 mb-4">⚡</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Hands-On Skills</h3>
                <p className="text-gray-600">Practical technical skills valued across all industries</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-gradient-to-r from-red-700 via-orange-700 to-amber-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold mb-4">Start Your Technical Security Journey</h2>
            <p className="text-xl mb-8">Choose from our comprehensive range of technical cybersecurity certifications</p>
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

export default TechnicalCybersecurity;

