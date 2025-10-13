import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCheckCircle, FaClock, FaBook, FaCertificate, FaChartLine, FaSearch } from "react-icons/fa";
import { BsShieldCheck, BsGraphUp, BsBugFill } from "react-icons/bs";
import { MdSecurity, MdAnalytics } from "react-icons/md";

const ComptiaCYSAPlus = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const courseDetails = {
    examCode: "CS0-003",
    duration: "60-70 hours",
    level: "Professional",
    prerequisites: "CompTIA Security+ or equivalent, 3-4 years hands-on security experience",
    validity: "3 years",
    passingScore: "750/900"
  };

  const keyDomains = [
    {
      icon: <MdSecurity />,
      title: "Security Operations",
      percentage: "33%",
      topics: [
        "Security monitoring and alerting",
        "SIEM and log analysis",
        "Threat intelligence",
        "Vulnerability assessment"
      ]
    },
    {
      icon: <BsBugFill />,
      title: "Vulnerability Management",
      percentage: "30%",
      topics: [
        "Vulnerability identification",
        "Analysis and prioritization",
        "Remediation and mitigation",
        "Scanning and testing tools"
      ]
    },
    {
      icon: <MdAnalytics />,
      title: "Incident Response",
      percentage: "20%",
      topics: [
        "Incident handling procedures",
        "Investigation and analysis",
        "Containment and recovery",
        "Post-incident activities"
      ]
    },
    {
      icon: <FaChartLine />,
      title: "Reporting & Communication",
      percentage: "17%",
      topics: [
        "Security metrics and KPIs",
        "Report generation",
        "Stakeholder communication",
        "Compliance reporting"
      ]
    }
  ];

  const analyticsSkills = [
    {
      icon: <FaSearch />,
      title: "Threat Detection",
      desc: "Identify and analyze security threats in real-time"
    },
    {
      icon: <MdAnalytics />,
      title: "Data Analysis",
      desc: "Leverage analytics tools to uncover security insights"
    },
    {
      icon: <BsShieldCheck />,
      title: "Vulnerability Management",
      desc: "Assess and prioritize security vulnerabilities"
    },
    {
      icon: <FaChartLine />,
      title: "Security Metrics",
      desc: "Measure and report security program effectiveness"
    }
  ];

  const toolsProficiency = [
    "SIEM platforms (Splunk, QRadar, ELK)",
    "Vulnerability scanners (Nessus, Qualys)",
    "Network analysis tools (Wireshark, tcpdump)",
    "IDS/IPS systems",
    "Threat intelligence platforms",
    "Forensics tools",
    "Penetration testing tools",
    "Security orchestration platforms"
  ];

  const careerPaths = [
    "Security Analyst",
    "Cybersecurity Analyst",
    "SOC Analyst",
    "Threat Intelligence Analyst",
    "Vulnerability Analyst",
    "Security Operations Analyst",
    "Incident Response Analyst",
    "Threat Hunter"
  ];

  const whyChoose = [
    "Industry's top analytical security certification",
    "Focuses on behavioral analytics and threat detection",
    "Hands-on, performance-based questions",
    "DoD 8570.01-M and 8140 approved",
    "ISO 17024 compliant"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-cyan-50 to-blue-50">
      {/* Hero Section */}
      <motion.section 
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="relative bg-gradient-to-r from-cyan-700 via-blue-700 to-indigo-700 text-white py-20 px-6 overflow-hidden"
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
                <span className="text-sm font-semibold">PROFESSIONAL LEVEL</span>
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-6xl font-bold mb-4"
              >
                CompTIA CySA+
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl md:text-2xl mb-6 text-cyan-100"
              >
                Cybersecurity Analyst
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="text-lg mb-8 max-w-2xl"
              >
                CompTIA CySA+ is the most up-to-date security analyst certification that covers advanced analytics, threat detection, and response. This certification validates your ability to proactively defend against and respond to cybersecurity threats.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <button 
                  onClick={() => navigate("/contact-us")}
                  className="bg-white text-cyan-700 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Enroll Now
                </button>
                <button 
                  onClick={() => window.open("https://drive.google.com/file/d/1hdu1VUxVstGMdA_gVep2IxHBT3O3dy1c/view", "_blank")}
                  className="bg-transparent border-2 border-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-cyan-700 transition"
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
                      <p className="text-sm text-cyan-100">Exam Code</p>
                      <p className="font-semibold">{courseDetails.examCode}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaClock className="text-green-300 text-2xl" />
                    <div>
                      <p className="text-sm text-cyan-100">Duration</p>
                      <p className="font-semibold">{courseDetails.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaBook className="text-pink-300 text-2xl" />
                    <div>
                      <p className="text-sm text-cyan-100">Level</p>
                      <p className="font-semibold">{courseDetails.level}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Key Domains Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Exam Domains</h2>
            <p className="text-xl text-gray-600">Comprehensive analytical security coverage</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {keyDomains.map((domain, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all hover:-translate-y-1 border border-gray-100"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-4xl text-cyan-700">{domain.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{domain.title}</h3>
                    <span className="text-sm font-semibold text-cyan-700">{domain.percentage}</span>
                  </div>
                </div>
                <ul className="space-y-3">
                  {domain.topics.map((topic, topicIdx) => (
                    <li key={topicIdx} className="flex items-start gap-2">
                      <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{topic}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics Skills Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Core Analyst Skills</h2>
            <p className="text-xl text-gray-600">Master critical security analytics capabilities</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {analyticsSkills.map((skill, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2"
              >
                <div className="text-4xl text-cyan-700 mb-4">{skill.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{skill.title}</h3>
                <p className="text-gray-600">{skill.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Proficiency Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Tools & Technologies</h2>
            <p className="text-xl text-gray-600">Hands-on experience with industry-standard tools</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {toolsProficiency.map((tool, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: idx * 0.1 }}
                className="bg-gradient-to-br from-cyan-600 to-blue-700 text-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all"
              >
                <FaCheckCircle className="text-2xl mb-3" />
                <p className="font-medium">{tool}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Paths Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Career Opportunities</h2>
            <p className="text-xl text-gray-600">High-demand analyst roles</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {careerPaths.map((career, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border-l-4 border-cyan-700"
              >
                <MdAnalytics className="text-cyan-700 text-2xl mb-3" />
                <h3 className="text-lg font-bold text-gray-800">{career}</h3>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mt-12 bg-gradient-to-r from-cyan-700 to-blue-700 text-white rounded-2xl p-8 text-center"
          >
            <h3 className="text-2xl font-bold mb-3">Average Salary Range</h3>
            <p className="text-4xl font-bold">$85,000 - $105,000</p>
            <p className="mt-2 text-cyan-100">Mid to senior-level analyst positions</p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why CompTIA CySA+?</h2>
            <p className="text-xl text-gray-600">Industry-recognized analytical security certification</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChoose.map((item, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all"
              >
                <FaCheckCircle className="text-cyan-700 text-2xl mb-3" />
                <p className="text-gray-700 font-medium">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-cyan-700 via-blue-700 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold mb-4">Become a Cybersecurity Analyst</h2>
            <p className="text-xl mb-8">Master the skills to detect and respond to advanced threats</p>
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => navigate("/contact-us")}
                className="bg-white text-cyan-700 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition shadow-lg text-lg"
              >
                Enroll Now
              </button>
              <button 
                onClick={() => navigate("/frequently-asked-questions")}
                className="bg-transparent border-2 border-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-cyan-700 transition text-lg"
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

export default ComptiaCYSAPlus;

