import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCheckCircle, FaClock, FaBook, FaCertificate, FaUserTie, FaChartLine, FaTasks, FaAward } from "react-icons/fa";
import { BsShieldCheck, BsGraphUp } from "react-icons/bs";
import { MdBusiness, MdTrendingUp } from "react-icons/md";
import { Helmet } from "react-helmet";
const ISO21502ProjectManagement = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const courseDetails = {
    examCode: "ISO 21502:2020",
    duration: "3 days (24 hours)",
    level: "Foundation",
    prerequisites: "Basic understanding of project management",
    examDuration: "2 hours",
    certificationBody: "PECB"
  };
  // ✅ Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org/",
    "@type": "Course",
    "name": "ISO 21502 Project Management Training | All IT Training & Certification",
    "description":
      "Learn how ISO 21502 provides internationally recognized guidelines for project management. Understand best practices, processes, and implementation strategies. Get certified globally from Traincape Technology.",
    "provider": {
      "@type": "Organization",
      "name": "Traincape Technology",
      "url": "https://traincapetech.in",
    },
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "Online / Offline",
      "instructor": {
        "@type": "Person",
        "name": "Certified PECB Trainer",
      },
    },
  };

  const keyDomains = [
    {
      icon: <FaTasks />,
      title: "Project Lifecycle",
      topics: [
        "Project initiation and planning",
        "Execution and monitoring",
        "Project closure and handover",
        "Phase gate reviews"
      ]
    },
    {
      icon: <FaChartLine />,
      title: "Risk Management",
      topics: [
        "Risk identification and assessment",
        "Risk response strategies",
        "Opportunity management",
        "Risk monitoring and control"
      ]
    },
    {
      icon: <FaAward />,
      title: "Stakeholder Management",
      topics: [
        "Stakeholder identification",
        "Communication planning",
        "Engagement strategies",
        "Expectation management"
      ]
    },
    {
      icon: <MdBusiness />,
      title: "Project Governance",
      topics: [
        "Project organizational structure",
        "Roles and responsibilities",
        "Decision-making frameworks",
        "Performance measurement"
      ]
    }
  ];

  const skills = [
    {
      icon: <FaTasks />,
      title: "Project Leadership",
      desc: "Lead successful project delivery"
    },
    {
      icon: <FaChartLine />,
      title: "Strategic Planning",
      desc: "Develop comprehensive project plans"
    },
    {
      icon: <FaAward />,
      title: "Best Practices",
      desc: "Apply ISO 21502 methodologies"
    },
    {
      icon: <BsGraphUp />,
      title: "Career Growth",
      desc: "Advance to senior project roles"
    }
  ];

  const careerPaths = [
    "Project Manager",
    "Program Manager",
    "Project Management Consultant",
    "PMO Director",
    "Portfolio Manager",
    "Agile Project Manager"
  ];

  const trainingOutline = [
    "Day 1: Introduction to ISO 21502 and project management principles",
    "Day 2: Project processes, governance, and stakeholder management",
    "Day 3: Project performance, risk management, and certification exam"
  ];

  const benefits = [
    "Improved project success rates",
    "Better stakeholder satisfaction",
    "Enhanced risk management",
    "Optimized resource allocation",
    "Clear governance structure",
    "International recognition"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-orange-50 to-red-50">

      {/* ✅ SEO Meta Tags */}
      <Helmet>
        <title>ISO 21502 Project Management Training | All IT Training & Certification</title>
        <meta
          name="description"
          content="Learn how ISO 21502 provides internationally recognized guidelines for project management. Understand best practices, processes, and implementation strategies. Get certified globally from Traincape Technology."
        />
        <meta
          name="keywords"
          content="ISO 21502 training, project management certification, PECB ISO 21502, Traincape Technology, project governance, project risk management, ISO project best practices"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://traincapetech.in/pecb/quality/iso-21502-training"
        />
        {/* Open Graph Tags */}
        <meta
          property="og:title"
          content="ISO 21502 Project Management Training | All IT Training & Certification"
        />
        <meta
          property="og:description"
          content="Learn how ISO 21502 provides internationally recognized guidelines for project management. Understand best practices, processes, and implementation strategies. Get certified globally from Traincape Technology."
        />
        <meta
          property="og:url"
          content="https://traincapetech.in/pecb/quality/iso-21502-training"
        />
        <meta
          property="og:image"
          content="https://www.coolseotools.com/website-visitor-counter/count/&style=style1&show=u&num=9&uid=Dr"
        />
        <meta property="og:type" content="website" />
        {/* Twitter Meta */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="ISO 21502 Project Management Training | All IT Training & Certification"
        />
        <meta
          name="twitter:description"
          content="Master project management best practices and gain a globally recognized ISO 21502 certification with Traincape Technology."
        />
        <meta
          name="twitter:image"
          content="https://www.coolseotools.com/website-visitor-counter/count/&style=style1&show=u&num=9&uid=Dr"
        />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
      {/* Hero Section */}
      <motion.section 
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="relative bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 text-white py-20 px-6 overflow-hidden"
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
                <span className="text-sm font-semibold">PECB CERTIFICATION</span>
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-5xl font-bold mb-4"
              >
                ISO 21502 Project Management
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl md:text-2xl mb-6 text-orange-100"
              >
                Master Project Management Excellence
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="text-lg mb-8 max-w-2xl"
              >
                ISO 21502 provides guidance on project management best practices. Master project lifecycle management, stakeholder engagement, and risk management for successful project delivery.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <button 
                  onClick={() => navigate("/contact-us")}
                  className="bg-white text-orange-700 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Enroll Now
                </button>
                <button 
                  onClick={() => navigate("/PECB")}
                  className="bg-transparent border-2 border-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-orange-700 transition"
                >
                  View All PECB Certs
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
                      <p className="text-sm text-orange-100">Standard</p>
                      <p className="font-semibold">{courseDetails.examCode}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaClock className="text-green-300 text-2xl" />
                    <div>
                      <p className="text-sm text-orange-100">Duration</p>
                      <p className="font-semibold">{courseDetails.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaBook className="text-pink-300 text-2xl" />
                    <div>
                      <p className="text-sm text-orange-100">Level</p>
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
            <h2 className="text-4xl font-bold text-gray-800 mb-4">What You'll Learn</h2>
            <p className="text-xl text-gray-600">Comprehensive project management training</p>
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
                  <div className="text-4xl text-orange-600">{domain.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800">{domain.title}</h3>
                </div>
                <ul className="space-y-3">
                  {domain.topics.map((topic, topicIdx) => (
                    <li key={topicIdx} className="flex items-start gap-2">
                      <FaCheckCircle className="text-orange-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{topic}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Project Management Benefits</h2>
            <p className="text-xl text-gray-600">Achieve project excellence with ISO 21502</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <MdTrendingUp className="text-orange-600 text-3xl mb-4" />
                <h3 className="text-lg font-bold text-gray-800">{benefit}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Outline Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">3-Day Training Outline</h2>
            <p className="text-xl text-gray-600">Structured learning path to project management certification</p>
          </motion.div>

          <div className="grid gap-4 max-w-4xl mx-auto">
            {trainingOutline.map((day, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border-l-4 border-orange-600"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                    {idx + 1}
                  </div>
                  <p className="text-gray-800 font-medium text-lg">{day}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Skills You'll Gain</h2>
            <p className="text-xl text-gray-600">Professional project management competencies</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2"
              >
                <div className="text-4xl text-orange-600 mb-4">{skill.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{skill.title}</h3>
                <p className="text-gray-600">{skill.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Paths Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Career Opportunities</h2>
            <p className="text-xl text-gray-600">Project management leadership roles</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {careerPaths.map((career, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border-l-4 border-orange-600"
              >
                <FaUserTie className="text-orange-600 text-2xl mb-3" />
                <h3 className="text-lg font-bold text-gray-800">{career}</h3>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mt-12 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-2xl p-8 text-center"
          >
            <h3 className="text-2xl font-bold mb-3">Average Salary Range</h3>
            <p className="text-4xl font-bold">$80,000 - $140,000</p>
            <p className="mt-2 text-orange-100">Senior project management positions</p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold mb-4">Master Project Management Excellence</h2>
            <p className="text-xl mb-8">Start your journey to becoming an ISO 21502 expert</p>
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => navigate("/contact-us")}
                className="bg-white text-orange-700 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition shadow-lg text-lg"
              >
                Enroll Now
              </button>
              <button 
                onClick={() => navigate("/frequently-asked-questions")}
                className="bg-transparent border-2 border-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-orange-700 transition text-lg"
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

export default ISO21502ProjectManagement;

