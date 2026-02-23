import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import SEOHead from "../components/SEOHead";
import AdvisorModal from "../components/AdvisorModal";

import cloud from "../assets/Cloud-services.svg";
import Digital from "../assets/Digital marketing.svg";
import Web from "../assets/Web development.svg";
import Software from "../assets/software-services.svg";

import CloudImg from "../assets/cloud.jpg";
import DigitalImg from "../assets/digital.jpg";
import Saas from "../assets/saas.jpg";
import SoftwareImg from "../assets/software.jpeg";
import webImg from "../assets/web.png";

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
  FaCode,
  FaShieldAlt,
  FaGlobe,
  FaHandshake,
  FaRocket,
  FaCogs,
  FaChartLine,
  FaArrowRight,
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
  MdSpeed,
} from "react-icons/md";
import { AiOutlineDeploymentUnit } from "react-icons/ai";

const PRIMARY_COLOR = "#00AEEF"; // Cyan/Blue
const SECONDARY_COLOR = "#FFA500"; // Orange

const servicesData = [
  {
    title: "Cloud Services",
    description:
      "Enterprise-grade cloud infrastructure design and deployment. We specialize in AWS, Azure, and Google Cloud to ensure your data stays secure and scalable.",
    image: cloud,
    banner: CloudImg,
  },
  {
    title: "Digital Marketing",
    description:
      "Data-driven marketing strategies that amplify your brand. From SEO optimization to high-conversion PPC campaigns, we drive measurable growth.",
    image: Digital,
    banner: DigitalImg,
  },
  {
    title: "Web Development",
    description:
      "State-of-the-art web applications built for performance. We leverage modern frameworks like React and Next.js to deliver seamless user experiences.",
    image: Web,
    banner: webImg,
  },
  {
    title: "AI & ML Solutions",
    description:
      "Intelligent automation and predictive analytics. Harness the power of machine learning to transform raw data into actionable business intelligence.",
    image: Software,
    banner: Saas,
  },
  {
    title: "Software Development",
    description:
      "Custom software solutions engineered for complexity. We build robust systems that integrate perfectly with your existing enterprise architecture.",
    image: Software,
    banner: SoftwareImg,
  },
];

const solutions = [
  {
    icon: <MdDeveloperMode size={28} />,
    title: "Enterprise Web Platforms",
    desc: "Bespoke SaaS and high-traffic web applications architected for scalability and extreme reliability.",
  },
  {
    icon: <FaTabletAlt size={28} />,
    title: "Mobile Ecosystems",
    desc: "Seamless iOS and Android experiences that connect customers with your brand on every device.",
  },
  {
    icon: <MdCloudQueue size={28} />,
    title: "Cloud Native Systems",
    desc: "Migrate and modernize with confidence. We build serverless and microservices-based architectures.",
  },
  {
    icon: <FaBrain size={28} />,
    title: "Integrative AI Implementation",
    desc: "Bringing generative AI and traditional ML into your products to automate tasks and delight users.",
  },
  {
    icon: <AiOutlineDeploymentUnit size={28} />,
    title: "Infrastructure as Code",
    desc: "Deterministic, automated, and secure infrastructure deployment using Terraform and Ansible.",
  },
  {
    icon: <MdOutlineSecurity size={28} />,
    title: "Modern Security Audits",
    desc: "Zero-trust architecture and comprehensive penetration testing to harden your digital perimeter.",
  },
];

const Services = () => {
  const navigate = useNavigate();
  const [advisorOpen, setAdvisorOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleClick = (service) => {
    const slug = service.title
      .toLowerCase()
      .replace(/\s*&\s*/g, "-and-")
      .replace(/\s+/g, "-");
    navigate(`/service-detail/${slug}`);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  return (
    <div className="bg-[#020617] text-slate-200 min-h-screen font-['Inter'] selection:bg-cyan-500/30">
      <SEOHead
        title="Enterprise IT Services | Traincape Technology"
        description="Scalable web development, cloud migration, and AI solutions for modern enterprises. Build faster with a reliable engineering partner."
        canonical="https://www.traincapetech.in/our-services"
        ogType="website"
      />

      {/* HERO SECTION - REFINED GLASSMORPHISM */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-cyan-600/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-[20%] right-[-5%] w-[35%] h-[35%] bg-blue-600/10 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-4 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-sm font-semibold tracking-wide uppercase mb-6">
              Engineering Excellence
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-400">
              Future-Proofing Your <br className="hidden md:block" /> Digital
              Infrastructure
            </h1>
            <p className="max-w-3xl mx-auto text-xl text-slate-400 leading-relaxed mb-10">
              We bridge the gap between complex engineering challenges and
              seamless digital experiences, delivering scalable architecture
              that drives enterprise growth.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                onClick={() => navigate("/contact-us")}
                variant="contained"
                className="w-full sm:w-auto !bg-cyan-500 hover:!bg-cyan-400 !text-slate-900 !px-8 !py-4 !rounded-xl !text-lg !font-bold !normal-case !shadow-lg !shadow-cyan-500/20"
              >
                Inquire Solutions
              </Button>
              <Button
                onClick={() => setAdvisorOpen(true)}
                variant="outlined"
                className="w-full sm:w-auto !border-slate-700 !text-white hover:!bg-white/5 !px-8 !py-4 !rounded-xl !text-lg !font-bold !normal-case"
              >
                Scientific Advisor
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CORE SERVICES GRID */}
      <section className="py-24 px-6 bg-slate-900/40 backdrop-blur-sm border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Service Verticals
              </h2>
              <p className="text-slate-400 text-lg italic border-l-4 border-cyan-500 pl-6">
                Specialized divisions focused on delivering high-impact
                technological interventions.
              </p>
            </div>
            <motion.div
              whileHover={{ x: 5 }}
              className="hidden md:flex items-center gap-2 text-cyan-400 font-semibold cursor-pointer"
            >
              View Case Studies <FaArrowRight size={14} />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                onClick={() => handleClick(service)}
                className="group relative bg-slate-800/20 hover:bg-slate-800/40 border border-white/5 hover:border-cyan-500/30 rounded-3xl p-8 cursor-pointer transition-all duration-500 overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                  <FaRocket className="text-cyan-500/50" size={40} />
                </div>

                <div className="mb-8 w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all duration-500">
                  <img
                    src={service.image}
                    alt=""
                    className="w-10 h-10 opacity-80"
                  />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-400 leading-relaxed mb-8 group-hover:text-slate-200 transition-colors">
                  {service.description}
                </p>

                <div className="flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-cyan-500/80">
                  Documentation{" "}
                  <FaArrowRight
                    size={12}
                    className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* METRICS - ENTERPRISE STRIP */}
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center">
            {[
              {
                value: "500+",
                label: "Successful Deployments",
                icon: <FaRocket size={24} />,
              },
              {
                value: "98%",
                label: "SLA Retention",
                icon: <FaCogs size={24} />,
              },
              {
                value: "15M+",
                label: "End-Users Served",
                icon: <FaGlobe size={24} />,
              },
              {
                value: "24/7",
                label: "Incident Support",
                icon: <FaShieldAlt size={24} />,
              },
            ].map((metric, i) => (
              <motion.div
                key={i}
                {...fadeInUp}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="text-cyan-500/30 mb-4">{metric.icon}</div>
                <div className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tight">
                  {metric.value}
                </div>
                <div className="text-slate-500 font-medium uppercase tracking-widest text-xs">
                  {metric.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTIONS SECTION */}
      <section className="py-32 bg-slate-900 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              High-Performance Solutions
            </h2>
            <div className="w-20 h-1.5 bg-cyan-500 mx-auto rounded-full mb-8" />
            <p className="max-w-2xl mx-auto text-slate-400 text-lg">
              Beyond standard services, we provide foundational technology
              solutions that solve the industry's most complex challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {solutions.map((sol, i) => (
              <motion.div
                key={i}
                {...fadeInUp}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6 group"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-slate-800 text-cyan-400 flex items-center justify-center group-hover:bg-cyan-500 group-hover:text-slate-900 transition-all duration-300">
                  {sol.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {sol.title}
                  </h4>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {sol.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION - STUNNING ENDING */}
      <section className="py-32 px-6 relative overflow-hidden bg-[#020617]">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-[50%] -left-[20%] w-[100%] h-[150%] bg-cyan-700/10 rotate-12 blur-[150px]" />
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-md border border-white/10 p-12 md:p-24 rounded-[4rem] text-center shadow-2xl">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8">
              Let's Architect <br /> Your Next Era
            </h2>
            <p className="text-slate-300 text-xl max-w-2xl mx-auto mb-12">
              Join elite enterprises that trust Traincape Technology for
              mission-critical software and high-performance infrastructure.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() => navigate("/contact-us")}
                variant="contained"
                className="!bg-white !text-slate-900 !px-12 !py-5 !rounded-2xl !text-xl !font-black !normal-case !shadow-2xl !shadow-white/10"
              >
                Start Technical Consultation
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <AdvisorModal
        isOpen={advisorOpen}
        onClose={() => setAdvisorOpen(false)}
      />
    </div>
  );
};

export default Services;
