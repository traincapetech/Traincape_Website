import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaGraduationCap, FaBriefcase, FaCrown, FaArrowRight } from "react-icons/fa";

const ComptiaLevels = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const levels = [
    {
      id: "specialist",
      title: "Specialist Level",
      icon: <FaGraduationCap />,
      gradient: "from-blue-600 to-indigo-600",
      bgGradient: "from-blue-50 to-indigo-50",
      description: "Start your IT career with foundational certifications",
      certifications: ["CompTIA A+", "CompTIA Network+", "CompTIA Security+", "Secure Infrastructure Specialist"],
      certCount: 4,
      idealFor: "Entry-level IT professionals, Help Desk technicians, System administrators",
      avgSalary: "$55,000 - $85,000",
      url: "/comptia/specialist"
    },
    {
      id: "professional",
      title: "Professional Level",
      icon: <FaBriefcase />,
      gradient: "from-green-600 to-teal-600",
      bgGradient: "from-green-50 to-teal-50",
      description: "Advance your expertise with specialized professional certifications",
      certifications: ["CompTIA CySA+", "CompTIA PenTest+", "CompTIA Cloud+", "Network Security Professional", "Security Analytics Professional"],
      certCount: 7,
      idealFor: "Security analysts, Cloud engineers, Network administrators, Penetration testers",
      avgSalary: "$85,000 - $125,000",
      url: "/comptia/professional"
    },
    {
      id: "expert",
      title: "Expert Level",
      icon: <FaCrown />,
      gradient: "from-red-600 to-orange-600",
      bgGradient: "from-red-50 to-orange-50",
      description: "Achieve mastery with expert-level certifications",
      certifications: ["CompTIA CASP+", "CompTIA CSAE"],
      certCount: 2,
      idealFor: "Security architects, CISOs, Senior security consultants, Technical leads",
      avgSalary: "$120,000 - $180,000+",
      url: "/comptia/expert"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <motion.section 
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="relative bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 text-white py-20 px-6 overflow-hidden"
      >
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            CompTIA Certifications
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl mb-4 text-purple-100"
          >
            Choose Your Certification Path
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg max-w-3xl mx-auto"
          >
            CompTIA offers vendor-neutral IT certifications recognized globally. Select your level based on your experience and career goals.
          </motion.p>
        </div>
      </motion.section>

      {/* Levels Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Select Your Certification Level</h2>
            <p className="text-xl text-gray-600">From foundational to expert - we have the right path for you</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {levels.map((level, idx) => (
              <motion.div
                key={level.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: idx * 0.2 }}
                onClick={() => navigate(level.url)}
                className={`bg-gradient-to-br ${level.bgGradient} rounded-2xl shadow-xl p-8 cursor-pointer hover:shadow-2xl transition-all hover:-translate-y-2 border-2 border-transparent hover:border-gray-200`}
              >
                {/* Icon and Title */}
                <div className={`text-6xl mb-6 bg-gradient-to-r ${level.gradient} text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto shadow-lg`}>
                  {level.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-3 text-center">{level.title}</h3>
                
                <p className="text-gray-700 mb-6 text-center min-h-[50px]">{level.description}</p>

                {/* Certifications Count */}
                <div className="bg-white rounded-lg p-4 mb-6 shadow">
                  <p className="text-sm text-gray-600 mb-2">Available Certifications:</p>
                  <p className="text-3xl font-bold text-gray-800">{level.certCount}</p>
                </div>

                {/* Sample Certifications */}
                <div className="mb-6">
                  <p className="text-sm font-semibold text-gray-700 mb-2">Includes:</p>
                  <ul className="space-y-1">
                    {level.certifications.slice(0, 3).map((cert, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-start">
                        <span className="mr-2">•</span>
                        <span>{cert}</span>
                      </li>
                    ))}
                    {level.certifications.length > 3 && (
                      <li className="text-sm text-gray-500 italic">+ more...</li>
                    )}
                  </ul>
                </div>

                {/* Ideal For */}
                <div className="mb-6">
                  <p className="text-sm font-semibold text-gray-700 mb-2">Ideal For:</p>
                  <p className="text-sm text-gray-600">{level.idealFor}</p>
                </div>

                {/* Average Salary */}
                <div className="mb-6">
                  <p className="text-sm font-semibold text-gray-700 mb-2">Average Salary:</p>
                  <p className="text-lg font-bold text-gray-800">{level.avgSalary}</p>
                </div>

                {/* CTA Button */}
                <button 
                  className={`w-full bg-gradient-to-r ${level.gradient} text-white py-3 rounded-lg font-bold hover:opacity-90 transition flex items-center justify-center gap-2 shadow-lg`}
                >
                  View Certifications <FaArrowRight />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why CompTIA Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose CompTIA?</h2>
            <p className="text-xl text-gray-600">Industry-leading, vendor-neutral certifications</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Vendor-Neutral", desc: "Skills applicable across all platforms and technologies" },
              { title: "Globally Recognized", desc: "Accepted by employers and governments worldwide" },
              { title: "Performance-Based", desc: "Real-world skills tested through hands-on scenarios" },
              { title: "Career Advancement", desc: "Proven to increase earning potential and job opportunities" }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: idx * 0.1 }}
                className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold mb-4">Ready to Get Certified?</h2>
            <p className="text-xl mb-8">Contact us to find the perfect certification path for your career goals</p>
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => navigate("/contact-us")}
                className="bg-white text-indigo-700 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition shadow-lg text-lg"
              >
                Contact Us
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
  );
};

export default ComptiaLevels;

