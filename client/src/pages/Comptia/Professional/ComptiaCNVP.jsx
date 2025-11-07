import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCheckCircle, FaCertificate, FaNetworkWired, FaCloud } from "react-icons/fa";
import { BsCloudFill, BsGraphUp } from "react-icons/bs";
import { MdStorage } from "react-icons/md";
import { Helmet } from "react-helmet";
const ComptiaCNVP = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const certificationPath = [
    {
      cert: "CompTIA Network+",
      examCode: "N10-009",
      desc: "Foundation in networking infrastructure and technologies"
    },
    {
      cert: "CompTIA Cloud+",
      examCode: "CV0-004",
      desc: "Vendor-neutral cloud computing expertise"
    }
  ];
  // ✅ JSON-LD structured data
  const structuredData = {
    "@context": "https://schema.org/",
    "@type": "Course",
    "name": "CompTIA Cloud Network Virtualization Professional Certification",
    "description":
      "Master Cloud Networking & Virtualization with CompTIA Cloud Network Virtualization Professional Certification. Learn to design, implement, and manage cloud-based network infrastructures. Contact us now!",
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
        "name": "Certified CompTIA Trainer",
      },
    },
  };

  const comprehensiveSkills = [
    {
      icon: <FaNetworkWired />,
      title: "Network Infrastructure",
      skills: [
        "Network design and architecture",
        "Routing and switching protocols",
        "Network services (DHCP, DNS)",
        "Wireless networking",
        "Network troubleshooting"
      ]
    },
    {
      icon: <BsCloudFill />,
      title: "Cloud Computing",
      skills: [
        "Cloud deployment models",
        "Cloud service models (IaaS, PaaS, SaaS)",
        "Multi-cloud management",
        "Cloud migration strategies",
        "Cloud cost optimization"
      ]
    },
    {
      icon: <MdStorage />,
      title: "Virtualization",
      skills: [
        "Virtual machines and containers",
        "Software-defined networking (SDN)",
        "Network function virtualization (NFV)",
        "Hypervisor technologies",
        "Virtual storage solutions"
      ]
    }
  ];

  const benefits = [
    {
      icon: <FaNetworkWired />,
      title: "Network Mastery",
      desc: "Deep understanding of network infrastructure"
    },
    {
      icon: <FaCloud />,
      title: "Cloud Expertise",
      desc: "Multi-platform cloud computing skills"
    },
    {
      icon: <FaCertificate />,
      title: "Stackable Certification",
      desc: "Earn CNVP by completing both certifications"
    },
    {
      icon: <BsGraphUp />,
      title: "Career Growth",
      desc: "Qualify for cloud and network specialist roles"
    }
  ];

  const careerPaths = [
    "Cloud Network Engineer",
    "Cloud Solutions Architect",
    "Network Virtualization Specialist",
    "Cloud Infrastructure Engineer",
    "SDN Engineer",
    "Cloud Network Administrator"
  ];

  const whyChoose = [
    "Combines networking and cloud computing expertise",
    "Vendor-neutral skills applicable to AWS, Azure, GCP",
    "High demand for cloud networking professionals",
    "Foundation for advanced cloud certifications",
    "Recognized globally by employers"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
{/* ✅ SEO Helmet */}
<Helmet>
        <title>
          CompTIA Cloud Network Virtualization Professional Training & Certification
        </title>
        <meta
          name="description"
          content="Earn your CompTIA Cloud Network Virtualization Professional (CNVP) certification. Step up your IT career with CompTIA CNVP Certification from Traincape Technology. Gain expertise in cloud networking and virtualization with Network+ (N10-009) and Cloud+ (CV0-004) certification path."
        />
        <meta
          name="keywords"
          content="CompTIA Cloud Network Virtualization Professional, CompTIA CNVP Certification, Cloud Networking Training, Network+ N10-009, Cloud+ CV0-004, Traincape Technology"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://traincapetech.in/comptia/professional/cnvp-certification"
        />

        {/* ✅ Open Graph */}
        <meta
          property="og:title"
          content="CompTIA Cloud Network Virtualization Professional Training & Certification"
        />
        <meta
          property="og:description"
          content="Earn your CompTIA Cloud Network Virtualization Professional (CNVP) certification. Gain expertise in cloud networking and virtualization with Network+ and Cloud+ from Traincape Technology."
        />
        <meta
          property="og:url"
          content="https://traincapetech.in/comptia/professional/cnvp-certification"
        />
        <meta
          property="og:image"
          content="https://traincapetech.in/assets/images/cnvp-banner.webp"
        />
        <meta property="og:type" content="website" />

        {/* ✅ Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="CompTIA Cloud Network Virtualization Professional Training & Certification"
        />
        <meta
          name="twitter:description"
          content="Step up your IT career with CompTIA CNVP Certification from Traincape Technology. Master cloud networking and virtualization with Network+ and Cloud+ certification path."
        />
        <meta
          name="twitter:image"
          content="https://traincapetech.in/assets/images/cnvp-banner.webp"
        />

        {/* ✅ Schema */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      {/* Hero Section */}
      <motion.section 
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="relative bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 text-white py-20 px-6 overflow-hidden"
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
                <span className="text-sm font-semibold">PROFESSIONAL LEVEL • STACKABLE</span>
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-5xl font-bold mb-4"
              >
                CompTIA Cloud Network Virtualization Professional (CNVP)
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl md:text-2xl mb-6 text-blue-100"
              >
                Master Cloud Networking & Virtualization
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="text-lg mb-8 max-w-2xl"
              >
                The CompTIA Cloud Network Virtualization Professional (CNVP) stackable certification validates your ability to design, implement, and manage cloud-based network infrastructures. Earn it by completing Network+ and Cloud+ certifications.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <button 
                  onClick={() => navigate("/contact-us")}
                  className="bg-white text-blue-700 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Start Your Journey
                </button>
                <button 
                  onClick={() => navigate("/comptia/professional")}
                  className="bg-transparent border-2 border-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-700 transition"
                >
                  View All Professional Certs
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
                  {certificationPath.map((item, idx) => (
                    <div key={idx} className="relative">
                      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-4 border border-blue-500">
                        <div className="flex items-start gap-3">
                          <div className="bg-white text-blue-900 w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-sm">
                            {idx + 1}
                          </div>
                          <div>
                            <p className="font-bold">{item.cert}</p>
                            <p className="text-sm text-blue-100">{item.examCode}</p>
                            <p className="text-xs text-blue-200 mt-1">{item.desc}</p>
                          </div>
                        </div>
                      </div>
                      {idx < certificationPath.length - 1 && (
                        <div className="flex justify-center py-2">
                          <div className="text-blue-300 text-2xl">↓</div>
                        </div>
                      )}
                    </div>
                  ))}
                  <div className="mt-6 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl p-4 text-center">
                    <FaCertificate className="text-3xl mx-auto mb-2" />
                    <p className="font-bold text-gray-900">= CNVP Certification</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Certification Path Visual */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Your Certification Journey</h2>
            <p className="text-xl text-gray-600">Two certifications to master cloud networking</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {certificationPath.map((item, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: idx * 0.2 }}
                className="relative"
              >
                <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all border-t-4 border-blue-600">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">
                    {idx + 1}
                  </div>
                  <div className="mt-4">
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">{item.cert}</h3>
                    <p className="text-sm font-semibold text-blue-600 mb-2">{item.examCode}</p>
                    <p className="text-gray-600 mb-4">{item.desc}</p>
                    <button
                      onClick={() => {
                        if (idx === 0) navigate("/comptia/specialist/network-plus");
                        else if (idx === 1) navigate("/comptia/professional/cloud-plus");
                      }}
                      className="text-blue-600 font-semibold hover:text-blue-800 transition"
                    >
                      Learn More →
                    </button>
                  </div>
                </div>
                {idx < certificationPath.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-blue-300 text-3xl">
                    →
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comprehensive Skills Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Comprehensive Skill Coverage</h2>
            <p className="text-xl text-gray-600">Master networking, cloud, and virtualization</p>
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
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all"
              >
                <div className="text-5xl text-blue-600 mb-6 flex justify-center">{skill.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">{skill.title}</h3>
                <ul className="space-y-3">
                  {skill.skills.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-3">
                      <FaCheckCircle className="text-blue-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Earn CNVP?</h2>
            <p className="text-xl text-gray-600">Stand out with dual expertise</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: idx * 0.1 }}
                className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-blue-100">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Paths Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-indigo-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Career Opportunities</h2>
            <p className="text-xl text-gray-600">Cloud networking specialist roles</p>
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
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border-l-4 border-blue-600"
              >
                <BsCloudFill className="text-blue-600 text-2xl mb-3" />
                <h3 className="text-lg font-bold text-gray-800">{career}</h3>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mt-12 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-2xl p-8 text-center"
          >
            <h3 className="text-2xl font-bold mb-3">Average Salary Range</h3>
            <p className="text-4xl font-bold">$90,000 - $120,000</p>
            <p className="mt-2 text-blue-100">Mid to senior-level cloud networking positions</p>
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
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Industry Recognition</h2>
            <p className="text-xl text-gray-600">Trusted by employers worldwide</p>
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
                <FaCheckCircle className="text-blue-600 text-2xl mb-3" />
                <p className="text-gray-700 font-medium">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold mb-4">Ready to Master Cloud Networking?</h2>
            <p className="text-xl mb-8">Start with Network+ and build your way to CNVP certification</p>
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => navigate("/contact-us")}
                className="bg-white text-blue-700 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition shadow-lg text-lg"
              >
                Start Your Journey
              </button>
              <button 
                onClick={() => navigate("/frequently-asked-questions")}
                className="bg-transparent border-2 border-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-blue-700 transition text-lg"
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

export default ComptiaCNVP;
