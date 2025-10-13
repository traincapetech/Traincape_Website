import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import banner from "../assets/softwareBanner.jpeg";
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
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate
const SoftwareDevelopment = () => {
  const navigate = useNavigate(); // ✅ you forgot this line
  useEffect(() => window.scrollTo(0, 0), []);

  // --- Data Refinements ---

  const PRIMARY_COLOR = "#00AEEF"; // Cyan/Blue
  const SECONDARY_COLOR = "#FFA500"; // Orange

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

  const testimonials = [
    {
      name: "Alice Johnson",
      text: "Exceptional service and top-notch software solutions! Their team delivered exactly what we needed.",
    },
    {
      name: "Mark Davis",
      text: "Professional team, delivered our project ahead of schedule and the quality was outstanding.",
    },
    {
      name: "Sophia Lee",
      text: "Innovative solutions that transformed our business operations. Highly recommend their expertise.",
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

  // New section data focusing on the 'Development' process quality
  const developmentFocus = [
    {
      icon: <FaCode size={50} color={PRIMARY_COLOR} />,
      title: "Clean Code & Architecture",
      desc: "We enforce strict coding standards and design microservice architectures for long-term maintainability and flexibility.",
    },
    {
      icon: <MdSpeed size={50} color={SECONDARY_COLOR} />,
      title: "Performance & Scalability",
      desc: "Every line of code is written with speed and scaling in mind, ensuring your application handles massive growth with ease.",
    },
    {
      icon: <FaShieldAlt size={50} color={PRIMARY_COLOR} />,
      title: "Robust Security Practices",
      desc: "Integrating security measures (OWASP compliance, data encryption) directly into the development pipeline (SecDevOps).",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Strategy & Discovery",
      desc: "Deep-dive analysis of your business needs, market, and technical requirements to define the product roadmap.",
    },
    {
      step: "02",
      title: "Architecture & Design",
      desc: "Crafting robust system architecture and designing an intuitive, high-fidelity UI/UX prototype.",
    },
    {
      step: "03",
      title: "Agile Development",
      desc: "Iterative development cycles (Sprints) with clean, testable code and continuous client feedback.",
    },
    {
      step: "04",
      title: "Quality Assurance (QA)",
      desc: "Rigorous testing (unit, integration, performance) to ensure the software is bug-free and meets all specifications.",
    },
    {
      step: "05",
      title: "Deployment & Launch",
      desc: "Seamless, automated deployment to the cloud environment, ensuring zero downtime and high availability.",
    },
    {
      step: "06",
      title: "Maintenance & Scale",
      desc: "Ongoing monitoring, optimization, security patches, and future feature development to ensure longevity.",
    },
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
      icon: <FaAws size={50} color={SECONDARY_COLOR} />,
    },
    {
      value: "12+",
      unit: "Years in the Industry",
      icon: <SiMongodb size={50} color={PRIMARY_COLOR} />,
    },
    {
      value: "24/7",
      unit: "Global Support Coverage",
      icon: <FaDocker size={50} color={SECONDARY_COLOR} />,
    },
  ];

  // Animation variants
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="w-full font-sans text-[#0A0A0A] overflow-x-hidden">
      {/* ========================================
        HERO SECTION: Fixed Color Interpolation
        ========================================
      */}
      <section
        className="relative text-white py-32 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between overflow-hidden min-h-[70vh]"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#020b18]/95 via-[#081a30]/85 to-black/90"></div>

        {/* Animated Glow Effect */}
        <motion.div
          className="absolute w-[150%] h-[150%] top-[-25%] left-[-25%] blur-3xl"
          style={{ backgroundImage: `radial-gradient(circle, ${PRIMARY_COLOR}1A, transparent)` }} // FIX
          animate={{ rotate: [0, 360] }}
          transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
        />

        <div className="relative z-10 max-w-2xl mb-12 md:mb-0">
          <motion.p
            className="text-sm font-semibold uppercase tracking-widest"
            style={{ color: SECONDARY_COLOR }} // FIX
            variants={fadeIn}
            initial="initial"
            animate="animate"
          >
            End-to-End Development Solutions
          </motion.p>
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold leading-tight mt-3"
            variants={fadeIn}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.2 }}
          >
            Crafting Scalable, <br />
            <span style={{ color: PRIMARY_COLOR }}>
              Future-Ready Software
            </span> {/* FIX */}
          </motion.h1>
          <motion.p
            className="mt-6 max-w-xl text-gray-300 text-base md:text-lg leading-relaxed"
            variants={fadeIn}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.4 }}
          >
            We design, develop, and deploy high-performance, secure software
            that drives innovation and empowers your digital transformation.
          </motion.p>
          <motion.button
            className="mt-10 text-white font-bold py-4 px-10 rounded-xl transition-all duration-300 shadow-xl text-lg"
            style={{ backgroundColor: SECONDARY_COLOR }} // FIX
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 20px rgba(255, 165, 0, 0.4)",
            }}
            variants={fadeIn}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.6 }}
            onClick={()=>navigate("/contact-us")}
          >
            Start Your Project Today 🚀
          </motion.button>
        </div>

        <motion.div
          className="relative z-10 w-full md:w-5/12 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          <DotLottieReact
            src="https://lottie.host/e257c706-e7e3-477d-8f35-b2861e68c460/Jk99120H9g.lottie"
            autoplay
            loop
            style={{ width: "100%", maxWidth: "450px" }}
          />
        </motion.div>
      </section>

      {/* ========================================
        METRICS / ACHIEVEMENTS (Enhanced)
        ========================================
      */}
      <section className="bg-[#020b18] py-20 px-6 md:px-16 text-center">
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
                whileHover={{ y: -8, scale: 1.05, borderColor: PRIMARY_COLOR }} // FIX dynamic style
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
        CORE SERVICES / SOLUTIONS
        ========================================
      */}
      <section className="bg-[#0A0A0A] py-20 px-6 md:px-16">
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

      {/* ========================================
        NEW SECTION: CORE DEVELOPMENT FOCUS
        ========================================
      */}
      <section className="bg-white py-20 px-6 md:px-16 text-[#0A0A0A]">
        <div className="max-w-6xl mx-auto text-center">
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-3"
            style={{ color: SECONDARY_COLOR }}
          >
            Our Development DNA
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-12">
            Engineering Excellence for Tomorrow's Challenges
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {developmentFocus.map((focus, idx) => (
              <motion.div
                key={idx}
                className="p-8 border-t-4 rounded-xl shadow-lg bg-gray-50 transition-all duration-300 hover:shadow-xl"
                style={{ borderColor: focus.icon.props.color }} // Use icon color for border
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: idx * 0.15 }}
              >
                <div className="flex justify-center mb-4">{focus.icon}</div>
                <h3 className="text-xl font-bold mb-3">{focus.title}</h3>
                <p className="text-gray-600 text-sm">{focus.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

  {/* ========================================
  TECHNOLOGIES CAROUSEL (Two Rows, Different Icons)
======================================== */}
<section className="bg-[#0A0A0A] text-white py-20 px-6 md:px-16 overflow-hidden relative">
  <h2 className="text-2xl md:text-4xl font-bold text-center mb-10">
    Technologies We Excel In
  </h2>

  {/* Top Row: Right to Left */}
  <motion.div
    className="flex gap-8 w-max mb-8"
    style={{ width: "max-content" }}
    animate={{ x: ["0%", "-50%"] }}
    transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
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
    transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
  >
    {[
      { icon: <FaCode size={40} color="#00AEEF" />, name: "DevOps" },
      { icon: <FaShieldAlt size={40} color="#FFA500" />, name: "Security" },
      { icon: <MdSpeed size={40} color="#00AEEF" />, name: "Performance" },
      { icon: <FaBrain size={40} color="#FF6F61" />, name: "AI/ML" },
      { icon: <FaTabletAlt size={40} color="#007FFF" />, name: "Mobile" },
      { icon: <FaAws size={40} color="#FF9900" />, name: "AWS Cloud" },
      { icon: <SiKubernetes size={40} color="#326ce5" />, name: "Kubernetes" },
      { icon: <SiPostgresql size={40} color="#336791" />, name: "PostgreSQL" },
      { icon: <SiGraphql size={40} color="#E10098" />, name: "GraphQL" },
      { icon: <SiMongodb size={40} color="#4DB33D" />, name: "MongoDB" },
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


      {/* ========================================
        DEVELOPMENT PROCESS: Fixed Color Interpolation
        ========================================
      */}
      <section className="bg-[#F4F9FF] py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <p
            className="text-sm font-semibold uppercase tracking-widest text-center mb-3"
            style={{ color: SECONDARY_COLOR }} // FIX
          >
            Our Methodology
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A0A0A] text-center mb-12">
            A Transparent, Agile Development Lifecycle
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            {processSteps.map((item, idx) => (
              <motion.div
                key={idx}
                className="relative p-6 bg-white rounded-xl shadow-lg border-t-4 border-t-transparent transition-all duration-300"
                whileHover={{ y: -5, borderColor: PRIMARY_COLOR }} // FIX dynamic style
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: idx * 0.1 }}
              >
                <div
                  className="absolute -top-6 left-6 w-12 h-12 flex items-center justify-center rounded-full text-white text-xl font-bold shadow-xl"
                  style={{ backgroundColor: PRIMARY_COLOR }} // FIX
                >
                  {item.step}
                </div>
                <h4 className="text-lg font-bold mt-2 mb-2 text-[#0A0A0A]">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================
        TESTIMONIALS (Minor refinement)
        ========================================
      */}
      <section className="bg-[#0A0A0A] text-white py-20 px-6 md:px-16 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-12">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-[#111827] rounded-xl shadow-2xl p-8 border border-[#1E293B] transition-all duration-300"
              whileHover={{ y: -5, borderColor: PRIMARY_COLOR }} // FIX dynamic style
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: idx * 0.15 }}
            >
              <p className="text-gray-300 mb-6 italic leading-relaxed">
                "{item.text}"
              </p>
              <h4 className="font-bold text-lg" style={{ color: PRIMARY_COLOR }}>
                — {item.name}
              </h4> {/* FIX */}
            </motion.div>
          ))}
        </div>
      </section>

      {/* ========================================
        CALL TO ACTION (Final Polish)
        ========================================
      */}
      <section className="bg-gradient-to-r from-[#020b18] via-[#081a30] to-[#020b18] text-white py-24 px-6 md:px-16 text-center">
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
          
          style={{ backgroundColor: SECONDARY_COLOR }} // FIX
          whileHover={{
            scale: 1.05,
            boxShadow: "0 10px 30px rgba(255, 165, 0, 0.6)",
            
          }}
          whileTap={{ scale: 0.95 }}
          onClick={()=>navigate("/contact-us")}
        >
          Schedule a Free Consultation 💬
        </motion.button>
      </section>
    </div>
  );
};

export default SoftwareDevelopment;