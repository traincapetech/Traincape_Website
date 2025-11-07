import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowLeft, FaCheckCircle, FaCertificate, FaCrown } from "react-icons/fa";
import { Helmet } from "react-helmet";
const ComptiaExpert = () => {
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
      title: "CompTIA CASP+",
      examCodes: "CAS-004",
      description: "Advanced Security Practitioner - Enterprise security architecture and risk management at expert level",
      url: "/comptia/expert/casp-plus",
      gradient: "from-red-600 to-orange-600",
      topics: ["Security Architecture", "Security Operations", "Security Engineering", "Governance & Compliance"],
      requirements: "10+ years IT experience, 5+ years hands-on security",
      badge: "DoD 8570.01-M Approved"
    },
    {
      title: "CompTIA CSAE",
      examCodes: "Security+ & CySA+ & CASP+",
      description: "Security Analytics Expert - Ultimate stackable certification demonstrating mastery from foundation to expert",
      url: "/comptia/expert/csae",
      gradient: "from-indigo-600 to-purple-600",
      topics: ["Foundational Security", "Professional Analytics", "Expert Architecture", "Comprehensive Mastery"],
      requirements: "Complete Security+, CySA+ or PenTest+, and CASP+",
      badge: "Stackable Expert"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-black text-white">
      <Helmet>
        <title>CompTIA Expert Level Certifications | Traincape Technology</title>
        <meta name="description" content="Become a CompTIA-certified expert with Traincape Technology. Advanced-level certification programs designed for senior IT and cybersecurity roles. Traincape Technology delivers CompTIA Expert-Level Certification courses to grow in the IT Industry." />
        <meta name="keywords" content="CompTIA Expert Level Certifications, CompTIA CASP+, CompTIA CSAE, CompTIA, Traincape Technology" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://traincapetech.in/comptia/expert" />
      </Helmet>
      {/* Hero Section */}
      <motion.section 
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="relative bg-gradient-to-r from-red-700 via-orange-700 to-yellow-700 text-white py-20 px-6 overflow-hidden"
      >
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <button 
            onClick={() => navigate("/comptia")}
            className="flex items-center gap-2 text-white hover:text-yellow-200 transition mb-6"
          >
            <FaArrowLeft /> Back to Levels
          </button>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-4 mb-6"
          >
            <FaCrown className="text-6xl text-yellow-300" />
            <div>
              <h1 className="text-5xl md:text-6xl font-bold">Expert Level Certifications</h1>
              <p className="text-xl text-yellow-200 mt-2">The Pinnacle of IT Security</p>
            </div>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg max-w-3xl"
          >
            Achieve the highest level of recognition with expert certifications designed for seasoned security professionals and technical leaders.
          </motion.p>
        </div>
      </motion.section>

      {/* Certifications Grid */}
      <section className="py-16 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Elite Certifications</h2>
            <p className="text-xl text-gray-300">For senior security professionals and architects</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: idx * 0.2 }}
                onClick={() => navigate(cert.url)}
                className="bg-gray-800 rounded-2xl shadow-2xl hover:shadow-3xl transition-all cursor-pointer overflow-hidden hover:-translate-y-2 border-2 border-red-800 hover:border-yellow-500"
              >
                <div className={`bg-gradient-to-r ${cert.gradient} p-6 text-white relative`}>
                  <div className="absolute top-4 right-4 bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-full">
                    {cert.badge}
                  </div>
                  <div className="flex items-center gap-3 mb-2">
                    <FaCertificate className="text-4xl" />
                    <div>
                      <h3 className="text-2xl font-bold">{cert.title}</h3>
                      <p className="text-sm opacity-90">{cert.examCodes}</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-300 mb-6 min-h-[80px]">{cert.description}</p>
                  
                  <div className="mb-6 bg-gray-700 rounded-lg p-4">
                    <p className="text-sm font-semibold text-yellow-400 mb-2">Requirements:</p>
                    <p className="text-sm text-gray-300">{cert.requirements}</p>
                  </div>
                  
                  <div className="mb-6">
                    <p className="text-sm font-semibold text-gray-400 mb-3">Key Domains:</p>
                    <div className="flex flex-wrap gap-2">
                      {cert.topics.map((topic, topicIdx) => (
                        <span 
                          key={topicIdx}
                          className="text-xs bg-gray-700 text-gray-200 px-3 py-1 rounded-full border border-gray-600"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button 
                    className={`w-full bg-gradient-to-r ${cert.gradient} text-white py-3 rounded-lg font-bold hover:opacity-90 transition mt-4 shadow-lg`}
                  >
                    View Details →
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Path Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-red-900 to-orange-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Executive & Leadership Roles</h2>
            <p className="text-xl text-orange-200">Expert certifications qualify you for top-tier positions</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Chief Information Security Officer",
              "Security Architect",
              "Director of Security",
              "VP Information Security",
              "Enterprise Security Consultant",
              "Security Program Manager",
              "Technical Security Lead",
              "Senior Security Engineer"
            ].map((role, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: idx * 0.1 }}
                className="bg-black/40 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition border border-red-800"
              >
                <FaCrown className="text-yellow-400 text-2xl mb-3" />
                <h3 className="text-lg font-bold">{role}</h3>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mt-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl p-8 text-center border-2 border-yellow-400"
          >
            <h3 className="text-2xl font-bold mb-3 text-gray-900">Average Salary Range</h3>
            <p className="text-5xl font-bold text-white">$120,000 - $180,000+</p>
            <p className="mt-2 text-gray-900 font-semibold">Senior and executive-level positions</p>
          </motion.div>
        </div>
      </section>

      {/* Why Expert Level Section */}
      <section className="py-16 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Why Choose Expert Level?</h2>
            <p className="text-xl text-gray-300">The ultimate professional achievement</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Industry Leadership", desc: "Recognized as a subject matter expert" },
              { title: "Strategic Impact", desc: "Influence organization-wide security decisions" },
              { title: "Premium Compensation", desc: "Command top-tier salaries and benefits" },
              { title: "Career Pinnacle", desc: "Achieve the highest certification level" },
              { title: "DoD Approved", desc: "Meets government and defense requirements" },
              { title: "Global Recognition", desc: "Respected by employers worldwide" }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: idx * 0.1 }}
                className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition border border-red-800"
              >
                <FaCheckCircle className="text-yellow-400 text-2xl mb-3" />
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-red-700 via-orange-700 to-yellow-700">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold mb-4">Ready to Reach the Top?</h2>
            <p className="text-xl mb-8">Contact us to begin your journey to expert-level certification</p>
            <button 
              onClick={() => navigate("/contact-us")}
              className="bg-white text-red-700 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition shadow-lg text-lg"
            >
              Contact Us Now
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ComptiaExpert;

