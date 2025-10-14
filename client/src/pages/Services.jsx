import React, { useEffect, useRef, useState } from "react";
import {
  useScroll,
  useTransform,
  motion,
  useMotionValueEvent,
} from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Button } from "@mui/material";

import cloud from "../assets/Cloud-services.svg";
import UI from "../assets/UI-development.svg";
import Digital from "../assets/Digital marketing.svg";
import Web from "../assets/Web development.svg";
import Software from "../assets/software-services.svg";
import softwareDevelopment from "../assets/Software-development-Learnings.svg";

import CloudImg from "../assets/cloud.jpg";
import UiUx from "../assets/uiux.jpg";
import DigitalImg from "../assets/digital.jpg";
import Saas from "../assets/saas.jpg";
import SoftwareImg from "../assets/software.jpeg";
import webImg from "../assets/web.png";

import { Link } from "react-router-dom";



import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaAws,
  FaDocker,
  FaCloud,
  FaTabletAlt,
  FaBrain,
  FaCode, // New Icon for Development Focus
  FaShieldAlt, // New Icon for Security
  FaGlobe,
  FaHandshake,
} from "react-icons/fa";
import {
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
  SiKubernetes,
  SiTypescript,
  SiRedux,
  SiGraphql,
} from "react-icons/si";

import {
  MdOutlineSecurity,
  MdDeveloperMode,
  MdCloudQueue,
  MdSpeed, // New Icon for Performance
} from "react-icons/md";
import { AiOutlineDeploymentUnit } from "react-icons/ai";

const PRIMARY_COLOR = "#00AEEF"; // Cyan/Blue
const SECONDARY_COLOR = "#FFA500"; // Orange

// import cloudService from "./CloudServices"; // unused - service route loads CloudServices lazily

/* ---------------------- DATA ---------------------- */
const servicesData = [
  {
    title: "Cloud Services",
    description:
      "Cloud services provide computing resources over the internet, allowing users to access and use them on-demand without maintaining the underlying infrastructure. These services offer benefits such as cost optimization, scalability, accessibility, reliability, and innovation.",
    image: cloud,
    banner: CloudImg,
  },

  {
    title: "Digital Marketing",
    description:
      "Digital marketing uses online strategies and channels to promote products and services, connecting businesses with customers. Techniques include SEO, PPC, social media, content marketing, and leveraging offline media.",
    image: Digital,
    banner: DigitalImg,
  },
  {
    title: "Web Development",
    description:
      "Web development involves creating and maintaining websites and web applications. It includes frontend development, backend development, and full-stack development.",
    image: Web,
    banner: webImg,
  },
  {
    title: "AI & ML Development",
    description:
      "Utilize advanced AI and powerful machine learning solutions to transform operations and deliver real-time insights. Our AI and ML experts leverage cutting-edge technologies to solve complex problems, optimize processes, and drive innovation.",
    image: Software,
    banner: Saas,
  },
  {
    title: "Software Services and Development",
    slug: "software-services", // <-- this must match your ServiceDetail route
    description:
      "Software services include custom software development, web development, mobile app development, cloud computing, quality assurance, software maintenance, and consulting.",
    image: Software,
    banner: Saas,
  },
];



/* ---------------------- COMPONENT ---------------------- */
const Services = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const firstCardRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // -------------------- INDIVIDUAL HOOKS --------------------
  // Call useTransform for each card separately (fixed order)
  const y0 = useTransform(
    scrollYProgress,
    [0 * 0.125, 0 * 0.125 + 0.175],
    [200, -150]
  );
  const opacity0 = useTransform(
    scrollYProgress,
    [0, 0.02, 0.08, 0.175],
    [1, 1, 1, 0.1]
  );
  const scale0 = useTransform(
    scrollYProgress,
    [0, 0.03, 0.175],
    [0.92, 1, 0.9]
  );

  const y1 = useTransform(scrollYProgress, [0.125, 0.125 + 0.175], [200, -150]);
  const opacity1 = useTransform(
    scrollYProgress,
    [0.125, 0.145, 0.205, 0.3],
    [0, 1, 1, 0.1]
  );
  const scale1 = useTransform(
    scrollYProgress,
    [0.125, 0.155, 0.3],
    [0.92, 1, 0.9]
  );

  const y2 = useTransform(scrollYProgress, [0.25, 0.25 + 0.175], [200, -150]);
  const opacity2 = useTransform(
    scrollYProgress,
    [0.25, 0.27, 0.33, 0.425],
    [0, 1, 1, 0.1]
  );
  const scale2 = useTransform(
    scrollYProgress,
    [0.25, 0.28, 0.425],
    [0.92, 1, 0.9]
  );

  const y3 = useTransform(scrollYProgress, [0.375, 0.375 + 0.175], [200, -150]);
  const opacity3 = useTransform(
    scrollYProgress,
    [0.375, 0.395, 0.455, 0.55],
    [0, 1, 1, 0.1]
  );
  const scale3 = useTransform(
    scrollYProgress,
    [0.375, 0.405, 0.55],
    [0.92, 1, 0.9]
  );

  const y4 = useTransform(scrollYProgress, [0.5, 0.5 + 0.175], [200, -150]);
  const opacity4 = useTransform(
    scrollYProgress,
    [0.5, 0.52, 0.58, 0.675],
    [0, 1, 1, 0.1]
  );
  const scale4 = useTransform(
    scrollYProgress,
    [0.5, 0.53, 0.675],
    [0.92, 1, 0.9]
  );

  const y5 = useTransform(scrollYProgress, [0.625, 0.625 + 0.175], [200, -150]);
  const opacity5 = useTransform(
    scrollYProgress,
    [0.625, 0.645, 0.705, 0.8],
    [0, 1, 1, 0.1]
  );
  const scale5 = useTransform(
    scrollYProgress,
    [0.625, 0.655, 0.8],
    [0.92, 1, 0.9]
  );

  const cardTransforms = [
    { y: y0, opacity: opacity0, scale: scale0 },
    { y: y1, opacity: opacity1, scale: scale1 },
    { y: y2, opacity: opacity2, scale: scale2 },
    { y: y3, opacity: opacity3, scale: scale3 },
    { y: y4, opacity: opacity4, scale: scale4 },
    { y: y5, opacity: opacity5, scale: scale5 },
  ];

  // -------------------- ACTIVE CARD TRACKING --------------------
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const segment = 1 / (servicesData.length + 2);
    const newIndex = Math.min(servicesData.length - 1, Math.floor(v / segment));
    if (newIndex !== activeIndex) setActiveIndex(newIndex);
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleClick = (service) => {
    const slug = service.title.toLowerCase().replace(/\s+/g, "-");
    navigate(`/service-detail/${slug}`); // ✅ must be ${slug}
  };

  const handleExploreClick = () => {
    firstCardRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  const techs = [
    { icon: <FaReact size={40} color="#61DBFB" />, name: "React.js" },
    { icon: <SiNextdotjs size={40} color="#ffffff" />, name: "Next.js" },
    { icon: <FaNodeJs size={40} color="#8CC84A" />, name: "Node.js" },
    { icon: <FaPython size={40} color="#FFD43B" />, name: "Python" },
    { icon: <FaJava size={40} color="#f89820" />, name: "Java" },
    { icon: <SiTypescript size={40} color="#3178C6" />, name: "TypeScript" },
    { icon: <SiRedux size={40} color="#764ABC" />, name: "Redux" },
    { icon: <SiGraphql size={40} color="#E10098" />, name: "GraphQL" },
    { icon: <SiMongodb size={40} color="#4DB33D" />, name: "MongoDB" },
    { icon: <SiPostgresql size={40} color="#336791" />, name: "PostgreSQL" },
    { icon: <FaAws size={40} color="#FF9900" />, name: "AWS" },
    { icon: <FaDocker size={40} color="#0db7ed" />, name: "Docker" },
    { icon: <SiKubernetes size={40} color="#326ce5" />, name: "Kubernetes" },
    { icon: <FaCloud size={40} color="#007FFF" />, name: "Azure" },
  ];

  const metrics = [
    {
      value: "500+",
      unit: "Projects Completed",
      icon: <MdDeveloperMode size={50} color={PRIMARY_COLOR} />,
    },
    {
      value: "98%",
      unit: "Client Retention Rate",
      icon: <FaHandshake size={50} color={SECONDARY_COLOR} />,
    },
    {
      value: "5+",
      unit: "Years in the Industry",
      icon: <SiMongodb size={50} color={PRIMARY_COLOR} />,
    },
    {
      value: "24/7",
      unit: "Global Support Coverage",
      icon: <FaGlobe size={50} color={SECONDARY_COLOR} />,
    },
  ];




   // Renamed to 'solutions' for a broader 'Service' feel
    const solutions = [
      {
        icon: <MdDeveloperMode size={30} className="text-white" />,
        title: "Custom Web Application Development", // More specific
        desc: "Building complex, feature-rich web platforms and SaaS solutions from the ground up using modern frameworks.",
      },
      {
        icon: <FaTabletAlt size={30} className="text-white" />,
        title: "Cross-Platform Mobile App Services",
        desc: "Native and cross-platform mobile solutions for iOS and Android, focusing on performance, speed, and UX.",
      },
      {
        icon: <MdCloudQueue size={30} className="text-white" />,
        title: "Cloud & DevOps Infrastructure",
        desc: "Expertise in AWS, Azure, and Google Cloud, ensuring seamless deployment, scaling, and infrastructure as code.",
      },
      {
        icon: <FaBrain size={30} className="text-white" />,
        title: "AI/ML & Data Integration Services",
        desc: "Embedding intelligent features like recommendation engines, data analysis, and predictive modeling for business intelligence.",
      },
      {
        icon: <AiOutlineDeploymentUnit size={30} className="text-white" />,
        title: "Enterprise System Integration",
        desc: "Developing robust, secure, and integrated systems for large-scale business operations (ERP, CRM) and connecting disparate systems.",
      },
      {
        icon: <MdOutlineSecurity size={30} className="text-white" />,
        title: "Software Modernization & Audit",
        desc: "Migrating legacy systems to modern, scalable architectures like microservices and serverless, and performing security audits.",
      },
    ];






  return (
    <>
      <Helmet>
        <title>Our Services - IT Certifications</title>
        <meta
          name="description"
          content="Empowering businesses with cutting-edge technology solutions."
        />
        <link rel="canonical" href="https://traincapetech.in/our-services" />
      </Helmet>

      <div className="bg-gray-50">
        {/* HERO SECTION */}
        <div className="relative w-full h-[80vh]">
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <video
            className="h-full w-full object-cover"
            src="https://videos.pexels.com/video-files/9667569/9667569-hd_1920_1080_25fps.mp4"
            autoPlay
            loop
            muted
            playsInline
          ></video>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-20">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
              Our IT Services
            </h1>
            <p className="text-white text-lg md:text-xl max-w-3xl drop-shadow-md">
              Empowering businesses with cutting-edge technology solutions for
              sustainable growth and innovation.
            </p>
            <div className="w-full flex items-center justify-center gap-10 mt-6">
              <Button
                onClick={handleExploreClick}
                variant="outlined"
                sx={{
                  backgroundColor: "white",
                  color: "black",
                  borderColor: "white",
                  fontSize: "1.1rem",
                  padding: "7px 20px",
                  textTransform: "none",
                  borderRadius: "8px",
                  "&:hover": {
                    backgroundColor: "#f1f1f1",
                    borderColor: "#f1f1f1",
                  },
                }}
              >
                Explore
              </Button>
            </div>
          </div>
        </div>

        {/* ========================================
        METRICS / ACHIEVEMENTS (Enhanced)
        ========================================
      */}
        <section className="bg-[#020911] py-20 px-6 md:px-16 text-center pt-20">
          <div className="max-w-6xl mx-auto">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#FFA500] mb-3">
              Our Track Record
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-white">
              Results That Speak Volumes
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
              {metrics.map((item, idx) => (
                <motion.div
                  key={idx}
                  className="flex flex-col items-center bg-[#111827] p-8 rounded-2xl shadow-xl border-b-4 border-b-transparent transition-all duration-300 transform group"
                  whileHover={{
                    y: -8,
                    scale: 1.05,
                    borderColor: PRIMARY_COLOR,
                  }} // FIX dynamic style
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <div className="w-16 h-16 flex items-center justify-center mb-4 text-[#00AEEF] transition-all duration-300 group-hover:scale-110">
                    {item.icon}
                  </div>
                  <p className="mt-4 text-4xl md:text-5xl font-extrabold text-[#FFA500]">
                    {item.value}
                  </p>
                  <p className="mt-1 text-sm text-gray-400 font-medium uppercase tracking-wide">
                    {item.unit}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================
                TECHNOLOGIES CAROUSEL (Two Rows, Different Icons)
              ======================================== */}
        <section className="bg-[#020911] text-white py-20 px-6 md:px-16 overflow-hidden relative mb-20 pt-20">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-10">
            Technologies We Excel In
          </h2>

          {/* Top Row: Right to Left */}
          <motion.div
            className="flex gap-8 w-max mb-8"
            style={{ width: "max-content" }}
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          >
            {[...techs, ...techs].map((tech, idx) => (
              <div
                key={idx}
                className="bg-[#111827] py-6 px-8 rounded-xl border border-[#1E293B] flex flex-col items-center min-w-[100px]"
              >
                {tech.icon}
                <p className="text-xs mt-2">{tech.name}</p>
              </div>
            ))}
          </motion.div>

          {/* Bottom Row: Left to Right */}
          <motion.div
            className="flex gap-8 w-max"
            style={{ width: "max-content" }}
            animate={{ x: ["-50%", "0%"] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          >
            {[
              { icon: <FaCode size={40} color="#00AEEF" />, name: "DevOps" },
              {
                icon: <FaShieldAlt size={40} color="#FFA500" />,
                name: "Security",
              },
              {
                icon: <MdSpeed size={40} color="#00AEEF" />,
                name: "Performance",
              },
              { icon: <FaBrain size={40} color="#FF6F61" />, name: "AI/ML" },
              {
                icon: <FaTabletAlt size={40} color="#007FFF" />,
                name: "Mobile",
              },
              { icon: <FaAws size={40} color="#FF9900" />, name: "AWS Cloud" },
              {
                icon: <SiKubernetes size={40} color="#326ce5" />,
                name: "Kubernetes",
              },
              {
                icon: <SiPostgresql size={40} color="#336791" />,
                name: "PostgreSQL",
              },
              {
                icon: <SiGraphql size={40} color="#E10098" />,
                name: "GraphQL",
              },
              {
                icon: <SiMongodb size={40} color="#4DB33D" />,
                name: "MongoDB",
              },
            ].map((tech, idx) => (
              <div
                key={idx}
                className="bg-[#111827] py-6 px-8 rounded-xl border border-[#1E293B] flex flex-col items-center min-w-[100px]"
              >
                {tech.icon}
                <p className="text-xs mt-2">{tech.name}</p>
              </div>
            ))}
          </motion.div>
        </section>

        {/* CARDS */}
        <div ref={containerRef} className="min-h-[800vh] bg-gray-50">
          <div className="sticky top-0 h-screen flex flex-col lg:flex-row justify-between px-6 md:px-20">
            {/* LEFT */}
            <div className="lg:w-1/2 flex flex-col justify-center">
              <h2 className="text-4xl md:text-5xl font-bold text-[#152B54] mb-6">
                End-to-End Digital Services to Design, Build, & Support Business
              </h2>
              <p className="text-gray-600 text-lg max-w-xl leading-relaxed">
                We offer custom and full-cycle web design services that include
                intuitive interface design, feature-rich development, and
                ongoing support. Whether you want to start a new venture or
                scale your existing one globally, our web designing company in
                India creates a complete digital ecosystem for your business. It
                begins on web and can extend to mobile apps for seamless
                performance & lasting impact.
              </p>
            </div>

            {/* RIGHT */}
            <div className="lg:w-1/2 relative flex items-center justify-center lg:mt-0">
              {servicesData.map((service, index) => {
                const isActive = activeIndex === index;
                const { y, opacity, scale } = cardTransforms[index];

                return (
                  <motion.div
                    key={index}
                    ref={index === 0 ? firstCardRef : null}
                    style={{ y, opacity, scale }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className={`absolute w-[85%] min-h-[420px] rounded-3xl p-8 md:p-12 shadow-xl transition-all duration-500 ${
                      isActive
                        ? "bg-[#040f25] text-white scale-105 shadow-2xl"
                        : "bg-white text-gray-700 border border-gray-200"
                    } ${
                      isActive ? "pointer-events-auto" : "pointer-events-none"
                    }`}
                  >
                    <div className="flex items-center gap-4 mb-5">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-12 h-12 object-contain"
                      />
                      <h3
                        className={`text-2xl font-bold ${
                          isActive ? "text-white" : "text-[#152B54]"
                        }`}
                      >
                        {service.title}
                      </h3>
                    </div>
                    <p
                      className={`mb-8 leading-relaxed ${
                        isActive ? "text-gray-200" : "text-gray-600"
                      }`}
                    >
                      {service.description.slice(0, 220)}...
                    </p>
                    <button
                      className={`px-6 py-3 rounded-lg font-semibold transition duration-300 ${
                        isActive
                          ? "bg-white text-[#152B54] hover:bg-gray-100"
                          : "bg-[#152B54] text-white hover:bg-blue-900"
                      }`}
                      onClick={() => handleClick(service)}
                    >
                      Learn More →
                    </button>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ========================================
                CORE SERVICES / SOLUTIONS
                ========================================
              */}
        <section className="bg-[#0A0A0A] py-20 px-6 md:px-16  mb-24">
          <div className="max-w-6xl mx-auto">
            <p
              className="text-sm font-semibold uppercase tracking-widest text-center mb-3"
              style={{ color: SECONDARY_COLOR }} // FIX
            >
              What We Build
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center mb-12">
              Our Specialized Software Solutions & Services
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((service, idx) => (
                <motion.div
                  key={idx}
                  className="bg-[#111827] rounded-xl p-8 shadow-2xl transition-all duration-300 border-l-4 border-l-transparent"
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 10px 30px rgba(0, 174, 239, 0.2)",
                    borderColor: PRIMARY_COLOR, // FIX dynamic style
                  }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <div
                    className="w-12 h-12 flex items-center justify-center rounded-full mb-4"
                    style={{ backgroundColor: PRIMARY_COLOR }} // FIX
                  >
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>



 <section className="bg-gradient-to-r from-[#020b18] via-[#081a30] to-[#020b18] text-white py-24 px-6 md:px-16 text-center  mb-20">
        <motion.h2
          className="text-3xl md:text-5xl font-extrabold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Ready to Build Your Digital Future?
        </motion.h2>
        <motion.p
          className="max-w-3xl mx-auto text-gray-300 text-lg mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Let's discuss your project and create intelligent, scalable software
          that gives you a competitive edge.
        </motion.p>
        <motion.button
          className="text-white font-bold py-4 px-12 rounded-xl text-xl shadow-2xl transition-all duration-300"
           onClick={() => navigate("/contact-us")}
          style={{ backgroundColor: SECONDARY_COLOR }} // FIX
          whileHover={{
            scale: 1.05,
            boxShadow: "0 10px 30px rgba(255, 165, 0, 0.6)",
            
          }}
          whileTap={{ scale: 0.95 }}
          
        >
          Schedule a Free Consultation 💬
        </motion.button>
      </section>



      </div>
    </>
  );
};

export default Services;
