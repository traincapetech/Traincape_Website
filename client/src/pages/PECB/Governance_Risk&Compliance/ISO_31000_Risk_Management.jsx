import React, { useEffect, useMemo, memo } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCheckCircle, FaClock, FaBook, FaCertificate, FaUserTie, FaExclamationTriangle, FaChartLine, FaShieldAlt } from "react-icons/fa";
import { BsGraphUp } from "react-icons/bs";
import { MdAssessment } from "react-icons/md";
import { Helmet } from "react-helmet";

// Memoized components to prevent unnecessary re-renders
const DomainCard = memo(({ domain, idx }) => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, delay: idx * 0.05 } }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={fadeInUp}
      className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all hover:-translate-y-1 border border-gray-100"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="text-4xl text-orange-600">{domain.icon}</div>
        <h3 className="text-xl font-bold text-gray-800">{domain.title}</h3>
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
  );
});

DomainCard.displayName = 'DomainCard';

const RiskTypeCard = memo(({ risk, idx }) => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, delay: idx * 0.05 } }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={fadeInUp}
      className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 text-center"
    >
      <FaExclamationTriangle className="text-orange-600 text-3xl mx-auto mb-3" />
      <h3 className="text-lg font-bold text-gray-800">{risk}</h3>
    </motion.div>
  );
});

RiskTypeCard.displayName = 'RiskTypeCard';

const MethodologyCard = memo(({ methodology, idx }) => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, delay: idx * 0.05 } }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={fadeInUp}
      className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
    >
      <FaChartLine className="text-orange-600 text-3xl mb-4" />
      <h3 className="text-lg font-bold text-gray-800">{methodology}</h3>
    </motion.div>
  );
});

MethodologyCard.displayName = 'MethodologyCard';

const TrainingDayCard = memo(({ day, idx }) => {
  const fadeInUp = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3, delay: idx * 0.05 } }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={fadeInUp}
      className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border-l-4 border-orange-600"
    >
      <div className="flex items-center gap-4">
        <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
          {idx + 1}
        </div>
        <p className="text-gray-800 font-medium text-lg">{day}</p>
      </div>
    </motion.div>
  );
});

TrainingDayCard.displayName = 'TrainingDayCard';

const SkillCard = memo(({ skill, idx }) => {
  const fadeInUp = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3, delay: idx * 0.05 } }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={fadeInUp}
      className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2"
    >
      <div className="text-4xl text-orange-600 mb-4">{skill.icon}</div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{skill.title}</h3>
      <p className="text-gray-600">{skill.desc}</p>
    </motion.div>
  );
});

SkillCard.displayName = 'SkillCard';

const CareerCard = memo(({ career, idx }) => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, delay: idx * 0.05 } }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={fadeInUp}
      className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border-l-4 border-orange-600"
    >
      <FaUserTie className="text-orange-600 text-2xl mb-3" />
      <h3 className="text-lg font-bold text-gray-800">{career}</h3>
    </motion.div>
  );
});

CareerCard.displayName = 'CareerCard';

const ISO31000RiskManagement = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Optimized animation variants - reduced duration and simplified
  const fadeInUp = useMemo(() => ({
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  }), []);

  // Memoize static data to prevent recreation on re-renders
  const courseDetails = useMemo(() => ({
    examCode: "ISO 31000:2018",
    duration: "5 days (40 hours)",
    level: "Lead Risk Manager",
    prerequisites: "Understanding of risk management concepts",
    examDuration: "3 hours",
    certificationBody: "PECB"
  }), []);

  const keyDomains = useMemo(() => [
    {
      icon: <FaExclamationTriangle />,
      title: "Risk Management Framework",
      topics: [
        "Risk management principles",
        "Risk management framework design",
        "Leadership and commitment",
        "Integration and continuous improvement"
      ]
    },
    {
      icon: <FaChartLine />,
      title: "Risk Assessment Process",
      topics: [
        "Risk identification techniques",
        "Risk analysis methodologies",
        "Risk evaluation criteria",
        "Risk treatment options"
      ]
    },
    {
      icon: <FaShieldAlt />,
      title: "Risk Treatment",
      topics: [
        "Risk treatment strategies",
        "Risk treatment plan development",
        "Risk treatment implementation",
        "Risk treatment monitoring"
      ]
    },
    {
      icon: <MdAssessment />,
      title: "Monitoring & Review",
      topics: [
        "Risk monitoring systems",
        "Risk reporting mechanisms",
        "Risk review processes",
        "Risk management effectiveness"
      ]
    }
  ], []);

  const skills = useMemo(() => [
    {
      icon: <FaExclamationTriangle />,
      title: "Risk Assessment",
      desc: "Conduct comprehensive risk assessments"
    },
    {
      icon: <FaChartLine />,
      title: "Risk Strategy",
      desc: "Develop effective risk management strategies"
    },
    {
      icon: <FaShieldAlt />,
      title: "Risk Treatment",
      desc: "Implement risk treatment measures"
    },
    {
      icon: <BsGraphUp />,
      title: "Career Growth",
      desc: "Qualify for senior risk management roles"
    }
  ], []);

  const careerPaths = useMemo(() => [
    "Risk Manager",
    "Enterprise Risk Manager",
    "Risk Consultant",
    "Compliance Manager",
    "Internal Auditor",
    "Business Continuity Manager"
  ], []);

  const trainingOutline = useMemo(() => [
    "Day 1: Introduction to ISO 31000 and risk management principles",
    "Day 2: Risk management framework design and implementation",
    "Day 3: Risk assessment process and methodologies",
    "Day 4: Risk treatment and monitoring systems",
    "Day 5: Risk reporting, review, and certification exam"
  ], []);

  const riskTypes = useMemo(() => [
    "Strategic Risk",
    "Operational Risk",
    "Financial Risk",
    "Compliance Risk",
    "Reputational Risk",
    "Technology Risk",
    "Environmental Risk",
    "Political Risk"
  ], []);

  const riskMethodologies = useMemo(() => [
    "Qualitative Risk Assessment",
    "Quantitative Risk Assessment",
    "Monte Carlo Simulation",
    "Scenario Analysis",
    "Bow-tie Analysis",
    "Fault Tree Analysis"
  ], []);

  const structuredData = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "PECB ISO 31000:2018 Risk Management Certification",
    "description": "Master PECB's ISO 31000 Certification with Traincape Technology's 5-Day Training. Master risk management and boost your career with our Training Programme. Join us and get started with us.",
    "provider": {
      "@type": "Organization",
      "name": "Traincape Technology",
      "url": "https://traincapetech.in",
      "logo": "https://traincapetech.in/assets/logo.webp"
    },
    "courseCode": "ISO 31000:2018",
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "name": "PECB ISO 31000 Lead Risk Manager Training",
      "courseMode": "Offline/Online",
      "instructor": {
        "@type": "Person",
        "name": "Expert PECB Certified Trainers"
      },
      "duration": "PT40H",
      "startDate": "2025-11-01",
      "endDate": "2025-12-01",
      "location": {
        "@type": "Place",
        "name": "Traincape Technology",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "New Delhi, India",
          "addressLocality": "New Delhi",
          "addressRegion": "New Delhi",
          "addressCountry": "IN"
        }
      },
      "offers": {
        "@type": "Offer",
        "price": "400",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "url": "https://traincapetech.in/pecb/governance/iso-31000-training"
      }
    },
    "educationalCredentialAwarded": "PECB Certified ISO 31000 Lead Risk Manager",
    "audience": {
      "@type": "Audience",
      "audienceType": "Professionals seeking Risk Management certification"
    },
    "learningResourceType": "Professional Certification Course",
    "keywords": ["ISO 31000", "Risk Management", "PECB Certification", "Enterprise Risk Management", "Risk Assessment", "Traincape Technology"]
  }), []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-orange-50 to-red-50">
      <Helmet>
        <title>ISO 31000:2018 Risk Management Training | Traincape Technology</title>
        <meta
          name="description"
          content="Master PECB's ISO 31000 Certification with Traincape Technology's 5-Day Training. Master risk management and boost your career with our Training Programme. Join us and get started with us."
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="ISO 31000 Training, Risk Management Certification, PECB ISO 31000, Enterprise Risk Management Course, Traincape Technology"
        />
        <link
          rel="canonical"
          href="https://traincapetech.in/pecb/governance/iso-31000-training"
        />
        <meta property="og:title" content="ISO 31000:2018 Risk Management Training" />
        <meta
          property="og:description"
          content="Master risk management with PECB’s ISO 31000 Certification through Traincape Technology's expert 5-Day Training."
        />
        <meta
          property="og:url"
          content="https://traincapetech.in/pecb/governance/iso-31000-training"
        />
        <meta
          property="og:image"
          content="https://www.coolseotools.com/website-visitor-counter/count/&style=style1&show=u&num=9&uid=Dr"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="ISO 31000:2018 Risk Management Training | Traincape Technology"
        />
        <meta
          name="twitter:description"
          content="Enhance your career with Traincape Technology’s ISO 31000:2018 Certification Course."
        />
        <meta
          name="twitter:image"
          content="https://www.coolseotools.com/website-visitor-counter/count/&style=style1&show=u&num=9&uid=Dr"
        />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>
      {/* Hero Section - Optimized with reduced animations */}
      <section className="relative bg-gradient-to-r from-orange-700 via-red-700 to-pink-700 text-white py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
                <span className="text-sm font-semibold">PECB CERTIFICATION</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                ISO 31000:2018 Risk Management
              </h1>
              <p className="text-xl md:text-2xl mb-6 text-orange-100">
                Master Enterprise Risk Management
              </p>
              <p className="text-lg mb-8 max-w-2xl">
                ISO 31000:2018 is the international standard for Risk Management. This comprehensive certification covers risk management principles, framework, and process implementation.
              </p>
              <div className="flex flex-wrap gap-4">
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
              </div>
            </div>
            <div className="flex-1 max-w-md"
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
            </div>
          </div>
        </div>
      </section>

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
            <p className="text-xl text-gray-600">Comprehensive risk management training</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {keyDomains.map((domain, idx) => (
              <DomainCard key={idx} domain={domain} idx={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Risk Types Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Risk Categories</h2>
            <p className="text-xl text-gray-600">Comprehensive coverage of enterprise risks</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {riskTypes.map((risk, idx) => (
              <RiskTypeCard key={idx} risk={risk} idx={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Risk Methodologies Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Risk Assessment Methodologies</h2>
            <p className="text-xl text-gray-600">Industry-standard risk assessment techniques</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {riskMethodologies.map((methodology, idx) => (
              <MethodologyCard key={idx} methodology={methodology} idx={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Training Outline Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">5-Day Training Outline</h2>
            <p className="text-xl text-gray-600">Structured risk management curriculum</p>
          </motion.div>

          <div className="grid gap-4 max-w-4xl mx-auto">
            {trainingOutline.map((day, idx) => (
              <TrainingDayCard key={idx} day={day} idx={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Skills You'll Gain</h2>
            <p className="text-xl text-gray-600">Professional risk management competencies</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, idx) => (
              <SkillCard key={idx} skill={skill} idx={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Career Paths Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Career Opportunities</h2>
            <p className="text-xl text-gray-600">Risk management leadership roles</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {careerPaths.map((career, idx) => (
              <CareerCard key={idx} career={career} idx={idx} />
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
            <p className="text-4xl font-bold">$85,000 - $130,000</p>
            <p className="mt-2 text-orange-100">Senior risk management positions</p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-orange-700 via-red-700 to-pink-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold mb-4">Master Enterprise Risk Management</h2>
            <p className="text-xl mb-8">Start your journey to becoming a risk management expert</p>
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

export default ISO31000RiskManagement;
