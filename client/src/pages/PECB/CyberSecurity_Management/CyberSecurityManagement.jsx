import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaShieldAlt,
  FaCloud,
  FaBug,
  FaNetworkWired,
  FaUserTie,
  FaCogs
} from "react-icons/fa";
import { MdSecurity, MdComputer } from "react-icons/md";
import { Helmet } from "react-helmet";

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
      description:
        "Master ethical hacking and penetration testing methodologies for comprehensive security assessments",
      duration: "5 days",
      level: "Professional",
      url: "/pecb/cybersecurity/penetration-testing",
      color: "from-red-500 to-pink-500",
      keyTopics: [
        "Ethical Hacking",
        "Vulnerability Assessment",
        "Network Security",
        "Web Application Security"
      ]
    },
    {
      icon: <FaCloud />,
      title: "Cloud Security Professional",
      description:
        "Learn to secure cloud environments across major platforms with comprehensive security frameworks",
      duration: "5 days",
      level: "Professional",
      url: "/pecb/cybersecurity/cloud-security",
      color: "from-sky-500 to-blue-500",
      keyTopics: [
        "Cloud Architecture",
        "Identity Management",
        "Data Protection",
        "Compliance"
      ]
    },
    {
      icon: <FaNetworkWired />,
      title: "ISO/IEC 27033 Network Security",
      description:
        "Master network security implementation and management according to international standards",
      duration: "3 days",
      level: "Foundation",
      url: "/pecb/cybersecurity/network-security",
      color: "from-green-500 to-emerald-500",
      keyTopics: [
        "Network Security Design",
        "Security Controls",
        "Network Monitoring",
        "Incident Response"
      ]
    },
    {
      icon: <MdComputer />,
      title: "Computer Forensics Professional",
      description:
        "Learn digital forensics techniques for investigating cybercrimes and security incidents",
      duration: "5 days",
      level: "Professional",
      url: "/pecb/cybersecurity/computer-forensics",
      color: "from-purple-500 to-indigo-500",
      keyTopics: [
        "Digital Evidence",
        "Forensic Analysis",
        "Legal Procedures",
        "Investigation Techniques"
      ]
    },
    {
      icon: <FaShieldAlt />,
      title: "Cybersecurity Maturity Model Certification (CMMC)",
      description:
        "Master CMMC framework for protecting controlled unclassified information in defense contracts",
      duration: "3 days",
      level: "Foundation",
      url: "/pecb/cybersecurity/cmmc",
      color: "from-orange-500 to-red-500",
      keyTopics: [
        "CMMC Framework",
        "Security Controls",
        "Compliance Assessment",
        "Defense Contracting"
      ]
    },
    {
      icon: <FaCogs />,
      title: "SCADA Security Manager",
      description:
        "Learn to secure industrial control systems and SCADA networks from cyber threats",
      duration: "5 days",
      level: "Professional",
      url: "/pecb/cybersecurity/scada-security",
      color: "from-teal-500 to-cyan-500",
      keyTopics: [
        "Industrial Security",
        "SCADA Systems",
        "Critical Infrastructure",
        "Operational Technology"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-red-50 to-pink-50">
      {/* ✅ Updated Helmet Meta */}
      <Helmet>
        <title>Cybersecurity Management | Traincape Technology</title>
        <meta
          name="description"
          content="Become certified in cybersecurity management. To progress in the cybersecurity industry, become an expert in risk management, compliance, and data protection."
        />
        <meta
          name="keywords"
          content="PECB Cybersecurity Management, Cybersecurity Certification, Traincape Technology, Cybersecurity Courses"
        />
        <link
          rel="canonical"
          href="https://traincapetech.in/pecb/cybersecurity-management"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* ✅ Hero Section (H2 now) */}
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
                <span className="text-sm font-semibold">
                  PECB CERTIFICATION CATEGORY
                </span>
              </motion.div>

              {/* ✅ Changed from H1 to H2 */}
              <motion.h2
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-5xl font-bold mb-4"
              >
                Cybersecurity Management
              </motion.h2>

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
                Comprehensive cybersecurity certifications covering penetration
                testing, cloud security, digital forensics, and industrial
                control systems.
              </motion.p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ✅ H1 moved here */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-5xl font-bold text-gray-800 mb-6"
          >
            Cybersecurity Management Certifications
          </motion.h1>
          <p className="text-xl text-gray-600 mb-12">
            Choose your specialization and advance your cybersecurity career
          </p>
        </div>

        {/* Certifications Grid */}
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
                  <div
                    className={`text-3xl text-transparent bg-gradient-to-r ${cert.color} bg-clip-text`}
                  >
                    {cert.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-800 mb-1">
                      {cert.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <span>{cert.duration}</span>
                      <span>•</span>
                      <span>{cert.level}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 mb-4 text-sm">
                  {cert.description}
                </p>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2 text-sm">
                    Key Topics:
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {cert.keyTopics.map((topic, topicIdx) => (
                      <span
                        key={topicIdx}
                        className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-end">
                  <FaArrowRight className="text-gray-400 group-hover:text-red-600 transition-colors" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CyberSecurityManagement;
