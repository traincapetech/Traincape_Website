import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCheckCircle, FaClock, FaBook, FaCertificate, FaCloud, FaServer } from "react-icons/fa";
import { BsShieldCheck, BsGraphUp, BsCloudFill } from "react-icons/bs";
import { MdSecurity, MdStorage } from "react-icons/md";

const ComptiaCloudPlus = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const courseDetails = {
    examCode: "CV0-004",
    duration: "50-60 hours",
    level: "Professional",
    prerequisites: "CompTIA Network+ and Server+, or equivalent experience, 2-3 years IT networking, storage, or datacenter experience",
    validity: "3 years",
    passingScore: "750/900"
  };

  const keyDomains = [
    {
      icon: <BsCloudFill />,
      title: "Cloud Architecture & Design",
      percentage: "20%",
      topics: [
        "Cloud deployment models",
        "Infrastructure design",
        "Network architectures",
        "Storage configurations"
      ]
    },
    {
      icon: <FaServer />,
      title: "Security & Compliance",
      percentage: "25%",
      topics: [
        "Identity and access management",
        "Data security",
        "Infrastructure security",
        "Compliance and governance"
      ]
    },
    {
      icon: <MdStorage />,
      title: "Deployment",
      percentage: "20%",
      topics: [
        "Cloud infrastructure provisioning",
        "Migration strategies",
        "Integration and automation",
        "Disaster recovery planning"
      ]
    },
    {
      icon: <BsGraphUp />,
      title: "Operations & Support",
      percentage: "20%",
      topics: [
        "Performance monitoring",
        "Resource optimization",
        "Logging and monitoring",
        "Backup and restoration"
      ]
    },
    {
      icon: <MdSecurity />,
      title: "Troubleshooting",
      percentage: "15%",
      topics: [
        "Connectivity issues",
        "Performance problems",
        "Security incidents",
        "Configuration errors"
      ]
    }
  ];

  const cloudSkills = [
    {
      icon: <FaCloud />,
      title: "Multi-Cloud Management",
      desc: "Manage AWS, Azure, and Google Cloud environments"
    },
    {
      icon: <BsShieldCheck />,
      title: "Cloud Security",
      desc: "Implement security best practices in the cloud"
    },
    {
      icon: <FaServer />,
      title: "Infrastructure as Code",
      desc: "Automate cloud infrastructure deployment"
    },
    {
      icon: <BsGraphUp />,
      title: "Cost Optimization",
      desc: "Optimize cloud resource usage and costs"
    }
  ];

  const cloudPlatforms = [
    "Amazon Web Services (AWS)",
    "Microsoft Azure",
    "Google Cloud Platform (GCP)",
    "VMware vSphere",
    "OpenStack",
    "Hybrid and Multi-Cloud"
  ];

  const keyTechnologies = [
    "Virtualization (VMs, containers)",
    "Software-Defined Networking (SDN)",
    "Storage technologies (Block, Object, File)",
    "Kubernetes and Docker",
    "Terraform and CloudFormation",
    "Cloud monitoring tools",
    "CI/CD pipelines",
    "Serverless computing"
  ];

  const careerPaths = [
    "Cloud Engineer",
    "Cloud Architect",
    "Cloud Administrator",
    "Cloud Consultant",
    "DevOps Engineer",
    "Site Reliability Engineer",
    "Cloud Security Specialist",
    "Solutions Architect"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-sky-50 to-blue-50">
      {/* Hero Section */}
      <motion.section 
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="relative bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 text-white py-20 px-6 overflow-hidden"
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
                CompTIA Cloud+
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl md:text-2xl mb-6 text-sky-100"
              >
                Cloud Infrastructure & Services Expertise
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="text-lg mb-8 max-w-2xl"
              >
                CompTIA Cloud+ validates the skills needed to deploy, optimize, and protect mission-critical applications and data in the cloud. This vendor-neutral certification covers multiple cloud platforms including AWS, Azure, and Google Cloud.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <button 
                  onClick={() => navigate("/contact-us")}
                  className="bg-white text-sky-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Enroll Now
                </button>
                <button 
                  onClick={() => window.open("https://drive.google.com/file/d/1OAnF8Kx65qq0hbquLjkfI7w_g4XgCTfk/view", "_blank")}
                  className="bg-transparent border-2 border-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-sky-600 transition"
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
                      <p className="text-sm text-sky-100">Exam Code</p>
                      <p className="font-semibold">{courseDetails.examCode}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaClock className="text-green-300 text-2xl" />
                    <div>
                      <p className="text-sm text-sky-100">Duration</p>
                      <p className="font-semibold">{courseDetails.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaCloud className="text-blue-300 text-2xl" />
                    <div>
                      <p className="text-sm text-sky-100">Type</p>
                      <p className="font-semibold">Vendor-Neutral</p>
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
            <p className="text-xl text-gray-600">Comprehensive cloud computing coverage</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyDomains.map((domain, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all hover:-translate-y-1 border border-gray-100"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-3xl text-sky-600">{domain.icon}</div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">{domain.title}</h3>
                    <span className="text-sm font-semibold text-sky-600">{domain.percentage}</span>
                  </div>
                </div>
                <ul className="space-y-2">
                  {domain.topics.map((topic, topicIdx) => (
                    <li key={topicIdx} className="flex items-start gap-2">
                      <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0 text-sm" />
                      <span className="text-gray-700 text-sm">{topic}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud Skills Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-sky-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Core Cloud Skills</h2>
            <p className="text-xl text-gray-600">Master essential cloud competencies</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cloudSkills.map((skill, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2"
              >
                <div className="text-4xl text-sky-600 mb-4">{skill.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{skill.title}</h3>
                <p className="text-gray-600">{skill.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud Platforms & Technologies Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Cloud Platforms Covered</h2>
              <p className="text-gray-600 mb-8">Vendor-neutral knowledge across major platforms</p>
              <div className="space-y-4">
                {cloudPlatforms.map((platform, idx) => (
                  <motion.div
                    key={idx}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-gradient-to-r from-sky-500 to-blue-600 text-white rounded-lg p-4 shadow-lg hover:shadow-xl transition"
                  >
                    <div className="flex items-center gap-3">
                      <FaCloud className="text-2xl" />
                      <p className="font-semibold">{platform}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Key Technologies</h2>
              <p className="text-gray-600 mb-8">Master modern cloud technologies</p>
              <div className="grid grid-cols-2 gap-4">
                {keyTechnologies.map((tech, idx) => (
                  <motion.div
                    key={idx}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    transition={{ delay: idx * 0.05 }}
                    className="bg-white rounded-lg p-4 shadow hover:shadow-lg transition border-l-4 border-sky-600"
                  >
                    <FaCheckCircle className="text-sky-600 mb-2" />
                    <p className="text-sm font-medium text-gray-800">{tech}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Career Paths Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-blue-50 to-sky-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Career Opportunities</h2>
            <p className="text-xl text-gray-600">High-demand cloud computing roles</p>
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
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border-l-4 border-sky-600"
              >
                <BsCloudFill className="text-sky-600 text-2xl mb-3" />
                <h3 className="text-lg font-bold text-gray-800">{career}</h3>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mt-12 bg-gradient-to-r from-sky-600 to-blue-600 text-white rounded-2xl p-8 text-center"
          >
            <h3 className="text-2xl font-bold mb-3">Average Salary Range</h3>
            <p className="text-4xl font-bold">$95,000 - $125,000</p>
            <p className="mt-2 text-sky-100">Mid to senior-level cloud positions</p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold mb-4">Master Cloud Computing</h2>
            <p className="text-xl mb-8">Become a cloud expert with vendor-neutral skills</p>
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => navigate("/contact-us")}
                className="bg-white text-sky-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition shadow-lg text-lg"
              >
                Enroll Now
              </button>
              <button 
                onClick={() => navigate("/frequently-asked-questions")}
                className="bg-transparent border-2 border-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-sky-600 transition text-lg"
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

export default ComptiaCloudPlus;

