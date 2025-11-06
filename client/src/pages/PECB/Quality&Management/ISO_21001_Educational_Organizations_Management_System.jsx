import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCheckCircle, FaClock, FaBook, FaCertificate, FaUserTie, FaChartLine, FaGraduationCap, FaAward } from "react-icons/fa";
import { BsShieldCheck, BsGraphUp } from "react-icons/bs";
import { MdBusiness, MdTrendingUp, MdSchool } from "react-icons/md";
import { Helmet } from "react-helmet";
const ISO21001EducationalOrganizationsManagementSystem = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const courseDetails = {
    examCode: "ISO 21001:2018",
    duration: "5 days (40 hours)",
    level: "Lead Auditor/Implementer",
    prerequisites: "Understanding of educational management concepts",
    examDuration: "3 hours",
    certificationBody: "PECB"
  };
  // ✅ JSON-LD structured data
  const structuredData = {
    "@context": "https://schema.org/",
    "@type": "Course",
    "name": "ISO 21001 Educational Organizations Management System Certification",
    "description":
      "Advance your career with PECB ISO 21001 Certification for Educational Organizations. Learn EOMS implementation, auditing, and compliance best practices. Contact us now!",
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
      icon: <FaGraduationCap />,
      title: "Educational QMS",
      topics: [
        "Learner-centric approach",
        "Educational process management",
        "Curriculum design and delivery",
        "Learning outcome assessment"
      ]
    },
    {
      icon: <FaChartLine />,
      title: "Learning Outcomes",
      topics: [
        "Learning objectives definition",
        "Performance measurement",
        "Continuous improvement cycles",
        "Student satisfaction evaluation"
      ]
    },
    {
      icon: <FaAward />,
      title: "Stakeholder Management",
      topics: [
        "Learner engagement",
        "Faculty development",
        "Parental involvement",
        "Community partnerships"
      ]
    },
    {
      icon: <MdSchool />,
      title: "Continuous Improvement",
      topics: [
        "Educational effectiveness",
        "Quality assurance processes",
        "Innovation in education",
        "Accreditation support"
      ]
    }
  ];

  const skills = [
    {
      icon: <FaGraduationCap />,
      title: "Educational Leadership",
      desc: "Lead QMS implementation in educational institutions"
    },
    {
      icon: <FaChartLine />,
      title: "Quality Enhancement",
      desc: "Improve learning outcomes and satisfaction"
    },
    {
      icon: <FaAward />,
      title: "Audit Expertise",
      desc: "Conduct educational quality audits"
    },
    {
      icon: <BsGraphUp />,
      title: "Career Growth",
      desc: "Qualify for senior educational management roles"
    }
  ];

  const careerPaths = [
    "Education Quality Manager",
    "Academic Program Director",
    "Educational Consultant",
    "Accreditation Manager",
    "Learning & Development Manager",
    "Educational Institution Auditor"
  ];

  const trainingOutline = [
    "Day 1: Introduction to ISO 21001 and educational management systems",
    "Day 2: Leadership, planning, and support in educational contexts",
    "Day 3: Operation, learning outcome evaluation, and stakeholder engagement",
    "Day 4: Audit planning, execution, and educational quality assessment",
    "Day 5: Certification exam and practical educational case studies"
  ];

  const benefits = [
    "Improved learning outcomes",
    "Enhanced student satisfaction",
    "Better stakeholder engagement",
    "Accreditation support",
    "Faculty development",
    "Competitive advantage"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-purple-50 to-indigo-50">

      {/* ✅ Helmet for SEO */}
      <Helmet>
        <title>ISO 21001 Educational Organizations Management System Certification | Traincape Technology</title>
        <meta
          name="description"
          content="Advance your career with PECB ISO 21001 Certification for Educational Organizations. Learn EOMS implementation, auditing, and compliance best practices. Contact us now!"
        />
        <meta
          name="keywords"
          content="ISO 21001, Educational Management System, ISO 21001 Training, PECB ISO 21001 Certification, Educational Quality Management, Traincape Technology"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://traincapetech.in/pecb/quality/iso-21001-certification"
        />
        {/* OpenGraph / Facebook */}
        <meta
          property="og:title"
          content="ISO 21001 Educational Organizations Management System Certification"
        />
        <meta
          property="og:description"
          content="Advance your career with PECB ISO 21001 Certification for Educational Organizations. Learn EOMS implementation, auditing, and compliance best practices. Contact us now!"
        />
        <meta
          property="og:url"
          content="https://traincapetech.in/pecb/quality/iso-21001-certification"
        />
        <meta
          property="og:image"
          content="https://www.coolseotools.com/website-visitor-counter/count/&style=style1&show=u&num=9&uid=Dr"
        />
        <meta property="og:type" content="website" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="ISO 21001 Educational Organizations Management System Certification"
        />
        <meta
          name="twitter:description"
          content="Advance your career with PECB ISO 21001 Certification for Educational Organizations. Learn EOMS implementation, auditing, and compliance best practices."
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
        className="relative bg-gradient-to-r from-purple-700 via-indigo-700 to-blue-700 text-white py-20 px-6 overflow-hidden"
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
                ISO 21001 Educational Organizations Management System
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl md:text-2xl mb-6 text-purple-100"
              >
                Enhance Educational Excellence & Learning Outcomes
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="text-lg mb-8 max-w-2xl"
              >
                ISO 21001 is the international standard for Educational Organizations Management Systems. Learn to improve learning outcomes, enhance stakeholder satisfaction, and achieve educational excellence.
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
                  Enroll Now
                </button>
                <button 
                  onClick={() => navigate("/PECB")}
                  className="bg-transparent border-2 border-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-purple-700 transition"
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
                      <p className="text-sm text-purple-100">Standard</p>
                      <p className="font-semibold">{courseDetails.examCode}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaClock className="text-green-300 text-2xl" />
                    <div>
                      <p className="text-sm text-purple-100">Duration</p>
                      <p className="font-semibold">{courseDetails.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaBook className="text-pink-300 text-2xl" />
                    <div>
                      <p className="text-sm text-purple-100">Level</p>
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
            <p className="text-xl text-gray-600">Comprehensive educational QMS training</p>
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
                  <div className="text-4xl text-purple-600">{domain.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800">{domain.title}</h3>
                </div>
                <ul className="space-y-3">
                  {domain.topics.map((topic, topicIdx) => (
                    <li key={topicIdx} className="flex items-start gap-2">
                      <FaCheckCircle className="text-purple-500 mt-1 flex-shrink-0" />
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
      <section className="py-16 px-6 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Educational QMS Benefits</h2>
            <p className="text-xl text-gray-600">Transform your educational institution</p>
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
                <MdTrendingUp className="text-purple-600 text-3xl mb-4" />
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
            <h2 className="text-4xl font-bold text-gray-800 mb-4">5-Day Training Outline</h2>
            <p className="text-xl text-gray-600">Structured learning path to educational QMS certification</p>
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
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border-l-4 border-purple-600"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
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
      <section className="py-16 px-6 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Skills You'll Gain</h2>
            <p className="text-xl text-gray-600">Professional educational quality competencies</p>
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
                <div className="text-4xl text-purple-600 mb-4">{skill.icon}</div>
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
            <p className="text-xl text-gray-600">Educational quality management roles</p>
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
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border-l-4 border-purple-600"
              >
                <FaUserTie className="text-purple-600 text-2xl mb-3" />
                <h3 className="text-lg font-bold text-gray-800">{career}</h3>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mt-12 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-2xl p-8 text-center"
          >
            <h3 className="text-2xl font-bold mb-3">Average Salary Range</h3>
            <p className="text-4xl font-bold">$70,000 - $110,000</p>
            <p className="mt-2 text-purple-100">Senior educational management positions</p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-purple-700 via-indigo-700 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold mb-4">Master Educational Quality Management</h2>
            <p className="text-xl mb-8">Start your journey to becoming an ISO 21001 expert</p>
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => navigate("/contact-us")}
                className="bg-white text-purple-700 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition shadow-lg text-lg"
              >
                Enroll Now
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

export default ISO21001EducationalOrganizationsManagementSystem;

