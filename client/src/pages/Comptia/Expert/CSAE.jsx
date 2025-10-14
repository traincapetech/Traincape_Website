import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCheckCircle, FaCertificate, FaShieldAlt, FaUserTie } from "react-icons/fa";
import { BsShieldCheck, BsBriefcaseFill } from "react-icons/bs";
import { MdSecurity, MdArchitecture } from "react-icons/md";

const CSAE = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const stackRequirements = [
    {
      cert: "CompTIA Security+",
      level: "Specialist",
      desc: "Foundation security certification"
    },
    {
      cert: "CompTIA CySA+ or PenTest+",
      level: "Professional",
      desc: "Choose analytical or offensive path"
    },
    {
      cert: "CompTIA CASP+",
      level: "Expert",
      desc: "Advanced security practitioner"
    }
  ];

  const comprehensiveSkills = [
    {
      icon: <MdSecurity />,
      title: "Foundational Security",
      skills: [
        "Threat detection and mitigation",
        "Security architecture basics",
        "Risk management fundamentals",
        "Compliance frameworks"
      ]
    },
    {
      icon: <BsShieldCheck />,
      title: "Professional Security",
      skills: [
        "Advanced threat analysis",
        "Penetration testing",
        "Security operations",
        "Incident response"
      ]
    },
    {
      icon: <FaShieldAlt />,
      title: "Expert Security",
      skills: [
        "Enterprise security architecture",
        "Strategic risk management",
        "Security program development",
        "Business alignment"
      ]
    }
  ];

  const careerAdvantages = [
    {
      icon: <FaUserTie />,
      title: "Executive Credibility",
      desc: "Demonstrate comprehensive security expertise to C-suite"
    },
    {
      icon: <MdArchitecture />,
      title: "Architectural Authority",
      desc: "Lead enterprise-wide security architecture initiatives"
    },
    {
      icon: <BsBriefcaseFill />,
      title: "Career Acceleration",
      desc: "Fast-track to senior and leadership positions"
    },
    {
      icon: <BsShieldCheck />,
      title: "Holistic Expertise",
      desc: "Master security from foundation to expert level"
    }
  ];

  const careerPaths = [
    "Chief Information Security Officer (CISO)",
    "Director of Security",
    "VP of Information Security",
    "Enterprise Security Architect",
    "Security Program Manager",
    "Senior Security Consultant",
    "Security Operations Director",
    "Risk Management Director"
  ];

  const whyChoose = [
    "Demonstrates mastery across entire security spectrum",
    "Combines defensive, offensive, and architectural skills",
    "Shows commitment to continuous learning",
    "Recognized globally as comprehensive security expert",
    "Ideal for senior leadership positions",
    "Validates 10+ years of security experience"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-white">
      {/* Hero Section */}
      <motion.section 
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="relative bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white py-20 px-6 overflow-hidden"
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
                <span className="text-sm font-semibold">EXPERT LEVEL • STACKABLE</span>
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-5xl font-bold mb-4"
              >
                CompTIA Security Analytics Expert (CSAE)
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl md:text-2xl mb-6 text-purple-200"
              >
                The Ultimate Security Certification Stack
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="text-lg mb-8 max-w-2xl"
              >
                CompTIA Security Analytics Expert (CSAE) is a stackable certification that demonstrates mastery across the entire security spectrum—from foundational knowledge through analytical skills to advanced practitioner expertise. It validates your comprehensive security knowledge and hands-on experience.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <button 
                  onClick={() => navigate("/contact-us")}
                  className="bg-white text-indigo-900 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Start Your Journey
                </button>
                <button 
                  onClick={() => navigate("/CompTIA-single-page")}
                  className="bg-transparent border-2 border-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-indigo-900 transition"
                >
                  View CompTIA Certifications
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
                <h3 className="text-2xl font-bold mb-6 text-center">Certification Stack</h3>
                <div className="space-y-4">
                  {stackRequirements.map((item, idx) => (
                    <div key={idx} className="relative">
                      <div className="bg-gradient-to-r from-indigo-700 to-purple-700 rounded-xl p-4 border border-purple-500">
                        <div className="flex items-start gap-3">
                          <div className="bg-white text-indigo-900 w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-sm">
                            {idx + 1}
                          </div>
                          <div>
                            <p className="font-bold">{item.cert}</p>
                            <p className="text-sm text-purple-200">{item.level}</p>
                            <p className="text-xs text-purple-300 mt-1">{item.desc}</p>
                          </div>
                        </div>
                      </div>
                      {idx < stackRequirements.length - 1 && (
                        <div className="flex justify-center py-2">
                          <div className="text-purple-300 text-2xl">↓</div>
                        </div>
                      )}
                    </div>
                  ))}
                  <div className="mt-6 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl p-4 text-center">
                    <FaCertificate className="text-3xl mx-auto mb-2" />
                    <p className="font-bold text-gray-900">= CSAE Certification</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Certification Path */}
      <section className="py-16 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Your Path to Expert Status</h2>
            <p className="text-xl text-gray-300">Three certifications, one comprehensive expertise</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {stackRequirements.map((item, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: idx * 0.2 }}
                className="relative"
              >
                <div className="bg-gray-800 rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all border-t-4 border-indigo-600 h-full">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">
                    {idx + 1}
                  </div>
                  <div className="mt-4">
                    <span className="text-sm font-semibold text-indigo-400 uppercase">{item.level}</span>
                    <h3 className="text-xl font-bold mb-3 mt-2">{item.cert}</h3>
                    <p className="text-gray-400 mb-4">{item.desc}</p>
                    <button
                      onClick={() => {
                        if (idx === 0) navigate("/comptia/specialist/security-plus");
                        else if (idx === 1) navigate("/comptia/professional/cysa-plus");
                        else if (idx === 2) navigate("/comptia/expert/casp-plus");
                      }}
                      className="text-indigo-400 font-semibold hover:text-indigo-300 transition"
                    >
                      Learn More →
                    </button>
                  </div>
                </div>
                {idx < stackRequirements.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-indigo-500 text-3xl">
                    →
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comprehensive Skills Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-indigo-900 to-purple-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Comprehensive Security Mastery</h2>
            <p className="text-xl text-purple-200">Skills from foundation to expert level</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {comprehensiveSkills.map((skill, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: idx * 0.1 }}
                className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-indigo-800"
              >
                <div className="text-5xl text-indigo-400 mb-6 flex justify-center">{skill.icon}</div>
                <h3 className="text-2xl font-bold mb-6 text-center">{skill.title}</h3>
                <ul className="space-y-3">
                  {skill.skills.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-3">
                      <FaCheckCircle className="text-green-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Advantages Section */}
      <section className="py-16 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Career Advantages</h2>
            <p className="text-xl text-gray-300">Stand out with comprehensive expertise</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {careerAdvantages.map((advantage, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: idx * 0.1 }}
                className="bg-gradient-to-br from-indigo-800 to-purple-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 border border-indigo-600"
              >
                <div className="text-4xl text-indigo-300 mb-4">{advantage.icon}</div>
                <h3 className="text-xl font-bold mb-2">{advantage.title}</h3>
                <p className="text-gray-300">{advantage.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Paths Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-purple-900 to-indigo-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Executive & Leadership Roles</h2>
            <p className="text-xl text-purple-200">CSAE opens doors to top positions</p>
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
                className="bg-black/40 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border-l-4 border-indigo-500"
              >
                <FaUserTie className="text-indigo-400 text-2xl mb-3" />
                <h3 className="text-lg font-bold">{career}</h3>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mt-12 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-2xl p-8 text-center border-2 border-yellow-400"
          >
            <h3 className="text-2xl font-bold mb-3 text-gray-900">Average Salary Range</h3>
            <p className="text-5xl font-bold text-white">$130,000 - $180,000+</p>
            <p className="mt-2 text-gray-900 font-semibold">Executive and senior leadership positions</p>
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
            <h2 className="text-4xl font-bold mb-4">Why Earn CSAE?</h2>
            <p className="text-xl text-gray-300">The ultimate security credential</p>
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
                className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border border-indigo-800"
              >
                <FaShieldAlt className="text-indigo-500 text-2xl mb-3" />
                <p className="font-medium">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold mb-4">Become a Security Analytics Expert</h2>
            <p className="text-xl mb-8">Start your journey to comprehensive security mastery today</p>
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => navigate("/contact-us")}
                className="bg-white text-indigo-900 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition shadow-lg text-lg"
              >
                Start Your Journey
              </button>
              <button 
                onClick={() => navigate("/frequently-asked-questions")}
                className="bg-transparent border-2 border-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-indigo-900 transition text-lg"
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

export default CSAE;

