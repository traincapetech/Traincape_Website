import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCheckCircle, FaClock, FaBook, FaCertificate, FaShieldAlt, FaUserTie } from "react-icons/fa";
import { BsShieldCheck, BsGraphUp, BsBriefcaseFill } from "react-icons/bs";
import { MdSecurity, MdPolicy, MdArchitecture } from "react-icons/md";
import { Helmet } from "react-helmet";
const CASPPlus = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const courseDetails = {
    examCode: "CAS-004",
    duration: "80-100 hours",
    level: "Expert",
    prerequisites: "Minimum 10 years of IT experience, including 5 years of hands-on technical security experience",
    validity: "3 years",
    passingScore: "Scaled score (variable)"
  };

  const keyDomains = [
    {
      icon: <MdSecurity />,
      title: "Security Architecture",
      percentage: "29%",
      topics: [
        "Enterprise security architecture",
        "Security design principles",
        "Infrastructure security",
        "Emerging technologies security",
        "Cryptographic solutions"
      ]
    },
    {
      icon: <MdPolicy />,
      title: "Security Operations",
      percentage: "30%",
      topics: [
        "Security assessments",
        "Incident response and management",
        "Digital forensics",
        "Security monitoring",
        "Vulnerability management"
      ]
    },
    {
      icon: <BsBriefcaseFill />,
      title: "Security Engineering & Cryptography",
      percentage: "26%",
      topics: [
        "Secure application development",
        "Authentication and authorization",
        "PKI and certificate management",
        "Cryptographic protocols",
        "Secure coding practices"
      ]
    },
    {
      icon: <MdArchitecture />,
      title: "Governance, Risk & Compliance",
      percentage: "15%",
      topics: [
        "Risk management frameworks",
        "Compliance requirements",
        "Security policies and procedures",
        "Business continuity",
        "Privacy and data protection"
      ]
    }
  ];

  const expertiseAreas = [
    {
      icon: <FaShieldAlt />,
      title: "Enterprise Security",
      desc: "Design and implement enterprise-wide security solutions"
    },
    {
      icon: <MdArchitecture />,
      title: "Security Architecture",
      desc: "Develop comprehensive security architectures"
    },
    {
      icon: <BsShieldCheck />,
      title: "Risk Management",
      desc: "Lead organizational risk assessment and mitigation"
    },
    {
      icon: <FaUserTie />,
      title: "Strategic Planning",
      desc: "Align security with business objectives"
    }
  ];

  const advancedSkills = [
    "Enterprise security architecture and engineering",
    "Advanced threat detection and response",
    "Security research and analysis",
    "Risk management and compliance",
    "Cloud and virtualization security",
    "DevSecOps and secure SDLC",
    "Identity and access management at scale",
    "Incident response and forensics leadership",
    "Security program management",
    "Emerging technology security (IoT, AI/ML)",
    "Cryptography implementation",
    "Security policy and governance"
  ];

  const careerPaths = [
    "Security Architect",
    "Technical Lead/Manager",
    "Security Engineer",
    "Enterprise Security Consultant",
    "Chief Information Security Officer (CISO)",
    "Security Director",
    "Application Security Architect",
    "Infrastructure Security Architect"
  ];

  const whyChoose = [
    "Pinnacle of technical security certifications",
    "DoD 8570.01-M and 8140 IAT Level III/IAM Level III approved",
    "Performance-based questions testing real-world skills",
    "Recognized globally as expert-level certification",
    "ISO 17024 compliant",
    "Demonstrates hands-on technical skills at expert level"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-black text-white">
      <Helmet>
        <title>Expert-Level CompTIA CASP+ Certification Training </title>
        <meta name="description" content="Master advanced enterprise security with our CompTIA CASP+ expert-level training. Prepare for CompTIA CASP+ certification with expert guidance from Traincape Technology. Join our CompTIA CASP+ certification program and take your cybersecurity career to the next level. " />
        <meta name="keywords" content="CompTIA CASP+, CompTIA, CASP, CompTIA Certification, Traincape Technology" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://traincapetech.in/comptia/expert/casp-plus" />
      </Helmet>
      {/* Hero Section */}
      <motion.section 
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="relative bg-gradient-to-r from-red-900 via-orange-900 to-yellow-900 text-white py-20 px-6 overflow-hidden"
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4"
              >
                <span className="text-sm font-semibold">EXPERT LEVEL</span>
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-6xl font-bold mb-4"
              >
                CompTIA CASP+ Certification
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl md:text-2xl mb-6 text-orange-200"
              >
                CompTIA Advanced Security Practitioner
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="text-lg mb-8 max-w-2xl"
              >
                CompTIA CASP+ is the most advanced security certification for security practitioners. Unlike other security certifications, CASP+ proves competency in enterprise security, risk management, research and analysis, and integration of enterprise security.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <button 
                  onClick={() => navigate("/contact-us")}
                  className="bg-white text-red-900 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Enroll Now
                </button>
                <button 
                  onClick={() => window.open("https://drive.google.com/file/d/1mrgiArscHw4V-7ZOSiaFWwug8Rgh3vZe/view", "_blank")}
                  className="bg-transparent border-2 border-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-red-900 transition"
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
                      <p className="text-sm text-orange-200">Exam Code</p>
                      <p className="font-semibold">{courseDetails.examCode}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaClock className="text-green-300 text-2xl" />
                    <div>
                      <p className="text-sm text-orange-200">Duration</p>
                      <p className="font-semibold">{courseDetails.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaUserTie className="text-red-300 text-2xl" />
                    <div>
                      <p className="text-sm text-orange-200">Level</p>
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
      <section className="py-16 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Exam Domains</h2>
            <p className="text-xl text-gray-300">Expert-level security competencies</p>
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
                className="bg-gray-800 rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all hover:-translate-y-1 border border-red-800"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-4xl text-red-500">{domain.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold">{domain.title}</h3>
                    <span className="text-sm font-semibold text-red-500">{domain.percentage}</span>
                  </div>
                </div>
                <ul className="space-y-3">
                  {domain.topics.map((topic, topicIdx) => (
                    <li key={topicIdx} className="flex items-start gap-2">
                      <FaCheckCircle className="text-green-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">{topic}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Areas Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-red-900 to-orange-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Expert-Level Competencies</h2>
            <p className="text-xl text-orange-200">Master advanced security disciplines</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertiseAreas.map((area, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: idx * 0.1 }}
                className="bg-black/40 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 border border-red-800"
              >
                <div className="text-4xl text-red-500 mb-4">{area.icon}</div>
                <h3 className="text-xl font-bold mb-2">{area.title}</h3>
                <p className="text-gray-300">{area.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Skills Section */}
      <section className="py-16 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Advanced Technical Skills</h2>
            <p className="text-xl text-gray-300">Comprehensive expertise across security domains</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advancedSkills.map((skill, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: idx * 0.05 }}
                className="bg-gradient-to-br from-red-800 to-orange-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all"
              >
                <FaCheckCircle className="text-2xl mb-3 text-yellow-300" />
                <p className="font-medium">{skill}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Paths Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-orange-900 to-red-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Senior Leadership Roles</h2>
            <p className="text-xl text-orange-200">Executive and architect-level positions</p>
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
                className="bg-black/40 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border-l-4 border-red-500"
              >
                <FaUserTie className="text-red-500 text-2xl mb-3" />
                <h3 className="text-lg font-bold">{career}</h3>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mt-12 bg-gradient-to-r from-red-800 to-orange-800 rounded-2xl p-8 text-center border-2 border-yellow-500"
          >
            <h3 className="text-2xl font-bold mb-3">Average Salary Range</h3>
            <p className="text-4xl font-bold text-yellow-300">$120,000 - $160,000+</p>
            <p className="mt-2 text-orange-200">Senior and executive-level security positions</p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Why CompTIA CASP+?</h2>
            <p className="text-xl text-gray-300">The pinnacle of technical security certifications</p>
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
                className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border border-red-800"
              >
                <FaShieldAlt className="text-red-500 text-2xl mb-3" />
                <p className="font-medium">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-red-900 via-orange-900 to-yellow-900">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold mb-4">Achieve Expert-Level Security Mastery</h2>
            <p className="text-xl mb-8">Join the elite ranks of advanced security practitioners</p>
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => navigate("/contact-us")}
                className="bg-white text-red-900 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition shadow-lg text-lg"
              >
                Enroll Now
              </button>
              <button 
                onClick={() => navigate("/frequently-asked-questions")}
                className="bg-transparent border-2 border-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-red-900 transition text-lg"
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

export default CASPPlus;

